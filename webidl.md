
# Web IDL Documentation
This is a list of all the functions exposed to your web assembly module.

# Global

## `Global_getWindow()`
Retrieves the current Window of the browser.

## `Global_release(handle)`
Release a handle to reference in browser.

## `Global_createEventListener() number`
Creates an event handler that returns a handle that can be used to identify it.

# CanvasRenderingContext2D.webidl
## `CanvasRenderingContext2D_get_canvas`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a HTMLCanvasElement

## `CanvasRenderingContext2D_drawWindow(instance, window, x, y, w, h, bgColor_start, bgColor_len, flags)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
window | number | Window represented as a number
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number
bgColor_start | number | memory location of string "bgColor"
bgColor_len | number | length of string "bgColor"
flags | number | unsigned long represented as a number

## `CanvasRenderingContext2D_demote(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_save(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_restore(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_scale(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_rotate(instance, angle)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
angle | number | double represented as a number

## `CanvasRenderingContext2D_translate(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_transform(instance, a, b, c, d, e, f)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
a | number | double represented as a number
b | number | double represented as a number
c | number | double represented as a number
d | number | double represented as a number
e | number | double represented as a number
f | number | double represented as a number

## `CanvasRenderingContext2D_setTransform(instance, a, b, c, d, e, f)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
a | number | double represented as a number
b | number | double represented as a number
c | number | double represented as a number
d | number | double represented as a number
e | number | double represented as a number
f | number | double represented as a number

## `CanvasRenderingContext2D_resetTransform(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
## `CanvasRenderingContext2D_get_globalAlpha`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type unrestricted double
## `CanvasRenderingContext2D_get_globalCompositeOperation`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString
## `CanvasRenderingContext2D_get_imageSmoothingEnabled`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type boolean
## `CanvasRenderingContext2D_get_strokeStyle`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString
## `CanvasRenderingContext2D_get_fillStyle`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString

## `CanvasRenderingContext2D_createLinearGradient(instance, x0, y0, x1, y1)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x0 | number | double represented as a number
y0 | number | double represented as a number
x1 | number | double represented as a number
y1 | number | double represented as a number
*output*|number| A number representing a handle to CanvasGradient

## `CanvasRenderingContext2D_createRadialGradient(instance, x0, y0, r0, x1, y1, r1)`
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

## `CanvasRenderingContext2D_createPattern(instance, image, repetition_start, repetition_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
image | number | CanvasImageSource represented as a number
repetition_start | number | memory location of string "repetition"
repetition_len | number | length of string "repetition"
*output*|number| A number representing a handle to CanvasPattern
## `CanvasRenderingContext2D_get_shadowOffsetX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_get_shadowOffsetY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_get_shadowBlur`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_get_shadowColor`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString
## `CanvasRenderingContext2D_get_filter`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString

## `CanvasRenderingContext2D_clearRect(instance, x, y, w, h)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_fillRect(instance, x, y, w, h)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_strokeRect(instance, x, y, w, h)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_beginPath(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_fill(instance, winding)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_fill(instance, path, winding)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_stroke(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_stroke(instance, path)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number

## `CanvasRenderingContext2D_clip(instance, winding)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_clip(instance, path, winding)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
winding | number | CanvasWindingRule represented as a number

