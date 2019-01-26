let fs = require("fs");
const template = `const webidl = {
  FUNCTIONS
};

export default webidl;
`;

const consoleLog = `console_log(start, len) {
  let str = this.readStringFromMemory(start, len);
  console.log(str);
}`;

fs.writeFileSync("src/webidl.js", template.replace("FUNCTIONS", consoleLog));
