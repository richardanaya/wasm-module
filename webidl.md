
# Web IDL Documentation
This is a list of all the functions exposed to your web assembly module.

# Global

## `global_getWindow() -> number`
Retrieves the current Window of the browser.

## `global_release(handle) -> number`
Release a handle to reference in browser.

## `global_createEventListener() -> number`
Creates an event handler that returns a handle that can be used to identify it.

# CanvasRenderingContext2D.webidl
## `CanvasRenderingContext2D_get_canvas() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a HTMLCanvasElement
## `CanvasRenderingContext2D_set_canvas(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
handle | number | A number that represents a handle to a value

## `CanvasRenderingContext2D_drawWindow(instance, window, x, y, w, h, bgColor_start, flags) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
window | number | Window represented as a number
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number
bgColor_start | number | memory location of string "bgColor"
flags | number | unsigned long represented as a number

## `CanvasRenderingContext2D_demote(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_save(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_restore(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_scale(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_rotate(instance, angle) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
angle | number | double represented as a number

## `CanvasRenderingContext2D_translate(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_transform(instance, a, b, c, d, e, f) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
a | number | double represented as a number
b | number | double represented as a number
c | number | double represented as a number
d | number | double represented as a number
e | number | double represented as a number
f | number | double represented as a number

## `CanvasRenderingContext2D_setTransform(instance, a, b, c, d, e, f) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
a | number | double represented as a number
b | number | double represented as a number
c | number | double represented as a number
d | number | double represented as a number
e | number | double represented as a number
f | number | double represented as a number

## `CanvasRenderingContext2D_resetTransform(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
## `CanvasRenderingContext2D_get_globalAlpha(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type unrestricted double
## `CanvasRenderingContext2D_set_globalAlpha(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value
## `CanvasRenderingContext2D_get_globalCompositeOperation(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_globalCompositeOperation(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `CanvasRenderingContext2D_get_imageSmoothingEnabled(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type boolean
## `CanvasRenderingContext2D_set_imageSmoothingEnabled(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value
## `CanvasRenderingContext2D_get_strokeStyle(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_strokeStyle(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `CanvasRenderingContext2D_get_fillStyle(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_fillStyle(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `CanvasRenderingContext2D_createLinearGradient(instance, x0, y0, x1, y1)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x0 | number | double represented as a number
y0 | number | double represented as a number
x1 | number | double represented as a number
y1 | number | double represented as a number
*output*|number| A number representing a handle to CanvasGradient

## `CanvasRenderingContext2D_createRadialGradient(instance, x0, y0, r0, x1, y1, r1)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x0 | number | double represented as a number
y0 | number | double represented as a number
r0 | number | double represented as a number
x1 | number | double represented as a number
y1 | number | double represented as a number
r1 | number | double represented as a number
*output*|number| A number representing a handle to CanvasGradient

## `CanvasRenderingContext2D_createPattern(instance, image, repetition_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
image | number | CanvasImageSource represented as a number
repetition_start | number | memory location of string "repetition"
*output*|number| A number representing a handle to CanvasPattern
## `CanvasRenderingContext2D_get_shadowOffsetX(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_set_shadowOffsetX(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value
## `CanvasRenderingContext2D_get_shadowOffsetY(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_set_shadowOffsetY(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value
## `CanvasRenderingContext2D_get_shadowBlur(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_set_shadowBlur(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value
## `CanvasRenderingContext2D_get_shadowColor(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_shadowColor(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `CanvasRenderingContext2D_get_filter(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_filter(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `CanvasRenderingContext2D_clearRect(instance, x, y, w, h) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_fillRect(instance, x, y, w, h) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_strokeRect(instance, x, y, w, h) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_beginPath(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_fill(instance, winding) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_fill(instance, path, winding) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_stroke(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_stroke(instance, path) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number

## `CanvasRenderingContext2D_clip(instance, winding) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_clip(instance, path, winding) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_isPointInPath(instance, x, y, winding)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number
winding | number | CanvasWindingRule represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_isPointInPath(instance, path, x, y, winding)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number
winding | number | CanvasWindingRule represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_isPointInStroke(instance, x, y)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_isPointInStroke(instance, path, x, y)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_drawFocusIfNeeded(instance, element) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
element | number | Element represented as a number

## `CanvasRenderingContext2D_drawCustomFocusRing(instance, element)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
element | number | Element represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_fillText(instance, text_start, x, y, maxWidth) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
text_start | number | memory location of string "text"
x | number | double represented as a number
y | number | double represented as a number
maxWidth | number | double represented as a number

## `CanvasRenderingContext2D_strokeText(instance, text_start, x, y, maxWidth) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
text_start | number | memory location of string "text"
x | number | double represented as a number
y | number | double represented as a number
maxWidth | number | double represented as a number

## `CanvasRenderingContext2D_measureText(instance, text_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
text_start | number | memory location of string "text"
*output*|number| A number representing a handle to TextMetrics

## `CanvasRenderingContext2D_drawImage(instance, image, dx, dy) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
image | number | CanvasImageSource represented as a number
dx | number | double represented as a number
dy | number | double represented as a number

