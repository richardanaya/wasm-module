let fs = require("fs");
let webidlParser = require("webidl2");

let FUNCTIONS = [];
let FUNCTION_DOCUMENTATION = [];
let INTERFACES = ["Window"];

let WHITELIST = ["Console.webidl", "Window.webidl"];

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
      name: "o",
      type: namespace,
      description: "the target to call this operation on"
    });
    extractors.push(`let _o = ALLOCATOR.get(INTERFACE_${namespace},o)`);
  }
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
        `let _${name} = this.readStringFromMemory(${name + "_start"},${name +
          "_len"});`
      );
    } else {
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
          ${isInterface ? "_o" : namespace}.${operationName}(${args
    .map(x => "_" + x.name)
    .join(", ")});
      }`);
  FUNCTION_DOCUMENTATION.push(`
## \`${namespace}_${operationName}(${params.map(x => x.name).join(", ")})\``);
  if (params.length > 0) {
    FUNCTION_DOCUMENTATION.push(`Argument | Type | description
---------|------|-------------
${params.map(x => `${x.name} | ${x.type} | ${x.description}`).join("\n")}`);
  } else {
    FUNCTION_DOCUMENTATION.push("No Arguments");
  }
}

function process(idls, file) {
  for (i in idls) {
    let idl = idls[i];
    FUNCTION_DOCUMENTATION.push(`# ${file.split(".")[0]}`);
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
      }
    }
  }
}

fs.readdirSync("webidl/").forEach(file => {
  if (WHITELIST.indexOf(file) != -1) {
    var text = fs.readFileSync("webidl/" + file, "utf8");
    process(webidlParser.parse(text), file);
  }
});

const template = `// THIS FILE IS GENERATED FROM tools/generate_webidl.js
import allocator from './allocator'

${INTERFACES.map((x, i) => `let INTERFACE_${x} = ${i};`).join("\n")}

function createWebIDLContext(){
  let ALLOCATOR = allocator();
  const webidl = {
    get_window: function(){
      return ALLOCATOR.allocate(INTERFACE_Window,window);
    },

    ${INTERFACES.map(
      x =>
        `release_${x}: function(handle){allocator.release(INTERFACE_${x},handle);},`
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

#Global

## \`get_window()\`
Retrieves the current Window of the browser.

No arguments

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
