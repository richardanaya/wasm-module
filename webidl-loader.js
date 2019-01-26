(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function createWebIDLContext() {
    const webidl = {
      console_assert: function(condition, message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.assert(condition, message);
      },

      console_clear: function() {
        console.clear();
      },

      console_count: function(label_start, label_len) {
        let label = this.readStringFromMemory(label_start, label_len);
        console.count(label);
      },

      console_countReset: function(label_start, label_len) {
        let label = this.readStringFromMemory(label_start, label_len);
        console.countReset(label);
      },

      console_debug: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.debug(message);
      },

      console_error: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.error(message);
      },

      console_info: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.info(message);
      },

      console_log: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.log(message);
      },

      console_table: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.table(message);
      },

      console_trace: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.trace(message);
      },

      console_warn: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.warn(message);
      },

      console_dir: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.dir(message);
      },

      console_dirxml: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.dirxml(message);
      },

      console_group: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.group(message);
      },

      console_groupCollapsed: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.groupCollapsed(message);
      },

      console_groupEnd: function() {
        console.groupEnd();
      },

      console_time: function(label_start, label_len) {
        let label = this.readStringFromMemory(label_start, label_len);
        console.time(label);
      },

      console_timeLog: function(
        label_start,
        label_len,
        message_start,
        message_len
      ) {
        let label = this.readStringFromMemory(label_start, label_len);
        let message = this.readStringFromMemory(message_start, message_len);
        console.timeLog(label, message);
      },

      console_timeEnd: function(label_start, label_len) {
        let label = this.readStringFromMemory(label_start, label_len);
        console.timeEnd(label);
      },

      console_exception: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.exception(message);
      },

      console_timeStamp: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.timeStamp(message);
      },

      console_profile: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.profile(message);
      },

      console_profileEnd: function(message_start, message_len) {
        let message = this.readStringFromMemory(message_start, message_len);
        console.profileEnd(message);
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