## `CanvasRenderingContext2D_drawImage(instance, image, dx, dy, dw, dh) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
image | number | CanvasImageSource represented as a number
dx | number | double represented as a number
dy | number | double represented as a number
dw | number | double represented as a number
dh | number | double represented as a number

## `CanvasRenderingContext2D_drawImage(instance, image, sx, sy, sw, sh, dx, dy, dw, dh) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
image | number | CanvasImageSource represented as a number
sx | number | double represented as a number
sy | number | double represented as a number
sw | number | double represented as a number
sh | number | double represented as a number
dx | number | double represented as a number
dy | number | double represented as a number
dw | number | double represented as a number
dh | number | double represented as a number

## `CanvasRenderingContext2D_createImageData(instance, sw, sh)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
sw | number | double represented as a number
sh | number | double represented as a number
*output*|number| A number representing a handle to ImageData

## `CanvasRenderingContext2D_createImageData(instance, imagedata)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
imagedata | number | ImageData represented as a number
*output*|number| A number representing a handle to ImageData

## `CanvasRenderingContext2D_getImageData(instance, sx, sy, sw, sh)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
sx | number | double represented as a number
sy | number | double represented as a number
sw | number | double represented as a number
sh | number | double represented as a number
*output*|number| A number representing a handle to ImageData

## `CanvasRenderingContext2D_putImageData(instance, imagedata, dx, dy) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
imagedata | number | ImageData represented as a number
dx | number | double represented as a number
dy | number | double represented as a number

## `CanvasRenderingContext2D_putImageData(instance, imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
imagedata | number | ImageData represented as a number
dx | number | double represented as a number
dy | number | double represented as a number
dirtyX | number | double represented as a number
dirtyY | number | double represented as a number
dirtyWidth | number | double represented as a number
dirtyHeight | number | double represented as a number
## `CanvasRenderingContext2D_get_lineWidth(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_set_lineWidth(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value
## `CanvasRenderingContext2D_get_lineCap(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_lineCap(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `CanvasRenderingContext2D_get_lineJoin(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_lineJoin(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `CanvasRenderingContext2D_get_miterLimit(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_set_miterLimit(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value

## `CanvasRenderingContext2D_setLineDash(instance, segments) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
segments | number | [object Object] represented as a number

## `CanvasRenderingContext2D_getLineDash(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
*output*|number| A number representing a handle to [object Object]
## `CanvasRenderingContext2D_get_lineDashOffset(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_set_lineDashOffset(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  val | number | A number that represents a value
## `CanvasRenderingContext2D_get_font(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_font(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `CanvasRenderingContext2D_get_textAlign(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_textAlign(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `CanvasRenderingContext2D_get_textBaseline(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type DOMString
## `CanvasRenderingContext2D_set_textBaseline(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a CanvasRenderingContext2D
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `CanvasRenderingContext2D_closePath(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_moveTo(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_lineTo(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_quadraticCurveTo(instance, cpx, cpy, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
cpx | number | double represented as a number
cpy | number | double represented as a number
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_bezierCurveTo(instance, cp1x, cp1y, cp2x, cp2y, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
cp1x | number | double represented as a number
cp1y | number | double represented as a number
cp2x | number | double represented as a number
cp2y | number | double represented as a number
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_arcTo(instance, x1, y1, x2, y2, radius) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x1 | number | double represented as a number
y1 | number | double represented as a number
x2 | number | double represented as a number
y2 | number | double represented as a number
radius | number | double represented as a number

## `CanvasRenderingContext2D_rect(instance, x, y, w, h) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_arc(instance, x, y, radius, startAngle, endAngle, anticlockwise) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
radius | number | double represented as a number
startAngle | number | double represented as a number
endAngle | number | double represented as a number
anticlockwise | number | boolean represented as a number

## `CanvasRenderingContext2D_ellipse(instance, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
radiusX | number | double represented as a number
radiusY | number | double represented as a number
rotation | number | double represented as a number
startAngle | number | double represented as a number
endAngle | number | double represented as a number
anticlockwise | number | boolean represented as a number

## `CanvasRenderingContext2D_addHitRegion(instance, options) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
options | number | HitRegionOptions represented as a number

## `CanvasRenderingContext2D_removeHitRegion(instance, id_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
id_start | number | memory location of string "id"

## `CanvasRenderingContext2D_clearHitRegions(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasGradient_addColorStop(instance, offset, color_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasGradient instance
offset | number | float represented as a number
color_start | number | memory location of string "color"

## `CanvasPattern_setTransform(instance, matrix) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasPattern instance
matrix | number | SVGMatrix represented as a number
## `TextMetrics_get_width(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a TextMetrics
*output* | number | A number representing as result of type double
## `TextMetrics_set_width(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a TextMetrics
  val | number | A number that represents a value

## `Path2D_addPath(instance, path, transformation) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Path2D instance
path | number | Path2D represented as a number
transformation | number | SVGMatrix represented as a number
# Console.webidl

## `console_assert(condition, message_start) `
Argument | Type | description
---------|------|-------------
condition | number | boolean represented as a number
message_start | number | memory location of string "message"

## `console_clear() `

## `console_count(label_start) `
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"

## `console_countReset(label_start) `
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"

## `console_debug(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_error(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_info(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_log(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_table(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_trace(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_warn(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_dir(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_dirxml(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_group(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_groupCollapsed(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_groupEnd() `

