let fs = require("fs");
let webidlParser = require("webidl2");

let FUNCTIONS = [
  `console_log(start, len) {
    let str = this.readStringFromMemory(start, len);
    console.log(str);
  }`
];
let FUNCTION_DOCUMENTATION = ["console.log"];

function process() {}

fs.readdirSync("webidl/").forEach(file => {
  var text = fs.readFileSync("webidl/Console.webidl", "utf8");
  process(webidlParser.parse(text));
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
  template.replace("FUNCTIONS", FUNCTIONS.join("\n"))
);
fs.writeFileSync(
  "webidl.md",
  documentation.replace(
    "FUNCTION_DOCUMENTATION",
    FUNCTION_DOCUMENTATION.join("\n")
  )
);
