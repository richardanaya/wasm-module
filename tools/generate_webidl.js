let fs = require("fs");
let webidlParser = require("webidl2");

let FUNCTIONS = [];
let FUNCTION_DOCUMENTATION = [];

let WHITELIST = process.argv.slice(2);

function toInterfaceName(n) {
  return n.replace(" ", "");
}

function isPrimitive(n) {
  if (n == "DOMString") {
    return true;
  }
  if (Array.isArray(n)) {
    return false;
  }
  return n[0] == n[0].toLowerCase();
}

function processOperation(namespace, operation, isInterface) {
  if (
    operation.extAttrs &&
    operation.extAttrs.trivia.open.indexOf("[ChromeOnly]") !== -1
  ) {
    return;
  }
  if (operation.body.name == null) {
    return;
  }
  let operationName = operation.body.name.value;
  let args = [];
  let params = [];
  let extractors = [];
  if (isInterface) {
    params.push({
      name: "instance",
      type: "number",
      description:
        "number that represents a handle to an " + namespace + " instance"
    });
    extractors.push(`let _instance = ALLOCATOR.g(instance);`);
  }
  let returnType = operation.body.idlType.idlType;
  let hasReturn = returnType != "void";
  let returnsString = returnType == "DOMString";
  for (a in operation.body.arguments) {
    let arg = operation.body.arguments[a];
    let name = arg.name;
    let type = arg.idlType.idlType;
    if (type == "DOMString") {
      params.push({
        name: name + "_start",
        type: "number",
        description: 'memory location of string "' + name + '"'
      });
      extractors.push(`let _${name} = this.s(${name + "_start"});`);
    } else if (!isPrimitive(type)) {
      extractors.push(`let _${name} = ALLOCATOR.g(${name});`);
      params.push({
        name,
        type: "number",
        description: type + " represented as a number"
      });
    } else {
      extractors.push(`let _${name} = ${name};`);
      params.push({
        name,
        type: "number",
        description: type + " represented as a number"
      });
    }
    args.push({ name, type });
  }
  FUNCTIONS.push(`
      ${namespace}_${operationName}: function(${params
    .map(x => x.name)
    .join(", ")}){
          ${extractors.join("\n")}
          ${
            hasReturn
              ? returnsString
                ? "return this.ms("
                : "return ALLOCATOR.a("
              : "("
          }
          ${isInterface ? "_instance" : namespace}.${operationName}(${args
    .map(x => "_" + x.name)
    .join(", ")}));
      }`);
  FUNCTION_DOCUMENTATION.push(`
## \`${namespace}_${operationName}(${params.map(x => x.name).join(", ")}) ${
    hasReturn ? " -> number" : ""
  }\``);
  if (params.length > 0) {
    FUNCTION_DOCUMENTATION.push(`Argument | Type | description
---------|------|-------------
${params.map(x => `${x.name} | ${x.type} | ${x.description}`).join("\n")}`);
    if (hasReturn) {
      FUNCTION_DOCUMENTATION.push(
        `*output*|number| A number representing a handle to ${returnType}`
      );
    }
  }
}