## `console_time(label_start) `
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"

## `console_timeLog(label_start, message_start) `
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"
message_start | number | memory location of string "message"

## `console_timeEnd(label_start) `
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"

## `console_exception(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_timeStamp(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_profile(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `console_profileEnd(message_start) `
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"

## `ConsoleInstance_assert(instance, condition, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
condition | number | boolean represented as a number
message_start | number | memory location of string "message"

## `ConsoleInstance_clear(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance

## `ConsoleInstance_count(instance, label_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"

## `ConsoleInstance_countReset(instance, label_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"

## `ConsoleInstance_debug(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_error(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_info(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_log(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_table(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_trace(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_warn(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_dir(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_dirxml(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_group(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_groupCollapsed(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_groupEnd(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance

## `ConsoleInstance_time(instance, label_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"

## `ConsoleInstance_timeLog(instance, label_start, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"
message_start | number | memory location of string "message"

## `ConsoleInstance_timeEnd(instance, label_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"

## `ConsoleInstance_exception(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_timeStamp(instance, data) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
data | number | any represented as a number

## `ConsoleInstance_profile(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_profileEnd(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"

## `ConsoleInstance_reportForServiceWorkerScope(instance, scope_start, message_start, filename_start, lineNumber, columnNumber, level) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
scope_start | number | memory location of string "scope"
message_start | number | memory location of string "message"
filename_start | number | memory location of string "filename"
lineNumber | number | unsigned long represented as a number
columnNumber | number | unsigned long represented as a number
level | number | ConsoleLevel represented as a number
# Document.webidl
## `Document_get_implementation() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMImplementation
## `Document_set_implementation(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_URL(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_URL(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_documentURI(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_documentURI(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_compatMode(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_compatMode(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_characterSet(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_characterSet(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_charset(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_charset(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_inputEncoding(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_inputEncoding(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_contentType(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_contentType(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_doctype() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DocumentType
## `Document_set_doctype(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_documentElement() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Element
## `Document_set_documentElement(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_getElementsByTagName(instance, localName_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
localName_start | number | memory location of string "localName"
*output*|number| A number representing a handle to HTMLCollection

## `Document_getElementsByTagNameNS(instance, namespace_start, localName_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
namespace_start | number | memory location of string "namespace"
localName_start | number | memory location of string "localName"
*output*|number| A number representing a handle to HTMLCollection

## `Document_getElementsByClassName(instance, classNames_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
classNames_start | number | memory location of string "classNames"
*output*|number| A number representing a handle to HTMLCollection

## `Document_getElementById(instance, elementId_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
elementId_start | number | memory location of string "elementId"
*output*|number| A number representing a handle to Element

## `Document_createElement(instance, localName_start, options)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
localName_start | number | memory location of string "localName"
options | number | [object Object],[object Object] represented as a number
*output*|number| A number representing a handle to Element

## `Document_createElementNS(instance, namespace_start, qualifiedName_start, options)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
namespace_start | number | memory location of string "namespace"
qualifiedName_start | number | memory location of string "qualifiedName"
options | number | [object Object],[object Object] represented as a number
*output*|number| A number representing a handle to Element

## `Document_createDocumentFragment(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to DocumentFragment

## `Document_createTextNode(instance, data_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
data_start | number | memory location of string "data"
*output*|number| A number representing a handle to Text

## `Document_createComment(instance, data_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
data_start | number | memory location of string "data"
*output*|number| A number representing a handle to Comment

## `Document_createProcessingInstruction(instance, target_start, data_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
target_start | number | memory location of string "target"
data_start | number | memory location of string "data"
*output*|number| A number representing a handle to ProcessingInstruction

## `Document_importNode(instance, node, deep)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
node | number | Node represented as a number
deep | number | boolean represented as a number
*output*|number| A number representing a handle to Node

## `Document_adoptNode(instance, node)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
node | number | Node represented as a number
*output*|number| A number representing a handle to Node

## `Document_createEvent(instance, interface_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
interface_start | number | memory location of string "interface"
*output*|number| A number representing a handle to Event

## `Document_createRange(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to Range

## `Document_createNodeIterator(instance, root, whatToShow, filter)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
root | number | Node represented as a number
whatToShow | number | unsigned long represented as a number
filter | number | NodeFilter represented as a number
*output*|number| A number representing a handle to NodeIterator

## `Document_createTreeWalker(instance, root, whatToShow, filter)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
root | number | Node represented as a number
whatToShow | number | unsigned long represented as a number
filter | number | NodeFilter represented as a number
*output*|number| A number representing a handle to TreeWalker

## `Document_createCDATASection(instance, data_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
data_start | number | memory location of string "data"
*output*|number| A number representing a handle to CDATASection

## `Document_createAttribute(instance, name_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
name_start | number | memory location of string "name"
*output*|number| A number representing a handle to Attr

