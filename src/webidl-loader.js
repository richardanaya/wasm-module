import webidl from "./webidl";

class WebIDLLoader extends HTMLElement {
  connectedCallback() {
    this.utf8dec = new TextDecoder("utf-8");
    this.utf8enc = new TextEncoder("utf-8");
    let wasmSrc = this.getAttribute("module");
    if (!wasmSrc) {
      console.error("no wasm module specified for webidl-loader");
      return;
    }
    this.callbackHandler = this.getAttribute("callback") || "callback";
    this.mallocHandler = this.getAttribute("malloc") || "malloc";
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
        results.instance.exports[exec]();
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
    } else {
      throw new Error(
        "cannot call back without implementation of callback(source:i32,callback:i32)"
      );
    }
  }

  //readStringFromMemory
  s(start) {
    const data = new Uint8Array(this.memory.buffer);
    const str = [];
    let i = start;
    while (data[i] !== 0) {
      str.push(data[i]);
      i++;
    }
    return this.utf8dec.decode(new Uint8Array(str));
  }

  //makeString
  ms(str) {
    if (!this.exports.malloc) {
      throw new Error(
        "Cannot return string to wasm with an implementation of malloc(size:i32)->i32 exposed on exports"
      );
    }
    let bytes = this.utf8enc.encode(str + String.fromCharCode(0));
    let len = bytes.length;
    let start = this.exports.malloc(len);
    const memory = new Uint8Array(this.memory.buffer);
    memory.set(bytes, start);
    return start;
  }
}
window.customElements.define("webidl-loader", WebIDLLoader);
