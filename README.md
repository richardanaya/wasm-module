# webidl-loader
* let people simply write front end in web assembly without javascript knowledge
* expose [Web IDL](https://heycam.github.io/webidl/) ( functions to manipulate browser DOM, write to console, etc. ) to web assembly as close to host bindings spec in technology agnostic way
* this project is uber alpha and I only have console binding exposed for now! the plan is to expose progressively from `.webidl` files using a generator tool inside this project.

# Functionality
- [x] callbacks
- [x] web idl that return strings
- [x] web idl functions that take in strings
- [x] events
- [x] basic dom interactions
- [x] canvas api

# HelloWorld
Let's load a web assembly module called `helloworld.wasm` and call `main`:

`helloworld.html`:
```html
<!-- polyfill web components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<!-- load webidl-loader component -->
<script src="https://unpkg.com/webidl-loader@latest/webidl-loader.min.js"></script>
<!-- load your web assembly module, expose web IDL to it, and call 'main' by default -->
<webidl-loader module="helloworld.wasm"></webidl-loader>
```

Here's a web assembly example to log to console using a Web IDL generated function `console_log`.

```c_cpp
extern void console_log(int msg);

int main() {
  char *greeting = "Hello world!";
  console_log(greeting);
  return 0;
}
```

This is written using [Poetry](https://github.com/FantasyInternet/poetry)

`helloworld.poem`:
```python
export_memory "memory"
import "env" "console_log" log 1 0

export "main" main
  log (address_of "hello world")
```

Here's a rust version:

`helloworld.rs`:
```rust
#![no_main]
use std::ffi::CString;
use std::os::raw::c_char;

extern "C" {
    fn console_log(start: *mut c_char);
}

pub fn log(msg: &str) {
    unsafe {
        console_log(CString::new(msg).unwrap().into_raw());
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
<webidl-loader module="helloworld.wasm" execute="start"></webidl-loader>
```

## `<webidl-loader ... >` Attributes
`execute` - the first function to be called on loading


# Host Bindings

This project hopes to emulate how host bindings work in real web assembly as closely as possible. I'll have to make some assumptions, but if anyone knows better details I'd love to talk. Where I make assumptions, I'll try to be consistent.

For those who don't know what host bindings are, basically the future plan is to expose Web IDL in some way to web assembly in a standard way. But it's not been implemented yet. Maybe this can turn into a prototype.

https://webassembly.org/docs/future-features/

# Creating Specialized Builds

This project was meant to expose all of web IDL as possible, but if you need a specialized build with only the pieces you need to reduce load time, you can make your own by only specifying the web IDL you want to generate or even hacking down some webIDL of the unnecessary

Here's an example with the minimal needed to draw canvas for instance:
```terminal
node tools/generate_webidl.js Console.webidl Window.webidl Document.webidl HTMLCanvasElement.webidl CanvasRenderingContext2D.webidl
```
