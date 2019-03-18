(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function allocator() {
    let allocations = [];
    let empty = [];
    return {
      //allocate
      a:function(value){
        let i = allocations.length;
        if(empty.length > 0) {
          i = empty.pop();
        }
        allocations[i] = value;
        return i;
      },
      //release
      r(handle){
          allocations[handle] = undefined;
          empty.push(handle);
      },
      //get
      g(handle){
        let ret =  allocations[handle];
        if(!ret){
          console.error(`Asked for ${handle} after it was released.`);
        }
        return ret;
      }
    }
  }

  // THIS FILE IS GENERATED FROM tools/generate_webidl.js

  function createWebIDLContext() {
    let ALLOCATOR = allocator();
    const webidl = {
      debugger: function() {
        debugger;
      },

      global_getWindow: function() {
        return ALLOCATOR.a(window);
      },

      global_release: function(handle) {
        ALLOCATOR.r(handle);
      },
      global_createEventListener: function() {
        let handle = ALLOCATOR.a(e => this.executeCallback(handle, e, ALLOCATOR));
        return handle;
      },
      global_getProperty: function(handle, name) {
        let o = ALLOCATOR.g(handle);
        let p = o[this.s(name)];
        if (typeof p == "string") {
          return this.ms(p);
        } else if (typeof p == "boolean") {
          return p ? 1 : 0;
        } else if (typeof p == "number") {
          return p;
        }
        return ALLOCATOR.a(p);
      },
      Date_now: function() {
        return Date.now();
      },
      Date_nowSeconds: function() {
        return Date.now() / 1000;
      },
      Date_getTimezoneOffset: function() {
        new Date().getTimezoneOffset();
      },
      Math_random: function() {
        return Math.random();
      },
      Math_random_n: function(n) {
        return Math.floor(Math.random() * n);
      },
      Element_attachShadow: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.attachShadow({ mode: "open" }));
      },
      CustomElement_define: function(componentName) {
        componentName = this.s(componentName);
        let createElement = this.elementCreated;
        customElements.define(
          componentName,
          class extends HTMLElement {
            constructor() {
              super();
              var e = new CustomEvent("customelementcreated", {
                detail: ALLOCATOR.a(this)
              });
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
              var e = new CustomEvent("customelementcreated", {
                detail: ALLOCATOR.a(this)
              });
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

      WasmWorker_onWorkerLoaded: function(instance, listener) {
        let _instance = ALLOCATOR.g(instance);
        let _listener = ALLOCATOR.g(listener);
        if (_instance.loaded) {
          _listener(
            new CustomEvent("load", { detail: { id: _instance.workerId } })
          );
        } else {
          _instance.addEventListener("load", _listener);
        }
      },
      WasmWorker_onWorkerMessage: function(instance, listener) {
        let _instance = ALLOCATOR.g(instance);
        let _listener = ALLOCATOR.g(listener);
        _instance.addEventListener("message", _listener);
      },
      WasmWorker_sendWorkerMessage: function(instance, start, len) {
        let _instance = ALLOCATOR.g(instance);
        const data = new Uint8Array(this.memory.buffer);
        _instance.sendMessage(data.subarray(start, start + len));
      },
      WasmWorkerLoadEvent_getWorkerId: function(ev) {
        let e = ALLOCATOR.g(ev);
        return e.detail.id;
      },
      WasmWorkerMessageEvent_get_length: function(ev) {
        let e = ALLOCATOR.g(ev);
        return e.detail.length;
      },
      WasmWorkerMessageEvent_get_data: function(ev) {
        let e = ALLOCATOR.g(ev);
        let start = this.m(e.length);
        const data = new Uint8Array(this.memory.buffer);
        data.set(e.detail, start);
        return start;
      },

      //TODO: get rid of one day when this isn't required by tinygo
      io_get_stdout: function() {
        return 1;
      },

      //TODO: get rid of one day when this isn't required by tinygo
      resource_write: function() {},

      CanvasRenderingContext2D_get_canvas: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.canvas);
      },

      CanvasRenderingContext2D_set_canvas: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.canvas = ALLOCATOR.g(handle);
      },

      CanvasRenderingContext2D_drawWindow: function(
        instance,
        window,
        x,
        y,
        w,
        h,
        bgColor_start,
        flags
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _window = ALLOCATOR.g(window);
        let _x = x;
        let _y = y;
        let _w = w;
        let _h = h;
        let _bgColor = this.s(bgColor_start);
        let _flags = flags;
        _instance.drawWindow(_window, _x, _y, _w, _h, _bgColor, _flags);
      },

      CanvasRenderingContext2D_demote: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.demote();
      },

      CanvasRenderingContext2D_save: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.save();
      },

      CanvasRenderingContext2D_restore: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.restore();
      },

      CanvasRenderingContext2D_scale: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scale(_x, _y);
      },

      CanvasRenderingContext2D_rotate: function(instance, angle) {
        let _instance = ALLOCATOR.g(instance);
        let _angle = angle;
        _instance.rotate(_angle);
      },

      CanvasRenderingContext2D_translate: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.translate(_x, _y);
      },

      CanvasRenderingContext2D_transform: function(instance, a, b, c, d, e, f) {
        let _instance = ALLOCATOR.g(instance);
        let _a = a;
        let _b = b;
        let _c = c;
        let _d = d;
        let _e = e;
        let _f = f;
        _instance.transform(_a, _b, _c, _d, _e, _f);
      },

      CanvasRenderingContext2D_setTransform: function(
        instance,
        a,
        b,
        c,
        d,
        e,
        f
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _a = a;
        let _b = b;
        let _c = c;
        let _d = d;
        let _e = e;
        let _f = f;
        _instance.setTransform(_a, _b, _c, _d, _e, _f);
      },

      CanvasRenderingContext2D_resetTransform: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.resetTransform();
      },

      CanvasRenderingContext2D_get_globalAlpha: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.globalAlpha;
      },

      CanvasRenderingContext2D_set_globalAlpha: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.globalAlpha = val;
      },

      CanvasRenderingContext2D_get_globalCompositeOperation: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.globalCompositeOperation);
      },

      CanvasRenderingContext2D_set_globalCompositeOperation: function(
        instance,
        str
      ) {
        let _instance = ALLOCATOR.g(instance);
        _instance.globalCompositeOperation = this.s(str);
      },

      CanvasRenderingContext2D_get_imageSmoothingEnabled: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.imageSmoothingEnabled;
      },

      CanvasRenderingContext2D_set_imageSmoothingEnabled: function(
        instance,
        val
      ) {
        let _instance = ALLOCATOR.g(instance);
        _instance.imageSmoothingEnabled = val;
      },

      CanvasRenderingContext2D_get_strokeStyle: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.strokeStyle);
      },

      CanvasRenderingContext2D_set_strokeStyle: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.strokeStyle = this.s(str);
      },

      CanvasRenderingContext2D_get_fillStyle: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.fillStyle);
      },

      CanvasRenderingContext2D_set_fillStyle: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.fillStyle = this.s(str);
      },

      CanvasRenderingContext2D_createLinearGradient: function(
        instance,
        x0,
        y0,
        x1,
        y1
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _x0 = x0;
        let _y0 = y0;
        let _x1 = x1;
        let _y1 = y1;
        return ALLOCATOR.a(_instance.createLinearGradient(_x0, _y0, _x1, _y1));
      },

      CanvasRenderingContext2D_createRadialGradient: function(
        instance,
        x0,
        y0,
        r0,
        x1,
        y1,
        r1
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _x0 = x0;
        let _y0 = y0;
        let _r0 = r0;
        let _x1 = x1;
        let _y1 = y1;
        let _r1 = r1;
        return ALLOCATOR.a(
          _instance.createRadialGradient(_x0, _y0, _r0, _x1, _y1, _r1)
        );
      },

      CanvasRenderingContext2D_createPattern: function(
        instance,
        image,
        repetition_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _image = ALLOCATOR.g(image);
        let _repetition = this.s(repetition_start);
        return ALLOCATOR.a(_instance.createPattern(_image, _repetition));
      },

      CanvasRenderingContext2D_get_shadowOffsetX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shadowOffsetX;
      },

      CanvasRenderingContext2D_set_shadowOffsetX: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.shadowOffsetX = val;
      },

      CanvasRenderingContext2D_get_shadowOffsetY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shadowOffsetY;
      },

      CanvasRenderingContext2D_set_shadowOffsetY: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.shadowOffsetY = val;
      },

      CanvasRenderingContext2D_get_shadowBlur: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shadowBlur;
      },

      CanvasRenderingContext2D_set_shadowBlur: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.shadowBlur = val;
      },

      CanvasRenderingContext2D_get_shadowColor: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.shadowColor);
      },

      CanvasRenderingContext2D_set_shadowColor: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.shadowColor = this.s(str);
      },

      CanvasRenderingContext2D_get_filter: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.filter);
      },

      CanvasRenderingContext2D_set_filter: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.filter = this.s(str);
      },

      CanvasRenderingContext2D_clearRect: function(instance, x, y, w, h) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _w = w;
        let _h = h;
        _instance.clearRect(_x, _y, _w, _h);
      },

      CanvasRenderingContext2D_fillRect: function(instance, x, y, w, h) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _w = w;
        let _h = h;
        _instance.fillRect(_x, _y, _w, _h);
      },

      CanvasRenderingContext2D_strokeRect: function(instance, x, y, w, h) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _w = w;
        let _h = h;
        _instance.strokeRect(_x, _y, _w, _h);
      },

      CanvasRenderingContext2D_beginPath: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.beginPath();
      },

      CanvasRenderingContext2D_fill: function(instance, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _winding = ALLOCATOR.g(winding);
        _instance.fill(_winding);
      },

      CanvasRenderingContext2D_fill: function(instance, path, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _path = ALLOCATOR.g(path);
        let _winding = ALLOCATOR.g(winding);
        _instance.fill(_path, _winding);
      },

      CanvasRenderingContext2D_stroke: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.stroke();
      },

      CanvasRenderingContext2D_stroke: function(instance, path) {
        let _instance = ALLOCATOR.g(instance);
        let _path = ALLOCATOR.g(path);
        _instance.stroke(_path);
      },

      CanvasRenderingContext2D_clip: function(instance, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _winding = ALLOCATOR.g(winding);
        _instance.clip(_winding);
      },

      CanvasRenderingContext2D_clip: function(instance, path, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _path = ALLOCATOR.g(path);
        let _winding = ALLOCATOR.g(winding);
        _instance.clip(_path, _winding);
      },

      CanvasRenderingContext2D_isPointInPath: function(instance, x, y, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _winding = ALLOCATOR.g(winding);
        return ALLOCATOR.a(_instance.isPointInPath(_x, _y, _winding));
      },

      CanvasRenderingContext2D_isPointInPath: function(
        instance,
        path,
        x,
        y,
        winding
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _path = ALLOCATOR.g(path);
        let _x = x;
        let _y = y;
        let _winding = ALLOCATOR.g(winding);
        return ALLOCATOR.a(_instance.isPointInPath(_path, _x, _y, _winding));
      },

      CanvasRenderingContext2D_isPointInStroke: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        return ALLOCATOR.a(_instance.isPointInStroke(_x, _y));
      },

      CanvasRenderingContext2D_isPointInStroke: function(instance, path, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _path = ALLOCATOR.g(path);
        let _x = x;
        let _y = y;
        return ALLOCATOR.a(_instance.isPointInStroke(_path, _x, _y));
      },

      CanvasRenderingContext2D_drawFocusIfNeeded: function(instance, element) {
        let _instance = ALLOCATOR.g(instance);
        let _element = ALLOCATOR.g(element);
        _instance.drawFocusIfNeeded(_element);
      },

      CanvasRenderingContext2D_drawCustomFocusRing: function(instance, element) {
        let _instance = ALLOCATOR.g(instance);
        let _element = ALLOCATOR.g(element);
        return ALLOCATOR.a(_instance.drawCustomFocusRing(_element));
      },

      CanvasRenderingContext2D_fillText: function(
        instance,
        text_start,
        x,
        y,
        maxWidth
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _text = this.s(text_start);
        let _x = x;
        let _y = y;
        let _maxWidth = maxWidth;
        _instance.fillText(_text, _x, _y, _maxWidth);
      },

      CanvasRenderingContext2D_strokeText: function(
        instance,
        text_start,
        x,
        y,
        maxWidth
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _text = this.s(text_start);
        let _x = x;
        let _y = y;
        let _maxWidth = maxWidth;
        _instance.strokeText(_text, _x, _y, _maxWidth);
      },

      CanvasRenderingContext2D_measureText: function(instance, text_start) {
        let _instance = ALLOCATOR.g(instance);
        let _text = this.s(text_start);
        return ALLOCATOR.a(_instance.measureText(_text));
      },

      CanvasRenderingContext2D_drawImage: function(instance, image, dx, dy) {
        let _instance = ALLOCATOR.g(instance);
        let _image = ALLOCATOR.g(image);
        let _dx = dx;
        let _dy = dy;
        _instance.drawImage(_image, _dx, _dy);
      },

      CanvasRenderingContext2D_drawImage: function(
        instance,
        image,
        dx,
        dy,
        dw,
        dh
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _image = ALLOCATOR.g(image);
        let _dx = dx;
        let _dy = dy;
        let _dw = dw;
        let _dh = dh;
        _instance.drawImage(_image, _dx, _dy, _dw, _dh);
      },

      CanvasRenderingContext2D_drawImage: function(
        instance,
        image,
        sx,
        sy,
        sw,
        sh,
        dx,
        dy,
        dw,
        dh
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _image = ALLOCATOR.g(image);
        let _sx = sx;
        let _sy = sy;
        let _sw = sw;
        let _sh = sh;
        let _dx = dx;
        let _dy = dy;
        let _dw = dw;
        let _dh = dh;
        _instance.drawImage(_image, _sx, _sy, _sw, _sh, _dx, _dy, _dw, _dh);
      },

      CanvasRenderingContext2D_createImageData: function(instance, sw, sh) {
        let _instance = ALLOCATOR.g(instance);
        let _sw = sw;
        let _sh = sh;
        return ALLOCATOR.a(_instance.createImageData(_sw, _sh));
      },

      CanvasRenderingContext2D_createImageData: function(instance, imagedata) {
        let _instance = ALLOCATOR.g(instance);
        let _imagedata = ALLOCATOR.g(imagedata);
        return ALLOCATOR.a(_instance.createImageData(_imagedata));
      },

      CanvasRenderingContext2D_getImageData: function(instance, sx, sy, sw, sh) {
        let _instance = ALLOCATOR.g(instance);
        let _sx = sx;
        let _sy = sy;
        let _sw = sw;
        let _sh = sh;
        return ALLOCATOR.a(_instance.getImageData(_sx, _sy, _sw, _sh));
      },

      CanvasRenderingContext2D_putImageData: function(
        instance,
        imagedata,
        dx,
        dy
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _imagedata = ALLOCATOR.g(imagedata);
        let _dx = dx;
        let _dy = dy;
        _instance.putImageData(_imagedata, _dx, _dy);
      },

      CanvasRenderingContext2D_putImageData: function(
        instance,
        imagedata,
        dx,
        dy,
        dirtyX,
        dirtyY,
        dirtyWidth,
        dirtyHeight
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _imagedata = ALLOCATOR.g(imagedata);
        let _dx = dx;
        let _dy = dy;
        let _dirtyX = dirtyX;
        let _dirtyY = dirtyY;
        let _dirtyWidth = dirtyWidth;
        let _dirtyHeight = dirtyHeight;
        _instance.putImageData(
          _imagedata,
          _dx,
          _dy,
          _dirtyX,
          _dirtyY,
          _dirtyWidth,
          _dirtyHeight
        );
      },

      CanvasRenderingContext2D_get_lineWidth: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.lineWidth;
      },

      CanvasRenderingContext2D_set_lineWidth: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.lineWidth = val;
      },

      CanvasRenderingContext2D_get_lineCap: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.lineCap);
      },

      CanvasRenderingContext2D_set_lineCap: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.lineCap = this.s(str);
      },

      CanvasRenderingContext2D_get_lineJoin: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.lineJoin);
      },

      CanvasRenderingContext2D_set_lineJoin: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.lineJoin = this.s(str);
      },

      CanvasRenderingContext2D_get_miterLimit: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.miterLimit;
      },

      CanvasRenderingContext2D_set_miterLimit: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.miterLimit = val;
      },

      CanvasRenderingContext2D_setLineDash: function(instance, segments) {
        let _instance = ALLOCATOR.g(instance);
        let _segments = ALLOCATOR.g(segments);
        _instance.setLineDash(_segments);
      },

      CanvasRenderingContext2D_getLineDash: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getLineDash());
      },

      CanvasRenderingContext2D_get_lineDashOffset: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.lineDashOffset;
      },

      CanvasRenderingContext2D_set_lineDashOffset: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.lineDashOffset = val;
      },

      CanvasRenderingContext2D_get_font: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.font);
      },

      CanvasRenderingContext2D_set_font: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.font = this.s(str);
      },

      CanvasRenderingContext2D_get_textAlign: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.textAlign);
      },

      CanvasRenderingContext2D_set_textAlign: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.textAlign = this.s(str);
      },

      CanvasRenderingContext2D_get_textBaseline: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.textBaseline);
      },

      CanvasRenderingContext2D_set_textBaseline: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.textBaseline = this.s(str);
      },

      CanvasRenderingContext2D_closePath: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.closePath();
      },

      CanvasRenderingContext2D_moveTo: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.moveTo(_x, _y);
      },

      CanvasRenderingContext2D_lineTo: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.lineTo(_x, _y);
      },

      CanvasRenderingContext2D_quadraticCurveTo: function(
        instance,
        cpx,
        cpy,
        x,
        y
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _cpx = cpx;
        let _cpy = cpy;
        let _x = x;
        let _y = y;
        _instance.quadraticCurveTo(_cpx, _cpy, _x, _y);
      },

      CanvasRenderingContext2D_bezierCurveTo: function(
        instance,
        cp1x,
        cp1y,
        cp2x,
        cp2y,
        x,
        y
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _cp1x = cp1x;
        let _cp1y = cp1y;
        let _cp2x = cp2x;
        let _cp2y = cp2y;
        let _x = x;
        let _y = y;
        _instance.bezierCurveTo(_cp1x, _cp1y, _cp2x, _cp2y, _x, _y);
      },

      CanvasRenderingContext2D_arcTo: function(instance, x1, y1, x2, y2, radius) {
        let _instance = ALLOCATOR.g(instance);
        let _x1 = x1;
        let _y1 = y1;
        let _x2 = x2;
        let _y2 = y2;
        let _radius = radius;
        _instance.arcTo(_x1, _y1, _x2, _y2, _radius);
      },

      CanvasRenderingContext2D_rect: function(instance, x, y, w, h) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _w = w;
        let _h = h;
        _instance.rect(_x, _y, _w, _h);
      },

      CanvasRenderingContext2D_arc: function(
        instance,
        x,
        y,
        radius,
        startAngle,
        endAngle,
        anticlockwise
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _radius = radius;
        let _startAngle = startAngle;
        let _endAngle = endAngle;
        let _anticlockwise = anticlockwise;
        _instance.arc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise);
      },

      CanvasRenderingContext2D_ellipse: function(
        instance,
        x,
        y,
        radiusX,
        radiusY,
        rotation,
        startAngle,
        endAngle,
        anticlockwise
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _radiusX = radiusX;
        let _radiusY = radiusY;
        let _rotation = rotation;
        let _startAngle = startAngle;
        let _endAngle = endAngle;
        let _anticlockwise = anticlockwise;
        _instance.ellipse(
          _x,
          _y,
          _radiusX,
          _radiusY,
          _rotation,
          _startAngle,
          _endAngle,
          _anticlockwise
        );
      },

      CanvasRenderingContext2D_addHitRegion: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = ALLOCATOR.g(options);
        _instance.addHitRegion(_options);
      },

      CanvasRenderingContext2D_removeHitRegion: function(instance, id_start) {
        let _instance = ALLOCATOR.g(instance);
        let _id = this.s(id_start);
        _instance.removeHitRegion(_id);
      },

      CanvasRenderingContext2D_clearHitRegions: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clearHitRegions();
      },

      CanvasGradient_addColorStop: function(instance, offset, color_start) {
        let _instance = ALLOCATOR.g(instance);
        let _offset = offset;
        let _color = this.s(color_start);
        _instance.addColorStop(_offset, _color);
      },

      CanvasPattern_setTransform: function(instance, matrix) {
        let _instance = ALLOCATOR.g(instance);
        let _matrix = ALLOCATOR.g(matrix);
        _instance.setTransform(_matrix);
      },

      TextMetrics_get_width: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.width;
      },

      TextMetrics_set_width: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.width = val;
      },

      Path2D_addPath: function(instance, path, transformation) {
        let _instance = ALLOCATOR.g(instance);
        let _path = ALLOCATOR.g(path);
        let _transformation = ALLOCATOR.g(transformation);
        _instance.addPath(_path, _transformation);
      },

      console_assert: function(condition, message_start) {
        let _condition = condition;
        let _message = this.s(message_start);
        console.assert(_condition, _message);
      },

      console_clear: function() {
        console.clear();
      },

      console_count: function(label_start) {
        let _label = this.s(label_start);
        console.count(_label);
      },

      console_countReset: function(label_start) {
        let _label = this.s(label_start);
        console.countReset(_label);
      },

      console_debug: function(message_start) {
        let _message = this.s(message_start);
        console.debug(_message);
      },

      console_error: function(message_start) {
        let _message = this.s(message_start);
        console.error(_message);
      },

      console_info: function(message_start) {
        let _message = this.s(message_start);
        console.info(_message);
      },

      console_log: function(message_start) {
        let _message = this.s(message_start);
        console.log(_message);
      },

      console_table: function(message_start) {
        let _message = this.s(message_start);
        console.table(_message);
      },

      console_trace: function(message_start) {
        let _message = this.s(message_start);
        console.trace(_message);
      },

      console_warn: function(message_start) {
        let _message = this.s(message_start);
        console.warn(_message);
      },

      console_dir: function(message_start) {
        let _message = this.s(message_start);
        console.dir(_message);
      },

      console_dirxml: function(message_start) {
        let _message = this.s(message_start);
        console.dirxml(_message);
      },

      console_group: function(message_start) {
        let _message = this.s(message_start);
        console.group(_message);
      },

      console_groupCollapsed: function(message_start) {
        let _message = this.s(message_start);
        console.groupCollapsed(_message);
      },

      console_groupEnd: function() {
        console.groupEnd();
      },

      console_time: function(label_start) {
        let _label = this.s(label_start);
        console.time(_label);
      },

      console_timeLog: function(label_start, message_start) {
        let _label = this.s(label_start);
        let _message = this.s(message_start);
        console.timeLog(_label, _message);
      },

      console_timeEnd: function(label_start) {
        let _label = this.s(label_start);
        console.timeEnd(_label);
      },

      console_exception: function(message_start) {
        let _message = this.s(message_start);
        console.exception(_message);
      },

      console_timeStamp: function(message_start) {
        let _message = this.s(message_start);
        console.timeStamp(_message);
      },

      console_profile: function(message_start) {
        let _message = this.s(message_start);
        console.profile(_message);
      },

      console_profileEnd: function(message_start) {
        let _message = this.s(message_start);
        console.profileEnd(_message);
      },

      ConsoleInstance_assert: function(instance, condition, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _condition = condition;
        let _message = this.s(message_start);
        _instance.assert(_condition, _message);
      },

      ConsoleInstance_clear: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clear();
      },

      ConsoleInstance_count: function(instance, label_start) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start);
        _instance.count(_label);
      },

      ConsoleInstance_countReset: function(instance, label_start) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start);
        _instance.countReset(_label);
      },

      ConsoleInstance_debug: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.debug(_message);
      },

      ConsoleInstance_error: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.error(_message);
      },

      ConsoleInstance_info: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.info(_message);
      },

      ConsoleInstance_log: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.log(_message);
      },

      ConsoleInstance_table: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.table(_message);
      },

      ConsoleInstance_trace: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.trace(_message);
      },

      ConsoleInstance_warn: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.warn(_message);
      },

      ConsoleInstance_dir: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.dir(_message);
      },

      ConsoleInstance_dirxml: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.dirxml(_message);
      },

      ConsoleInstance_group: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.group(_message);
      },

      ConsoleInstance_groupCollapsed: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.groupCollapsed(_message);
      },

      ConsoleInstance_groupEnd: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.groupEnd();
      },

      ConsoleInstance_time: function(instance, label_start) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start);
        _instance.time(_label);
      },

      ConsoleInstance_timeLog: function(instance, label_start, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start);
        let _message = this.s(message_start);
        _instance.timeLog(_label, _message);
      },

      ConsoleInstance_timeEnd: function(instance, label_start) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start);
        _instance.timeEnd(_label);
      },

      ConsoleInstance_exception: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.exception(_message);
      },

      ConsoleInstance_timeStamp: function(instance, data) {
        let _instance = ALLOCATOR.g(instance);
        let _data = data;
        _instance.timeStamp(_data);
      },

      ConsoleInstance_profile: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.profile(_message);
      },

      ConsoleInstance_profileEnd: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.profileEnd(_message);
      },

      ConsoleInstance_reportForServiceWorkerScope: function(
        instance,
        scope_start,
        message_start,
        filename_start,
        lineNumber,
        columnNumber,
        level
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _scope = this.s(scope_start);
        let _message = this.s(message_start);
        let _filename = this.s(filename_start);
        let _lineNumber = lineNumber;
        let _columnNumber = columnNumber;
        let _level = ALLOCATOR.g(level);
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
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.implementation);
      },

      Document_set_implementation: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.implementation = ALLOCATOR.g(handle);
      },

      Document_get_URL: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.URL);
      },

      Document_set_URL: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.URL = this.s(str);
      },

      Document_get_documentURI: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.documentURI);
      },

      Document_set_documentURI: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.documentURI = this.s(str);
      },

      Document_get_compatMode: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.compatMode);
      },

      Document_set_compatMode: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.compatMode = this.s(str);
      },

      Document_get_characterSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.characterSet);
      },

      Document_set_characterSet: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.characterSet = this.s(str);
      },

      Document_get_charset: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.charset);
      },

      Document_set_charset: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.charset = this.s(str);
      },

      Document_get_inputEncoding: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.inputEncoding);
      },

      Document_set_inputEncoding: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.inputEncoding = this.s(str);
      },

      Document_get_contentType: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.contentType);
      },

      Document_set_contentType: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.contentType = this.s(str);
      },

      Document_get_doctype: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.doctype);
      },

      Document_set_doctype: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.doctype = ALLOCATOR.g(handle);
      },

      Document_get_documentElement: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.documentElement);
      },

      Document_set_documentElement: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.documentElement = ALLOCATOR.g(handle);
      },

      Document_getElementsByTagName: function(instance, localName_start) {
        let _instance = ALLOCATOR.g(instance);
        let _localName = this.s(localName_start);
        return ALLOCATOR.a(_instance.getElementsByTagName(_localName));
      },

      Document_getElementsByTagNameNS: function(
        instance,
        namespace_start,
        localName_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start);
        let _localName = this.s(localName_start);
        return ALLOCATOR.a(
          _instance.getElementsByTagNameNS(_namespace, _localName)
        );
      },

      Document_getElementsByClassName: function(instance, classNames_start) {
        let _instance = ALLOCATOR.g(instance);
        let _classNames = this.s(classNames_start);
        return ALLOCATOR.a(_instance.getElementsByClassName(_classNames));
      },

      Document_getElementById: function(instance, elementId_start) {
        let _instance = ALLOCATOR.g(instance);
        let _elementId = this.s(elementId_start);
        return ALLOCATOR.a(_instance.getElementById(_elementId));
      },

      Document_createElement: function(instance, localName_start, options) {
        let _instance = ALLOCATOR.g(instance);
        let _localName = this.s(localName_start);
        let _options = ALLOCATOR.g(options);
        return ALLOCATOR.a(_instance.createElement(_localName, _options));
      },

      Document_createElementNS: function(
        instance,
        namespace_start,
        qualifiedName_start,
        options
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start);
        let _qualifiedName = this.s(qualifiedName_start);
        let _options = ALLOCATOR.g(options);
        return ALLOCATOR.a(
          _instance.createElementNS(_namespace, _qualifiedName, _options)
        );
      },

      Document_createDocumentFragment: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.createDocumentFragment());
      },

      Document_createTextNode: function(instance, data_start) {
        let _instance = ALLOCATOR.g(instance);
        let _data = this.s(data_start);
        return ALLOCATOR.a(_instance.createTextNode(_data));
      },

      Document_createComment: function(instance, data_start) {
        let _instance = ALLOCATOR.g(instance);
        let _data = this.s(data_start);
        return ALLOCATOR.a(_instance.createComment(_data));
      },

      Document_createProcessingInstruction: function(
        instance,
        target_start,
        data_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _target = this.s(target_start);
        let _data = this.s(data_start);
        return ALLOCATOR.a(_instance.createProcessingInstruction(_target, _data));
      },

      Document_importNode: function(instance, node, deep) {
        let _instance = ALLOCATOR.g(instance);
        let _node = ALLOCATOR.g(node);
        let _deep = deep;
        return ALLOCATOR.a(_instance.importNode(_node, _deep));
      },

      Document_adoptNode: function(instance, node) {
        let _instance = ALLOCATOR.g(instance);
        let _node = ALLOCATOR.g(node);
        return ALLOCATOR.a(_instance.adoptNode(_node));
      },

      Document_createEvent: function(instance, interface_start) {
        let _instance = ALLOCATOR.g(instance);
        let _interface = this.s(interface_start);
        return ALLOCATOR.a(_instance.createEvent(_interface));
      },

      Document_createRange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.createRange());
      },

      Document_createNodeIterator: function(instance, root, whatToShow, filter) {
        let _instance = ALLOCATOR.g(instance);
        let _root = ALLOCATOR.g(root);
        let _whatToShow = whatToShow;
        let _filter = ALLOCATOR.g(filter);
        return ALLOCATOR.a(
          _instance.createNodeIterator(_root, _whatToShow, _filter)
        );
      },

      Document_createTreeWalker: function(instance, root, whatToShow, filter) {
        let _instance = ALLOCATOR.g(instance);
        let _root = ALLOCATOR.g(root);
        let _whatToShow = whatToShow;
        let _filter = ALLOCATOR.g(filter);
        return ALLOCATOR.a(
          _instance.createTreeWalker(_root, _whatToShow, _filter)
        );
      },

      Document_createCDATASection: function(instance, data_start) {
        let _instance = ALLOCATOR.g(instance);
        let _data = this.s(data_start);
        return ALLOCATOR.a(_instance.createCDATASection(_data));
      },

      Document_createAttribute: function(instance, name_start) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        return ALLOCATOR.a(_instance.createAttribute(_name));
      },

      Document_createAttributeNS: function(
        instance,
        namespace_start,
        name_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start);
        let _name = this.s(name_start);
        return ALLOCATOR.a(_instance.createAttributeNS(_namespace, _name));
      },

      Document_get_location: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.location);
      },

      Document_set_location: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.location = ALLOCATOR.g(handle);
      },

      Document_get_referrer: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.referrer);
      },

      Document_set_referrer: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.referrer = this.s(str);
      },

      Document_get_lastModified: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.lastModified);
      },

      Document_set_lastModified: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.lastModified = this.s(str);
      },

      Document_get_readyState: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.readyState);
      },

      Document_set_readyState: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.readyState = this.s(str);
      },

      Document_get_title: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.title);
      },

      Document_set_title: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.title = this.s(str);
      },

      Document_get_dir: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.dir);
      },

      Document_set_dir: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.dir = this.s(str);
      },

      Document_get_body: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.body);
      },

      Document_set_body: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.body = ALLOCATOR.g(handle);
      },

      Document_get_head: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.head);
      },

      Document_set_head: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.head = ALLOCATOR.g(handle);
      },

      Document_get_images: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.images);
      },

      Document_set_images: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.images = ALLOCATOR.g(handle);
      },

      Document_get_embeds: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.embeds);
      },

      Document_set_embeds: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.embeds = ALLOCATOR.g(handle);
      },

      Document_get_plugins: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.plugins);
      },

      Document_set_plugins: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.plugins = ALLOCATOR.g(handle);
      },

      Document_get_links: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.links);
      },

      Document_set_links: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.links = ALLOCATOR.g(handle);
      },

      Document_get_forms: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.forms);
      },

      Document_set_forms: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.forms = ALLOCATOR.g(handle);
      },

      Document_get_scripts: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.scripts);
      },

      Document_set_scripts: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scripts = ALLOCATOR.g(handle);
      },

      Document_getElementsByName: function(instance, elementName_start) {
        let _instance = ALLOCATOR.g(instance);
        let _elementName = this.s(elementName_start);
        return ALLOCATOR.a(_instance.getElementsByName(_elementName));
      },

      Document_get_defaultView: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.defaultView);
      },

      Document_set_defaultView: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.defaultView = ALLOCATOR.g(handle);
      },

      Document_hasFocus: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.hasFocus());
      },

      Document_get_onreadystatechange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onreadystatechange);
      },

      Document_set_onreadystatechange: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onreadystatechange = ALLOCATOR.g(handle);
      },

      Document_get_onbeforescriptexecute: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onbeforescriptexecute);
      },

      Document_set_onbeforescriptexecute: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onbeforescriptexecute = ALLOCATOR.g(handle);
      },

      Document_get_onafterscriptexecute: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onafterscriptexecute);
      },

      Document_set_onafterscriptexecute: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onafterscriptexecute = ALLOCATOR.g(handle);
      },

      Document_get_onselectionchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onselectionchange);
      },

      Document_set_onselectionchange: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onselectionchange = ALLOCATOR.g(handle);
      },

      Document_get_currentScript: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.currentScript);
      },

      Document_set_currentScript: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.currentScript = ALLOCATOR.g(handle);
      },

      Document_releaseCapture: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.releaseCapture();
      },

      Document_get_documentURIObject: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.documentURIObject);
      },

      Document_set_documentURIObject: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.documentURIObject = ALLOCATOR.g(handle);
      },

      Document_get_referrerPolicy: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.referrerPolicy;
      },

      Document_set_referrerPolicy: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.referrerPolicy = val;
      },

      Document_get_anchors: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.anchors);
      },

      Document_set_anchors: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.anchors = ALLOCATOR.g(handle);
      },

      Document_get_applets: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.applets);
      },

      Document_set_applets: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.applets = ALLOCATOR.g(handle);
      },

      Document_get_fullscreen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.fullscreen;
      },

      Document_set_fullscreen: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.fullscreen = val;
      },

      Document_get_fullscreenEnabled: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.fullscreenEnabled;
      },

      Document_set_fullscreenEnabled: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.fullscreenEnabled = val;
      },

      Document_exitFullscreen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.exitFullscreen();
      },

      Document_get_onfullscreenchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onfullscreenchange);
      },

      Document_set_onfullscreenchange: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onfullscreenchange = ALLOCATOR.g(handle);
      },

      Document_get_onfullscreenerror: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onfullscreenerror);
      },

      Document_set_onfullscreenerror: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onfullscreenerror = ALLOCATOR.g(handle);
      },

      Document_exitPointerLock: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.exitPointerLock();
      },

      Document_get_onpointerlockchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onpointerlockchange);
      },

      Document_set_onpointerlockchange: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onpointerlockchange = ALLOCATOR.g(handle);
      },

      Document_get_onpointerlockerror: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onpointerlockerror);
      },

      Document_set_onpointerlockerror: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onpointerlockerror = ALLOCATOR.g(handle);
      },

      Document_get_hidden: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.hidden;
      },

      Document_set_hidden: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.hidden = val;
      },

      Document_get_visibilityState: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.visibilityState);
      },

      Document_set_visibilityState: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.visibilityState = ALLOCATOR.g(handle);
      },

      Document_get_onvisibilitychange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvisibilitychange);
      },

      Document_set_onvisibilitychange: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onvisibilitychange = ALLOCATOR.g(handle);
      },

      Document_get_selectedStyleSheetSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.selectedStyleSheetSet);
      },

      Document_set_selectedStyleSheetSet: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.selectedStyleSheetSet = this.s(str);
      },

      Document_get_lastStyleSheetSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.lastStyleSheetSet);
      },

      Document_set_lastStyleSheetSet: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.lastStyleSheetSet = this.s(str);
      },

      Document_get_preferredStyleSheetSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.preferredStyleSheetSet);
      },

      Document_set_preferredStyleSheetSet: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.preferredStyleSheetSet = this.s(str);
      },

      Document_get_styleSheetSets: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.styleSheetSets);
      },

      Document_set_styleSheetSets: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.styleSheetSets = ALLOCATOR.g(handle);
      },

      Document_enableStyleSheetsForSet: function(instance, name_start) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        _instance.enableStyleSheetsForSet(_name);
      },

      Document_caretPositionFromPoint: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        return ALLOCATOR.a(_instance.caretPositionFromPoint(_x, _y));
      },

      Document_get_scrollingElement: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.scrollingElement);
      },

      Document_set_scrollingElement: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollingElement = ALLOCATOR.g(handle);
      },

      Document_querySelector: function(instance, selectors_start) {
        let _instance = ALLOCATOR.g(instance);
        let _selectors = this.s(selectors_start);
        return ALLOCATOR.a(_instance.querySelector(_selectors));
      },

      Document_querySelectorAll: function(instance, selectors_start) {
        let _instance = ALLOCATOR.g(instance);
        let _selectors = this.s(selectors_start);
        return ALLOCATOR.a(_instance.querySelectorAll(_selectors));
      },

      Document_get_timeline: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.timeline);
      },

      Document_set_timeline: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.timeline = ALLOCATOR.g(handle);
      },

      Document_getAnimations: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getAnimations());
      },

      Document_get_rootElement: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.rootElement);
      },

      Document_set_rootElement: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.rootElement = ALLOCATOR.g(handle);
      },

      Document_get_isSrcdocDocument: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.isSrcdocDocument;
      },

      Document_set_isSrcdocDocument: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.isSrcdocDocument = val;
      },

      Document_get_sandboxFlagsAsString: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.sandboxFlagsAsString);
      },

      Document_set_sandboxFlagsAsString: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.sandboxFlagsAsString = this.s(str);
      },

      Document_insertAnonymousContent: function(instance, aElement) {
        let _instance = ALLOCATOR.g(instance);
        let _aElement = ALLOCATOR.g(aElement);
        return ALLOCATOR.a(_instance.insertAnonymousContent(_aElement));
      },

      Document_removeAnonymousContent: function(instance, aContent) {
        let _instance = ALLOCATOR.g(instance);
        let _aContent = ALLOCATOR.g(aContent);
        _instance.removeAnonymousContent(_aContent);
      },

      Document_getSelection: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getSelection());
      },

      Document_get_userHasInteracted: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.userHasInteracted;
      },

      Document_set_userHasInteracted: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.userHasInteracted = val;
      },

      Document_notifyUserGestureActivation: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.notifyUserGestureActivation();
      },

      Document_get_documentFlashClassification: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.documentFlashClassification);
      },

      Document_set_documentFlashClassification: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.documentFlashClassification = ALLOCATOR.g(handle);
      },

      Element_get_namespaceURI: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.namespaceURI);
      },

      Element_set_namespaceURI: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.namespaceURI = this.s(str);
      },

      Element_get_prefix: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.prefix);
      },

      Element_set_prefix: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.prefix = this.s(str);
      },

      Element_get_localName: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.localName);
      },

      Element_set_localName: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.localName = this.s(str);
      },

      Element_get_tagName: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.tagName);
      },

      Element_set_tagName: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.tagName = this.s(str);
      },

      Element_get_id: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.id);
      },

      Element_set_id: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.id = this.s(str);
      },

      Element_get_className: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.className);
      },

      Element_set_className: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.className = this.s(str);
      },

      Element_get_classList: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.classList);
      },

      Element_set_classList: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.classList = ALLOCATOR.g(handle);
      },

      Element_get_attributes: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.attributes);
      },

      Element_set_attributes: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.attributes = ALLOCATOR.g(handle);
      },

      Element_getAttributeNames: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getAttributeNames());
      },

      Element_getAttribute: function(instance, name_start) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        return this.ms(_instance.getAttribute(_name));
      },

      Element_getAttributeNS: function(
        instance,
        namespace_start,
        localName_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start);
        let _localName = this.s(localName_start);
        return this.ms(_instance.getAttributeNS(_namespace, _localName));
      },

      Element_toggleAttribute: function(instance, name_start, force) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        let _force = force;
        return ALLOCATOR.a(_instance.toggleAttribute(_name, _force));
      },

      Element_setAttribute: function(instance, name_start, value_start) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        let _value = this.s(value_start);
        _instance.setAttribute(_name, _value);
      },

      Element_setAttributeNS: function(
        instance,
        namespace_start,
        name_start,
        value_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start);
        let _name = this.s(name_start);
        let _value = this.s(value_start);
        _instance.setAttributeNS(_namespace, _name, _value);
      },

      Element_removeAttribute: function(instance, name_start) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        _instance.removeAttribute(_name);
      },

      Element_removeAttributeNS: function(
        instance,
        namespace_start,
        localName_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start);
        let _localName = this.s(localName_start);
        _instance.removeAttributeNS(_namespace, _localName);
      },

      Element_hasAttribute: function(instance, name_start) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        return ALLOCATOR.a(_instance.hasAttribute(_name));
      },

      Element_hasAttributeNS: function(
        instance,
        namespace_start,
        localName_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start);
        let _localName = this.s(localName_start);
        return ALLOCATOR.a(_instance.hasAttributeNS(_namespace, _localName));
      },

      Element_hasAttributes: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.hasAttributes());
      },

      Element_closest: function(instance, selector_start) {
        let _instance = ALLOCATOR.g(instance);
        let _selector = this.s(selector_start);
        return ALLOCATOR.a(_instance.closest(_selector));
      },

      Element_matches: function(instance, selector_start) {
        let _instance = ALLOCATOR.g(instance);
        let _selector = this.s(selector_start);
        return ALLOCATOR.a(_instance.matches(_selector));
      },

      Element_webkitMatchesSelector: function(instance, selector_start) {
        let _instance = ALLOCATOR.g(instance);
        let _selector = this.s(selector_start);
        return ALLOCATOR.a(_instance.webkitMatchesSelector(_selector));
      },

      Element_getElementsWithGrid: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getElementsWithGrid());
      },

      Element_insertAdjacentElement: function(instance, where_start, element) {
        let _instance = ALLOCATOR.g(instance);
        let _where = this.s(where_start);
        let _element = ALLOCATOR.g(element);
        return ALLOCATOR.a(_instance.insertAdjacentElement(_where, _element));
      },

      Element_insertAdjacentText: function(instance, where_start, data_start) {
        let _instance = ALLOCATOR.g(instance);
        let _where = this.s(where_start);
        let _data = this.s(data_start);
        _instance.insertAdjacentText(_where, _data);
      },

      Element_get_fontSizeInflation: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.fontSizeInflation;
      },

      Element_set_fontSizeInflation: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.fontSizeInflation = val;
      },

      Element_setPointerCapture: function(instance, pointerId) {
        let _instance = ALLOCATOR.g(instance);
        let _pointerId = pointerId;
        _instance.setPointerCapture(_pointerId);
      },

      Element_releasePointerCapture: function(instance, pointerId) {
        let _instance = ALLOCATOR.g(instance);
        let _pointerId = pointerId;
        _instance.releasePointerCapture(_pointerId);
      },

      Element_hasPointerCapture: function(instance, pointerId) {
        let _instance = ALLOCATOR.g(instance);
        let _pointerId = pointerId;
        return ALLOCATOR.a(_instance.hasPointerCapture(_pointerId));
      },

      Element_setCapture: function(instance, retargetToElement) {
        let _instance = ALLOCATOR.g(instance);
        let _retargetToElement = retargetToElement;
        _instance.setCapture(_retargetToElement);
      },

      Element_releaseCapture: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.releaseCapture();
      },

      Element_setCaptureAlways: function(instance, retargetToElement) {
        let _instance = ALLOCATOR.g(instance);
        let _retargetToElement = retargetToElement;
        _instance.setCaptureAlways(_retargetToElement);
      },

      Element_getAttributeNode: function(instance, name_start) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start);
        return ALLOCATOR.a(_instance.getAttributeNode(_name));
      },

      Element_setAttributeNode: function(instance, newAttr) {
        let _instance = ALLOCATOR.g(instance);
        let _newAttr = ALLOCATOR.g(newAttr);
        return ALLOCATOR.a(_instance.setAttributeNode(_newAttr));
      },

      Element_removeAttributeNode: function(instance, oldAttr) {
        let _instance = ALLOCATOR.g(instance);
        let _oldAttr = ALLOCATOR.g(oldAttr);
        return ALLOCATOR.a(_instance.removeAttributeNode(_oldAttr));
      },

      Element_getAttributeNodeNS: function(
        instance,
        namespaceURI_start,
        localName_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespaceURI = this.s(namespaceURI_start);
        let _localName = this.s(localName_start);
        return ALLOCATOR.a(
          _instance.getAttributeNodeNS(_namespaceURI, _localName)
        );
      },

      Element_setAttributeNodeNS: function(instance, newAttr) {
        let _instance = ALLOCATOR.g(instance);
        let _newAttr = ALLOCATOR.g(newAttr);
        return ALLOCATOR.a(_instance.setAttributeNodeNS(_newAttr));
      },

      Element_scrollByNoFlush: function(instance, dx, dy) {
        let _instance = ALLOCATOR.g(instance);
        let _dx = dx;
        let _dy = dy;
        return ALLOCATOR.a(_instance.scrollByNoFlush(_dx, _dy));
      },

      Element_getAsFlexContainer: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getAsFlexContainer());
      },

      Element_getGridFragments: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getGridFragments());
      },

      Element_getTransformToAncestor: function(instance, ancestor) {
        let _instance = ALLOCATOR.g(instance);
        let _ancestor = ALLOCATOR.g(ancestor);
        return ALLOCATOR.a(_instance.getTransformToAncestor(_ancestor));
      },

      Element_getTransformToParent: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getTransformToParent());
      },

      Element_getTransformToViewport: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getTransformToViewport());
      },

      Element_getClientRects: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getClientRects());
      },

      Element_getBoundingClientRect: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getBoundingClientRect());
      },

      Element_scrollIntoView: function(instance, arg) {
        let _instance = ALLOCATOR.g(instance);
        let _arg = ALLOCATOR.g(arg);
        _instance.scrollIntoView(_arg);
      },

      Element_get_scrollTop: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollTop;
      },

      Element_set_scrollTop: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollTop = val;
      },

      Element_get_scrollLeft: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollLeft;
      },

      Element_set_scrollLeft: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollLeft = val;
      },

      Element_get_scrollWidth: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollWidth;
      },

      Element_set_scrollWidth: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollWidth = val;
      },

      Element_get_scrollHeight: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollHeight;
      },

      Element_set_scrollHeight: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollHeight = val;
      },

      Element_scroll: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scroll(_x, _y);
      },

      Element_scroll: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = ALLOCATOR.g(options);
        _instance.scroll(_options);
      },

      Element_scrollTo: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scrollTo(_x, _y);
      },

      Element_scrollTo: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = ALLOCATOR.g(options);
        _instance.scrollTo(_options);
      },

      Element_scrollBy: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scrollBy(_x, _y);
      },

      Element_scrollBy: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = ALLOCATOR.g(options);
        _instance.scrollBy(_options);
      },

      Element_get_clientTop: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientTop;
      },

      Element_set_clientTop: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clientTop = val;
      },

      Element_get_clientLeft: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientLeft;
      },

      Element_set_clientLeft: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clientLeft = val;
      },

      Element_get_clientWidth: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientWidth;
      },

      Element_set_clientWidth: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clientWidth = val;
      },

      Element_get_clientHeight: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientHeight;
      },

      Element_set_clientHeight: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clientHeight = val;
      },

      Element_get_innerHTML: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.innerHTML);
      },

      Element_set_innerHTML: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.innerHTML = this.s(str);
      },

      Element_get_outerHTML: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.outerHTML);
      },

      Element_set_outerHTML: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.outerHTML = this.s(str);
      },

      Element_insertAdjacentHTML: function(instance, position_start, text_start) {
        let _instance = ALLOCATOR.g(instance);
        let _position = this.s(position_start);
        let _text = this.s(text_start);
        _instance.insertAdjacentHTML(_position, _text);
      },

      Element_querySelector: function(instance, selectors_start) {
        let _instance = ALLOCATOR.g(instance);
        let _selectors = this.s(selectors_start);
        return ALLOCATOR.a(_instance.querySelector(_selectors));
      },

      Element_querySelectorAll: function(instance, selectors_start) {
        let _instance = ALLOCATOR.g(instance);
        let _selectors = this.s(selectors_start);
        return ALLOCATOR.a(_instance.querySelectorAll(_selectors));
      },

      Element_get_shadowRoot: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.shadowRoot);
      },

      Element_set_shadowRoot: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.shadowRoot = ALLOCATOR.g(handle);
      },

      Element_get_openOrClosedShadowRoot: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.openOrClosedShadowRoot);
      },

      Element_set_openOrClosedShadowRoot: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.openOrClosedShadowRoot = ALLOCATOR.g(handle);
      },

      Element_get_assignedSlot: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.assignedSlot);
      },

      Element_set_assignedSlot: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.assignedSlot = ALLOCATOR.g(handle);
      },

      Element_get_slot: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.slot);
      },

      Element_set_slot: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.slot = this.s(str);
      },

      Element_requestFullscreen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.requestFullscreen();
      },

      Element_requestPointerLock: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.requestPointerLock();
      },

      EventTarget_addEventListener: function(instance, type_start, listener) {
        let _instance = ALLOCATOR.g(instance);
        let _type = this.s(type_start);
        let _listener = ALLOCATOR.g(listener);
        _instance.addEventListener(_type, _listener);
      },

      EventTarget_removeEventListener: function(instance, type_start, listener) {
        let _instance = ALLOCATOR.g(instance);
        let _type = this.s(type_start);
        let _listener = ALLOCATOR.g(listener);
        _instance.removeEventListener(_type, _listener);
      },

      EventTarget_dispatchEvent: function(instance, event) {
        let _instance = ALLOCATOR.g(instance);
        let _event = ALLOCATOR.g(event);
        return ALLOCATOR.a(_instance.dispatchEvent(_event));
      },

      HTMLCanvasElement_get_width: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.width;
      },

      HTMLCanvasElement_set_width: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.width = val;
      },

      HTMLCanvasElement_get_height: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.height;
      },

      HTMLCanvasElement_set_height: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.height = val;
      },

      HTMLCanvasElement_getContext: function(instance, contextId_start) {
        let _instance = ALLOCATOR.g(instance);
        let _contextId = this.s(contextId_start);
        return ALLOCATOR.a(_instance.getContext(_contextId));
      },

      HTMLCanvasElement_toDataURL: function(
        instance,
        type_start,
        encoderOptions
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _type = this.s(type_start);
        let _encoderOptions = encoderOptions;
        return this.ms(_instance.toDataURL(_type, _encoderOptions));
      },

      HTMLCanvasElement_toBlob: function(
        instance,
        callback,
        type_start,
        encoderOptions
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _callback = ALLOCATOR.g(callback);
        let _type = this.s(type_start);
        let _encoderOptions = encoderOptions;
        _instance.toBlob(_callback, _type, _encoderOptions);
      },

      HTMLCanvasElement_transferControlToOffscreen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.transferControlToOffscreen());
      },

      HTMLInputElement_get_accept: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.accept);
      },

      HTMLInputElement_set_accept: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.accept = this.s(str);
      },

      HTMLInputElement_get_alt: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.alt);
      },

      HTMLInputElement_set_alt: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.alt = this.s(str);
      },

      HTMLInputElement_get_autocomplete: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.autocomplete);
      },

      HTMLInputElement_set_autocomplete: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.autocomplete = this.s(str);
      },

      HTMLInputElement_get_autofocus: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.autofocus;
      },

      HTMLInputElement_set_autofocus: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.autofocus = val;
      },

      HTMLInputElement_get_defaultChecked: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.defaultChecked;
      },

      HTMLInputElement_set_defaultChecked: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.defaultChecked = val;
      },

      HTMLInputElement_get_checked: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.checked;
      },

      HTMLInputElement_set_checked: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.checked = val;
      },

      HTMLInputElement_get_disabled: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.disabled;
      },

      HTMLInputElement_set_disabled: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.disabled = val;
      },

      HTMLInputElement_get_form: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.form);
      },

      HTMLInputElement_set_form: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.form = ALLOCATOR.g(handle);
      },

      HTMLInputElement_get_files: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.files);
      },

      HTMLInputElement_set_files: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.files = ALLOCATOR.g(handle);
      },

      HTMLInputElement_get_formAction: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.formAction);
      },

      HTMLInputElement_set_formAction: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.formAction = this.s(str);
      },

      HTMLInputElement_get_formEnctype: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.formEnctype);
      },

      HTMLInputElement_set_formEnctype: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.formEnctype = this.s(str);
      },

      HTMLInputElement_get_formMethod: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.formMethod);
      },

      HTMLInputElement_set_formMethod: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.formMethod = this.s(str);
      },

      HTMLInputElement_get_formNoValidate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.formNoValidate;
      },

      HTMLInputElement_set_formNoValidate: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.formNoValidate = val;
      },

      HTMLInputElement_get_formTarget: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.formTarget);
      },

      HTMLInputElement_set_formTarget: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.formTarget = this.s(str);
      },

      HTMLInputElement_get_height: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.height;
      },

      HTMLInputElement_set_height: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.height = val;
      },

      HTMLInputElement_get_indeterminate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.indeterminate;
      },

      HTMLInputElement_set_indeterminate: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.indeterminate = val;
      },

      HTMLInputElement_get_inputMode: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.inputMode);
      },

      HTMLInputElement_set_inputMode: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.inputMode = this.s(str);
      },

      HTMLInputElement_get_list: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.list);
      },

      HTMLInputElement_set_list: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.list = ALLOCATOR.g(handle);
      },

      HTMLInputElement_get_max: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.max);
      },

      HTMLInputElement_set_max: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.max = this.s(str);
      },

      HTMLInputElement_get_maxLength: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.maxLength;
      },

      HTMLInputElement_set_maxLength: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.maxLength = val;
      },

      HTMLInputElement_get_min: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.min);
      },

      HTMLInputElement_set_min: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.min = this.s(str);
      },

      HTMLInputElement_get_minLength: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.minLength;
      },

      HTMLInputElement_set_minLength: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.minLength = val;
      },

      HTMLInputElement_get_multiple: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.multiple;
      },

      HTMLInputElement_set_multiple: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.multiple = val;
      },

      HTMLInputElement_get_name: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.name);
      },

      HTMLInputElement_set_name: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.name = this.s(str);
      },

      HTMLInputElement_get_pattern: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.pattern);
      },

      HTMLInputElement_set_pattern: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.pattern = this.s(str);
      },

      HTMLInputElement_get_placeholder: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.placeholder);
      },

      HTMLInputElement_set_placeholder: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.placeholder = this.s(str);
      },

      HTMLInputElement_get_readOnly: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.readOnly;
      },

      HTMLInputElement_set_readOnly: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.readOnly = val;
      },

      HTMLInputElement_get_required: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.required;
      },

      HTMLInputElement_set_required: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.required = val;
      },

      HTMLInputElement_get_size: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.size;
      },

      HTMLInputElement_set_size: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.size = val;
      },

      HTMLInputElement_get_src: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.src);
      },

      HTMLInputElement_set_src: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.src = this.s(str);
      },

      HTMLInputElement_get_step: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.step);
      },

      HTMLInputElement_set_step: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.step = this.s(str);
      },

      HTMLInputElement_get_type: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.type);
      },

      HTMLInputElement_set_type: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.type = this.s(str);
      },

      HTMLInputElement_get_defaultValue: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.defaultValue);
      },

      HTMLInputElement_set_defaultValue: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.defaultValue = this.s(str);
      },

      HTMLInputElement_get_value: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.value);
      },

      HTMLInputElement_set_value: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.value = this.s(str);
      },

      HTMLInputElement_get_valueAsDate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.valueAsDate);
      },

      HTMLInputElement_set_valueAsDate: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.valueAsDate = ALLOCATOR.g(handle);
      },

      HTMLInputElement_get_valueAsNumber: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.valueAsNumber;
      },

      HTMLInputElement_set_valueAsNumber: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.valueAsNumber = val;
      },

      HTMLInputElement_get_width: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.width;
      },

      HTMLInputElement_set_width: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.width = val;
      },

      HTMLInputElement_get_willValidate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.willValidate;
      },

      HTMLInputElement_set_willValidate: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.willValidate = val;
      },

      HTMLInputElement_get_validity: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.validity);
      },

      HTMLInputElement_set_validity: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.validity = ALLOCATOR.g(handle);
      },

      HTMLInputElement_get_validationMessage: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.validationMessage);
      },

      HTMLInputElement_set_validationMessage: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.validationMessage = this.s(str);
      },

      HTMLInputElement_checkValidity: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.checkValidity());
      },

      HTMLInputElement_reportValidity: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.reportValidity());
      },

      HTMLInputElement_setCustomValidity: function(instance, error_start) {
        let _instance = ALLOCATOR.g(instance);
        let _error = this.s(error_start);
        _instance.setCustomValidity(_error);
      },

      HTMLInputElement_get_labels: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.labels);
      },

      HTMLInputElement_set_labels: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.labels = ALLOCATOR.g(handle);
      },

      HTMLInputElement_select: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.select();
      },

      HTMLInputElement_get_selectionDirection: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.selectionDirection);
      },

      HTMLInputElement_set_selectionDirection: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.selectionDirection = this.s(str);
      },

      HTMLInputElement_setRangeText: function(instance, replacement_start) {
        let _instance = ALLOCATOR.g(instance);
        let _replacement = this.s(replacement_start);
        _instance.setRangeText(_replacement);
      },

      HTMLInputElement_setRangeText: function(
        instance,
        replacement_start,
        start,
        end,
        selectionMode
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _replacement = this.s(replacement_start);
        let _start = start;
        let _end = end;
        let _selectionMode = ALLOCATOR.g(selectionMode);
        _instance.setRangeText(_replacement, _start, _end, _selectionMode);
      },

      HTMLInputElement_setSelectionRange: function(
        instance,
        start,
        end,
        direction_start
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _start = start;
        let _end = end;
        let _direction = this.s(direction_start);
        _instance.setSelectionRange(_start, _end, _direction);
      },

      HTMLInputElement_get_align: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.align);
      },

      HTMLInputElement_set_align: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.align = this.s(str);
      },

      HTMLInputElement_get_useMap: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.useMap);
      },

      HTMLInputElement_set_useMap: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.useMap = this.s(str);
      },

      HTMLInputElement_getDateTimeInputBoxValue: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getDateTimeInputBoxValue());
      },

      HTMLInputElement_updateDateTimeInputBox: function(instance, value) {
        let _instance = ALLOCATOR.g(instance);
        let _value = ALLOCATOR.g(value);
        _instance.updateDateTimeInputBox(_value);
      },

      HTMLInputElement_setDateTimePickerState: function(instance, open) {
        let _instance = ALLOCATOR.g(instance);
        let _open = open;
        _instance.setDateTimePickerState(_open);
      },

      HTMLInputElement_getMinimum: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getMinimum());
      },

      HTMLInputElement_getMaximum: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getMaximum());
      },

      HTMLInputElement_get_previewValue: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.previewValue);
      },

      HTMLInputElement_set_previewValue: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.previewValue = this.s(str);
      },

      KeyboardEvent_get_charCode: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.charCode;
      },

      KeyboardEvent_set_charCode: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.charCode = val;
      },

      KeyboardEvent_get_keyCode: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.keyCode;
      },

      KeyboardEvent_set_keyCode: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.keyCode = val;
      },

      KeyboardEvent_get_altKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.altKey;
      },

      KeyboardEvent_set_altKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.altKey = val;
      },

      KeyboardEvent_get_ctrlKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.ctrlKey;
      },

      KeyboardEvent_set_ctrlKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.ctrlKey = val;
      },

      KeyboardEvent_get_shiftKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shiftKey;
      },

      KeyboardEvent_set_shiftKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.shiftKey = val;
      },

      KeyboardEvent_get_metaKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.metaKey;
      },

      KeyboardEvent_set_metaKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.metaKey = val;
      },

      KeyboardEvent_getModifierState: function(instance, key_start) {
        let _instance = ALLOCATOR.g(instance);
        let _key = this.s(key_start);
        return ALLOCATOR.a(_instance.getModifierState(_key));
      },

      KeyboardEvent_get_location: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.location;
      },

      KeyboardEvent_set_location: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.location = val;
      },

      KeyboardEvent_get_repeat: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.repeat;
      },

      KeyboardEvent_set_repeat: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.repeat = val;
      },

      KeyboardEvent_get_isComposing: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.isComposing;
      },

      KeyboardEvent_set_isComposing: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.isComposing = val;
      },

      KeyboardEvent_get_key: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.key);
      },

      KeyboardEvent_set_key: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.key = this.s(str);
      },

      KeyboardEvent_get_code: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.code);
      },

      KeyboardEvent_set_code: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.code = this.s(str);
      },

      KeyboardEvent_initKeyboardEvent: function(
        instance,
        typeArg_start,
        bubblesArg,
        cancelableArg,
        viewArg,
        keyArg_start,
        locationArg,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _typeArg = this.s(typeArg_start);
        let _bubblesArg = bubblesArg;
        let _cancelableArg = cancelableArg;
        let _viewArg = ALLOCATOR.g(viewArg);
        let _keyArg = this.s(keyArg_start);
        let _locationArg = locationArg;
        let _ctrlKey = ctrlKey;
        let _altKey = altKey;
        let _shiftKey = shiftKey;
        let _metaKey = metaKey;
        _instance.initKeyboardEvent(
          _typeArg,
          _bubblesArg,
          _cancelableArg,
          _viewArg,
          _keyArg,
          _locationArg,
          _ctrlKey,
          _altKey,
          _shiftKey,
          _metaKey
        );
      },

      KeyboardEvent_get_initDict: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.initDict);
      },

      KeyboardEvent_set_initDict: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.initDict = ALLOCATOR.g(handle);
      },

      MouseEvent_get_screenX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenX;
      },

      MouseEvent_set_screenX: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.screenX = val;
      },

      MouseEvent_get_screenY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenY;
      },

      MouseEvent_set_screenY: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.screenY = val;
      },

      MouseEvent_get_clientX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientX;
      },

      MouseEvent_set_clientX: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clientX = val;
      },

      MouseEvent_get_clientY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientY;
      },

      MouseEvent_set_clientY: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clientY = val;
      },

      MouseEvent_get_x: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.x;
      },

      MouseEvent_set_x: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.x = val;
      },

      MouseEvent_get_y: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.y;
      },

      MouseEvent_set_y: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.y = val;
      },

      MouseEvent_get_offsetX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.offsetX;
      },

      MouseEvent_set_offsetX: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.offsetX = val;
      },

      MouseEvent_get_offsetY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.offsetY;
      },

      MouseEvent_set_offsetY: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.offsetY = val;
      },

      MouseEvent_get_ctrlKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.ctrlKey;
      },

      MouseEvent_set_ctrlKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.ctrlKey = val;
      },

      MouseEvent_get_shiftKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shiftKey;
      },

      MouseEvent_set_shiftKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.shiftKey = val;
      },

      MouseEvent_get_altKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.altKey;
      },

      MouseEvent_set_altKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.altKey = val;
      },

      MouseEvent_get_metaKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.metaKey;
      },

      MouseEvent_set_metaKey: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.metaKey = val;
      },

      MouseEvent_get_button: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.button;
      },

      MouseEvent_set_button: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.button = val;
      },

      MouseEvent_get_buttons: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.buttons;
      },

      MouseEvent_set_buttons: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.buttons = val;
      },

      MouseEvent_get_relatedTarget: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.relatedTarget);
      },

      MouseEvent_set_relatedTarget: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.relatedTarget = ALLOCATOR.g(handle);
      },

      MouseEvent_get_region: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.region);
      },

      MouseEvent_set_region: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.region = this.s(str);
      },

      MouseEvent_get_movementX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.movementX;
      },

      MouseEvent_set_movementX: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.movementX = val;
      },

      MouseEvent_get_movementY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.movementY;
      },

      MouseEvent_set_movementY: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.movementY = val;
      },

      MouseEvent_initMouseEvent: function(
        instance,
        typeArg_start,
        canBubbleArg,
        cancelableArg,
        viewArg,
        detailArg,
        screenXArg,
        screenYArg,
        clientXArg,
        clientYArg,
        ctrlKeyArg,
        altKeyArg,
        shiftKeyArg,
        metaKeyArg,
        buttonArg,
        relatedTargetArg
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _typeArg = this.s(typeArg_start);
        let _canBubbleArg = canBubbleArg;
        let _cancelableArg = cancelableArg;
        let _viewArg = ALLOCATOR.g(viewArg);
        let _detailArg = detailArg;
        let _screenXArg = screenXArg;
        let _screenYArg = screenYArg;
        let _clientXArg = clientXArg;
        let _clientYArg = clientYArg;
        let _ctrlKeyArg = ctrlKeyArg;
        let _altKeyArg = altKeyArg;
        let _shiftKeyArg = shiftKeyArg;
        let _metaKeyArg = metaKeyArg;
        let _buttonArg = buttonArg;
        let _relatedTargetArg = ALLOCATOR.g(relatedTargetArg);
        _instance.initMouseEvent(
          _typeArg,
          _canBubbleArg,
          _cancelableArg,
          _viewArg,
          _detailArg,
          _screenXArg,
          _screenYArg,
          _clientXArg,
          _clientYArg,
          _ctrlKeyArg,
          _altKeyArg,
          _shiftKeyArg,
          _metaKeyArg,
          _buttonArg,
          _relatedTargetArg
        );
      },

      MouseEvent_getModifierState: function(instance, keyArg_start) {
        let _instance = ALLOCATOR.g(instance);
        let _keyArg = this.s(keyArg_start);
        return ALLOCATOR.a(_instance.getModifierState(_keyArg));
      },

      Window_get_window: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.window);
      },

      Window_set_window: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.window = ALLOCATOR.g(handle);
      },

      Window_get_self: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.self);
      },

      Window_set_self: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.self = ALLOCATOR.g(handle);
      },

      Window_get_document: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.document);
      },

      Window_set_document: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.document = ALLOCATOR.g(handle);
      },

      Window_get_name: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.name);
      },

      Window_set_name: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.name = this.s(str);
      },

      Window_get_location: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.location);
      },

      Window_set_location: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.location = ALLOCATOR.g(handle);
      },

      Window_get_history: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.history);
      },

      Window_set_history: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.history = ALLOCATOR.g(handle);
      },

      Window_get_customElements: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.customElements);
      },

      Window_set_customElements: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.customElements = ALLOCATOR.g(handle);
      },

      Window_get_locationbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.locationbar);
      },

      Window_set_locationbar: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.locationbar = ALLOCATOR.g(handle);
      },

      Window_get_menubar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.menubar);
      },

      Window_set_menubar: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.menubar = ALLOCATOR.g(handle);
      },

      Window_get_personalbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.personalbar);
      },

      Window_set_personalbar: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.personalbar = ALLOCATOR.g(handle);
      },

      Window_get_scrollbars: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.scrollbars);
      },

      Window_set_scrollbars: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollbars = ALLOCATOR.g(handle);
      },

      Window_get_statusbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.statusbar);
      },

      Window_set_statusbar: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.statusbar = ALLOCATOR.g(handle);
      },

      Window_get_toolbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.toolbar);
      },

      Window_set_toolbar: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.toolbar = ALLOCATOR.g(handle);
      },

      Window_get_status: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return this.ms(_instance.status);
      },

      Window_set_status: function(instance, str) {
        let _instance = ALLOCATOR.g(instance);
        _instance.status = this.s(str);
      },

      Window_close: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.close();
      },

      Window_get_closed: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.closed;
      },

      Window_set_closed: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.closed = val;
      },

      Window_stop: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.stop();
      },

      Window_focus: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.focus();
      },

      Window_blur: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.blur();
      },

      Window_get_event: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.event;
      },

      Window_set_event: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.event = val;
      },

      Window_get_frames: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.frames);
      },

      Window_set_frames: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.frames = ALLOCATOR.g(handle);
      },

      Window_get_length: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.length;
      },

      Window_set_length: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.length = val;
      },

      Window_get_top: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.top);
      },

      Window_set_top: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.top = ALLOCATOR.g(handle);
      },

      Window_get_opener: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.opener;
      },

      Window_set_opener: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.opener = val;
      },

      Window_get_parent: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.parent);
      },

      Window_set_parent: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.parent = ALLOCATOR.g(handle);
      },

      Window_get_frameElement: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.frameElement);
      },

      Window_set_frameElement: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.frameElement = ALLOCATOR.g(handle);
      },

      Window_open: function(instance, url_start, target_start, features_start) {
        let _instance = ALLOCATOR.g(instance);
        let _url = this.s(url_start);
        let _target = this.s(target_start);
        let _features = this.s(features_start);
        return ALLOCATOR.a(_instance.open(_url, _target, _features));
      },

      Window_get_navigator: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.navigator);
      },

      Window_set_navigator: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.navigator = ALLOCATOR.g(handle);
      },

      Window_get_external: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.external);
      },

      Window_set_external: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.external = ALLOCATOR.g(handle);
      },

      Window_get_applicationCache: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.applicationCache);
      },

      Window_set_applicationCache: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.applicationCache = ALLOCATOR.g(handle);
      },

      Window_alert: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.alert();
      },

      Window_alert: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        _instance.alert(_message);
      },

      Window_confirm: function(instance, message_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        return ALLOCATOR.a(_instance.confirm(_message));
      },

      Window_prompt: function(instance, message_start, default_start) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start);
        let _default = this.s(default_start);
        return this.ms(_instance.prompt(_message, _default));
      },

      Window_print: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.print();
      },

      Window_postMessage: function(
        instance,
        message,
        targetOrigin_start,
        transfer
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _message = message;
        let _targetOrigin = this.s(targetOrigin_start);
        let _transfer = ALLOCATOR.g(transfer);
        _instance.postMessage(_message, _targetOrigin, _transfer);
      },

      Window_get_onappinstalled: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onappinstalled);
      },

      Window_set_onappinstalled: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onappinstalled = ALLOCATOR.g(handle);
      },

      Window_captureEvents: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.captureEvents();
      },

      Window_releaseEvents: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.releaseEvents();
      },

      Window_getSelection: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getSelection());
      },

      Window_getComputedStyle: function(instance, elt, pseudoElt_start) {
        let _instance = ALLOCATOR.g(instance);
        let _elt = ALLOCATOR.g(elt);
        let _pseudoElt = this.s(pseudoElt_start);
        return ALLOCATOR.a(_instance.getComputedStyle(_elt, _pseudoElt));
      },

      Window_matchMedia: function(instance, query_start) {
        let _instance = ALLOCATOR.g(instance);
        let _query = this.s(query_start);
        return ALLOCATOR.a(_instance.matchMedia(_query));
      },

      Window_get_screen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.screen);
      },

      Window_set_screen: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.screen = ALLOCATOR.g(handle);
      },

      Window_moveTo: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.moveTo(_x, _y);
      },

      Window_moveBy: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.moveBy(_x, _y);
      },

      Window_resizeTo: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.resizeTo(_x, _y);
      },

      Window_resizeBy: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.resizeBy(_x, _y);
      },

      Window_get_innerWidth: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.innerWidth;
      },

      Window_set_innerWidth: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.innerWidth = val;
      },

      Window_get_innerHeight: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.innerHeight;
      },

      Window_set_innerHeight: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.innerHeight = val;
      },

      Window_scroll: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scroll(_x, _y);
      },

      Window_scroll: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = ALLOCATOR.g(options);
        _instance.scroll(_options);
      },

      Window_scrollTo: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scrollTo(_x, _y);
      },

      Window_scrollTo: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = ALLOCATOR.g(options);
        _instance.scrollTo(_options);
      },

      Window_scrollBy: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scrollBy(_x, _y);
      },

      Window_scrollBy: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = ALLOCATOR.g(options);
        _instance.scrollBy(_options);
      },

      Window_get_scrollX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollX;
      },

      Window_set_scrollX: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollX = val;
      },

      Window_get_pageXOffset: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.pageXOffset;
      },

      Window_set_pageXOffset: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.pageXOffset = val;
      },

      Window_get_scrollY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollY;
      },

      Window_set_scrollY: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.scrollY = val;
      },

      Window_get_pageYOffset: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.pageYOffset;
      },

      Window_set_pageYOffset: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.pageYOffset = val;
      },

      Window_get_screenX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenX;
      },

      Window_set_screenX: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.screenX = val;
      },

      Window_get_screenY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenY;
      },

      Window_set_screenY: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.screenY = val;
      },

      Window_get_outerWidth: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.outerWidth;
      },

      Window_set_outerWidth: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.outerWidth = val;
      },

      Window_get_outerHeight: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.outerHeight;
      },

      Window_set_outerHeight: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.outerHeight = val;
      },

      Window_get_devicePixelRatio: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.devicePixelRatio;
      },

      Window_set_devicePixelRatio: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.devicePixelRatio = val;
      },

      Window_requestAnimationFrame: function(instance, callback) {
        let _instance = ALLOCATOR.g(instance);
        let _callback = ALLOCATOR.g(callback);
        return ALLOCATOR.a(_instance.requestAnimationFrame(_callback));
      },

      Window_cancelAnimationFrame: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        let _handle = handle;
        _instance.cancelAnimationFrame(_handle);
      },

      Window_get_performance: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.performance);
      },

      Window_set_performance: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.performance = ALLOCATOR.g(handle);
      },

      Window_get_orientation: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.orientation;
      },

      Window_set_orientation: function(instance, val) {
        let _instance = ALLOCATOR.g(instance);
        _instance.orientation = val;
      },

      Window_get_onorientationchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onorientationchange);
      },

      Window_set_onorientationchange: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onorientationchange = ALLOCATOR.g(handle);
      },

      Window_get_onvrdisplayconnect: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplayconnect);
      },

      Window_set_onvrdisplayconnect: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onvrdisplayconnect = ALLOCATOR.g(handle);
      },

      Window_get_onvrdisplaydisconnect: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplaydisconnect);
      },

      Window_set_onvrdisplaydisconnect: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onvrdisplaydisconnect = ALLOCATOR.g(handle);
      },

      Window_get_onvrdisplayactivate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplayactivate);
      },

      Window_set_onvrdisplayactivate: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onvrdisplayactivate = ALLOCATOR.g(handle);
      },

      Window_get_onvrdisplaydeactivate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplaydeactivate);
      },

      Window_set_onvrdisplaydeactivate: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onvrdisplaydeactivate = ALLOCATOR.g(handle);
      },

      Window_get_onvrdisplaypresentchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplaypresentchange);
      },

      Window_set_onvrdisplaypresentchange: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.onvrdisplaypresentchange = ALLOCATOR.g(handle);
      },

      Window_get_paintWorklet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.paintWorklet);
      },

      Window_set_paintWorklet: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.paintWorklet = ALLOCATOR.g(handle);
      },

      Window_requestIdleCallback: function(instance, callback, options) {
        let _instance = ALLOCATOR.g(instance);
        let _callback = ALLOCATOR.g(callback);
        let _options = ALLOCATOR.g(options);
        return ALLOCATOR.a(_instance.requestIdleCallback(_callback, _options));
      },

      Window_cancelIdleCallback: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        let _handle = handle;
        _instance.cancelIdleCallback(_handle);
      },

      Window_get_origin: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.origin);
      },

      Window_set_origin: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        _instance.origin = ALLOCATOR.g(handle);
      },

      Window_btoa: function(instance, btoa_start) {
        let _instance = ALLOCATOR.g(instance);
        let _btoa = this.s(btoa_start);
        return this.ms(_instance.btoa(_btoa));
      },

      Window_atob: function(instance, atob_start) {
        let _instance = ALLOCATOR.g(instance);
        let _atob = this.s(atob_start);
        return this.ms(_instance.atob(_atob));
      },

      Window_setTimeout: function(instance, handler, timeout) {
        let _instance = ALLOCATOR.g(instance);
        let _handler = ALLOCATOR.g(handler);
        let _timeout = timeout;
        return ALLOCATOR.a(_instance.setTimeout(_handler, _timeout));
      },

      Window_clearTimeout: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        let _handle = handle;
        _instance.clearTimeout(_handle);
      },

      Window_setInterval: function(instance, handler, timeout) {
        let _instance = ALLOCATOR.g(instance);
        let _handler = ALLOCATOR.g(handler);
        let _timeout = timeout;
        return ALLOCATOR.a(_instance.setInterval(_handler, _timeout));
      },

      Window_clearInterval: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        let _handle = handle;
        _instance.clearInterval(_handle);
      },

      Window_createImageBitmap: function(instance, aImage) {
        let _instance = ALLOCATOR.g(instance);
        let _aImage = ALLOCATOR.g(aImage);
        return ALLOCATOR.a(_instance.createImageBitmap(_aImage));
      },

      Window_createImageBitmap: function(instance, aImage, aSx, aSy, aSw, aSh) {
        let _instance = ALLOCATOR.g(instance);
        let _aImage = ALLOCATOR.g(aImage);
        let _aSx = aSx;
        let _aSy = aSy;
        let _aSw = aSw;
        let _aSh = aSh;
        return ALLOCATOR.a(
          _instance.createImageBitmap(_aImage, _aSx, _aSy, _aSw, _aSh)
        );
      }
    };
    return webidl;
  }

  class WebIDLLoader extends HTMLElement {
    connectedCallback() {
      this.utf8dec = new TextDecoder("utf-8");
      this.utf8enc = new TextEncoder("utf-8");
      let wasmSrc = this.getAttribute("src");
      if (!wasmSrc) {
        console.error("no wasm module specified for wasm-module");
        return;
      }
      this.callbackHandler = this.getAttribute("callback") || "callback";
      this.mallocHandler = this.getAttribute("malloc") || "malloc";
      let exec = this.getAttribute("execute") || "main";
      let memory = this.getAttribute("memory") || "memory";
      let isWorker = this.getAttribute("worker");
      let workerId = parseInt(this.getAttribute("worker-id") || 0);
      this.workerId = workerId;
      let messageHandler = this.getAttribute("worker-message") || "message";
      let sharedMemory = this.getAttribute("shared-memory") || false;

      if (isWorker) {
        var response = `
      let utf8dec = new TextDecoder("utf-8");
      let memory = null;
      let instance = null;

      function fromCString(start) {
        const data = new Uint8Array(memory.buffer);
        const str = [];
        let i = start;
        while (data[i] !== 0) {
          str.push(data[i]);
          i++;
        }
        return utf8dec.decode(new Uint8Array(str));
      }

      self.onmessage=function(e){
        if(instance){
          let handler = instance.exports["${messageHandler}"];
          if(handler){
            if (!instance.exports["${this.mallocHandler}"]) {
              throw new Error(
                "Cannot postMessage to wasm without an implementation of malloc(size:i32)->i32 exposed on exports"
              );
            }
            let bytes = e.data;
            let len = bytes.length;
            let start = instance.exports["${this.mallocHandler}"](len);
            const m = new Uint8Array(memory.buffer);
            m.set(bytes, start);
            handler(start,len)
          }
        } else {
          fetch("${wasmSrc}")
            .then(response => response.arrayBuffer())
            .then(bytes => {
              let env = {
                global_postMessage:function(m,len){
                  const data = new Uint8Array(memory.buffer)
                  postMessage(data.subarray(m,m+len))
                },

                console_debug: function(message_start) {
                  let _message = fromCString(message_start);
                  console.debug(_message);
                },

                console_error: function(message_start) {
                  let _message = fromCString(message_start);
                  console.error(_message);
                },

                console_info: function(message_start) {
                  let _message = fromCString(message_start);
                  console.info(_message);
                },

                console_log: function(message_start) {
                  let _message = fromCString(message_start);
                  console.log(_message);
                },
              };
              return WebAssembly.instantiate(bytes, { env });
            })
            .then(results => {
              memory = results.instance.exports["${memory}"];
              instance = results.instance;
              results.instance.exports["${exec}"](${workerId});
              postMessage({type:"load",id:${workerId}});
            });
        }
      }`;
        var blob;
        try {
          blob = new Blob([response], { type: "application/javascript" });
        } catch (e) {
          window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder;
          blob = new BlobBuilder();
          blob.append(response);
          blob = blob.getBlob();
        }
        var worker = new Worker(URL.createObjectURL(blob));
        worker.onmessage = e => {
          if (!Array.isArray(e.data) && e.data.type == "load") {
            this.dispatchEvent(new CustomEvent("load", { detail: e.data }));
            this.loaded = true;
            return;
          }
          this.dispatchEvent(new CustomEvent("message", { detail: e.data }));
        };
        this.sendMessage = function(data) {
          worker.postMessage(data);
        };

        // start worker with a message
        worker.postMessage("start");
        return;
      }

      fetch(wasmSrc)
        .then(response => response.arrayBuffer())
        .then(bytes => {
          let webidlContext = createWebIDLContext();
          let env = {};
          let i;
          for (i in webidlContext) {
            env[i] = webidlContext[i].bind(this);
          }
          if (sharedMemory) {
            throw new Error("Not supported yet");
          } else {
            return WebAssembly.instantiate(bytes, { env });
          }
        })
        .then(results => {
          this.memory = results.instance.exports[memory];
          this.exports = results.instance.exports;
          results.instance.exports[exec]();
          this.dispatchEvent(new CustomEvent("load"));
          this.loaded = true;
        })
        .catch(e => {
          console.error(e);
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

    m(len) {
      if (!this.exports.malloc) {
        throw new Error(
          "Cannot call malloc to wasm with an implementation of malloc(size:i32)->i32 exposed on exports"
        );
      }
      let start = this.exports.malloc(len);
      return start;
    }
  }
  window.customElements.define("wasm-module", WebIDLLoader);

}));