## `CanvasRenderingContext2D_isPointInPath(instance, x, y, winding)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number
winding | number | CanvasWindingRule represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_isPointInPath(instance, path, x, y, winding)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number
winding | number | CanvasWindingRule represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_isPointInStroke(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_isPointInStroke(instance, path, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
path | number | Path2D represented as a number
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_drawFocusIfNeeded(instance, element)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
element | number | Element represented as a number

## `CanvasRenderingContext2D_drawCustomFocusRing(instance, element)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
element | number | Element represented as a number
*output*|number| A number representing a handle to boolean

## `CanvasRenderingContext2D_fillText(instance, text_start, text_len, x, y, maxWidth)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
text_start | number | memory location of string "text"
text_len | number | length of string "text"
x | number | double represented as a number
y | number | double represented as a number
maxWidth | number | double represented as a number

## `CanvasRenderingContext2D_strokeText(instance, text_start, text_len, x, y, maxWidth)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
text_start | number | memory location of string "text"
text_len | number | length of string "text"
x | number | double represented as a number
y | number | double represented as a number
maxWidth | number | double represented as a number

## `CanvasRenderingContext2D_measureText(instance, text_start, text_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
text_start | number | memory location of string "text"
text_len | number | length of string "text"
*output*|number| A number representing a handle to TextMetrics

## `CanvasRenderingContext2D_drawImage(instance, image, dx, dy)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
image | number | CanvasImageSource represented as a number
dx | number | double represented as a number
dy | number | double represented as a number

## `CanvasRenderingContext2D_drawImage(instance, image, dx, dy, dw, dh)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
image | number | CanvasImageSource represented as a number
dx | number | double represented as a number
dy | number | double represented as a number
dw | number | double represented as a number
dh | number | double represented as a number

## `CanvasRenderingContext2D_drawImage(instance, image, sx, sy, sw, sh, dx, dy, dw, dh)`
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

## `CanvasRenderingContext2D_createImageData(instance, sw, sh)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
sw | number | double represented as a number
sh | number | double represented as a number
*output*|number| A number representing a handle to ImageData

## `CanvasRenderingContext2D_createImageData(instance, imagedata)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
imagedata | number | ImageData represented as a number
*output*|number| A number representing a handle to ImageData

## `CanvasRenderingContext2D_getImageData(instance, sx, sy, sw, sh)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
sx | number | double represented as a number
sy | number | double represented as a number
sw | number | double represented as a number
sh | number | double represented as a number
*output*|number| A number representing a handle to ImageData

## `CanvasRenderingContext2D_putImageData(instance, imagedata, dx, dy)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
imagedata | number | ImageData represented as a number
dx | number | double represented as a number
dy | number | double represented as a number

## `CanvasRenderingContext2D_putImageData(instance, imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)`
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
## `CanvasRenderingContext2D_get_lineWidth`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_get_lineCap`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString
## `CanvasRenderingContext2D_get_lineJoin`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString
## `CanvasRenderingContext2D_get_miterLimit`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double

## `CanvasRenderingContext2D_setLineDash(instance, segments)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
segments | number | [object Object] represented as a number

## `CanvasRenderingContext2D_getLineDash(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
*output*|number| A number representing a handle to [object Object]
## `CanvasRenderingContext2D_get_lineDashOffset`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number representing as result of type double
## `CanvasRenderingContext2D_get_font`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString
## `CanvasRenderingContext2D_get_textAlign`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString
## `CanvasRenderingContext2D_get_textBaseline`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a CanvasRenderingContext2D
*output* | number | A number that represents a handle to a DOMString

## `CanvasRenderingContext2D_closePath(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasRenderingContext2D_moveTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_lineTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_quadraticCurveTo(instance, cpx, cpy, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
cpx | number | double represented as a number
cpy | number | double represented as a number
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_bezierCurveTo(instance, cp1x, cp1y, cp2x, cp2y, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
cp1x | number | double represented as a number
cp1y | number | double represented as a number
cp2x | number | double represented as a number
cp2y | number | double represented as a number
x | number | double represented as a number
y | number | double represented as a number

## `CanvasRenderingContext2D_arcTo(instance, x1, y1, x2, y2, radius)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x1 | number | double represented as a number
y1 | number | double represented as a number
x2 | number | double represented as a number
y2 | number | double represented as a number
radius | number | double represented as a number

## `CanvasRenderingContext2D_rect(instance, x, y, w, h)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
w | number | double represented as a number
h | number | double represented as a number

## `CanvasRenderingContext2D_arc(instance, x, y, radius, startAngle, endAngle, anticlockwise)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
x | number | double represented as a number
y | number | double represented as a number
radius | number | double represented as a number
startAngle | number | double represented as a number
endAngle | number | double represented as a number
anticlockwise | number | boolean represented as a number

## `CanvasRenderingContext2D_ellipse(instance, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)`
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

## `CanvasRenderingContext2D_addHitRegion(instance, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
options | number | HitRegionOptions represented as a number

## `CanvasRenderingContext2D_removeHitRegion(instance, id_start, id_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance
id_start | number | memory location of string "id"
id_len | number | length of string "id"

## `CanvasRenderingContext2D_clearHitRegions(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasRenderingContext2D instance

## `CanvasGradient_addColorStop(instance, offset, color_start, color_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasGradient instance
offset | number | float represented as a number
color_start | number | memory location of string "color"
color_len | number | length of string "color"

## `CanvasPattern_setTransform(instance, matrix)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an CanvasPattern instance
matrix | number | SVGMatrix represented as a number
## `TextMetrics_get_width`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a TextMetrics
*output* | number | A number representing as result of type double

## `Path2D_addPath(instance, path, transformation)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Path2D instance
path | number | Path2D represented as a number
transformation | number | SVGMatrix represented as a number
# Console.webidl

## `console_assert(condition, message_start, message_len)`
Argument | Type | description
---------|------|-------------
condition | number | boolean represented as a number
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_clear()`

## `console_count(label_start, label_len)`
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `console_countReset(label_start, label_len)`
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `console_debug(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_error(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_info(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_log(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_table(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_trace(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_warn(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_dir(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_dirxml(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_group(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_groupCollapsed(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_groupEnd()`

## `console_time(label_start, label_len)`
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `console_timeLog(label_start, label_len, message_start, message_len)`
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"
label_len | number | length of string "label"
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_timeEnd(label_start, label_len)`
Argument | Type | description
---------|------|-------------
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `console_exception(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_timeStamp(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_profile(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_profileEnd(message_start, message_len)`
Argument | Type | description
---------|------|-------------
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_assert(instance, condition, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
condition | number | boolean represented as a number
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_clear(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance

## `ConsoleInstance_count(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_countReset(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_debug(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_error(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_info(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_log(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_table(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_trace(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_warn(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_dir(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_dirxml(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_group(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_groupCollapsed(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_groupEnd(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance

## `ConsoleInstance_time(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_timeLog(instance, label_start, label_len, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_timeEnd(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_exception(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_timeStamp(instance, data)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
data | number | any represented as a number

## `ConsoleInstance_profile(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_profileEnd(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_reportForServiceWorkerScope(instance, scope_start, scope_len, message_start, message_len, filename_start, filename_len, lineNumber, columnNumber, level)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an ConsoleInstance instance
scope_start | number | memory location of string "scope"
scope_len | number | length of string "scope"
message_start | number | memory location of string "message"
message_len | number | length of string "message"
filename_start | number | memory location of string "filename"
filename_len | number | length of string "filename"
lineNumber | number | unsigned long represented as a number
columnNumber | number | unsigned long represented as a number
level | number | ConsoleLevel represented as a number
# Document.webidl
## `Document_get_implementation`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMImplementation
## `Document_get_URL`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_documentURI`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_compatMode`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_characterSet`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_charset`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_inputEncoding`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_contentType`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_doctype`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DocumentType
## `Document_get_documentElement`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Element

## `Document_getElementsByTagName(instance, localName_start, localName_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
localName_start | number | memory location of string "localName"
localName_len | number | length of string "localName"
*output*|number| A number representing a handle to HTMLCollection

## `Document_getElementsByTagNameNS(instance, namespace_start, namespace_len, localName_start, localName_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
namespace_start | number | memory location of string "namespace"
namespace_len | number | length of string "namespace"
localName_start | number | memory location of string "localName"
localName_len | number | length of string "localName"
*output*|number| A number representing a handle to HTMLCollection

## `Document_getElementsByClassName(instance, classNames_start, classNames_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
classNames_start | number | memory location of string "classNames"
classNames_len | number | length of string "classNames"
*output*|number| A number representing a handle to HTMLCollection

## `Document_getElementById(instance, elementId_start, elementId_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
elementId_start | number | memory location of string "elementId"
elementId_len | number | length of string "elementId"
*output*|number| A number representing a handle to Element

## `Document_createElement(instance, localName_start, localName_len, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
localName_start | number | memory location of string "localName"
localName_len | number | length of string "localName"
options | number | [object Object],[object Object] represented as a number
*output*|number| A number representing a handle to Element

## `Document_createElementNS(instance, namespace_start, namespace_len, qualifiedName_start, qualifiedName_len, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
namespace_start | number | memory location of string "namespace"
namespace_len | number | length of string "namespace"
qualifiedName_start | number | memory location of string "qualifiedName"
qualifiedName_len | number | length of string "qualifiedName"
options | number | [object Object],[object Object] represented as a number
*output*|number| A number representing a handle to Element

## `Document_createDocumentFragment(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to DocumentFragment

## `Document_createTextNode(instance, data_start, data_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
data_start | number | memory location of string "data"
data_len | number | length of string "data"
*output*|number| A number representing a handle to Text

## `Document_createComment(instance, data_start, data_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
data_start | number | memory location of string "data"
data_len | number | length of string "data"
*output*|number| A number representing a handle to Comment

## `Document_createProcessingInstruction(instance, target_start, target_len, data_start, data_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
target_start | number | memory location of string "target"
target_len | number | length of string "target"
data_start | number | memory location of string "data"
data_len | number | length of string "data"
*output*|number| A number representing a handle to ProcessingInstruction

## `Document_importNode(instance, node, deep)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
node | number | Node represented as a number
deep | number | boolean represented as a number
*output*|number| A number representing a handle to Node

## `Document_adoptNode(instance, node)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
node | number | Node represented as a number
*output*|number| A number representing a handle to Node

## `Document_createEvent(instance, interface_start, interface_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
interface_start | number | memory location of string "interface"
interface_len | number | length of string "interface"
*output*|number| A number representing a handle to Event

## `Document_createRange(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to Range

## `Document_createNodeIterator(instance, root, whatToShow, filter)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
root | number | Node represented as a number
whatToShow | number | unsigned long represented as a number
filter | number | NodeFilter represented as a number
*output*|number| A number representing a handle to NodeIterator

## `Document_createTreeWalker(instance, root, whatToShow, filter)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
root | number | Node represented as a number
whatToShow | number | unsigned long represented as a number
filter | number | NodeFilter represented as a number
*output*|number| A number representing a handle to TreeWalker

## `Document_createCDATASection(instance, data_start, data_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
data_start | number | memory location of string "data"
data_len | number | length of string "data"
*output*|number| A number representing a handle to CDATASection

## `Document_createAttribute(instance, name_start, name_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
name_start | number | memory location of string "name"
name_len | number | length of string "name"
*output*|number| A number representing a handle to Attr

## `Document_createAttributeNS(instance, namespace_start, namespace_len, name_start, name_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
namespace_start | number | memory location of string "namespace"
namespace_len | number | length of string "namespace"
name_start | number | memory location of string "name"
name_len | number | length of string "name"
*output*|number| A number representing a handle to Attr
## `Document_get_location`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Location
## `Document_get_referrer`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_lastModified`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_readyState`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_title`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_dir`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_body`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLElement
## `Document_get_head`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLHeadElement
## `Document_get_images`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_get_embeds`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_get_plugins`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_get_links`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_get_forms`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_get_scripts`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection

## `Document_getElementsByName(instance, elementName_start, elementName_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
elementName_start | number | memory location of string "elementName"
elementName_len | number | length of string "elementName"
*output*|number| A number representing a handle to NodeList
## `Document_get_defaultView`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a WindowProxy

## `Document_hasFocus(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to boolean
## `Document_get_onreadystatechange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_onbeforescriptexecute`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_onafterscriptexecute`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_onselectionchange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_currentScript`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Element

## `Document_releaseCapture(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_documentURIObject`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a URI
## `Document_get_referrerPolicy`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type unsigned long
## `Document_get_anchors`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_get_applets`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a HTMLCollection
## `Document_get_fullscreen`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_get_fullscreenEnabled`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean

## `Document_exitFullscreen(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_onfullscreenchange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_onfullscreenerror`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler

## `Document_exitPointerLock(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_onpointerlockchange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_onpointerlockerror`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_hidden`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_get_visibilityState`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a VisibilityState
## `Document_get_onvisibilitychange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a EventHandler
## `Document_get_selectedStyleSheetSet`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_lastStyleSheetSet`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_preferredStyleSheetSet`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString
## `Document_get_styleSheetSets`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMStringList

## `Document_enableStyleSheetsForSet(instance, name_start, name_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
name_start | number | memory location of string "name"
name_len | number | length of string "name"

## `Document_caretPositionFromPoint(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
x | number | float represented as a number
y | number | float represented as a number
*output*|number| A number representing a handle to CaretPosition
## `Document_get_scrollingElement`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a Element

## `Document_querySelector(instance, selectors_start, selectors_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
selectors_start | number | memory location of string "selectors"
selectors_len | number | length of string "selectors"
*output*|number| A number representing a handle to Element

## `Document_querySelectorAll(instance, selectors_start, selectors_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
selectors_start | number | memory location of string "selectors"
selectors_len | number | length of string "selectors"
*output*|number| A number representing a handle to NodeList
## `Document_get_timeline`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DocumentTimeline

## `Document_getAnimations(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to [object Object]
## `Document_get_rootElement`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a SVGSVGElement
## `Document_get_isSrcdocDocument`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean
## `Document_get_sandboxFlagsAsString`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a DOMString

## `Document_insertAnonymousContent(instance, aElement)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
aElement | number | Element represented as a number
*output*|number| A number representing a handle to AnonymousContent

## `Document_removeAnonymousContent(instance, aContent)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
aContent | number | AnonymousContent represented as a number

## `Document_getSelection(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
*output*|number| A number representing a handle to Selection
## `Document_get_userHasInteracted`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number representing as result of type boolean

## `Document_notifyUserGestureActivation(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Document instance
## `Document_get_documentFlashClassification`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Document
*output* | number | A number that represents a handle to a FlashClassification
# EventTarget.webidl

## `EventTarget_addEventListener(instance, type_start, type_len, listener)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an EventTarget instance
type_start | number | memory location of string "type"
type_len | number | length of string "type"
listener | number | EventListener represented as a number

## `EventTarget_removeEventListener(instance, type_start, type_len, listener)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an EventTarget instance
type_start | number | memory location of string "type"
type_len | number | length of string "type"
listener | number | EventListener represented as a number

## `EventTarget_dispatchEvent(instance, event)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an EventTarget instance
event | number | Event represented as a number
*output*|number| A number representing a handle to boolean
# HTMLCanvasElement.webidl
## `HTMLCanvasElement_get_width`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLCanvasElement
*output* | number | A number representing as result of type unsigned long
## `HTMLCanvasElement_get_height`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a HTMLCanvasElement
*output* | number | A number representing as result of type unsigned long

## `HTMLCanvasElement_getContext(instance, contextId_start, contextId_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
contextId_start | number | memory location of string "contextId"
contextId_len | number | length of string "contextId"
*output*|number| A number representing a handle to nsISupports

## `HTMLCanvasElement_toDataURL(instance, type_start, type_len, encoderOptions)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
type_start | number | memory location of string "type"
type_len | number | length of string "type"
encoderOptions | number | any represented as a number
*output*|number| A number representing a handle to DOMString

## `HTMLCanvasElement_toBlob(instance, callback, type_start, type_len, encoderOptions)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
callback | number | BlobCallback represented as a number
type_start | number | memory location of string "type"
type_len | number | length of string "type"
encoderOptions | number | any represented as a number

## `HTMLCanvasElement_transferControlToOffscreen(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an HTMLCanvasElement instance
*output*|number| A number representing a handle to OffscreenCanvas
# KeyboardEvent.webidl
## `KeyboardEvent_get_charCode`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type unsigned long
## `KeyboardEvent_get_keyCode`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type unsigned long
## `KeyboardEvent_get_altKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_get_ctrlKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_get_shiftKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_get_metaKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean

## `KeyboardEvent_getModifierState(instance, key_start, key_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an KeyboardEvent instance
key_start | number | memory location of string "key"
key_len | number | length of string "key"
*output*|number| A number representing a handle to boolean
## `KeyboardEvent_get_location`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type unsigned long
## `KeyboardEvent_get_repeat`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_get_isComposing`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number representing as result of type boolean
## `KeyboardEvent_get_key`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number that represents a handle to a DOMString
## `KeyboardEvent_get_code`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number that represents a handle to a DOMString

## `KeyboardEvent_initKeyboardEvent(instance, typeArg_start, typeArg_len, bubblesArg, cancelableArg, viewArg, keyArg_start, keyArg_len, locationArg, ctrlKey, altKey, shiftKey, metaKey)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an KeyboardEvent instance
typeArg_start | number | memory location of string "typeArg"
typeArg_len | number | length of string "typeArg"
bubblesArg | number | boolean represented as a number
cancelableArg | number | boolean represented as a number
viewArg | number | Window represented as a number
keyArg_start | number | memory location of string "keyArg"
keyArg_len | number | length of string "keyArg"
locationArg | number | unsigned long represented as a number
ctrlKey | number | boolean represented as a number
altKey | number | boolean represented as a number
shiftKey | number | boolean represented as a number
metaKey | number | boolean represented as a number
## `KeyboardEvent_get_initDict`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a KeyboardEvent
*output* | number | A number that represents a handle to a KeyboardEventInit
# MouseEvent.webidl
## `MouseEvent_get_screenX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_screenY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_clientX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_clientY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_x`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_y`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_offsetX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_offsetY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_ctrlKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_get_shiftKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_get_altKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_get_metaKey`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type boolean
## `MouseEvent_get_button`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type short
## `MouseEvent_get_buttons`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type unsigned short
## `MouseEvent_get_relatedTarget`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number that represents a handle to a EventTarget
## `MouseEvent_get_region`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number that represents a handle to a DOMString
## `MouseEvent_get_movementX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long
## `MouseEvent_get_movementY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a MouseEvent
*output* | number | A number representing as result of type long

## `MouseEvent_initMouseEvent(instance, typeArg_start, typeArg_len, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an MouseEvent instance
typeArg_start | number | memory location of string "typeArg"
typeArg_len | number | length of string "typeArg"
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

## `MouseEvent_getModifierState(instance, keyArg_start, keyArg_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an MouseEvent instance
keyArg_start | number | memory location of string "keyArg"
keyArg_len | number | length of string "keyArg"
*output*|number| A number representing a handle to boolean
# Window.webidl
## `Window_get_window`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Window
## `Window_get_self`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Window
## `Window_get_document`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Document
## `Window_get_name`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a DOMString
## `Window_get_location`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Location
## `Window_get_history`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a History
## `Window_get_customElements`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a CustomElementRegistry
## `Window_get_locationbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_get_menubar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_get_personalbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_get_scrollbars`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_get_statusbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_get_toolbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a BarProp
## `Window_get_status`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a DOMString

## `Window_close(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
## `Window_get_closed`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type boolean

## `Window_stop(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_focus(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_blur(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
## `Window_get_event`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_get_frames`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a WindowProxy
## `Window_get_length`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type unsigned long
## `Window_get_top`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a WindowProxy
## `Window_get_opener`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_get_parent`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a WindowProxy
## `Window_get_frameElement`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Element

## `Window_open(instance, url_start, url_len, target_start, target_len, features_start, features_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
url_start | number | memory location of string "url"
url_len | number | length of string "url"
target_start | number | memory location of string "target"
target_len | number | length of string "target"
features_start | number | memory location of string "features"
features_len | number | length of string "features"
*output*|number| A number representing a handle to WindowProxy
## `Window_get_navigator`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Navigator
## `Window_get_external`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a External
## `Window_get_applicationCache`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a ApplicationCache

## `Window_alert(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_alert(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `Window_confirm(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"
*output*|number| A number representing a handle to boolean

## `Window_prompt(instance, message_start, message_len, default_start, default_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"
default_start | number | memory location of string "default"
default_len | number | length of string "default"
*output*|number| A number representing a handle to DOMString

## `Window_print(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_postMessage(instance, message, targetOrigin_start, targetOrigin_len, transfer)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message | number | any represented as a number
targetOrigin_start | number | memory location of string "targetOrigin"
targetOrigin_len | number | length of string "targetOrigin"
transfer | number | [object Object] represented as a number
## `Window_get_onappinstalled`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler

## `Window_captureEvents(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_releaseEvents(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance

## `Window_getSelection(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
*output*|number| A number representing a handle to Selection

## `Window_getComputedStyle(instance, elt, pseudoElt_start, pseudoElt_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
elt | number | Element represented as a number
pseudoElt_start | number | memory location of string "pseudoElt"
pseudoElt_len | number | length of string "pseudoElt"
*output*|number| A number representing a handle to CSSStyleDeclaration

## `Window_matchMedia(instance, query_start, query_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
query_start | number | memory location of string "query"
query_len | number | length of string "query"
*output*|number| A number representing a handle to MediaQueryList
## `Window_get_screen`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Screen

## `Window_moveTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_moveBy(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeBy(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | long represented as a number
y | number | long represented as a number
## `Window_get_innerWidth`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_get_innerHeight`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any

## `Window_scroll(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scroll(instance, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
options | number | ScrollToOptions represented as a number

## `Window_scrollTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollTo(instance, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
options | number | ScrollToOptions represented as a number

## `Window_scrollBy(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollBy(instance, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
options | number | ScrollToOptions represented as a number
## `Window_get_scrollX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_get_pageXOffset`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_get_scrollY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_get_pageYOffset`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double
## `Window_get_screenX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_get_screenY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_get_outerWidth`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_get_outerHeight`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type any
## `Window_get_devicePixelRatio`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type double

## `Window_requestAnimationFrame(instance, callback)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
callback | number | FrameRequestCallback represented as a number
*output*|number| A number representing a handle to long

## `Window_cancelAnimationFrame(instance, handle)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
handle | number | long represented as a number
## `Window_get_performance`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Performance
## `Window_get_orientation`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number representing as result of type short
## `Window_get_onorientationchange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplayconnect`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplaydisconnect`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplayactivate`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplaydeactivate`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplaypresentchange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a EventHandler
## `Window_get_paintWorklet`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
*output* | number | A number that represents a handle to a Worklet

## `Window_requestIdleCallback(instance, callback, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
callback | number | IdleRequestCallback represented as a number
options | number | IdleRequestOptions represented as a number
*output*|number| A number representing a handle to unsigned long

## `Window_cancelIdleCallback(instance, handle)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
handle | number | unsigned long represented as a number