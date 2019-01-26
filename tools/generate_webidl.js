let fs = require("fs");
let webidlParser = require("webidl2");

let FUNCTIONS = [];
let FUNCTION_DOCUMENTATION = [];

let WHITELIST = ["Console.webidl"];

function processOperation(namespace, operation) {
  if (operation.extAttrs.trivia.open.indexOf("[ChromeOnly]") !== -1) {
    return;
  }
  let operationName = operation.body.name.value;
  console.log(operationName);
  let args = [];
  let params = [];
  let extractors = [];
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
        `let ${name} = this.readStringFromMemory(${name + "_start"},${name +
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
          ${namespace}.${operationName}(${args.map(x => x.name).join(", ")});
      }`);
  FUNCTION_DOCUMENTATION.push(`
## \`${namespace}_${operationName}( ${params.map(x => x.name).join(", ")} )\`
Argument | Type | description
---------|------|-------------
${params
  .map(x => `#### \`${x.name}\` | ${x.type} | ${x.description}`)
  .join("\n")}`);
}

function process(idls) {
  for (i in idls) {
    let idl = idls[i];
    if (idl.type === "namespace") {
      FUNCTION_DOCUMENTATION.push(`# namespace \`${idl.name}\``);
      for (m in idl.members) {
        let member = idl.members[m];
        if (member.type == "operation") {
          processOperation(idl.name, member);
        }
      }
    }
  }
}

fs.readdirSync("webidl/").forEach(file => {
  if (WHITELIST.indexOf(file) != -1) {
    var text = fs.readFileSync("webidl/" + file, "utf8");
    process(webidlParser.parse(text));
  }
});

const template = `function createWebIDLContext(){
  const webidl = {
    FUNCTIONS
  };
  return webidl;
}

export default createWebIDLContext;
`;

const documentation = `
  # Web IDL Documentation
  This is a list of all the functions exposed to your web assembly module.

  FUNCTION_DOCUMENTATION
`;

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
