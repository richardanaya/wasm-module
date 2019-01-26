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

fs.writeFileSync("src/webidl.js", template.replace("FUNCTIONS", consoleLog));
