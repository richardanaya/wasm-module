import webidl from "./webidl";

class WebIDLLoader extends HTMLElement {
  connectedCallback() {
    this.utf8dec = new TextDecoder("utf-8");
    let wasmSrc = this.getAttribute("module");
    if (!wasmSrc) {
      console.error("no wasm module specified for webidl-loader");
      return;
    }
    this.callbackHandler = this.getAttribute("callback") || "callback";
    let exec = this.getAttribute("execute") || "main";
    let memory = this.getAttribute("memory") || "memory";
    fetch(wasmSrc)
      .then(response => response.arrayBuffer())
      .then(bytes => {
        let webidlContext = webidl();
        let env = {};
        let i;
        for (i in webidlContext) {
          env[i] = webidlContext[i].bind(this);
        }
        return WebAssembly.instantiate(bytes, { env });
      })
      .then(results => {
        this.memory = results.instance.exports[memory];
        this.exports = results.instance.exports;
        let r = results.instance.exports[exec]();
        if (r !== undefined && r !== null) {
          console.log(r);
        }
      });
  }

  executeCallback(handle, ev, allocator) {
    let h = this.exports[this.callbackHandler];
    if (h) {
      if (ev) {
        // give the opportunity for event handler to grab what it needs
        let eventHandle = allocator.a(ev);
        h(handle, eventHandle);
        // then release event
        allocator.r(eventHandle);
      } else {
        h(handle, -1);
      }
    }
  }

  //readStringFromMemory
  s(start, len) {
    const view = new Uint8Array(this.memory.buffer, start, len);
    return this.utf8dec.decode(view);
  }
}
window.customElements.define("webidl-loader", WebIDLLoader);
