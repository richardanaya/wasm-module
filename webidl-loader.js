(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function createWebIDLContext() {
    const webidl = {
      console_assert: function() {
        console.assert();
      },
      console_clear: function() {
        console.clear();
      },
      console_count: function() {
        console.count();
      },
      console_countReset: function() {
        console.countReset();
      },
      console_debug: function() {
        console.debug();
      },
      console_error: function() {
        console.error();
      },
      console_info: function() {
        console.info();
      },
      console_log: function() {
        console.log();
      },
      console_table: function() {
        console.table();
      },
      console_trace: function() {
        console.trace();
      },
      console_warn: function() {
        console.warn();
      },
      console_dir: function() {
        console.dir();
      },
      console_dirxml: function() {
        console.dirxml();
      },
      console_group: function() {
        console.group();
      },
      console_groupCollapsed: function() {
        console.groupCollapsed();
      },
      console_groupEnd: function() {
        console.groupEnd();
      },
      console_time: function() {
        console.time();
      },
      console_timeLog: function() {
        console.timeLog();
      },
      console_timeEnd: function() {
        console.timeEnd();
      },
      console_exception: function() {
        console.exception();
      },
      console_timeStamp: function() {
        console.timeStamp();
      },
      console_profile: function() {
        console.profile();
      },
      console_profileEnd: function() {
        console.profileEnd();
      },
      console_createInstance: function() {
        console.createInstance();
      }
    };
    return webidl;
  }

  class WebIDLLoader extends HTMLElement {
    connectedCallback() {
      this.utf8dec = new TextDecoder("utf-8");
      let wasmSrc = this.getAttribute("src");
      if (!wasmSrc) {
        console.error("no wasm source specified for webidl-loader");
        return;
      }
      let exec = this.getAttribute("execute") || "main";
      let memory = this.getAttribute("memory") || "memory";
      fetch(wasmSrc)
        .then(response => response.arrayBuffer())
        .then(bytes => {
          let webidlContext = createWebIDLContext();
          let env = {};
          let i;
          for (i in webidlContext) {
            env[i] = webidlContext[i].bind(this);
          }
          return WebAssembly.instantiate(bytes, { env });
        })
        .then(results => {
          this.memory = results.instance.exports[memory];
          results.instance.exports[exec]();
        });
    }
    readStringFromMemory(start, len) {
      const view = new Uint8Array(this.memory.buffer, start, len);
      return this.utf8dec.decode(view);
    }
  }
  window.customElements.define("webidl-loader", WebIDLLoader);

}));
