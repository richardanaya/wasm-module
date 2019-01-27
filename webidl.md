
# Web IDL Documentation
This is a list of all the functions exposed to your web assembly module.

#Global

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

# Console

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
# Console
# Console
# Console
# Console
# Console
# Console
# Console
# Console
# Console

## `ConsoleInstance_assert(o, condition, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
condition | number | boolean represented as a number
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_clear(o)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on

## `ConsoleInstance_count(o, label_start, label_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_countReset(o, label_start, label_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_debug(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_error(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_info(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_log(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_table(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_trace(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_warn(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_dir(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_dirxml(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_group(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_groupCollapsed(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_groupEnd(o)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on

## `ConsoleInstance_time(o, label_start, label_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_timeLog(o, label_start, label_len, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
label_start | number | memory location of string "label"
label_len | number | length of string "label"
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_timeEnd(o, label_start, label_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
label_start | number | memory location of string "label"
label_len | number | length of string "label"

## `ConsoleInstance_exception(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_timeStamp(o, data)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
data | number | any represented as a number

## `ConsoleInstance_profile(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `ConsoleInstance_profileEnd(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"
# Console
# Console
# Console
# Console
# Console

## `ConsoleInstance_reportForServiceWorkerScope(o, scope_start, scope_len, message_start, message_len, filename_start, filename_len, lineNumber, columnNumber, level)`
Argument | Type | description
---------|------|-------------
o | ConsoleInstance | the target to call this operation on
scope_start | number | memory location of string "scope"
scope_len | number | length of string "scope"
message_start | number | memory location of string "message"
message_len | number | length of string "message"
filename_start | number | memory location of string "filename"
filename_len | number | length of string "filename"
lineNumber | number | unsigned long represented as a number
columnNumber | number | unsigned long represented as a number
level | number | ConsoleLevel represented as a number
# Console
# Window

## `Window_close(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on

## `Window_stop(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on

## `Window_focus(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on

## `Window_blur(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on

## `Window_open(o, url_start, url_len, target_start, target_len, features_start, features_len)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
url_start | number | memory location of string "url"
url_len | number | length of string "url"
target_start | number | memory location of string "target"
target_len | number | length of string "target"
features_start | number | memory location of string "features"
features_len | number | length of string "features"

## `Window_alert(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on

## `Window_alert(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `Window_confirm(o, message_start, message_len)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"

## `Window_prompt(o, message_start, message_len, default_start, default_len)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
message_start | number | memory location of string "message"
message_len | number | length of string "message"
default_start | number | memory location of string "default"
default_len | number | length of string "default"

## `Window_print(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on

## `Window_postMessage(o, message, targetOrigin_start, targetOrigin_len, transfer)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
message | number | any represented as a number
targetOrigin_start | number | memory location of string "targetOrigin"
targetOrigin_len | number | length of string "targetOrigin"
transfer | number | [object Object] represented as a number
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window

## `Window_captureEvents(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on

## `Window_releaseEvents(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
# Window

## `Window_getSelection(o)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
# Window

## `Window_getComputedStyle(o, elt, pseudoElt_start, pseudoElt_len)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
elt | number | Element represented as a number
pseudoElt_start | number | memory location of string "pseudoElt"
pseudoElt_len | number | length of string "pseudoElt"
# Window
# Window
# Window
# Window

## `Window_matchMedia(o, query_start, query_len)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
query_start | number | memory location of string "query"
query_len | number | length of string "query"

## `Window_moveTo(o, x, y)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
x | number | long represented as a number
y | number | long represented as a number

## `Window_moveBy(o, x, y)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeTo(o, x, y)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
x | number | long represented as a number
y | number | long represented as a number

## `Window_resizeBy(o, x, y)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
x | number | long represented as a number
y | number | long represented as a number

## `Window_scroll(o, x, y)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scroll(o, options)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
options | number | ScrollToOptions represented as a number

## `Window_scrollTo(o, x, y)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollTo(o, options)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
options | number | ScrollToOptions represented as a number

## `Window_scrollBy(o, x, y)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
x | number | unrestricted double represented as a number
y | number | unrestricted double represented as a number

## `Window_scrollBy(o, options)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
options | number | ScrollToOptions represented as a number
# Window

## `Window_requestAnimationFrame(o, callback)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
callback | number | FrameRequestCallback represented as a number

## `Window_cancelAnimationFrame(o, handle)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
handle | number | long represented as a number
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window
# Window

## `Window_requestIdleCallback(o, callback, options)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
callback | number | IdleRequestCallback represented as a number
options | number | IdleRequestOptions represented as a number

## `Window_cancelIdleCallback(o, handle)`
Argument | Type | description
---------|------|-------------
o | Window | the target to call this operation on
handle | number | unsigned long represented as a number
# Window
# Window
# Window
# Window