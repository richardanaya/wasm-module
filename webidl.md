
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

# namespace `console`

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