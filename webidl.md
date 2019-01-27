
# Web IDL Documentation
This is a list of all the functions exposed to your web assembly module.

# Global

## `get_window()`
Retrieves the current Window of the browser.

No arguments

## `release_Window(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Window
## `release_ConsoleInstance(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a ConsoleInstance

# Console.webidl

## `console_assert(condition, message_start, message_len)`
Argument | Type | description
---------|------|-------------
condition | number | boolean represented as a number
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `console_clear()`
No Arguments

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
No Arguments

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
instance | number | number that represents a handler to an ConsoleInstance instance
condition | number | boolean represented as a number
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_clear(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance

## `ConsoleInstance_count(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_countReset(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_debug(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_error(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_info(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_log(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_table(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_trace(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_warn(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_dir(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_dirxml(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_group(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_groupCollapsed(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_groupEnd(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance

## `ConsoleInstance_time(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_timeLog(instance, label_start, label_len, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_timeEnd(instance, label_start, label_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_exception(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_timeStamp(instance, data)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
data | number | any represented as a number

## `ConsoleInstance_profile(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_profileEnd(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_reportForServiceWorkerScope(instance, scope_start, scope_len, message_start, message_len, filename_start, filename_len, lineNumber, columnNumber, level)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an ConsoleInstance instance
scope_start | number | memory location of string "scope"
scope_len | number | length of string "scope"
message_start | number | memory location of string "message"
message_len | number | length of string "message"
filename_start | number | memory location of string "filename"
filename_len | number | length of string "filename"
lineNumber | number | unsigned long represented as a number
columnNumber | number | unsigned long represented as a number
level | number | ConsoleLevel represented as a number
# Window.webidl

## `Window_close(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_stop(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_focus(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_blur(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_open(instance, url_start, url_len, target_start, target_len, features_start, features_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
url_start | number | memory location of string "url"
url_len | number | length of string "url"
target_start | number | memory location of string "target"
target_len | number | length of string "target"
features_start | number | memory location of string "features"
features_len | number | length of string "features"

## `Window_alert(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_alert(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `Window_confirm(instance, message_start, message_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `Window_prompt(instance, message_start, message_len, default_start, default_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"
default_start | number | memory location of string "default"
default_len | number | length of string "default"

## `Window_print(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_postMessage(instance, message, targetOrigin_start, targetOrigin_len, transfer)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
message | number | any represented as a number
targetOrigin_start | number | memory location of string "targetOrigin"
targetOrigin_len | number | length of string "targetOrigin"
transfer | number | [object Object] represented as a number

## `Window_captureEvents(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_releaseEvents(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_getSelection(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance

## `Window_getComputedStyle(instance, elt, pseudoElt_start, pseudoElt_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
elt | number | Element represented as a number
pseudoElt_start | number | memory location of string "pseudoElt"
pseudoElt_len | number | length of string "pseudoElt"

## `Window_matchMedia(instance, query_start, query_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
query_start | number | memory location of string "query"
query_len | number | length of string "query"

## `Window_moveTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_moveBy(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeBy(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
x | number | long represented as a number
y | number | long represented as a number

## `Window_scroll(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scroll(instance, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
options | number | ScrollToOptions represented as a number

## `Window_scrollTo(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollTo(instance, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
options | number | ScrollToOptions represented as a number

## `Window_scrollBy(instance, x, y)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollBy(instance, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
options | number | ScrollToOptions represented as a number

## `Window_requestAnimationFrame(instance, callback)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
callback | number | FrameRequestCallback represented as a number

## `Window_cancelAnimationFrame(instance, handle)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
handle | number | long represented as a number

## `Window_requestIdleCallback(instance, callback, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
callback | number | IdleRequestCallback represented as a number
options | number | IdleRequestOptions represented as a number

## `Window_cancelIdleCallback(instance, handle)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handler to an Window instance
handle | number | unsigned long represented as a number