## `Document_createAttributeNS(instance, namespace_start, name_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
namespace_start | number | memory location of string "namespace"
name_start | number | memory location of string "name"
*output*|number| A number representing a handle to Attr
## `Document_get_location() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Location
## `Document_set_location(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_referrer(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_referrer(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_lastModified(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_lastModified(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_readyState(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_readyState(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_title(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_title(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_dir(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_dir(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_body() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLElement
## `Document_set_body(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_head() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLHeadElement
## `Document_set_head(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_images() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_images(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_embeds() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_embeds(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_plugins() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_plugins(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_links() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_links(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_forms() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_forms(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_scripts() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_scripts(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_getElementsByName(instance, elementName_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
elementName_start | number | memory location of string "elementName"
*output*|number| A number representing a handle to NodeList
## `Document_get_defaultView() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a WindowProxy
## `Document_set_defaultView(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_hasFocus(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to boolean
## `Document_get_onreadystatechange() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onreadystatechange(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_onbeforescriptexecute() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onbeforescriptexecute(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_onafterscriptexecute() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onafterscriptexecute(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_onselectionchange() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onselectionchange(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_currentScript() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Element
## `Document_set_currentScript(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_releaseCapture(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_documentURIObject() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a URI
## `Document_set_documentURIObject(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_referrerPolicy(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type unsigned long
## `Document_set_referrerPolicy(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  val | number | A number that represents a value
## `Document_get_anchors() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_anchors(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_applets() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_set_applets(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_fullscreen(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_set_fullscreen(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  val | number | A number that represents a value
## `Document_get_fullscreenEnabled(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_set_fullscreenEnabled(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  val | number | A number that represents a value

## `Document_exitFullscreen(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_onfullscreenchange() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onfullscreenchange(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_onfullscreenerror() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onfullscreenerror(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_exitPointerLock(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_onpointerlockchange() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onpointerlockchange(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_onpointerlockerror() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onpointerlockerror(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_hidden(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_set_hidden(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  val | number | A number that represents a value
## `Document_get_visibilityState() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a VisibilityState
## `Document_set_visibilityState(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_onvisibilitychange() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_set_onvisibilitychange(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_selectedStyleSheetSet(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_selectedStyleSheetSet(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_lastStyleSheetSet(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_lastStyleSheetSet(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_preferredStyleSheetSet(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_preferredStyleSheetSet(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Document_get_styleSheetSets() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMStringList
## `Document_set_styleSheetSets(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_enableStyleSheetsForSet(instance, name_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
name_start | number | memory location of string "name"

## `Document_caretPositionFromPoint(instance, x, y)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
x | number | float represented as a number
y | number | float represented as a number
*output*|number| A number representing a handle to CaretPosition
## `Document_get_scrollingElement() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Element
## `Document_set_scrollingElement(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_querySelector(instance, selectors_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
selectors_start | number | memory location of string "selectors"
*output*|number| A number representing a handle to Element

## `Document_querySelectorAll(instance, selectors_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
selectors_start | number | memory location of string "selectors"
*output*|number| A number representing a handle to NodeList
## `Document_get_timeline() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DocumentTimeline
## `Document_set_timeline(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value

## `Document_getAnimations(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to [object Object]
## `Document_get_rootElement() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a SVGSVGElement
## `Document_set_rootElement(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
## `Document_get_isSrcdocDocument(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_set_isSrcdocDocument(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  val | number | A number that represents a value
## `Document_get_sandboxFlagsAsString(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type DOMString
## `Document_set_sandboxFlagsAsString(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `Document_insertAnonymousContent(instance, aElement)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
aElement | number | Element represented as a number
*output*|number| A number representing a handle to AnonymousContent

## `Document_removeAnonymousContent(instance, aContent) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
aContent | number | AnonymousContent represented as a number

## `Document_getSelection(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to Selection
## `Document_get_userHasInteracted(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_set_userHasInteracted(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Document
  val | number | A number that represents a value

## `Document_notifyUserGestureActivation(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_documentFlashClassification() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a FlashClassification
## `Document_set_documentFlashClassification(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
handle | number | A number that represents a handle to a value
# Element.webidl
## `Element_get_namespaceURI(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_namespaceURI(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Element_get_prefix(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_prefix(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Element_get_localName(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_localName(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Element_get_tagName(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_tagName(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Element_get_id(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_id(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Element_get_className(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_className(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Element_get_classList() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number that represents a handle to a DOMTokenList
## `Element_set_classList(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
handle | number | A number that represents a handle to a value
## `Element_get_attributes() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number that represents a handle to a NamedNodeMap
## `Element_set_attributes(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
handle | number | A number that represents a handle to a value

## `Element_getAttributeNames(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to [object Object]

## `Element_getAttribute(instance, name_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
name_start | number | memory location of string "name"
*output*|number| A number representing a handle to DOMString

## `Element_getAttributeNS(instance, namespace_start, localName_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
namespace_start | number | memory location of string "namespace"
localName_start | number | memory location of string "localName"
*output*|number| A number representing a handle to DOMString

## `Element_toggleAttribute(instance, name_start, force)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
name_start | number | memory location of string "name"
force | number | boolean represented as a number
*output*|number| A number representing a handle to boolean

## `Element_setAttribute(instance, name_start, value_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
name_start | number | memory location of string "name"
value_start | number | memory location of string "value"

## `Element_setAttributeNS(instance, namespace_start, name_start, value_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
namespace_start | number | memory location of string "namespace"
name_start | number | memory location of string "name"
value_start | number | memory location of string "value"

## `Element_removeAttribute(instance, name_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
name_start | number | memory location of string "name"

