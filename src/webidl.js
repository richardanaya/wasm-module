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
let INTERFACE_DOMTokenList = 19;
let INTERFACE_NamedNodeMap = 20;
let INTERFACE_ShadowRoot = 21;
let INTERFACE_HTMLSlotElement = 22;
let INTERFACE_HTMLCanvasElement = 23;
let INTERFACE_DOMStringMap = 24;
let INTERFACE_CSSStyleDeclaration = 25;
let INTERFACE_HTMLUnknownElement = 26;
let INTERFACE_Node = 27;
let INTERFACE_NodeList = 28;
let INTERFACE_History = 29;
let INTERFACE_CustomElementRegistry = 30;
let INTERFACE_BarProp = 31;
let INTERFACE_Navigator = 32;
let INTERFACE_External = 33;
let INTERFACE_ApplicationCache = 34;
let INTERFACE_Screen = 35;
let INTERFACE_Performance = 36;
let INTERFACE_Worklet = 37;

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

    release_DOMTokenList: function(handle) {
      allocator.release(INTERFACE_DOMTokenList, handle);
    },

    release_NamedNodeMap: function(handle) {
      allocator.release(INTERFACE_NamedNodeMap, handle);
    },

    release_ShadowRoot: function(handle) {
      allocator.release(INTERFACE_ShadowRoot, handle);
    },

    release_HTMLSlotElement: function(handle) {
      allocator.release(INTERFACE_HTMLSlotElement, handle);
    },

    release_HTMLCanvasElement: function(handle) {
      allocator.release(INTERFACE_HTMLCanvasElement, handle);
    },

    release_DOMStringMap: function(handle) {
      allocator.release(INTERFACE_DOMStringMap, handle);
    },

    release_CSSStyleDeclaration: function(handle) {
      allocator.release(INTERFACE_CSSStyleDeclaration, handle);
    },

    release_HTMLUnknownElement: function(handle) {
      allocator.release(INTERFACE_HTMLUnknownElement, handle);
    },

    release_Node: function(handle) {
      allocator.release(INTERFACE_Node, handle);
    },

    release_NodeList: function(handle) {
      allocator.release(INTERFACE_NodeList, handle);
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

    Element_get_namespaceURI: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.namespaceURI);
    },

    Element_get_prefix: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.prefix);
    },

    Element_get_localName: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.localName);
    },

    Element_get_tagName: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.tagName);
    },

    Element_get_id: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.id);
    },

    Element_get_className: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.className);
    },

    Element_get_classList: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMTokenList, _instance.classList);
    },

    Element_get_attributes: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_NamedNodeMap, _instance.attributes);
    },

    Element_getAttributeNames: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getAttributeNames();
    },

    Element_getAttribute: function(instance, name_start, name_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.getAttribute(_name);
    },

    Element_getAttributeNS: function(
      instance,
      namespace_start,
      namespace_len,
      localName_start,
      localName_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      let _localName = this.readStringFromMemory(
        localName_start,
        localName_len
      );
      _instance.getAttributeNS(_namespace, _localName);
    },

    Element_toggleAttribute: function(instance, name_start, name_len, force) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.toggleAttribute(_name, _force);
    },

    Element_setAttribute: function(
      instance,
      name_start,
      name_len,
      value_start,
      value_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      let _value = this.readStringFromMemory(value_start, value_len);
      _instance.setAttribute(_name, _value);
    },

    Element_setAttributeNS: function(
      instance,
      namespace_start,
      namespace_len,
      name_start,
      name_len,
      value_start,
      value_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      let _name = this.readStringFromMemory(name_start, name_len);
      let _value = this.readStringFromMemory(value_start, value_len);
      _instance.setAttributeNS(_namespace, _name, _value);
    },

    Element_removeAttribute: function(instance, name_start, name_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.removeAttribute(_name);
    },

    Element_removeAttributeNS: function(
      instance,
      namespace_start,
      namespace_len,
      localName_start,
      localName_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      let _localName = this.readStringFromMemory(
        localName_start,
        localName_len
      );
      _instance.removeAttributeNS(_namespace, _localName);
    },

    Element_hasAttribute: function(instance, name_start, name_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.hasAttribute(_name);
    },

    Element_hasAttributeNS: function(
      instance,
      namespace_start,
      namespace_len,
      localName_start,
      localName_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      let _localName = this.readStringFromMemory(
        localName_start,
        localName_len
      );
      _instance.hasAttributeNS(_namespace, _localName);
    },

    Element_hasAttributes: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.hasAttributes();
    },

    Element_closest: function(instance, selector_start, selector_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _selector = this.readStringFromMemory(selector_start, selector_len);
      _instance.closest(_selector);
    },

    Element_matches: function(instance, selector_start, selector_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _selector = this.readStringFromMemory(selector_start, selector_len);
      _instance.matches(_selector);
    },

    Element_webkitMatchesSelector: function(
      instance,
      selector_start,
      selector_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _selector = this.readStringFromMemory(selector_start, selector_len);
      _instance.webkitMatchesSelector(_selector);
    },

    Element_getElementsWithGrid: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getElementsWithGrid();
    },

    Element_insertAdjacentElement: function(
      instance,
      where_start,
      where_len,
      element
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _where = this.readStringFromMemory(where_start, where_len);
      _instance.insertAdjacentElement(_where, _element);
    },

    Element_insertAdjacentText: function(
      instance,
      where_start,
      where_len,
      data_start,
      data_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _where = this.readStringFromMemory(where_start, where_len);
      let _data = this.readStringFromMemory(data_start, data_len);
      _instance.insertAdjacentText(_where, _data);
    },

    Element_get_fontSizeInflation: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.fontSizeInflation;
    },

    Element_setPointerCapture: function(instance, pointerId) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.setPointerCapture(_pointerId);
    },

    Element_releasePointerCapture: function(instance, pointerId) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.releasePointerCapture(_pointerId);
    },

    Element_hasPointerCapture: function(instance, pointerId) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.hasPointerCapture(_pointerId);
    },

    Element_setCapture: function(instance, retargetToElement) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.setCapture(_retargetToElement);
    },

    Element_releaseCapture: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.releaseCapture();
    },

    Element_setCaptureAlways: function(instance, retargetToElement) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.setCaptureAlways(_retargetToElement);
    },

    Element_getAttributeNode: function(instance, name_start, name_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _name = this.readStringFromMemory(name_start, name_len);
      _instance.getAttributeNode(_name);
    },

    Element_setAttributeNode: function(instance, newAttr) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.setAttributeNode(_newAttr);
    },

    Element_removeAttributeNode: function(instance, oldAttr) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.removeAttributeNode(_oldAttr);
    },

    Element_getAttributeNodeNS: function(
      instance,
      namespaceURI_start,
      namespaceURI_len,
      localName_start,
      localName_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _namespaceURI = this.readStringFromMemory(
        namespaceURI_start,
        namespaceURI_len
      );
      let _localName = this.readStringFromMemory(
        localName_start,
        localName_len
      );
      _instance.getAttributeNodeNS(_namespaceURI, _localName);
    },

    Element_setAttributeNodeNS: function(instance, newAttr) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.setAttributeNodeNS(_newAttr);
    },

    Element_scrollByNoFlush: function(instance, dx, dy) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scrollByNoFlush(_dx, _dy);
    },

    Element_getAsFlexContainer: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getAsFlexContainer();
    },

    Element_getGridFragments: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getGridFragments();
    },

    Element_getTransformToAncestor: function(instance, ancestor) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getTransformToAncestor(_ancestor);
    },

    Element_getTransformToParent: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getTransformToParent();
    },

    Element_getTransformToViewport: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getTransformToViewport();
    },

    Element_getClientRects: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getClientRects();
    },

    Element_getBoundingClientRect: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.getBoundingClientRect();
    },

    Element_scrollIntoView: function(instance, arg) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scrollIntoView(_arg);
    },

    Element_get_scrollTop: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.scrollTop;
    },

    Element_get_scrollLeft: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.scrollLeft;
    },

    Element_get_scrollWidth: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.scrollWidth;
    },

    Element_get_scrollHeight: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.scrollHeight;
    },

    Element_scroll: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scroll(_x, _y);
    },

    Element_scroll: function(instance, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scroll(_options);
    },

    Element_scrollTo: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scrollTo(_x, _y);
    },

    Element_scrollTo: function(instance, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scrollTo(_options);
    },

    Element_scrollBy: function(instance, x, y) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scrollBy(_x, _y);
    },

    Element_scrollBy: function(instance, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.scrollBy(_options);
    },

    Element_get_clientTop: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.clientTop;
    },

    Element_get_clientLeft: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.clientLeft;
    },

    Element_get_clientWidth: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.clientWidth;
    },

    Element_get_clientHeight: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.clientHeight;
    },

    Element_get_innerHTML: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.innerHTML);
    },

    Element_get_outerHTML: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.outerHTML);
    },

    Element_insertAdjacentHTML: function(
      instance,
      position_start,
      position_len,
      text_start,
      text_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _position = this.readStringFromMemory(position_start, position_len);
      let _text = this.readStringFromMemory(text_start, text_len);
      _instance.insertAdjacentHTML(_position, _text);
    },

    Element_querySelector: function(instance, selectors_start, selectors_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _selectors = this.readStringFromMemory(
        selectors_start,
        selectors_len
      );
      _instance.querySelector(_selectors);
    },

    Element_querySelectorAll: function(
      instance,
      selectors_start,
      selectors_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      let _selectors = this.readStringFromMemory(
        selectors_start,
        selectors_len
      );
      _instance.querySelectorAll(_selectors);
    },

    Element_attachShadow: function(instance, shadowRootInitDict) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.attachShadow(_shadowRootInitDict);
    },

    Element_get_shadowRoot: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_ShadowRoot, _instance.shadowRoot);
    },

    Element_get_openOrClosedShadowRoot: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_ShadowRoot,
        _instance.openOrClosedShadowRoot
      );
    },

    Element_get_assignedSlot: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(
        INTERFACE_HTMLSlotElement,
        _instance.assignedSlot
      );
    },

    Element_get_slot: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.slot);
    },

    Element_requestFullscreen: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.requestFullscreen();
    },

    Element_requestPointerLock: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Element, instance);
      _instance.requestPointerLock();
    },

    HTMLCanvasElement_get_width: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.width;
    },

    HTMLCanvasElement_get_height: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.height;
    },

    HTMLCanvasElement_getContext: function(
      instance,
      contextId_start,
      contextId_len,
      contextOptions
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_HTMLCanvasElement, instance);
      let _contextId = this.readStringFromMemory(
        contextId_start,
        contextId_len
      );
      _instance.getContext(_contextId, _contextOptions);
    },

    HTMLCanvasElement_toDataURL: function(
      instance,
      type_start,
      type_len,
      encoderOptions
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_HTMLCanvasElement, instance);
      let _type = this.readStringFromMemory(type_start, type_len);
      _instance.toDataURL(_type, _encoderOptions);
    },

    HTMLCanvasElement_toBlob: function(
      instance,
      callback,
      type_start,
      type_len,
      encoderOptions
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_HTMLCanvasElement, instance);
      let _type = this.readStringFromMemory(type_start, type_len);
      _instance.toBlob(_callback, _type, _encoderOptions);
    },

    HTMLCanvasElement_transferControlToOffscreen: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_HTMLCanvasElement, instance);
      _instance.transferControlToOffscreen();
    },

    HTMLElement_get_title: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.title);
    },

    HTMLElement_get_lang: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.lang);
    },

    HTMLElement_get_dir: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.dir);
    },

    HTMLElement_get_dataset: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMStringMap, _instance.dataset);
    },

    HTMLElement_get_innerText: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.innerText);
    },

    HTMLElement_get_hidden: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.hidden;
    },

    HTMLElement_click: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_HTMLElement, instance);
      _instance.click();
    },

    HTMLElement_get_tabIndex: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.tabIndex;
    },

    HTMLElement_focus: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_HTMLElement, instance);
      _instance.focus();
    },

    HTMLElement_blur: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_HTMLElement, instance);
      _instance.blur();
    },

    HTMLElement_get_accessKey: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.accessKey);
    },

    HTMLElement_get_accessKeyLabel: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.accessKeyLabel);
    },

    HTMLElement_get_draggable: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.draggable;
    },

    HTMLElement_get_contentEditable: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.contentEditable);
    },

    HTMLElement_get_isContentEditable: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.isContentEditable;
    },

    HTMLElement_get_spellcheck: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.spellcheck;
    },

    HTMLElement_get_style: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_CSSStyleDeclaration, _instance.style);
    },

    HTMLElement_get_offsetParent: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Element, _instance.offsetParent);
    },

    HTMLElement_get_offsetTop: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.offsetTop;
    },

    HTMLElement_get_offsetLeft: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.offsetLeft;
    },

    HTMLElement_get_offsetWidth: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.offsetWidth;
    },

    HTMLElement_get_offsetHeight: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.offsetHeight;
    },

    Node_get_nodeType: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.nodeType;
    },

    Node_get_nodeName: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.nodeName);
    },

    Node_get_baseURI: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.baseURI);
    },

    Node_get_isConnected: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return _instance.isConnected;
    },

    Node_get_ownerDocument: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Document, _instance.ownerDocument);
    },

    Node_getRootNode: function(instance, options) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.getRootNode(_options);
    },

    Node_get_parentNode: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Node, _instance.parentNode);
    },

    Node_get_parentElement: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Element, _instance.parentElement);
    },

    Node_hasChildNodes: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.hasChildNodes();
    },

    Node_get_childNodes: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_NodeList, _instance.childNodes);
    },

    Node_get_firstChild: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Node, _instance.firstChild);
    },

    Node_get_lastChild: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Node, _instance.lastChild);
    },

    Node_get_previousSibling: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Node, _instance.previousSibling);
    },

    Node_get_nextSibling: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_Node, _instance.nextSibling);
    },

    Node_get_nodeValue: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.nodeValue);
    },

    Node_get_textContent: function(instance) {
      let _instance = ALLOCATOR.get(instance);
      return ALLOCATOR.allocate(INTERFACE_DOMString, _instance.textContent);
    },

    Node_insertBefore: function(instance, node, child) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.insertBefore(_node, _child);
    },

    Node_appendChild: function(instance, node) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.appendChild(_node);
    },

    Node_replaceChild: function(instance, node, child) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.replaceChild(_node, _child);
    },

    Node_removeChild: function(instance, child) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.removeChild(_child);
    },

    Node_normalize: function(instance) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.normalize();
    },

    Node_cloneNode: function(instance, deep) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.cloneNode(_deep);
    },

    Node_isSameNode: function(instance, node) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.isSameNode(_node);
    },

    Node_isEqualNode: function(instance, node) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.isEqualNode(_node);
    },

    Node_compareDocumentPosition: function(instance, other) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.compareDocumentPosition(_other);
    },

    Node_contains: function(instance, other) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      _instance.contains(_other);
    },

    Node_lookupPrefix: function(instance, namespace_start, namespace_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      _instance.lookupPrefix(_namespace);
    },

    Node_lookupNamespaceURI: function(instance, prefix_start, prefix_len) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      let _prefix = this.readStringFromMemory(prefix_start, prefix_len);
      _instance.lookupNamespaceURI(_prefix);
    },

    Node_isDefaultNamespace: function(
      instance,
      namespace_start,
      namespace_len
    ) {
      let _instance = ALLOCATOR.get(INTERFACE_Node, instance);
      let _namespace = this.readStringFromMemory(
        namespace_start,
        namespace_len
      );
      _instance.isDefaultNamespace(_namespace);
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
