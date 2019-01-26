let fs = require("fs");
let webidlParser = require("webidl2");

let FUNCTIONS = [];
let FUNCTION_DOCUMENTATION = [];

let WHITELIST = ["Console.webidl"];

function process(idls) {
  for (i in idls) {
    let idl = idls[i];
    if (idl.type === "namespace") {
      for (m in idl.members) {
        let member = idl.members[m];
        if (member.type == "operation") {
          console.log(member.body.name.value);
          FUNCTIONS.push(`
              ${idl.name}_${member.body.name.value}: function(){
                  ${idl.name}.${member.body.name.value}();
              }
              `);
          FUNCTION_DOCUMENTATION.push(`
# \`${idl.name}_${member.body.name.value}\`
## Arguments
              `);
          console.log(member.body);
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
