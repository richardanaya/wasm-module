# webidl-loader
* let people simply write front end in web assembly without javascript knowledge
* expose [Web IDL](https://heycam.github.io/webidl/) ( functions to manipulate browser DOM, write to console, etc. ) to web assembly as close to host bindings spec in technology agnostic way
* this project is uber alpha and I only have console binding exposed for now! the plan is to expose progressively from `.webidl` files using a generator tool inside this project.

# HelloWorld
Let's load a web assembly module called `helloworld.wasm` and call `main`:

`helloworld.html`:
```html
<!-- polyfill web components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<!-- load webidl-loader component -->
<script src="https://unpkg.com/@webcomponents/webidl-loader@latest/webidl-loader.min.js"></script>
<!-- load your web assembly module, expose web IDL to it, and call 'main' by default -->
<webidl-loader src="helloworld.wasm"></webidl-loader>
```

Here's a web assembly example to log to console using a Web IDL generated function `console_log`. This is written using [Poetry](https://github.com/FantasyInternet/poetry)

`helloworld.poem`:
```python
export_memory "memory"
import "env" "console_log" log 2 0

export "main" main
  var msg = "hello world!"
  log (address_of msg) (size_of msg)
```

Here's a rust version:

`helloworld.rs`:
```rust
#![no_main]
use std::ffi::CString;
use std::os::raw::c_char;

extern "C" {
    fn console_log(start: *mut c_char, len: usize);
}

pub fn log(msg: &str) {
    let s = CString::new(msg).unwrap();
    let l = msg.len();
    unsafe {
        console_log(s.into_raw(), l);
    }
}

#[no_mangle]
pub fn main() -> () {
  log("hello world!");
}
```

# Documentation

All documented web IDL functions can be found in [api docs](https://github.com/richardanaya/webidl-loader/blob/master/webidl.md)

You can configure your web assembly module by using different attributes on your HTML tag. For instance if instead of `main` you have a function named `start` you want called on module load.

```html
<webidl-loader src="helloworld.wasm" execute="start"></webidl-loader>
```

## `<webidl-loader ... >` Attributes
`execute` - the first function to be called on loading


# Host Bindings

This project hopes to emulate how host bindings work in real web assembly as closely as possible. I'll have to make some assumptions, but if anyone knows better details I'd love to talk. Where I make assumptions, I'll try to be consistent.

For those who don't know what host bindings are, basically the future plan is to expose Web IDL in some way to web assembly in a standard way. But it's not been implemented yet. Maybe this can turn into a prototype.

https://webassembly.org/docs/future-features/
