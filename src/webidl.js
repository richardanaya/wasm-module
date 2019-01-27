// THIS FILE IS GENERATED FROM tools/generate_webidl.js
import allocator from "./allocator";

let INTERFACE_Window = 0;
let INTERFACE_ConsoleInstance = 1;
let INTERFACE_Document = 2;
let INTERFACE_DOMImplementation = 3;
let INTERFACE_DOMString = 4;
let INTERFACE_DocumentType = 5;
let INTERFACE_Element = 6;
let INTERFACE_Location = 7;
let INTERFACE_HTMLElement = 8;
let INTERFACE_HTMLHeadElement = 9;
let INTERFACE_HTMLCollection = 10;
let INTERFACE_WindowProxy = 11;
let INTERFACE_EventHandler = 12;
let INTERFACE_URI = 13;
let INTERFACE_VisibilityState = 14;
let INTERFACE_DOMStringList = 15;
let INTERFACE_DocumentTimeline = 16;
let INTERFACE_SVGSVGElement = 17;
let INTERFACE_FlashClassification = 18;
let INTERFACE_History = 19;
let INTERFACE_CustomElementRegistry = 20;
let INTERFACE_BarProp = 21;
let INTERFACE_Navigator = 22;
let INTERFACE_External = 23;
let INTERFACE_ApplicationCache = 24;
let INTERFACE_Screen = 25;
let INTERFACE_Performance = 26;
let INTERFACE_Worklet = 27;

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

    release_DOMImplementation: function(handle) {
      allocator.release(INTERFACE_DOMImplementation, handle);
    },

    release_DOMString: function(handle) {
      allocator.release(INTERFACE_DOMString, handle);
    },

    release_DocumentType: function(handle) {
      allocator.release(INTERFACE_DocumentType, handle);
    },

    release_Element: function(handle) {
      allocator.release(INTERFACE_Element, handle);
    },

    release_Location: function(handle) {
      allocator.release(INTERFACE_Location, handle);
    },

    release_HTMLElement: function(handle) {
      allocator.release(INTERFACE_HTMLElement, handle);
    },

    release_HTMLHeadElement: function(handle) {
      allocator.release(INTERFACE_HTMLHeadElement, handle);
    },

    release_HTMLCollection: function(handle) {
      allocator.release(INTERFACE_HTMLCollection, handle);
    },

    release_WindowProxy: function(handle) {
      allocator.release(INTERFACE_WindowProxy, handle);
    },

    release_EventHandler: function(handle) {
      allocator.release(INTERFACE_EventHandler, handle);
    },

    release_URI: function(handle) {
      allocator.release(INTERFACE_URI, handle);
    },

    release_VisibilityState: function(handle) {
      allocator.release(INTERFACE_VisibilityState, handle);
    },

    release_DOMStringList: function(handle) {
      allocator.release(INTERFACE_DOMStringList, handle);
    },

    release_DocumentTimeline: function(handle) {
      allocator.release(INTERFACE_DocumentTimeline, handle);
    },

    release_SVGSVGElement: function(handle) {
      allocator.release(INTERFACE_SVGSVGElement, handle);
    },

    release_FlashClassification: function(handle) {
      allocator.release(INTERFACE_FlashClassification, handle);
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

    release_Navigator: function(handle) {
      allocator.release(INTERFACE_Navigator, handle);
    },

    release_External: function(handle) {
      allocator.release(INTERFACE_External, handle);
    },

    release_ApplicationCache: function(handle) {
      allocator.release(INTERFACE_ApplicationCache, handle);
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

    Document_get_implementation: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_DOMImplementation,
        _instance.implementation
      );
    },

    Document_get_URL: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.URL);
    },

    Document_get_documentURI: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.documentURI);
    },

    Document_get_compatMode: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.compatMode);
    },

    Document_get_characterSet: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.characterSet);
    },

    Document_get_charset: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.charset);
    },

    Document_get_inputEncoding: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.inputEncoding);
    },

    Document_get_contentType: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.contentType);
    },

    Document_get_doctype: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DocumentType, _instance.doctype);
    },

    Document_get_documentElement: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Element, _instance.documentElement);
    },

    Document_getElementsByTagName: function(
      instance,
      localName_start,
      localName_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _localName = this.readStringFromMemory(
        localName_start,
        localName_len
      );
      _instance.getElementsByTagName(_localName);
    },

    Document_getElementsByTagNameNS: function(
      instance,
      namespace_start,
      namespace_len,
      localName_start,
      localName_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      let _localName = this.readStringFromMemory(
        localName_start,
        localName_len
      );
      _instance.getElementsByTagNameNS(_namespace, _localName);
    },

    Document_getElementsByClassName: function(
      instance,
      classNames_start,
      classNames_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _classNames = this.readStringFromMemory(
        classNames_start,
        classNames_len
      );
      _instance.getElementsByClassName(_classNames);
    },

    Document_getElementById: function(
      instance,
      elementId_start,
      elementId_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _elementId = this.readStringFromMemory(
        elementId_start,
        elementId_len
      );
      _instance.getElementById(_elementId);
    },

    Document_createElement: function(
      instance,
      localName_start,
      localName_len,
      options
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _localName = this.readStringFromMemory(
        localName_start,
        localName_len
      );
      _instance.createElement(_localName, _options);
    },

    Document_createElementNS: function(
      instance,
      namespace_start,
      namespace_len,
      qualifiedName_start,
      qualifiedName_len,
      options
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      let _qualifiedName = this.readStringFromMemory(
        qualifiedName_start,
        qualifiedName_len
      );
      _instance.createElementNS(_namespace, _qualifiedName, _options);
    },

    Document_createDocumentFragment: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.createDocumentFragment();
    },

    Document_createTextNode: function(instance, data_start, data_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _data = this.readStringFromMemory(data_start, data_len);
      _instance.createTextNode(_data);
    },

    Document_createComment: function(instance, data_start, data_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _data = this.readStringFromMemory(data_start, data_len);
      _instance.createComment(_data);
    },

    Document_createProcessingInstruction: function(
      instance,
      target_start,
      target_len,
      data_start,
      data_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _target = this.readStringFromMemory(target_start, target_len);
      let _data = this.readStringFromMemory(data_start, data_len);
      _instance.createProcessingInstruction(_target, _data);
    },

    Document_importNode: function(instance, node, deep) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.importNode(_node, _deep);
    },

    Document_adoptNode: function(instance, node) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.adoptNode(_node);
    },

    Document_createEvent: function(instance, interface_start, interface_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _interface = this.readStringFromMemory(
        interface_start,
        interface_len
      );
      _instance.createEvent(_interface);
    },

    Document_createRange: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.createRange();
    },

    Document_createNodeIterator: function(instance, root, whatToShow, filter) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.createNodeIterator(_root, _whatToShow, _filter);
    },

    Document_createTreeWalker: function(instance, root, whatToShow, filter) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.createTreeWalker(_root, _whatToShow, _filter);
    },

    Document_createCDATASection: function(instance, data_start, data_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _data = this.readStringFromMemory(data_start, data_len);
      _instance.createCDATASection(_data);
    },

    Document_createAttribute: function(instance, name_start, name_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.createAttribute(_name);
    },

    Document_createAttributeNS: function(
      instance,
      namespace_start,
      namespace_len,
      name_start,
      name_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.createAttributeNS(_namespace, _name);
    },

    Document_get_location: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Location, _instance.location);
    },

    Document_get_referrer: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.referrer);
    },

    Document_get_lastModified: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.lastModified);
    },

    Document_get_readyState: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.readyState);
    },

    Document_get_title: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.title);
    },

    Document_get_dir: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.dir);
    },

    Document_get_body: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLElement, _instance.body);
    },

    Document_get_head: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLHeadElement, _instance.head);
    },

    Document_get_images: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.images);
    },

    Document_get_embeds: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.embeds);
    },

    Document_get_plugins: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.plugins);
    },

    Document_get_links: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.links);
    },

    Document_get_forms: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.forms);
    },

    Document_get_scripts: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.scripts);
    },

    Document_getElementsByName: function(
      instance,
      elementName_start,
      elementName_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _elementName = this.readStringFromMemory(
        elementName_start,
        elementName_len
      );
      _instance.getElementsByName(_elementName);
    },

    Document_get_defaultView: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_WindowProxy, _instance.defaultView);
    },

    Document_hasFocus: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.hasFocus();
    },

    Document_get_onreadystatechange: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onreadystatechange
      );
    },

    Document_get_onbeforescriptexecute: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onbeforescriptexecute
      );
    },

    Document_get_onafterscriptexecute: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onafterscriptexecute
      );
    },

    Document_get_onselectionchange: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onselectionchange
      );
    },

    Document_get_currentScript: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Element, _instance.currentScript);
    },

    Document_releaseCapture: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.releaseCapture();
    },

    Document_get_documentURIObject: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_URI, _instance.documentURIObject);
    },

    Document_get_referrerPolicy: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.referrerPolicy;
    },

    Document_get_anchors: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.anchors);
    },

    Document_get_applets: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_HTMLCollection, _instance.applets);
    },

    Document_get_fullscreen: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.fullscreen;
    },

    Document_get_fullscreenEnabled: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.fullscreenEnabled;
    },

    Document_exitFullscreen: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.exitFullscreen();
    },

    Document_get_onfullscreenchange: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onfullscreenchange
      );
    },

    Document_get_onfullscreenerror: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onfullscreenerror
      );
    },

    Document_exitPointerLock: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.exitPointerLock();
    },

    Document_get_onpointerlockchange: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onpointerlockchange
      );
    },

    Document_get_onpointerlockerror: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onpointerlockerror
      );
    },

    Document_get_hidden: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.hidden;
    },

    Document_get_visibilityState: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_VisibilityState,
        _instance.visibilityState
      );
    },

    Document_get_onvisibilitychange: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_EventHandler,
        _instance.onvisibilitychange
      );
    },

    Document_get_selectedStyleSheetSet: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_DOMString,
        _instance.selectedStyleSheetSet
      );
    },

    Document_get_lastStyleSheetSet: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_DOMString,
        _instance.lastStyleSheetSet
      );
    },

    Document_get_preferredStyleSheetSet: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_DOMString,
        _instance.preferredStyleSheetSet
      );
    },

    Document_get_styleSheetSets: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_DOMStringList,
        _instance.styleSheetSets
      );
    },

    Document_enableStyleSheetsForSet: function(instance, name_start, name_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.enableStyleSheetsForSet(_name);
    },

    Document_caretPositionFromPoint: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.caretPositionFromPoint(_x, _y);
    },

    Document_get_scrollingElement: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Element, _instance.scrollingElement);
    },

    Document_querySelector: function(instance, selectors_start, selectors_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _selectors = this.readStringFromMemory(
        selectors_start,
        selectors_len
      );
      _instance.querySelector(_selectors);
    },

    Document_querySelectorAll: function(
      instance,
      selectors_start,
      selectors_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      let _selectors = this.readStringFromMemory(
        selectors_start,
        selectors_len
      );
      _instance.querySelectorAll(_selectors);
    },

    Document_get_timeline: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DocumentTimeline, _instance.timeline);
    },

    Document_getAnimations: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.getAnimations();
    },

    Document_get_rootElement: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_SVGSVGElement, _instance.rootElement);
    },

    Document_get_isSrcdocDocument: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.isSrcdocDocument;
    },

    Document_get_sandboxFlagsAsString: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_DOMString,
        _instance.sandboxFlagsAsString
      );
    },

    Document_insertAnonymousContent: function(instance, aElement) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.insertAnonymousContent(_aElement);
    },

    Document_removeAnonymousContent: function(instance, aContent) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.removeAnonymousContent(_aContent);
    },

    Document_getSelection: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.getSelection();
    },

    Document_get_userHasInteracted: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.userHasInteracted;
    },

    Document_notifyUserGestureActivation: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Document, instance);
      _instance.notifyUserGestureActivation();
    },

    Document_get_documentFlashClassification: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_FlashClassification,
        _instance.documentFlashClassification
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

export default createWebIDLContext;