function processAttribute(interface, idl) {
  if (!idl.name) {
    return;
  }
  let name = idl.name;
  let primitive = isPrimitive(idl.idlType.idlType);
  if (primitive) {
    if (idl.idlType.idlType == "DOMString") {
      FUNCTIONS.push(`
        ${interface}_get_${name}: function(instance) {
          let _instance = ALLOCATOR.g(instance);
          return this.ms(_instance.${name});
        }`);
      FUNCTIONS.push(`
        ${interface}_set_${name}: function(instance,str) {
          let _instance = ALLOCATOR.g(instance);
          _instance.${name} = this.s(str);
        }`);
    } else {
      FUNCTIONS.push(`
        ${interface}_get_${name}: function(instance) {
          let _instance = ALLOCATOR.g(instance);
          return _instance.${name};
        }`);
      FUNCTIONS.push(`
        ${interface}_set_${name}: function(instance,val) {
          let _instance = ALLOCATOR.g(instance);
          _instance.${name} = val;
        }`);
    }
    FUNCTION_DOCUMENTATION.push(`## \`${interface}_get_${name}(instance)\`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a ${interface}
*output* | number | A number representing as result of type ${
      idl.idlType.idlType
    }`);
    if (idl.idlType.idlType == "DOMString") {
      FUNCTION_DOCUMENTATION.push(`## \`${interface}_set_${name}(instance,str,len)\`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a ${interface}
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string`);
    } else {
      FUNCTION_DOCUMENTATION.push(`## \`${interface}_set_${name}(instance,val)\`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a ${interface}
  val | number | A number that represents a value`);
    }
  } else {
    FUNCTIONS.push(`
      ${interface}_get_${name}: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.${name});
      }`);
    FUNCTIONS.push(`
      ${interface}_set_${name}: function(instance,handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.${name} = ALLOCATOR.g(handle);
      }`);
    FUNCTION_DOCUMENTATION.push(`## \`${interface}_get_${name}() -> number\`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a ${interface}
*output* | number | A number that represents a handle to a ${
      idl.idlType.idlType
    }`);
    FUNCTION_DOCUMENTATION.push(`## \`${interface}_set_${name}(handle)\`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a ${interface}
handle | number | A number that represents a handle to a value`);
  }
}

function processIdl(idls, file) {
  console.log(`Processing \`${file}\`...`);
  FUNCTION_DOCUMENTATION.push(`# ${file}`);
  for (i in idls) {
    let idl = idls[i];
    if (idl.type === "namespace") {
      for (m in idl.members) {
        let member = idl.members[m];
        if (member.type == "operation") {
          processOperation(idl.name, member);
        }
      }
    } else if (idl.type === "interface") {
      for (m in idl.members) {
        let member = idl.members[m];
        if (member.type == "operation") {
          processOperation(idl.name, member, true);
        }
        if (member.type == "attribute") {
          processAttribute(idl.name, member);
        }
      }
    }
  }
}

fs.readdirSync("webidl/").forEach(file => {
  if (WHITELIST.indexOf(file) != -1) {
    var text = fs.readFileSync("webidl/" + file, "utf8");
    processIdl(webidlParser.parse(text), file);
  }
});