## `Element_removeAttributeNS(instance, namespace_start, localName_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
namespace_start | number | memory location of string "namespace"
localName_start | number | memory location of string "localName"

## `Element_hasAttribute(instance, name_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
name_start | number | memory location of string "name"
*output*|number| A number representing a handle to boolean

## `Element_hasAttributeNS(instance, namespace_start, localName_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
namespace_start | number | memory location of string "namespace"
localName_start | number | memory location of string "localName"
*output*|number| A number representing a handle to boolean

## `Element_hasAttributes(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to boolean

## `Element_closest(instance, selector_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
selector_start | number | memory location of string "selector"
*output*|number| A number representing a handle to Element

## `Element_matches(instance, selector_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
selector_start | number | memory location of string "selector"
*output*|number| A number representing a handle to boolean

## `Element_webkitMatchesSelector(instance, selector_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
selector_start | number | memory location of string "selector"
*output*|number| A number representing a handle to boolean

## `Element_getElementsWithGrid(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to [object Object]

## `Element_insertAdjacentElement(instance, where_start, element)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
where_start | number | memory location of string "where"
element | number | Element represented as a number
*output*|number| A number representing a handle to Element

## `Element_insertAdjacentText(instance, where_start, data_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
where_start | number | memory location of string "where"
data_start | number | memory location of string "data"
## `Element_get_fontSizeInflation(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type float
## `Element_set_fontSizeInflation(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value

## `Element_setPointerCapture(instance, pointerId) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
pointerId | number | long represented as a number

## `Element_releasePointerCapture(instance, pointerId) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
pointerId | number | long represented as a number

## `Element_hasPointerCapture(instance, pointerId)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
pointerId | number | long represented as a number
*output*|number| A number representing a handle to boolean

## `Element_setCapture(instance, retargetToElement) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
retargetToElement | number | boolean represented as a number

## `Element_releaseCapture(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance

## `Element_setCaptureAlways(instance, retargetToElement) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
retargetToElement | number | boolean represented as a number

## `Element_getAttributeNode(instance, name_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
name_start | number | memory location of string "name"
*output*|number| A number representing a handle to Attr

## `Element_setAttributeNode(instance, newAttr)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
newAttr | number | Attr represented as a number
*output*|number| A number representing a handle to Attr

## `Element_removeAttributeNode(instance, oldAttr)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
oldAttr | number | Attr represented as a number
*output*|number| A number representing a handle to Attr

## `Element_getAttributeNodeNS(instance, namespaceURI_start, localName_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
namespaceURI_start | number | memory location of string "namespaceURI"
localName_start | number | memory location of string "localName"
*output*|number| A number representing a handle to Attr

## `Element_setAttributeNodeNS(instance, newAttr)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
newAttr | number | Attr represented as a number
*output*|number| A number representing a handle to Attr

## `Element_scrollByNoFlush(instance, dx, dy)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
dx | number | long represented as a number
dy | number | long represented as a number
*output*|number| A number representing a handle to boolean

## `Element_getAsFlexContainer(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to Flex

## `Element_getGridFragments(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to [object Object]

## `Element_getTransformToAncestor(instance, ancestor)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
ancestor | number | Element represented as a number
*output*|number| A number representing a handle to DOMMatrixReadOnly

## `Element_getTransformToParent(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to DOMMatrixReadOnly

## `Element_getTransformToViewport(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to DOMMatrixReadOnly

## `Element_getClientRects(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to DOMRectList

## `Element_getBoundingClientRect(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
*output*|number| A number representing a handle to DOMRect

## `Element_scrollIntoView(instance, arg) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
arg | number | [object Object],[object Object] represented as a number
## `Element_get_scrollTop(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_scrollTop(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value
## `Element_get_scrollLeft(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_scrollLeft(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value
## `Element_get_scrollWidth(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_scrollWidth(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value
## `Element_get_scrollHeight(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_scrollHeight(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value

## `Element_scroll(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Element_scroll(instance, options) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
options | number | ScrollToOptions represented as a number

## `Element_scrollTo(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Element_scrollTo(instance, options) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
options | number | ScrollToOptions represented as a number

## `Element_scrollBy(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Element_scrollBy(instance, options) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
options | number | ScrollToOptions represented as a number
## `Element_get_clientTop(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_clientTop(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value
## `Element_get_clientLeft(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_clientLeft(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value
## `Element_get_clientWidth(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_clientWidth(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value
## `Element_get_clientHeight(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type long
## `Element_set_clientHeight(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  val | number | A number that represents a value
## `Element_get_innerHTML(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_innerHTML(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Element_get_outerHTML(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_outerHTML(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `Element_insertAdjacentHTML(instance, position_start, text_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
position_start | number | memory location of string "position"
text_start | number | memory location of string "text"

## `Element_querySelector(instance, selectors_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
selectors_start | number | memory location of string "selectors"
*output*|number| A number representing a handle to Element

## `Element_querySelectorAll(instance, selectors_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
selectors_start | number | memory location of string "selectors"
*output*|number| A number representing a handle to NodeList

