
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
## `release_Document(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Document
## `release_DOMString(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a DOMString
## `release_Location(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Location
## `release_History(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a History
## `release_CustomElementRegistry(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a CustomElementRegistry
## `release_BarProp(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a BarProp
## `release_WindowProxy(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a WindowProxy
## `release_Element(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Element
## `release_Navigator(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Navigator
## `release_External(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a External
## `release_ApplicationCache(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a ApplicationCache
## `release_EventHandler(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a EventHandler
## `release_Screen(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Screen
## `release_Performance(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Performance
## `release_Worklet(handle)`
Argument | Type | description
---------|------|-------------
handle| number | A number representing a handle to a Worklet

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
# Window.webidl
## `Window_get_window`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Window
## `Window_get_self`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Window
## `Window_get_document`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Document
## `Window_get_name`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a DOMString
## `Window_get_location`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Location
## `Window_get_history`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a History
## `Window_get_customElements`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a CustomElementRegistry
## `Window_get_locationbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a BarProp
## `Window_get_menubar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a BarProp
## `Window_get_personalbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a BarProp
## `Window_get_scrollbars`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a BarProp
## `Window_get_statusbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a BarProp
## `Window_get_toolbar`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a BarProp
## `Window_get_status`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a DOMString

## `Window_close(instance)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
## `Window_get_closed`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type boolean

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
<return> | number | A number representing as result of type any
## `Window_get_frames`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a WindowProxy
## `Window_get_length`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type unsigned long
## `Window_get_top`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a WindowProxy
## `Window_get_opener`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type any
## `Window_get_parent`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a WindowProxy
## `Window_get_frameElement`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Element

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
## `Window_get_navigator`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Navigator
## `Window_get_external`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a External
## `Window_get_applicationCache`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a ApplicationCache

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

## `Window_prompt(instance, message_start, message_len, default_start, default_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
message_start | number | memory location of string "message"
message_len | number | length of string "message"
default_start | number | memory location of string "default"
default_len | number | length of string "default"

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
<return> | number | A number that represents a handle to a EventHandler

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

## `Window_getComputedStyle(instance, elt, pseudoElt_start, pseudoElt_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
elt | number | Element represented as a number
pseudoElt_start | number | memory location of string "pseudoElt"
pseudoElt_len | number | length of string "pseudoElt"

## `Window_matchMedia(instance, query_start, query_len)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
query_start | number | memory location of string "query"
query_len | number | length of string "query"
## `Window_get_screen`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Screen

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
<return> | number | A number representing as result of type any
## `Window_get_innerHeight`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type any

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
<return> | number | A number representing as result of type double
## `Window_get_pageXOffset`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type double
## `Window_get_scrollY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type double
## `Window_get_pageYOffset`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type double
## `Window_get_screenX`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type any
## `Window_get_screenY`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type any
## `Window_get_outerWidth`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type any
## `Window_get_outerHeight`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type any
## `Window_get_devicePixelRatio`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type double

## `Window_requestAnimationFrame(instance, callback)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
callback | number | FrameRequestCallback represented as a number

## `Window_cancelAnimationFrame(instance, handle)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
handle | number | long represented as a number
## `Window_get_performance`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Performance
## `Window_get_orientation`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number representing as result of type short
## `Window_get_onorientationchange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplayconnect`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplaydisconnect`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplayactivate`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplaydeactivate`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a EventHandler
## `Window_get_onvrdisplaypresentchange`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a EventHandler
## `Window_get_paintWorklet`
Argument | Type | description
---------|------|-------------
target | number | A number that represents a handle to a Window
<return> | number | A number that represents a handle to a Worklet

## `Window_requestIdleCallback(instance, callback, options)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
callback | number | IdleRequestCallback represented as a number
options | number | IdleRequestOptions represented as a number

## `Window_cancelIdleCallback(instance, handle)`
Argument | Type | description
---------|------|-------------
instance | number | number that represents a handle to an Window instance
handle | number | unsigned long represented as a number