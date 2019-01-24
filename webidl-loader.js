class WebIDLLoader extends HTMLElement {
  connectedCallback(){
    this.utf8dec = new TextDecoder ('utf-8')
    let wasmSrc = this.getAttribute("src");
    let exec = this.getAttribute("execute");
    let memory = this.getAttribute("memory") || "memory";
    fetch(wasmSrc).then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes, {env:{
        log:this.log.bind(this)
      }})
    ).then(results => {
      this.memory = results.instance.exports[memory];
      results.instance.exports[exec]();
    });
  }
  log(start,len){
    let str = this.readStringFromMemory(start,len);
    console.log(str)
  }
  readStringFromMemory(start,len){
    const view = new Uint8Array (this.memory.buffer, start, len)
    return this.utf8dec.decode(view);
  }
}
window.customElements.define('webidl-loader', WebIDLLoader);
