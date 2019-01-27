let fs = require("fs");
let webidlParser = require("webidl2");

let FUNCTIONS = [];
let FUNCTION_DOCUMENTATION = [];
let INTERFACES = ["Window"];

let WHITELIST = process.argv.slice(2);

function toInterfaceName(n) {
  return n.replace(" ", "");
}

function isPrimitive(n) {
  return n[0] == n[0].toLowerCase();
}

function processOperation(namespace, operation, isInterface) {
  if (
    operation.extAttrs &&
    operation.extAttrs.trivia.open.indexOf("[ChromeOnly]") !== -1
  ) {
    return;
  }
  if (operation.body.name == null) {
    return;
  }
  let operationName = operation.body.name.value;
  let args = [];
  let params = [];
  let extractors = [];
  if (isInterface) {
    params.push({
      name: "instance",
      type: "number",
      description:
        "number that represents a handle to an " + namespace + " instance"
    });
    extractors.push(`let _instance = ALLOCATOR.g(instance);`);
  }
  let returnType = operation.body.idlType.idlType;
  let hasReturn = returnType != "void";
  for (a in operation.body.arguments) {
    let arg = operation.body.arguments[a];
    let name = arg.name;
    let type = arg.idlType.idlType;
    if (type == "DOMString") {
      params.push({
        name: name + "_start",
        type: "number",
        description: 'memory location of string "' + name + '"'
      });
      params.push({
        name: name + "_len",
        type: "number",
        description: 'length of string "' + name + '"'
      });
      extractors.push(
        `let _${name} = this.s(${name + "_start"},${name + "_len"});`
      );
    } else {
      extractors.push(`let _${name} = ${name};`);
      params.push({
        name,
        type: "number",
        description: type + " represented as a number"
      });
    }
    args.push({ name, type });
  }
  FUNCTIONS.push(`
      ${namespace}_${operationName}: function(${params
    .map(x => x.name)
    .join(", ")}){
          ${extractors.join("\n")}
          ${hasReturn ? "return ALLOCATOR.a(" : "("}
          ${isInterface ? "_instance" : namespace}.${operationName}(${args
    .map(x => "_" + x.name)
    .join(", ")}));
      }`);
  FUNCTION_DOCUMENTATION.push(`
## \`${namespace}_${operationName}(${params.map(x => x.name).join(", ")})\``);
  if (params.length > 0) {
    FUNCTION_DOCUMENTATION.push(`Argument | Type | description
---------|------|-------------
${params.map(x => `${x.name} | ${x.type} | ${x.description}`).join("\n")}`);
    if (hasReturn) {
      FUNCTION_DOCUMENTATION.push(
        `*output*|number| A number representing a handle to ${returnType}`
      );
    }
  }
}

function processAttribute(interface, idl) {
  if (!idl.name) {
    return;
  }
  let name = idl.name;
  let primitive = isPrimitive(idl.idlType.idlType);
  if (
    !primitive &&
    INTERFACES.indexOf(toInterfaceName(idl.idlType.idlType)) == -1
  ) {
    INTERFACES.push(toInterfaceName(idl.idlType.idlType));
  }
  if (primitive) {
    FUNCTIONS.push(`
      ${interface}_get_${name}: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.${name};
      }`);
    FUNCTION_DOCUMENTATION.push(`## \`${interface}_get_${name}\`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a ${interface}
*output* | number | A number representing as result of type ${
      idl.idlType.idlType
    }`);
  } else {
    FUNCTIONS.push(`
      ${interface}_get_${name}: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.${name});
      }`);
    FUNCTION_DOCUMENTATION.push(`## \`${interface}_get_${name}\`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a ${interface}
*output* | number | A number that represents a handle to a ${
      idl.idlType.idlType
    }`);
  }
}

function processIdl(idls, file) {
  console.log(`Processing \`${file}\`...`);
  FUNCTION_DOCUMENTATION.push(`# ${file}`);
  for (i in idls) {
    let idl = idls[i];
    if (idl.type === "namespace") {
      for (m in idl.members) {
        let member = idl.members[m];
        if (member.type == "operation") {
          processOperation(idl.name, member);
        }
      }
    } else if (idl.type === "interface") {
      if (INTERFACES.indexOf(idl.name) == -1) {
        INTERFACES.push(idl.name);
      }
      for (m in idl.members) {
        let member = idl.members[m];
        if (member.type == "operation") {
          processOperation(idl.name, member, true);
        }
        if (member.type == "attribute") {
          processAttribute(idl.name, member);
        }
      }
    }
  }
}

fs.readdirSync("webidl/").forEach(file => {
  if (WHITELIST.indexOf(file) != -1) {
    var text = fs.readFileSync("webidl/" + file, "utf8");
    processIdl(webidlParser.parse(text), file);
  }
});

const template = `// THIS FILE IS GENERATED FROM tools/generate_webidl.js
import allocator from './allocator'

${INTERFACES.map((x, i) => `let INTERFACE_${toInterfaceName(x)} = ${i};`).join(
  "\n"
)}

function createWebIDLContext(){
  let ALLOCATOR = allocator();
  const webidl = {
    get_window: function(){
      return ALLOCATOR.a(window);
    },

    ${INTERFACES.map(
      x =>
        `release_${x}: function(handle){allocator.r(INTERFACE_${toInterfaceName(
          x
        )},handle);},`
    ).join("\n\n")}

    FUNCTIONS
  };
  return webidl;
}

export default createWebIDLContext;
`;

const documentation = `
# Web IDL Documentation
This is a list of all the functions exposed to your web assembly module.

# Global

## \`get_window()\`
Retrieves the current Window of the browser.

${INTERFACES.map(
  (x, i) => `## \`release_${x}(handle)\`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a ${x}`
).join("\n")}

FUNCTION_DOCUMENTATION`;

fs.writeFileSync(
  "src/webidl.js",
  template.replace("FUNCTIONS", FUNCTIONS.join(",\n"))
);
fs.writeFileSync(
  "webidl.md",
  documentation.replace(
    "FUNCTION_DOCUMENTATION",
    FUNCTION_DOCUMENTATION.join("\n")
  )
);
