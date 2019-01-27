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
  let INTERFACE_Document = 2;
  let INTERFACE_DOMString = 3;
  let INTERFACE_Location = 4;
  let INTERFACE_History = 5;
  let INTERFACE_CustomElementRegistry = 6;
  let INTERFACE_BarProp = 7;
  let INTERFACE_WindowProxy = 8;
  let INTERFACE_Element = 9;
  let INTERFACE_Navigator = 10;
  let INTERFACE_External = 11;
  let INTERFACE_ApplicationCache = 12;
  let INTERFACE_EventHandler = 13;
  let INTERFACE_Screen = 14;
  let INTERFACE_Performance = 15;
  let INTERFACE_Worklet = 16;

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

      release_Document: function(handle) {
        allocator.release(INTERFACE_Document, handle);
      },

      release_DOMString: function(handle) {
        allocator.release(INTERFACE_DOMString, handle);
      },

      release_Location: function(handle) {
        allocator.release(INTERFACE_Location, handle);
      },

      release_History: function(handle) {
        allocator.release(INTERFACE_History, handle);
      },

      release_CustomElementRegistry: function(handle) {
        allocator.release(INTERFACE_CustomElementRegistry, handle);
      },

      release_BarProp: function(handle) {
        allocator.release(INTERFACE_BarProp, handle);
      },

      release_WindowProxy: function(handle) {
        allocator.release(INTERFACE_WindowProxy, handle);
      },

      release_Element: function(handle) {
        allocator.release(INTERFACE_Element, handle);
      },

      release_Navigator: function(handle) {
        allocator.release(INTERFACE_Navigator, handle);
      },

      release_External: function(handle) {
        allocator.release(INTERFACE_External, handle);
      },

      release_ApplicationCache: function(handle) {
        allocator.release(INTERFACE_ApplicationCache, handle);
      },

      release_EventHandler: function(handle) {
        allocator.release(INTERFACE_EventHandler, handle);
      },

      release_Screen: function(handle) {
        allocator.release(INTERFACE_Screen, handle);
      },

      release_Performance: function(handle) {
        allocator.release(INTERFACE_Performance, handle);
      },

      release_Worklet: function(handle) {
        allocator.release(INTERFACE_Worklet, handle);
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
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.assert(_condition, _message);
      },

      ConsoleInstance_clear: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        _instance.clear();
      },

      ConsoleInstance_count: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _label = this.readStringFromMemory(label_start, label_len);
        _instance.count(_label);
      },

      ConsoleInstance_countReset: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _label = this.readStringFromMemory(label_start, label_len);
        _instance.countReset(_label);
      },

      ConsoleInstance_debug: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.debug(_message);
      },

      ConsoleInstance_error: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.error(_message);
      },

      ConsoleInstance_info: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.info(_message);
      },

      ConsoleInstance_log: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.log(_message);
      },

      ConsoleInstance_table: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.table(_message);
      },

      ConsoleInstance_trace: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.trace(_message);
      },

      ConsoleInstance_warn: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.warn(_message);
      },

      ConsoleInstance_dir: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.dir(_message);
      },

      ConsoleInstance_dirxml: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.dirxml(_message);
      },

      ConsoleInstance_group: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.group(_message);
      },

      ConsoleInstance_groupCollapsed: function(
        instance,
        message_start,
        message_len
      ) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.groupCollapsed(_message);
      },

      ConsoleInstance_groupEnd: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        _instance.groupEnd();
      },

      ConsoleInstance_time: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
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
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _label = this.readStringFromMemory(label_start, label_len);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.timeLog(_label, _message);
      },

      ConsoleInstance_timeEnd: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _label = this.readStringFromMemory(label_start, label_len);
        _instance.timeEnd(_label);
      },

      ConsoleInstance_exception: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.exception(_message);
      },

      ConsoleInstance_timeStamp: function(instance, data) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        _instance.timeStamp(_data);
      },

      ConsoleInstance_profile: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.profile(_message);
      },

      ConsoleInstance_profileEnd: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
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
        let _instance = ALLOCATOR.get(INTERFACE_ConsoleInstance, instance);
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

      Window_get_window: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Window, _instance.window);
      },

      Window_get_self: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Window, _instance.self);
      },

      Window_get_document: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Document, _instance.document);
      },

      Window_get_name: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.name);
      },

      Window_get_location: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Location, _instance.location);
      },

      Window_get_history: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_History, _instance.history);
      },

      Window_get_customElements: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_CustomElementRegistry,
          _instance.customElements
        );
      },

      Window_get_locationbar: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_BarProp, _instance.locationbar);
      },

      Window_get_menubar: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_BarProp, _instance.menubar);
      },

      Window_get_personalbar: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_BarProp, _instance.personalbar);
      },

      Window_get_scrollbars: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_BarProp, _instance.scrollbars);
      },

      Window_get_statusbar: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_BarProp, _instance.statusbar);
      },

      Window_get_toolbar: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_BarProp, _instance.toolbar);
      },

      Window_get_status: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.status);
      },

      Window_close: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.close();
      },

      Window_get_closed: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.closed;
      },

      Window_stop: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.stop();
      },

      Window_focus: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.focus();
      },

      Window_blur: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.blur();
      },

      Window_get_event: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.event;
      },

      Window_get_frames: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_WindowProxy, _instance.frames);
      },

      Window_get_length: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.length;
      },

      Window_get_top: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_WindowProxy, _instance.top);
      },

      Window_get_opener: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.opener;
      },

      Window_get_parent: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_WindowProxy, _instance.parent);
      },

      Window_get_frameElement: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Element, _instance.frameElement);
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
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        let _url = this.readStringFromMemory(url_start, url_len);
        let _target = this.readStringFromMemory(target_start, target_len);
        let _features = this.readStringFromMemory(features_start, features_len);
        _instance.open(_url, _target, _features);
      },

      Window_get_navigator: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Navigator, _instance.navigator);
      },

      Window_get_external: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_External, _instance.external);
      },

      Window_get_applicationCache: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_ApplicationCache,
          _instance.applicationCache
        );
      },

      Window_alert: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.alert();
      },

      Window_alert: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        _instance.alert(_message);
      },

      Window_confirm: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
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
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        let _message = this.readStringFromMemory(message_start, message_len);
        let _default = this.readStringFromMemory(default_start, default_len);
        _instance.prompt(_message, _default);
      },

      Window_print: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.print();
      },

      Window_postMessage: function(
        instance,
        message,
        targetOrigin_start,
        targetOrigin_len,
        transfer
      ) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        let _targetOrigin = this.readStringFromMemory(
          targetOrigin_start,
          targetOrigin_len
        );
        _instance.postMessage(_message, _targetOrigin, _transfer);
      },

      Window_get_onappinstalled: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_EventHandler,
          _instance.onappinstalled
        );
      },

      Window_captureEvents: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.captureEvents();
      },

      Window_releaseEvents: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.releaseEvents();
      },

      Window_getSelection: function(instance) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.getSelection();
      },

      Window_getComputedStyle: function(
        instance,
        elt,
        pseudoElt_start,
        pseudoElt_len
      ) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        let _pseudoElt = this.readStringFromMemory(
          pseudoElt_start,
          pseudoElt_len
        );
        _instance.getComputedStyle(_elt, _pseudoElt);
      },

      Window_matchMedia: function(instance, query_start, query_len) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        let _query = this.readStringFromMemory(query_start, query_len);
        _instance.matchMedia(_query);
      },

      Window_get_screen: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Screen, _instance.screen);
      },

      Window_moveTo: function(instance, x, y) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.moveTo(_x, _y);
      },

      Window_moveBy: function(instance, x, y) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.moveBy(_x, _y);
      },

      Window_resizeTo: function(instance, x, y) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.resizeTo(_x, _y);
      },

      Window_resizeBy: function(instance, x, y) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.resizeBy(_x, _y);
      },

      Window_get_innerWidth: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.innerWidth;
      },

      Window_get_innerHeight: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.innerHeight;
      },

      Window_scroll: function(instance, x, y) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.scroll(_x, _y);
      },

      Window_scroll: function(instance, options) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.scroll(_options);
      },

      Window_scrollTo: function(instance, x, y) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.scrollTo(_x, _y);
      },

      Window_scrollTo: function(instance, options) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.scrollTo(_options);
      },

      Window_scrollBy: function(instance, x, y) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.scrollBy(_x, _y);
      },

      Window_scrollBy: function(instance, options) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.scrollBy(_options);
      },

      Window_get_scrollX: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.scrollX;
      },

      Window_get_pageXOffset: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.pageXOffset;
      },

      Window_get_scrollY: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.scrollY;
      },

      Window_get_pageYOffset: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.pageYOffset;
      },

      Window_get_screenX: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.screenX;
      },

      Window_get_screenY: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.screenY;
      },

      Window_get_outerWidth: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.outerWidth;
      },

      Window_get_outerHeight: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.outerHeight;
      },

      Window_get_devicePixelRatio: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.devicePixelRatio;
      },

      Window_requestAnimationFrame: function(instance, callback) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.requestAnimationFrame(_callback);
      },

      Window_cancelAnimationFrame: function(instance, handle) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.cancelAnimationFrame(_handle);
      },

      Window_get_performance: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Performance, _instance.performance);
      },

      Window_get_orientation: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return _instance.orientation;
      },

      Window_get_onorientationchange: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_EventHandler,
          _instance.onorientationchange
        );
      },

      Window_get_onvrdisplayconnect: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_EventHandler,
          _instance.onvrdisplayconnect
        );
      },

      Window_get_onvrdisplaydisconnect: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_EventHandler,
          _instance.onvrdisplaydisconnect
        );
      },

      Window_get_onvrdisplayactivate: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_EventHandler,
          _instance.onvrdisplayactivate
        );
      },

      Window_get_onvrdisplaydeactivate: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_EventHandler,
          _instance.onvrdisplaydeactivate
        );
      },

      Window_get_onvrdisplaypresentchange: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(
          INTERFACE_EventHandler,
          _instance.onvrdisplaypresentchange
        );
      },

      Window_get_paintWorklet: function(instance) {
        let _instance = ALLOCATOR.get(instance);
        return ALLOCATOR.allocate(INTERFACE_Worklet, _instance.paintWorklet);
      },

      Window_requestIdleCallback: function(instance, callback, options) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.requestIdleCallback(_callback, _options);
      },

      Window_cancelIdleCallback: function(instance, handle) {
        let _instance = ALLOCATOR.get(INTERFACE_Window, instance);
        _instance.cancelIdleCallback(_handle);
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
