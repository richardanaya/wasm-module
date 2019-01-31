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
      Global_getWindow: function() {
        return ALLOCATOR.a(window);
      },

      Global_release: function(handle) {
        allocator.r(handle);
      },

      Global_createEventListener: function() {
        let handle = ALLOCATOR.a(e => this.executeCallback(handle, e, ALLOCATOR));
        return handle;
      },

      CanvasRenderingContext2D_get_canvas: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.canvas);
      },

      CanvasRenderingContext2D_drawWindow: function(
        instance,
        window,
        x,
        y,
        w,
        h,
        bgColor_start,
        bgColor_len,
        flags
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _window = window;
        let _x = x;
        let _y = y;
        let _w = w;
        let _h = h;
        let _bgColor = this.s(bgColor_start, bgColor_len);
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

      CanvasRenderingContext2D_get_globalCompositeOperation: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.globalCompositeOperation);
      },

      CanvasRenderingContext2D_get_imageSmoothingEnabled: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.imageSmoothingEnabled;
      },

      CanvasRenderingContext2D_get_strokeStyle: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.strokeStyle);
      },

      CanvasRenderingContext2D_get_fillStyle: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.fillStyle);
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
        repetition_start,
        repetition_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _image = image;
        let _repetition = this.s(repetition_start, repetition_len);
        return ALLOCATOR.a(_instance.createPattern(_image, _repetition));
      },

      CanvasRenderingContext2D_get_shadowOffsetX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shadowOffsetX;
      },

      CanvasRenderingContext2D_get_shadowOffsetY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shadowOffsetY;
      },

      CanvasRenderingContext2D_get_shadowBlur: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shadowBlur;
      },

      CanvasRenderingContext2D_get_shadowColor: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.shadowColor);
      },

      CanvasRenderingContext2D_get_filter: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.filter);
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
        let _winding = winding;
        _instance.fill(_winding);
      },

      CanvasRenderingContext2D_fill: function(instance, path, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _path = path;
        let _winding = winding;
        _instance.fill(_path, _winding);
      },

      CanvasRenderingContext2D_stroke: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.stroke();
      },

      CanvasRenderingContext2D_stroke: function(instance, path) {
        let _instance = ALLOCATOR.g(instance);
        let _path = path;
        _instance.stroke(_path);
      },

      CanvasRenderingContext2D_clip: function(instance, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _winding = winding;
        _instance.clip(_winding);
      },

      CanvasRenderingContext2D_clip: function(instance, path, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _path = path;
        let _winding = winding;
        _instance.clip(_path, _winding);
      },

      CanvasRenderingContext2D_isPointInPath: function(instance, x, y, winding) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        let _winding = winding;
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
        let _path = path;
        let _x = x;
        let _y = y;
        let _winding = winding;
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
        let _path = path;
        let _x = x;
        let _y = y;
        return ALLOCATOR.a(_instance.isPointInStroke(_path, _x, _y));
      },

      CanvasRenderingContext2D_drawFocusIfNeeded: function(instance, element) {
        let _instance = ALLOCATOR.g(instance);
        let _element = element;
        _instance.drawFocusIfNeeded(_element);
      },

      CanvasRenderingContext2D_drawCustomFocusRing: function(instance, element) {
        let _instance = ALLOCATOR.g(instance);
        let _element = element;
        return ALLOCATOR.a(_instance.drawCustomFocusRing(_element));
      },

      CanvasRenderingContext2D_fillText: function(
        instance,
        text_start,
        text_len,
        x,
        y,
        maxWidth
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _text = this.s(text_start, text_len);
        let _x = x;
        let _y = y;
        let _maxWidth = maxWidth;
        _instance.fillText(_text, _x, _y, _maxWidth);
      },

      CanvasRenderingContext2D_strokeText: function(
        instance,
        text_start,
        text_len,
        x,
        y,
        maxWidth
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _text = this.s(text_start, text_len);
        let _x = x;
        let _y = y;
        let _maxWidth = maxWidth;
        _instance.strokeText(_text, _x, _y, _maxWidth);
      },

      CanvasRenderingContext2D_measureText: function(
        instance,
        text_start,
        text_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _text = this.s(text_start, text_len);
        return ALLOCATOR.a(_instance.measureText(_text));
      },

      CanvasRenderingContext2D_drawImage: function(instance, image, dx, dy) {
        let _instance = ALLOCATOR.g(instance);
        let _image = image;
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
        let _image = image;
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
        let _image = image;
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
        let _imagedata = imagedata;
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
        let _imagedata = imagedata;
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
        let _imagedata = imagedata;
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

      CanvasRenderingContext2D_get_lineCap: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.lineCap);
      },

      CanvasRenderingContext2D_get_lineJoin: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.lineJoin);
      },

      CanvasRenderingContext2D_get_miterLimit: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.miterLimit;
      },

      CanvasRenderingContext2D_setLineDash: function(instance, segments) {
        let _instance = ALLOCATOR.g(instance);
        let _segments = segments;
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

      CanvasRenderingContext2D_get_font: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.font);
      },

      CanvasRenderingContext2D_get_textAlign: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.textAlign);
      },

      CanvasRenderingContext2D_get_textBaseline: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.textBaseline);
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
        let _options = options;
        _instance.addHitRegion(_options);
      },

      CanvasRenderingContext2D_removeHitRegion: function(
        instance,
        id_start,
        id_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _id = this.s(id_start, id_len);
        _instance.removeHitRegion(_id);
      },

      CanvasRenderingContext2D_clearHitRegions: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clearHitRegions();
      },

      CanvasGradient_addColorStop: function(
        instance,
        offset,
        color_start,
        color_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _offset = offset;
        let _color = this.s(color_start, color_len);
        _instance.addColorStop(_offset, _color);
      },

      CanvasPattern_setTransform: function(instance, matrix) {
        let _instance = ALLOCATOR.g(instance);
        let _matrix = matrix;
        _instance.setTransform(_matrix);
      },

      TextMetrics_get_width: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.width;
      },

      Path2D_addPath: function(instance, path, transformation) {
        let _instance = ALLOCATOR.g(instance);
        let _path = path;
        let _transformation = transformation;
        _instance.addPath(_path, _transformation);
      },

      console_assert: function(condition, message_start, message_len) {
        let _condition = condition;
        let _message = this.s(message_start, message_len);
        console.assert(_condition, _message);
      },

      console_clear: function() {
        console.clear();
      },

      console_count: function(label_start, label_len) {
        let _label = this.s(label_start, label_len);
        console.count(_label);
      },

      console_countReset: function(label_start, label_len) {
        let _label = this.s(label_start, label_len);
        console.countReset(_label);
      },

      console_debug: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.debug(_message);
      },

      console_error: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.error(_message);
      },

      console_info: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.info(_message);
      },

      console_log: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.log(_message);
      },

      console_table: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.table(_message);
      },

      console_trace: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.trace(_message);
      },

      console_warn: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.warn(_message);
      },

      console_dir: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.dir(_message);
      },

      console_dirxml: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.dirxml(_message);
      },

      console_group: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.group(_message);
      },

      console_groupCollapsed: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.groupCollapsed(_message);
      },

      console_groupEnd: function() {
        console.groupEnd();
      },

      console_time: function(label_start, label_len) {
        let _label = this.s(label_start, label_len);
        console.time(_label);
      },

      console_timeLog: function(
        label_start,
        label_len,
        message_start,
        message_len
      ) {
        let _label = this.s(label_start, label_len);
        let _message = this.s(message_start, message_len);
        console.timeLog(_label, _message);
      },

      console_timeEnd: function(label_start, label_len) {
        let _label = this.s(label_start, label_len);
        console.timeEnd(_label);
      },

      console_exception: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.exception(_message);
      },

      console_timeStamp: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.timeStamp(_message);
      },

      console_profile: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.profile(_message);
      },

      console_profileEnd: function(message_start, message_len) {
        let _message = this.s(message_start, message_len);
        console.profileEnd(_message);
      },

      ConsoleInstance_assert: function(
        instance,
        condition,
        message_start,
        message_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _condition = condition;
        let _message = this.s(message_start, message_len);
        _instance.assert(_condition, _message);
      },

      ConsoleInstance_clear: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.clear();
      },

      ConsoleInstance_count: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start, label_len);
        _instance.count(_label);
      },

      ConsoleInstance_countReset: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start, label_len);
        _instance.countReset(_label);
      },

      ConsoleInstance_debug: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.debug(_message);
      },

      ConsoleInstance_error: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.error(_message);
      },

      ConsoleInstance_info: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.info(_message);
      },

      ConsoleInstance_log: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.log(_message);
      },

      ConsoleInstance_table: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.table(_message);
      },

      ConsoleInstance_trace: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.trace(_message);
      },

      ConsoleInstance_warn: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.warn(_message);
      },

      ConsoleInstance_dir: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.dir(_message);
      },

      ConsoleInstance_dirxml: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.dirxml(_message);
      },

      ConsoleInstance_group: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.group(_message);
      },

      ConsoleInstance_groupCollapsed: function(
        instance,
        message_start,
        message_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.groupCollapsed(_message);
      },

      ConsoleInstance_groupEnd: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.groupEnd();
      },

      ConsoleInstance_time: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start, label_len);
        _instance.time(_label);
      },

      ConsoleInstance_timeLog: function(
        instance,
        label_start,
        label_len,
        message_start,
        message_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start, label_len);
        let _message = this.s(message_start, message_len);
        _instance.timeLog(_label, _message);
      },

      ConsoleInstance_timeEnd: function(instance, label_start, label_len) {
        let _instance = ALLOCATOR.g(instance);
        let _label = this.s(label_start, label_len);
        _instance.timeEnd(_label);
      },

      ConsoleInstance_exception: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.exception(_message);
      },

      ConsoleInstance_timeStamp: function(instance, data) {
        let _instance = ALLOCATOR.g(instance);
        let _data = data;
        _instance.timeStamp(_data);
      },

      ConsoleInstance_profile: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.profile(_message);
      },

      ConsoleInstance_profileEnd: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
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
        let _instance = ALLOCATOR.g(instance);
        let _scope = this.s(scope_start, scope_len);
        let _message = this.s(message_start, message_len);
        let _filename = this.s(filename_start, filename_len);
        let _lineNumber = lineNumber;
        let _columnNumber = columnNumber;
        let _level = level;
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

      Document_get_URL: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.URL);
      },

      Document_get_documentURI: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.documentURI);
      },

      Document_get_compatMode: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.compatMode);
      },

      Document_get_characterSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.characterSet);
      },

      Document_get_charset: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.charset);
      },

      Document_get_inputEncoding: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.inputEncoding);
      },

      Document_get_contentType: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.contentType);
      },

      Document_get_doctype: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.doctype);
      },

      Document_get_documentElement: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.documentElement);
      },

      Document_getElementsByTagName: function(
        instance,
        localName_start,
        localName_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _localName = this.s(localName_start, localName_len);
        return ALLOCATOR.a(_instance.getElementsByTagName(_localName));
      },

      Document_getElementsByTagNameNS: function(
        instance,
        namespace_start,
        namespace_len,
        localName_start,
        localName_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start, namespace_len);
        let _localName = this.s(localName_start, localName_len);
        return ALLOCATOR.a(
          _instance.getElementsByTagNameNS(_namespace, _localName)
        );
      },

      Document_getElementsByClassName: function(
        instance,
        classNames_start,
        classNames_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _classNames = this.s(classNames_start, classNames_len);
        return ALLOCATOR.a(_instance.getElementsByClassName(_classNames));
      },

      Document_getElementById: function(
        instance,
        elementId_start,
        elementId_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _elementId = this.s(elementId_start, elementId_len);
        return ALLOCATOR.a(_instance.getElementById(_elementId));
      },

      Document_createElement: function(
        instance,
        localName_start,
        localName_len,
        options
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _localName = this.s(localName_start, localName_len);
        let _options = options;
        return ALLOCATOR.a(_instance.createElement(_localName, _options));
      },

      Document_createElementNS: function(
        instance,
        namespace_start,
        namespace_len,
        qualifiedName_start,
        qualifiedName_len,
        options
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start, namespace_len);
        let _qualifiedName = this.s(qualifiedName_start, qualifiedName_len);
        let _options = options;
        return ALLOCATOR.a(
          _instance.createElementNS(_namespace, _qualifiedName, _options)
        );
      },

      Document_createDocumentFragment: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.createDocumentFragment());
      },

      Document_createTextNode: function(instance, data_start, data_len) {
        let _instance = ALLOCATOR.g(instance);
        let _data = this.s(data_start, data_len);
        return ALLOCATOR.a(_instance.createTextNode(_data));
      },

      Document_createComment: function(instance, data_start, data_len) {
        let _instance = ALLOCATOR.g(instance);
        let _data = this.s(data_start, data_len);
        return ALLOCATOR.a(_instance.createComment(_data));
      },

      Document_createProcessingInstruction: function(
        instance,
        target_start,
        target_len,
        data_start,
        data_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _target = this.s(target_start, target_len);
        let _data = this.s(data_start, data_len);
        return ALLOCATOR.a(_instance.createProcessingInstruction(_target, _data));
      },

      Document_importNode: function(instance, node, deep) {
        let _instance = ALLOCATOR.g(instance);
        let _node = node;
        let _deep = deep;
        return ALLOCATOR.a(_instance.importNode(_node, _deep));
      },

      Document_adoptNode: function(instance, node) {
        let _instance = ALLOCATOR.g(instance);
        let _node = node;
        return ALLOCATOR.a(_instance.adoptNode(_node));
      },

      Document_createEvent: function(instance, interface_start, interface_len) {
        let _instance = ALLOCATOR.g(instance);
        let _interface = this.s(interface_start, interface_len);
        return ALLOCATOR.a(_instance.createEvent(_interface));
      },

      Document_createRange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.createRange());
      },

      Document_createNodeIterator: function(instance, root, whatToShow, filter) {
        let _instance = ALLOCATOR.g(instance);
        let _root = root;
        let _whatToShow = whatToShow;
        let _filter = filter;
        return ALLOCATOR.a(
          _instance.createNodeIterator(_root, _whatToShow, _filter)
        );
      },

      Document_createTreeWalker: function(instance, root, whatToShow, filter) {
        let _instance = ALLOCATOR.g(instance);
        let _root = root;
        let _whatToShow = whatToShow;
        let _filter = filter;
        return ALLOCATOR.a(
          _instance.createTreeWalker(_root, _whatToShow, _filter)
        );
      },

      Document_createCDATASection: function(instance, data_start, data_len) {
        let _instance = ALLOCATOR.g(instance);
        let _data = this.s(data_start, data_len);
        return ALLOCATOR.a(_instance.createCDATASection(_data));
      },

      Document_createAttribute: function(instance, name_start, name_len) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start, name_len);
        return ALLOCATOR.a(_instance.createAttribute(_name));
      },

      Document_createAttributeNS: function(
        instance,
        namespace_start,
        namespace_len,
        name_start,
        name_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _namespace = this.s(namespace_start, namespace_len);
        let _name = this.s(name_start, name_len);
        return ALLOCATOR.a(_instance.createAttributeNS(_namespace, _name));
      },

      Document_get_location: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.location);
      },

      Document_get_referrer: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.referrer);
      },

      Document_get_lastModified: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.lastModified);
      },

      Document_get_readyState: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.readyState);
      },

      Document_get_title: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.title);
      },

      Document_get_dir: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.dir);
      },

      Document_get_body: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.body);
      },

      Document_get_head: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.head);
      },

      Document_get_images: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.images);
      },

      Document_get_embeds: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.embeds);
      },

      Document_get_plugins: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.plugins);
      },

      Document_get_links: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.links);
      },

      Document_get_forms: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.forms);
      },

      Document_get_scripts: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.scripts);
      },

      Document_getElementsByName: function(
        instance,
        elementName_start,
        elementName_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _elementName = this.s(elementName_start, elementName_len);
        return ALLOCATOR.a(_instance.getElementsByName(_elementName));
      },

      Document_get_defaultView: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.defaultView);
      },

      Document_hasFocus: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.hasFocus());
      },

      Document_get_onreadystatechange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onreadystatechange);
      },

      Document_get_onbeforescriptexecute: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onbeforescriptexecute);
      },

      Document_get_onafterscriptexecute: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onafterscriptexecute);
      },

      Document_get_onselectionchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onselectionchange);
      },

      Document_get_currentScript: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.currentScript);
      },

      Document_releaseCapture: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.releaseCapture();
      },

      Document_get_documentURIObject: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.documentURIObject);
      },

      Document_get_referrerPolicy: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.referrerPolicy;
      },

      Document_get_anchors: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.anchors);
      },

      Document_get_applets: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.applets);
      },

      Document_get_fullscreen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.fullscreen;
      },

      Document_get_fullscreenEnabled: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.fullscreenEnabled;
      },

      Document_exitFullscreen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.exitFullscreen();
      },

      Document_get_onfullscreenchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onfullscreenchange);
      },

      Document_get_onfullscreenerror: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onfullscreenerror);
      },

      Document_exitPointerLock: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.exitPointerLock();
      },

      Document_get_onpointerlockchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onpointerlockchange);
      },

      Document_get_onpointerlockerror: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onpointerlockerror);
      },

      Document_get_hidden: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.hidden;
      },

      Document_get_visibilityState: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.visibilityState);
      },

      Document_get_onvisibilitychange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvisibilitychange);
      },

      Document_get_selectedStyleSheetSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.selectedStyleSheetSet);
      },

      Document_get_lastStyleSheetSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.lastStyleSheetSet);
      },

      Document_get_preferredStyleSheetSet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.preferredStyleSheetSet);
      },

      Document_get_styleSheetSets: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.styleSheetSets);
      },

      Document_enableStyleSheetsForSet: function(instance, name_start, name_len) {
        let _instance = ALLOCATOR.g(instance);
        let _name = this.s(name_start, name_len);
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

      Document_querySelector: function(instance, selectors_start, selectors_len) {
        let _instance = ALLOCATOR.g(instance);
        let _selectors = this.s(selectors_start, selectors_len);
        return ALLOCATOR.a(_instance.querySelector(_selectors));
      },

      Document_querySelectorAll: function(
        instance,
        selectors_start,
        selectors_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _selectors = this.s(selectors_start, selectors_len);
        return ALLOCATOR.a(_instance.querySelectorAll(_selectors));
      },

      Document_get_timeline: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.timeline);
      },

      Document_getAnimations: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.getAnimations());
      },

      Document_get_rootElement: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.rootElement);
      },

      Document_get_isSrcdocDocument: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.isSrcdocDocument;
      },

      Document_get_sandboxFlagsAsString: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.sandboxFlagsAsString);
      },

      Document_insertAnonymousContent: function(instance, aElement) {
        let _instance = ALLOCATOR.g(instance);
        let _aElement = aElement;
        return ALLOCATOR.a(_instance.insertAnonymousContent(_aElement));
      },

      Document_removeAnonymousContent: function(instance, aContent) {
        let _instance = ALLOCATOR.g(instance);
        let _aContent = aContent;
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

      Document_notifyUserGestureActivation: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.notifyUserGestureActivation();
      },

      Document_get_documentFlashClassification: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.documentFlashClassification);
      },

      EventTarget_addEventListener: function(
        instance,
        type_start,
        type_len,
        listener
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _type = this.s(type_start, type_len);
        let _listener = ALLOCATOR.g(listener);
        _instance.addEventListener(_type, _listener);
      },

      EventTarget_removeEventListener: function(
        instance,
        type_start,
        type_len,
        listener
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _type = this.s(type_start, type_len);
        let _listener = ALLOCATOR.g(listener);
        _instance.removeEventListener(_type, _listener);
      },

      EventTarget_dispatchEvent: function(instance, event) {
        let _instance = ALLOCATOR.g(instance);
        let _event = event;
        return ALLOCATOR.a(_instance.dispatchEvent(_event));
      },

      HTMLCanvasElement_get_width: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.width;
      },

      HTMLCanvasElement_get_height: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.height;
      },

      HTMLCanvasElement_getContext: function(
        instance,
        contextId_start,
        contextId_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _contextId = this.s(contextId_start, contextId_len);
        return ALLOCATOR.a(_instance.getContext(_contextId));
      },

      HTMLCanvasElement_toDataURL: function(
        instance,
        type_start,
        type_len,
        encoderOptions
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _type = this.s(type_start, type_len);
        let _encoderOptions = encoderOptions;
        return ALLOCATOR.a(_instance.toDataURL(_type, _encoderOptions));
      },

      HTMLCanvasElement_toBlob: function(
        instance,
        callback,
        type_start,
        type_len,
        encoderOptions
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _callback = ALLOCATOR.g(callback);
        let _type = this.s(type_start, type_len);
        let _encoderOptions = encoderOptions;
        _instance.toBlob(_callback, _type, _encoderOptions);
      },

      HTMLCanvasElement_transferControlToOffscreen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.transferControlToOffscreen());
      },

      KeyboardEvent_get_charCode: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.charCode;
      },

      KeyboardEvent_get_keyCode: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.keyCode;
      },

      KeyboardEvent_get_altKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.altKey;
      },

      KeyboardEvent_get_ctrlKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.ctrlKey;
      },

      KeyboardEvent_get_shiftKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shiftKey;
      },

      KeyboardEvent_get_metaKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.metaKey;
      },

      KeyboardEvent_getModifierState: function(instance, key_start, key_len) {
        let _instance = ALLOCATOR.g(instance);
        let _key = this.s(key_start, key_len);
        return ALLOCATOR.a(_instance.getModifierState(_key));
      },

      KeyboardEvent_get_location: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.location;
      },

      KeyboardEvent_get_repeat: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.repeat;
      },

      KeyboardEvent_get_isComposing: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.isComposing;
      },

      KeyboardEvent_get_key: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.key);
      },

      KeyboardEvent_get_code: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.code);
      },

      KeyboardEvent_initKeyboardEvent: function(
        instance,
        typeArg_start,
        typeArg_len,
        bubblesArg,
        cancelableArg,
        viewArg,
        keyArg_start,
        keyArg_len,
        locationArg,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _typeArg = this.s(typeArg_start, typeArg_len);
        let _bubblesArg = bubblesArg;
        let _cancelableArg = cancelableArg;
        let _viewArg = viewArg;
        let _keyArg = this.s(keyArg_start, keyArg_len);
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

      MouseEvent_get_screenX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenX;
      },

      MouseEvent_get_screenY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenY;
      },

      MouseEvent_get_clientX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientX;
      },

      MouseEvent_get_clientY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.clientY;
      },

      MouseEvent_get_x: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.x;
      },

      MouseEvent_get_y: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.y;
      },

      MouseEvent_get_offsetX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.offsetX;
      },

      MouseEvent_get_offsetY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.offsetY;
      },

      MouseEvent_get_ctrlKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.ctrlKey;
      },

      MouseEvent_get_shiftKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.shiftKey;
      },

      MouseEvent_get_altKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.altKey;
      },

      MouseEvent_get_metaKey: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.metaKey;
      },

      MouseEvent_get_button: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.button;
      },

      MouseEvent_get_buttons: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.buttons;
      },

      MouseEvent_get_relatedTarget: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.relatedTarget);
      },

      MouseEvent_get_region: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.region);
      },

      MouseEvent_get_movementX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.movementX;
      },

      MouseEvent_get_movementY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.movementY;
      },

      MouseEvent_initMouseEvent: function(
        instance,
        typeArg_start,
        typeArg_len,
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
        let _typeArg = this.s(typeArg_start, typeArg_len);
        let _canBubbleArg = canBubbleArg;
        let _cancelableArg = cancelableArg;
        let _viewArg = viewArg;
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
        let _relatedTargetArg = relatedTargetArg;
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

      MouseEvent_getModifierState: function(instance, keyArg_start, keyArg_len) {
        let _instance = ALLOCATOR.g(instance);
        let _keyArg = this.s(keyArg_start, keyArg_len);
        return ALLOCATOR.a(_instance.getModifierState(_keyArg));
      },

      Window_get_window: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.window);
      },

      Window_get_self: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.self);
      },

      Window_get_document: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.document);
      },

      Window_get_name: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.name);
      },

      Window_get_location: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.location);
      },

      Window_get_history: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.history);
      },

      Window_get_customElements: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.customElements);
      },

      Window_get_locationbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.locationbar);
      },

      Window_get_menubar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.menubar);
      },

      Window_get_personalbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.personalbar);
      },

      Window_get_scrollbars: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.scrollbars);
      },

      Window_get_statusbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.statusbar);
      },

      Window_get_toolbar: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.toolbar);
      },

      Window_get_status: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.status);
      },

      Window_close: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.close();
      },

      Window_get_closed: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.closed;
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

      Window_get_frames: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.frames);
      },

      Window_get_length: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.length;
      },

      Window_get_top: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.top);
      },

      Window_get_opener: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.opener;
      },

      Window_get_parent: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.parent);
      },

      Window_get_frameElement: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.frameElement);
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
        let _instance = ALLOCATOR.g(instance);
        let _url = this.s(url_start, url_len);
        let _target = this.s(target_start, target_len);
        let _features = this.s(features_start, features_len);
        return ALLOCATOR.a(_instance.open(_url, _target, _features));
      },

      Window_get_navigator: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.navigator);
      },

      Window_get_external: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.external);
      },

      Window_get_applicationCache: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.applicationCache);
      },

      Window_alert: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.alert();
      },

      Window_alert: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        _instance.alert(_message);
      },

      Window_confirm: function(instance, message_start, message_len) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        return ALLOCATOR.a(_instance.confirm(_message));
      },

      Window_prompt: function(
        instance,
        message_start,
        message_len,
        default_start,
        default_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _message = this.s(message_start, message_len);
        let _default = this.s(default_start, default_len);
        return ALLOCATOR.a(_instance.prompt(_message, _default));
      },

      Window_print: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        _instance.print();
      },

      Window_postMessage: function(
        instance,
        message,
        targetOrigin_start,
        targetOrigin_len,
        transfer
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _message = message;
        let _targetOrigin = this.s(targetOrigin_start, targetOrigin_len);
        let _transfer = transfer;
        _instance.postMessage(_message, _targetOrigin, _transfer);
      },

      Window_get_onappinstalled: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onappinstalled);
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

      Window_getComputedStyle: function(
        instance,
        elt,
        pseudoElt_start,
        pseudoElt_len
      ) {
        let _instance = ALLOCATOR.g(instance);
        let _elt = elt;
        let _pseudoElt = this.s(pseudoElt_start, pseudoElt_len);
        return ALLOCATOR.a(_instance.getComputedStyle(_elt, _pseudoElt));
      },

      Window_matchMedia: function(instance, query_start, query_len) {
        let _instance = ALLOCATOR.g(instance);
        let _query = this.s(query_start, query_len);
        return ALLOCATOR.a(_instance.matchMedia(_query));
      },

      Window_get_screen: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.screen);
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

      Window_get_innerHeight: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.innerHeight;
      },

      Window_scroll: function(instance, x, y) {
        let _instance = ALLOCATOR.g(instance);
        let _x = x;
        let _y = y;
        _instance.scroll(_x, _y);
      },

      Window_scroll: function(instance, options) {
        let _instance = ALLOCATOR.g(instance);
        let _options = options;
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
        let _options = options;
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
        let _options = options;
        _instance.scrollBy(_options);
      },

      Window_get_scrollX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollX;
      },

      Window_get_pageXOffset: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.pageXOffset;
      },

      Window_get_scrollY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.scrollY;
      },

      Window_get_pageYOffset: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.pageYOffset;
      },

      Window_get_screenX: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenX;
      },

      Window_get_screenY: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.screenY;
      },

      Window_get_outerWidth: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.outerWidth;
      },

      Window_get_outerHeight: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.outerHeight;
      },

      Window_get_devicePixelRatio: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.devicePixelRatio;
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

      Window_get_orientation: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return _instance.orientation;
      },

      Window_get_onorientationchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onorientationchange);
      },

      Window_get_onvrdisplayconnect: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplayconnect);
      },

      Window_get_onvrdisplaydisconnect: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplaydisconnect);
      },

      Window_get_onvrdisplayactivate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplayactivate);
      },

      Window_get_onvrdisplaydeactivate: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplaydeactivate);
      },

      Window_get_onvrdisplaypresentchange: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.onvrdisplaypresentchange);
      },

      Window_get_paintWorklet: function(instance) {
        let _instance = ALLOCATOR.g(instance);
        return ALLOCATOR.a(_instance.paintWorklet);
      },

      Window_requestIdleCallback: function(instance, callback, options) {
        let _instance = ALLOCATOR.g(instance);
        let _callback = ALLOCATOR.g(callback);
        let _options = options;
        return ALLOCATOR.a(_instance.requestIdleCallback(_callback, _options));
      },

      Window_cancelIdleCallback: function(instance, handle) {
        let _instance = ALLOCATOR.g(instance);
        let _handle = handle;
        _instance.cancelIdleCallback(_handle);
      }
    };
    return webidl;
  }

  class WebIDLLoader extends HTMLElement {
    connectedCallback() {
      this.utf8dec = new TextDecoder("utf-8");
      let wasmSrc = this.getAttribute("module");
      if (!wasmSrc) {
        console.error("no wasm module specified for webidl-loader");
        return;
      }
      this.callbackHandler = this.getAttribute("callback") || "callback";
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
          this.exports = results.instance.exports;
          results.instance.exports[exec]();
        });
    }

    executeCallback(handle, ev, allocator) {
      let h = this.exports[this.callbackHandler];
      if (h) {
        // give the opportunity for event handler to grab what it needs
        let eventHandle = allocator.a(ev);
        h(handle, eventHandle);
        // then release event
        allocator.r(eventHandle);
      }
    }

    //readStringFromMemory
    s(start, len) {
      const view = new Uint8Array(this.memory.buffer, start, len);
      return this.utf8dec.decode(view);
    }
  }
  window.customElements.define("webidl-loader", WebIDLLoader);

}));
