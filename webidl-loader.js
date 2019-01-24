class WebSysLoader extends HTMLElement {
  connectedCallback(){
    let wasmSrc = this.getAttribute("src");
    let exec = this.getAttribute("execute");
    fetch(wasmSrc).then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes, importObject)
    ).then(results => {
      results.instance.exports[exec]();
    });
  }
}
window.customElements.define('websys-loader', WebSysLoader);