## `Element_attachShadow(instance, shadowRootInitDict)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
shadowRootInitDict | number | ShadowRootInit represented as a number
*output*|number| A number representing a handle to ShadowRoot
## `Element_get_shadowRoot() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number that represents a handle to a ShadowRoot
## `Element_set_shadowRoot(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
handle | number | A number that represents a handle to a value
## `Element_get_openOrClosedShadowRoot() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number that represents a handle to a ShadowRoot
## `Element_set_openOrClosedShadowRoot(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
handle | number | A number that represents a handle to a value
## `Element_get_assignedSlot() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number that represents a handle to a HTMLSlotElement
## `Element_set_assignedSlot(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
handle | number | A number that represents a handle to a value
## `Element_get_slot(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Element
*output* | number | A number representing as result of type DOMString
## `Element_set_slot(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Element
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `Element_requestFullscreen(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance

## `Element_requestPointerLock(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Element instance
# EventTarget.webidl

## `EventTarget_addEventListener(instance, type_start, listener) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an EventTarget instance
type_start | number | memory location of string "type"
listener | number | EventListener represented as a number

## `EventTarget_removeEventListener(instance, type_start, listener) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an EventTarget instance
type_start | number | memory location of string "type"
listener | number | EventListener represented as a number

## `EventTarget_dispatchEvent(instance, event)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an EventTarget instance
event | number | Event represented as a number
*output*|number| A number representing a handle to boolean
# HTMLCanvasElement.webidl
## `HTMLCanvasElement_get_width(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLCanvasElement
*output* | number | A number representing as result of type unsigned long
## `HTMLCanvasElement_set_width(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLCanvasElement
  val | number | A number that represents a value
## `HTMLCanvasElement_get_height(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLCanvasElement
*output* | number | A number representing as result of type unsigned long
## `HTMLCanvasElement_set_height(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLCanvasElement
  val | number | A number that represents a value

## `HTMLCanvasElement_getContext(instance, contextId_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
contextId_start | number | memory location of string "contextId"
*output*|number| A number representing a handle to nsISupports

## `HTMLCanvasElement_toDataURL(instance, type_start, encoderOptions)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
type_start | number | memory location of string "type"
encoderOptions | number | any represented as a number
*output*|number| A number representing a handle to DOMString

## `HTMLCanvasElement_toBlob(instance, callback, type_start, encoderOptions) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
callback | number | BlobCallback represented as a number
type_start | number | memory location of string "type"
encoderOptions | number | any represented as a number

## `HTMLCanvasElement_transferControlToOffscreen(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
*output*|number| A number representing a handle to OffscreenCanvas
# HTMLInputElement.webidl
## `HTMLInputElement_get_accept(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_accept(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_alt(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_alt(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_autocomplete(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_autocomplete(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_autofocus(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_autofocus(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_defaultChecked(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_defaultChecked(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_checked(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_checked(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_disabled(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_disabled(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_form() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number that represents a handle to a HTMLFormElement
## `HTMLInputElement_set_form(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
handle | number | A number that represents a handle to a value
## `HTMLInputElement_get_files() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number that represents a handle to a FileList
## `HTMLInputElement_set_files(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
handle | number | A number that represents a handle to a value
## `HTMLInputElement_get_formAction(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_formAction(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_formEnctype(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_formEnctype(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_formMethod(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_formMethod(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_formNoValidate(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_formNoValidate(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_formTarget(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_formTarget(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_height(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type unsigned long
## `HTMLInputElement_set_height(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_indeterminate(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_indeterminate(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_inputMode(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_inputMode(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_list() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number that represents a handle to a HTMLElement
## `HTMLInputElement_set_list(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
handle | number | A number that represents a handle to a value
## `HTMLInputElement_get_max(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_max(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_maxLength(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type long
## `HTMLInputElement_set_maxLength(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_min(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_min(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_minLength(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type long
## `HTMLInputElement_set_minLength(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_multiple(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_multiple(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_name(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_name(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_pattern(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_pattern(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_placeholder(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_placeholder(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_readOnly(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_readOnly(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_required(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_required(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_size(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type unsigned long
## `HTMLInputElement_set_size(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_src(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_src(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_step(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_step(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_type(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_type(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_defaultValue(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_defaultValue(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_value(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_value(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_valueAsDate() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number that represents a handle to a Date
## `HTMLInputElement_set_valueAsDate(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
handle | number | A number that represents a handle to a value
## `HTMLInputElement_get_valueAsNumber(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type unrestricted double
## `HTMLInputElement_set_valueAsNumber(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_width(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type unsigned long
## `HTMLInputElement_set_width(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_willValidate(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type boolean
## `HTMLInputElement_set_willValidate(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  val | number | A number that represents a value
## `HTMLInputElement_get_validity() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number that represents a handle to a ValidityState
## `HTMLInputElement_set_validity(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
handle | number | A number that represents a handle to a value
## `HTMLInputElement_get_validationMessage(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_validationMessage(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `HTMLInputElement_checkValidity(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
*output*|number| A number representing a handle to boolean

## `HTMLInputElement_reportValidity(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
*output*|number| A number representing a handle to boolean

## `HTMLInputElement_setCustomValidity(instance, error_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
error_start | number | memory location of string "error"
## `HTMLInputElement_get_labels() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number that represents a handle to a NodeList
## `HTMLInputElement_set_labels(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
handle | number | A number that represents a handle to a value

## `HTMLInputElement_select(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
## `HTMLInputElement_get_selectionDirection(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_selectionDirection(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `HTMLInputElement_setRangeText(instance, replacement_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
replacement_start | number | memory location of string "replacement"

## `HTMLInputElement_setRangeText(instance, replacement_start, start, end, selectionMode) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
replacement_start | number | memory location of string "replacement"
start | number | unsigned long represented as a number
end | number | unsigned long represented as a number
selectionMode | number | SelectionMode represented as a number

## `HTMLInputElement_setSelectionRange(instance, start, end, direction_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
start | number | unsigned long represented as a number
end | number | unsigned long represented as a number
direction_start | number | memory location of string "direction"
## `HTMLInputElement_get_align(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_align(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `HTMLInputElement_get_useMap(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_useMap(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `HTMLInputElement_getDateTimeInputBoxValue(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
*output*|number| A number representing a handle to DateTimeValue

## `HTMLInputElement_updateDateTimeInputBox(instance, value) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
value | number | DateTimeValue represented as a number

## `HTMLInputElement_setDateTimePickerState(instance, open) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
open | number | boolean represented as a number

## `HTMLInputElement_getMinimum(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
*output*|number| A number representing a handle to double

## `HTMLInputElement_getMaximum(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLInputElement instance
*output*|number| A number representing a handle to double
## `HTMLInputElement_get_previewValue(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLInputElement
*output* | number | A number representing as result of type DOMString
## `HTMLInputElement_set_previewValue(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a HTMLInputElement
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
# KeyboardEvent.webidl
## `KeyboardEvent_get_charCode(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type unsigned long
## `KeyboardEvent_set_charCode(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_keyCode(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type unsigned long
## `KeyboardEvent_set_keyCode(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_altKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_set_altKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_ctrlKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_set_ctrlKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_shiftKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_set_shiftKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_metaKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_set_metaKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value

## `KeyboardEvent_getModifierState(instance, key_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an KeyboardEvent instance
key_start | number | memory location of string "key"
*output*|number| A number representing a handle to boolean
## `KeyboardEvent_get_location(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type unsigned long
## `KeyboardEvent_set_location(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_repeat(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_set_repeat(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_isComposing(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_set_isComposing(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  val | number | A number that represents a value
## `KeyboardEvent_get_key(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type DOMString
## `KeyboardEvent_set_key(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `KeyboardEvent_get_code(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type DOMString
## `KeyboardEvent_set_code(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a KeyboardEvent
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `KeyboardEvent_initKeyboardEvent(instance, typeArg_start, bubblesArg, cancelableArg, viewArg, keyArg_start, locationArg, ctrlKey, altKey, shiftKey, metaKey) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an KeyboardEvent instance
typeArg_start | number | memory location of string "typeArg"
bubblesArg | number | boolean represented as a number
cancelableArg | number | boolean represented as a number
viewArg | number | Window represented as a number
keyArg_start | number | memory location of string "keyArg"
locationArg | number | unsigned long represented as a number
ctrlKey | number | boolean represented as a number
altKey | number | boolean represented as a number
shiftKey | number | boolean represented as a number
metaKey | number | boolean represented as a number
## `KeyboardEvent_get_initDict() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number that represents a handle to a KeyboardEventInit
## `KeyboardEvent_set_initDict(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
handle | number | A number that represents a handle to a value
# MouseEvent.webidl
## `MouseEvent_get_screenX(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_screenX(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_screenY(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_screenY(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_clientX(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_clientX(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_clientY(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_clientY(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_x(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_x(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_y(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_y(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_offsetX(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_offsetX(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_offsetY(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_offsetY(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_ctrlKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_set_ctrlKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_shiftKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_set_shiftKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_altKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_set_altKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_metaKey(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_set_metaKey(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_button(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type short
## `MouseEvent_set_button(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_buttons(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type unsigned short
## `MouseEvent_set_buttons(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_relatedTarget() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number that represents a handle to a EventTarget
## `MouseEvent_set_relatedTarget(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
handle | number | A number that represents a handle to a value
## `MouseEvent_get_region(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type DOMString
## `MouseEvent_set_region(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `MouseEvent_get_movementX(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_movementX(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value
## `MouseEvent_get_movementY(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_set_movementY(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a MouseEvent
  val | number | A number that represents a value

## `MouseEvent_initMouseEvent(instance, typeArg_start, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an MouseEvent instance
typeArg_start | number | memory location of string "typeArg"
canBubbleArg | number | boolean represented as a number
cancelableArg | number | boolean represented as a number
viewArg | number | Window represented as a number
detailArg | number | long represented as a number
screenXArg | number | long represented as a number
screenYArg | number | long represented as a number
clientXArg | number | long represented as a number
clientYArg | number | long represented as a number
ctrlKeyArg | number | boolean represented as a number
altKeyArg | number | boolean represented as a number
shiftKeyArg | number | boolean represented as a number
metaKeyArg | number | boolean represented as a number
buttonArg | number | short represented as a number
relatedTargetArg | number | EventTarget represented as a number

## `MouseEvent_getModifierState(instance, keyArg_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an MouseEvent instance
keyArg_start | number | memory location of string "keyArg"
*output*|number| A number representing a handle to boolean
# Window.webidl
## `Window_get_window() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Window
## `Window_set_window(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_self() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Window
## `Window_set_self(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_document() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Document
## `Window_set_document(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_name(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type DOMString
## `Window_set_name(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string
## `Window_get_location() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Location
## `Window_set_location(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_history() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a History
## `Window_set_history(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_customElements() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a CustomElementRegistry
## `Window_set_customElements(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_locationbar() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_set_locationbar(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_menubar() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_set_menubar(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_personalbar() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_set_personalbar(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_scrollbars() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_set_scrollbars(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_statusbar() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_set_statusbar(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_toolbar() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_set_toolbar(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_status(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type DOMString
## `Window_set_status(instance,str,len)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  str | number | A number that represents memory position of a string
  len | number | A number that represents length of a string

## `Window_close(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
## `Window_get_closed(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type boolean
## `Window_set_closed(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value

## `Window_stop(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_focus(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_blur(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
## `Window_get_event(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_event(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_frames() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a WindowProxy
## `Window_set_frames(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_length(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type unsigned long
## `Window_set_length(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_top() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a WindowProxy
## `Window_set_top(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_opener(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_opener(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_parent() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a WindowProxy
## `Window_set_parent(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_frameElement() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Element
## `Window_set_frameElement(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value

## `Window_open(instance, url_start, target_start, features_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
url_start | number | memory location of string "url"
target_start | number | memory location of string "target"
features_start | number | memory location of string "features"
*output*|number| A number representing a handle to WindowProxy
## `Window_get_navigator() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Navigator
## `Window_set_navigator(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_external() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a External
## `Window_set_external(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_applicationCache() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a ApplicationCache
## `Window_set_applicationCache(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value

## `Window_alert(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_alert(instance, message_start) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message_start | number | memory location of string "message"

## `Window_confirm(instance, message_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message_start | number | memory location of string "message"
*output*|number| A number representing a handle to boolean

## `Window_prompt(instance, message_start, default_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message_start | number | memory location of string "message"
default_start | number | memory location of string "default"
*output*|number| A number representing a handle to DOMString

## `Window_print(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_postMessage(instance, message, targetOrigin_start, transfer) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message | number | any represented as a number
targetOrigin_start | number | memory location of string "targetOrigin"
transfer | number | [object Object] represented as a number
## `Window_get_onappinstalled() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_set_onappinstalled(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value

## `Window_captureEvents(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_releaseEvents(instance) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_getSelection(instance)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
*output*|number| A number representing a handle to Selection

## `Window_getComputedStyle(instance, elt, pseudoElt_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
elt | number | Element represented as a number
pseudoElt_start | number | memory location of string "pseudoElt"
*output*|number| A number representing a handle to CSSStyleDeclaration

## `Window_matchMedia(instance, query_start)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
query_start | number | memory location of string "query"
*output*|number| A number representing a handle to MediaQueryList
## `Window_get_screen() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Screen
## `Window_set_screen(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value

## `Window_moveTo(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_moveBy(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeTo(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeBy(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number
## `Window_get_innerWidth(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_innerWidth(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_innerHeight(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_innerHeight(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value

## `Window_scroll(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scroll(instance, options) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
options | number | ScrollToOptions represented as a number

## `Window_scrollTo(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollTo(instance, options) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
options | number | ScrollToOptions represented as a number

## `Window_scrollBy(instance, x, y) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollBy(instance, options) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
options | number | ScrollToOptions represented as a number
## `Window_get_scrollX(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_set_scrollX(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_pageXOffset(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_set_pageXOffset(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_scrollY(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_set_scrollY(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_pageYOffset(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_set_pageYOffset(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_screenX(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_screenX(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_screenY(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_screenY(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_outerWidth(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_outerWidth(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_outerHeight(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_set_outerHeight(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_devicePixelRatio(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_set_devicePixelRatio(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value

## `Window_requestAnimationFrame(instance, callback)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
callback | number | FrameRequestCallback represented as a number
*output*|number| A number representing a handle to long

## `Window_cancelAnimationFrame(instance, handle) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
handle | number | long represented as a number
## `Window_get_performance() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Performance
## `Window_set_performance(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_orientation(instance)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type short
## `Window_set_orientation(instance,val)`
  Argument | Type | description
  ---------|------|-------------
  target | number | A number that represents a handle to a Window
  val | number | A number that represents a value
## `Window_get_onorientationchange() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_set_onorientationchange(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_onvrdisplayconnect() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_set_onvrdisplayconnect(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_onvrdisplaydisconnect() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_set_onvrdisplaydisconnect(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_onvrdisplayactivate() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_set_onvrdisplayactivate(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_onvrdisplaydeactivate() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_set_onvrdisplaydeactivate(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_onvrdisplaypresentchange() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_set_onvrdisplaypresentchange(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value
## `Window_get_paintWorklet() -> number`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Worklet
## `Window_set_paintWorklet(handle)`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
handle | number | A number that represents a handle to a value

## `Window_requestIdleCallback(instance, callback, options)  -> number`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
callback | number | IdleRequestCallback represented as a number
options | number | IdleRequestOptions represented as a number
*output*|number| A number representing a handle to unsigned long

## `Window_cancelIdleCallback(instance, handle) `
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
handle | number | unsigned long represented as a number