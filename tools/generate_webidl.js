let fs = require("fs");
const template = `function createWebIDLContext(){
  const webidl = {
    FUNCTIONS
  };
  return webidl;
}

export default createWebIDLContext;
`;

const consoleLog = `console_log(start, len) {
  let str = this.readStringFromMemory(start, len);
  console.log(str);
}`;

const documentation = `
  # WebIDL documentation
  This is a list of all the functions exposed to your web assembly module.

  FUNCTION_DOCUMENTATION
`;

fs.writeFileSync("src/webidl.js", template.replace("FUNCTIONS", consoleLog));
fs.writeFileSync(
  "webidl.md",
  documentation.replace("FUNCTION_DOCUMENTATION", "console_log")
);
