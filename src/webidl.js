// THIS FILE IS GENERATED FROM tools/generate_webidl.js
import allocator from "./allocator";

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

    ConsoleInstance_assert: function(
      instance,
      condition,
      message_start,
      message_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.assert(_condition, _message);
    },

    ConsoleInstance_clear: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      _instance.clear();
    },

    ConsoleInstance_count: function(instance, label_start, label_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _label = this.readStringFromMemory(label_start, label_len);
      _instance.count(_label);
    },

    ConsoleInstance_countReset: function(instance, label_start, label_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _label = this.readStringFromMemory(label_start, label_len);
      _instance.countReset(_label);
    },

    ConsoleInstance_debug: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.debug(_message);
    },

    ConsoleInstance_error: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.error(_message);
    },

    ConsoleInstance_info: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.info(_message);
    },

    ConsoleInstance_log: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.log(_message);
    },

    ConsoleInstance_table: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.table(_message);
    },

    ConsoleInstance_trace: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.trace(_message);
    },

    ConsoleInstance_warn: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.warn(_message);
    },

    ConsoleInstance_dir: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.dir(_message);
    },

    ConsoleInstance_dirxml: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.dirxml(_message);
    },

    ConsoleInstance_group: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.group(_message);
    },

    ConsoleInstance_groupCollapsed: function(
      instance,
      message_start,
      message_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.groupCollapsed(_message);
    },

    ConsoleInstance_groupEnd: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      _instance.groupEnd();
    },

    ConsoleInstance_time: function(instance, label_start, label_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _label = this.readStringFromMemory(label_start, label_len);
      _instance.time(_label);
    },

    ConsoleInstance_timeLog: function(
      instance,
      label_start,
      label_len,
      message_start,
      message_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _label = this.readStringFromMemory(label_start, label_len);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.timeLog(_label, _message);
    },

    ConsoleInstance_timeEnd: function(instance, label_start, label_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _label = this.readStringFromMemory(label_start, label_len);
      _instance.timeEnd(_label);
    },

    ConsoleInstance_exception: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.exception(_message);
    },

    ConsoleInstance_timeStamp: function(instance, data) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      _instance.timeStamp(_data);
    },

    ConsoleInstance_profile: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.profile(_message);
    },

    ConsoleInstance_profileEnd: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.profileEnd(_message);
    },

    ConsoleInstance_reportForServiceWorkerScope: function(
      instance,
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
      let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, o);
      let _scope = this.readStringFromMemory(scope_start, scope_len);
      let _message = this.readStringFromMemory(message_start, message_len);
      let _filename = this.readStringFromMemory(filename_start, filename_len);
      _instance.reportForServiceWorkerScope(
        _scope,
        _message,
        _filename,
        _lineNumber,
        _columnNumber,
        _level
      );
    },

    Window_close: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.close();
    },

    Window_stop: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.stop();
    },

    Window_focus: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.focus();
    },

    Window_blur: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.blur();
    },

    Window_open: function(
      instance,
      url_start,
      url_len,
      target_start,
      target_len,
      features_start,
      features_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      let _url = this.readStringFromMemory(url_start, url_len);
      let _target = this.readStringFromMemory(target_start, target_len);
      let _features = this.readStringFromMemory(features_start, features_len);
      _instance.open(_url, _target, _features);
    },

    Window_alert: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.alert();
    },

    Window_alert: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.alert(_message);
    },

    Window_confirm: function(instance, message_start, message_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      _instance.confirm(_message);
    },

    Window_prompt: function(
      instance,
      message_start,
      message_len,
      default_start,
      default_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      let _message = this.readStringFromMemory(message_start, message_len);
      let _default = this.readStringFromMemory(default_start, default_len);
      _instance.prompt(_message, _default);
    },

    Window_print: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.print();
    },

    Window_postMessage: function(
      instance,
      message,
      targetOrigin_start,
      targetOrigin_len,
      transfer
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      let _targetOrigin = this.readStringFromMemory(
        targetOrigin_start,
        targetOrigin_len
      );
      _instance.postMessage(_message, _targetOrigin, _transfer);
    },

    Window_captureEvents: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.captureEvents();
    },

    Window_releaseEvents: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.releaseEvents();
    },

    Window_getSelection: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.getSelection();
    },

    Window_getComputedStyle: function(
      instance,
      elt,
      pseudoElt_start,
      pseudoElt_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      let _pseudoElt = this.readStringFromMemory(
        pseudoElt_start,
        pseudoElt_len
      );
      _instance.getComputedStyle(_elt, _pseudoElt);
    },

    Window_matchMedia: function(instance, query_start, query_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      let _query = this.readStringFromMemory(query_start, query_len);
      _instance.matchMedia(_query);
    },

    Window_moveTo: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.moveTo(_x, _y);
    },

    Window_moveBy: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.moveBy(_x, _y);
    },

    Window_resizeTo: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.resizeTo(_x, _y);
    },

    Window_resizeBy: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.resizeBy(_x, _y);
    },

    Window_scroll: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.scroll(_x, _y);
    },

    Window_scroll: function(instance, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.scroll(_options);
    },

    Window_scrollTo: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.scrollTo(_x, _y);
    },

    Window_scrollTo: function(instance, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.scrollTo(_options);
    },

    Window_scrollBy: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.scrollBy(_x, _y);
    },

    Window_scrollBy: function(instance, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.scrollBy(_options);
    },

    Window_requestAnimationFrame: function(instance, callback) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.requestAnimationFrame(_callback);
    },

    Window_cancelAnimationFrame: function(instance, handle) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.cancelAnimationFrame(_handle);
    },

    Window_requestIdleCallback: function(instance, callback, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.requestIdleCallback(_callback, _options);
    },

    Window_cancelIdleCallback: function(instance, handle) {
      let _instance = ALLOCATOR.get(INTERFACE_Window, o);
      _instance.cancelIdleCallback(_handle);
    }
  };
  return webidl;
}

export default createWebIDLContext;
