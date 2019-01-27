(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function allocator() {
    let allocations = [];
    return {
      allocate:function(type,value){
        let a = allocations[type];
        if(!a){
          a = allocations[type] = {values:[],empty:[]};
        }
        let i = a.values.length;
        if(a.empty.length > 0) {
          i = a.empty.pop();
        }
        a.values[i] = value;
        return i;
      },
      release(type,handle){
          allocations[type].values[handle] = undefined;
          allocations[type].empty.push(handle);
      },
      get(type,handle){
        let ret =  allocations[type].values[handle];
        if(!ret){
          console.error(`Asked for ${type}:${handle} after it was released.`);
        }
        return ret;
      }
    }
  }

  // THIS FILE IS GENERATED FROM tools/generate_webidl.js

  let INTERFACE_Window = 0;
  let INTERFACE_ConsoleInstance = 1;

  function createWebIDLContext() {
    let ALLOCATOR = allocator();
    const webidl = {
      get_window: function() {
        return ALLOCATOR.allocate(INTERFACE_Window, window);
      },

      release_Window: function(handle) {
        allocator.release(INTERFACE_Window, handle);
      },

      release_ConsoleInstance: function(handle) {
        allocator.release(INTERFACE_ConsoleInstance, handle);
      },

      console_assert: function(condition, message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.assert(_condition, _message);
      },

      console_clear: function() {
        console.clear();
      },

      console_count: function(label_start, label_len) {
        let _label = this.readStringFromMemory(label_start, label_len);
        console.count(_label);
      },

      console_countReset: function(label_start, label_len) {
        let _label = this.readStringFromMemory(label_start, label_len);
        console.countReset(_label);
      },

      console_debug: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.debug(_message);
      },

      console_error: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.error(_message);
      },

      console_info: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.info(_message);
      },

      console_log: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.log(_message);
      },

      console_table: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.table(_message);
      },

      console_trace: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.trace(_message);
      },

      console_warn: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.warn(_message);
      },

      console_dir: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.dir(_message);
      },

      console_dirxml: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.dirxml(_message);
      },

      console_group: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.group(_message);
      },

      console_groupCollapsed: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.groupCollapsed(_message);
      },

      console_groupEnd: function() {
        console.groupEnd();
      },

      console_time: function(label_start, label_len) {
        let _label = this.readStringFromMemory(label_start, label_len);
        console.time(_label);
      },

      console_timeLog: function(
        label_start,
        label_len,
        message_start,
        message_len
      ) {
        let _label = this.readStringFromMemory(label_start, label_len);
        let _message = this.readStringFromMemory(message_start, message_len);
        console.timeLog(_label, _message);
      },

      console_timeEnd: function(label_start, label_len) {
        let _label = this.readStringFromMemory(label_start, label_len);
        console.timeEnd(_label);
      },

      console_exception: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.exception(_message);
      },

      console_timeStamp: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.timeStamp(_message);
      },

      console_profile: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.profile(_message);
      },

      console_profileEnd: function(message_start, message_len) {
        let _message = this.readStringFromMemory(message_start, message_len);
        console.profileEnd(_message);
      },

      ConsoleInstance_assert: function(o, condition, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.assert(_condition, _message);
      },

      ConsoleInstance_clear: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        _o.clear();
      },

      ConsoleInstance_count: function(o, label_start, label_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _label = this.readStringFromMemory(label_start, label_len);
        _o.count(_label);
      },

      ConsoleInstance_countReset: function(o, label_start, label_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _label = this.readStringFromMemory(label_start, label_len);
        _o.countReset(_label);
      },

      ConsoleInstance_debug: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.debug(_message);
      },

      ConsoleInstance_error: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.error(_message);
      },

      ConsoleInstance_info: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.info(_message);
      },

      ConsoleInstance_log: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.log(_message);
      },

      ConsoleInstance_table: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.table(_message);
      },

      ConsoleInstance_trace: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.trace(_message);
      },

      ConsoleInstance_warn: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.warn(_message);
      },

      ConsoleInstance_dir: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.dir(_message);
      },

      ConsoleInstance_dirxml: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.dirxml(_message);
      },

      ConsoleInstance_group: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.group(_message);
      },

      ConsoleInstance_groupCollapsed: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.groupCollapsed(_message);
      },

      ConsoleInstance_groupEnd: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        _o.groupEnd();
      },

      ConsoleInstance_time: function(o, label_start, label_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _label = this.readStringFromMemory(label_start, label_len);
        _o.time(_label);
      },

      ConsoleInstance_timeLog: function(
        o,
        label_start,
        label_len,
        message_start,
        message_len
      ) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _label = this.readStringFromMemory(label_start, label_len);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.timeLog(_label, _message);
      },

      ConsoleInstance_timeEnd: function(o, label_start, label_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _label = this.readStringFromMemory(label_start, label_len);
        _o.timeEnd(_label);
      },

      ConsoleInstance_exception: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.exception(_message);
      },

      ConsoleInstance_timeStamp: function(o, data) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        _o.timeStamp(_data);
      },

      ConsoleInstance_profile: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.profile(_message);
      },

      ConsoleInstance_profileEnd: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.profileEnd(_message);
      },

      ConsoleInstance_reportForServiceWorkerScope: function(
        o,
        scope_start,
        scope_len,
        message_start,
        message_len,
        filename_start,
        filename_len,
        lineNumber,
        columnNumber,
        level
      ) {
        let _o = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
        let _scope = this.readStringFromMemory(scope_start, scope_len);
        let _message = this.readStringFromMemory(message_start, message_len);
        let _filename = this.readStringFromMemory(filename_start, filename_len);
        _o.reportForServiceWorkerScope(
          _scope,
          _message,
          _filename,
          _lineNumber,
          _columnNumber,
          _level
        );
      },

      Window_close: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.close();
      },

      Window_stop: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.stop();
      },

      Window_focus: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.focus();
      },

      Window_blur: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.blur();
      },

      Window_open: function(
        o,
        url_start,
        url_len,
        target_start,
        target_len,
        features_start,
        features_len
      ) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        let _url = this.readStringFromMemory(url_start, url_len);
        let _target = this.readStringFromMemory(target_start, target_len);
        let _features = this.readStringFromMemory(features_start, features_len);
        _o.open(_url, _target, _features);
      },

      Window_alert: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.alert();
      },

      Window_alert: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.alert(_message);
      },

      Window_confirm: function(o, message_start, message_len) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        _o.confirm(_message);
      },

      Window_prompt: function(
        o,
        message_start,
        message_len,
        default_start,
        default_len
      ) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        let _message = this.readStringFromMemory(message_start, message_len);
        let _default = this.readStringFromMemory(default_start, default_len);
        _o.prompt(_message, _default);
      },

      Window_print: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.print();
      },

      Window_postMessage: function(
        o,
        message,
        targetOrigin_start,
        targetOrigin_len,
        transfer
      ) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        let _targetOrigin = this.readStringFromMemory(
          targetOrigin_start,
          targetOrigin_len
        );
        _o.postMessage(_message, _targetOrigin, _transfer);
      },

      Window_captureEvents: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.captureEvents();
      },

      Window_releaseEvents: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.releaseEvents();
      },

      Window_getSelection: function(o) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.getSelection();
      },

      Window_getComputedStyle: function(o, elt, pseudoElt_start, pseudoElt_len) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        let _pseudoElt = this.readStringFromMemory(
          pseudoElt_start,
          pseudoElt_len
        );
        _o.getComputedStyle(_elt, _pseudoElt);
      },

      Window_matchMedia: function(o, query_start, query_len) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        let _query = this.readStringFromMemory(query_start, query_len);
        _o.matchMedia(_query);
      },

      Window_moveTo: function(o, x, y) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.moveTo(_x, _y);
      },

      Window_moveBy: function(o, x, y) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.moveBy(_x, _y);
      },

      Window_resizeTo: function(o, x, y) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.resizeTo(_x, _y);
      },

      Window_resizeBy: function(o, x, y) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.resizeBy(_x, _y);
      },

      Window_scroll: function(o, x, y) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.scroll(_x, _y);
      },

      Window_scroll: function(o, options) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.scroll(_options);
      },

      Window_scrollTo: function(o, x, y) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.scrollTo(_x, _y);
      },

      Window_scrollTo: function(o, options) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.scrollTo(_options);
      },

      Window_scrollBy: function(o, x, y) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.scrollBy(_x, _y);
      },

      Window_scrollBy: function(o, options) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.scrollBy(_options);
      },

      Window_requestAnimationFrame: function(o, callback) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.requestAnimationFrame(_callback);
      },

      Window_cancelAnimationFrame: function(o, handle) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.cancelAnimationFrame(_handle);
      },

      Window_requestIdleCallback: function(o, callback, options) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.requestIdleCallback(_callback, _options);
      },

      Window_cancelIdleCallback: function(o, handle) {
        let _o = ALLOCATOR.get(INTERFACE_Window, o);
        _o.cancelIdleCallback(_handle);
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