const template = `// THIS FILE IS GENERATED FROM tools/generate_webidl.js
import allocator from './allocator'

function createWebIDLContext(){
  let ALLOCATOR = allocator();
  const webidl = {
    debugger: function(){
      debugger;
    },

    global_getWindow: function(){
      return ALLOCATOR.a(window);
    },

    global_release: function(handle) {
      ALLOCATOR.r(handle);
    },
    global_createEventListener: function() {
      let handle = ALLOCATOR.a((e) => this.executeCallback(handle,e,ALLOCATOR));
      return handle;
    },
    global_getProperty: function(handle,name) {
      let o = ALLOCATOR.g(handle);
      let p = o[this.s(name)];
      if(typeof p == "string"){
        return this.ms(p);
      } else if(typeof p == "boolean"){
        return p?1:0;
      } else if(typeof p == "number"){
        return p;
      }
      return ALLOCATOR.a(p);
    },
    Element_attachShadow: function(instance) {
      let _instance = ALLOCATOR.g(instance);
      return ALLOCATOR.a(_instance.attachShadow({mode:"open"}));
    },
    CustomElement_define: function(componentName) {
      componentName = this.s(componentName);
      let createElement = this.elementCreated;
      customElements.define(
        componentName,
        class extends HTMLElement {
          constructor() {
            super();
            var e = new CustomEvent("customelementcreated",{detail:ALLOCATOR.a(this)});
            window.dispatchEvent(e);
          }
          connectedCallback() {
            var e = new CustomEvent("connected");
            this.dispatchEvent(e);
          }
          disconnectedCallback() {
            debugger;
            var e = new CustomEvent("disconnected");
            this.dispatchEvent(e);
          }
          adoptedCallback() {
            var e = new CustomEvent("adopted");
            this.dispatchEvent(e);
          }
          attributeChangedCallback(name, oldValue, value) {
            var e = new CustomEvent("attributechanged", {
              detail: { name, oldValue, value }
            });
            this.dispatchEvent(e);
          }
        }
      );
    },
    CustomElement_defineWithAttributes: function(componentName, attributes) {
      componentName = this.s(componentName);
      attributes = this.s(attributes);
      let createElement = this.elementCreated;
      let observedAttributes = attributes.split(",").map(x => x.trim());
      customElements.define(
        componentName,
        class extends HTMLElement {
          constructor() {
            super();
            var e = new CustomEvent("customelementcreated",{detail:ALLOCATOR.a(this)});
            window.dispatchEvent(e);
          }
          static get observedAttributes() {
            return observedAttributes;
          }
          connectedCallback() {
            var e = new CustomEvent("connected");
            this.dispatchEvent(e);
          }
          disconnectedCallback() {
            debugger;
            var e = new CustomEvent("disconnected");
            this.dispatchEvent(e);
          }
          adoptedCallback() {
            var e = new CustomEvent("adopted");
            this.dispatchEvent(e);
          }
          attributeChangedCallback(name, oldValue, value) {
            var e = new CustomEvent("attributechanged", {
              detail: { name, oldValue, value }
            });
            this.dispatchEvent(e);
          }
        }
      );
    },

    WasmWorker_onWorkerLoaded: function(instance,listener){
      let _instance = ALLOCATOR.g(instance);
      let _listener = ALLOCATOR.g(listener);
      if(_instance.loaded){
          _listener(new CustomEvent("load",{detail:{id:_instance.workerId}}))
      } else {
          _instance.addEventListener("load", _listener);
      }
    },
    WasmWorker_onWorkerMessage: function(instance,listener){
      let _instance = ALLOCATOR.g(instance);
      let _listener = ALLOCATOR.g(listener);
      _instance.addEventListener("message", _listener);
    },
    WasmWorker_sendWorkerMessage: function(instance,start,len){
      let _instance = ALLOCATOR.g(instance);
      const data = new Uint8Array(this.memory.buffer)
      _instance.sendMessage(data.subarray(start,start+len))
    },
    WasmWorkerLoadEvent_getWorkerId: function(ev){
      let e = ALLOCATOR.g(ev)
      return e.detail.id;
    },
    WasmWorkerMessageEvent_get_length: function(ev){
      let e = ALLOCATOR.g(ev)
      return e.detail.length;
    },
    WasmWorkerMessageEvent_get_data: function(ev){
      let e = ALLOCATOR.g(ev)
      let start = this.m(e.length);
      const data = new Uint8Array(this.memory.buffer)
      data.set(e.detail, start);
      return start
    },

    //TODO: get rid of one day when this isn't required by tinygo
    io_get_stdout: function() {
      return 1;
    },

    //TODO: get rid of one day when this isn't required by tinygo
    resource_write: function(){
    },

    FUNCTIONS
  };
  return webidl;
}

export default createWebIDLContext;
`;

const documentation = `
# Web IDL Documentation
This is a list of all the functions exposed to your web assembly module.

# Global

## \`global_getWindow() -> number\`
Retrieves the current Window of the browser.

## \`global_release(handle) -> number\`
Release a handle to reference in browser.

## \`global_createEventListener() -> number\`
Creates an event handler that returns a handle that can be used to identify it.

FUNCTION_DOCUMENTATION`;

fs.writeFileSync(
  "src/webidl.js",
  template.replace("FUNCTIONS", FUNCTIONS.join(",\n"))
);
fs.writeFileSync(
  "webidl.md",
  documentation.replace(
    "FUNCTION_DOCUMENTATION",
    FUNCTION_DOCUMENTATION.join("\n")
  )
);
