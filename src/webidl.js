const webidl = {
  console_log(start, len) {
    let str = this.readStringFromMemory(start, len);
    console.log(str);
  }
};

export default webidl;
