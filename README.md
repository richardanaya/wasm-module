# wasm-module
* let people simply write front end in web assembly without javascript knowledge
* expose [Web IDL](https://heycam.github.io/webidl/) ( functions to manipulate browser DOM, write to console, etc. ) to web assembly as close to host bindings spec in technology agnostic way
* this project is very alpha and I plan is to expose progressively more and more functionality using a generator tool inside this project, right now there's enough to do some canvas and basic dom stuff.

# Functionality
- [x] [console](https://richardanaya.github.io/wasm-module/examples/helloworld/src/lib.rs), window, document, queryString
- [x] callbacks
- [x] web idl that return strings
- [x] web idl functions that take in strings
- [x] [basic events](https://richardanaya.github.io/wasm-module/examples/events/src/lib.rs)
- [x] basic dom interactions
- [x] [basic canvas api](https://richardanaya.github.io/wasm-module/examples/canvas/src/lib.rs)

# HelloWorld
Let's load a web assembly module called `helloworld.wasm` and call `main`:

`helloworld.html`:
```html
<script src="https://unpkg.com/wasm-module@latest/wasm-module.min.js"></script>
<!-- load your web assembly module, expose web IDL to it, and call 'main' by default -->
<wasm-module module="helloworld.wasm"></wasm-module>
```

Here's a web assembly example to log to console using a Web IDL generated function

`helloworld.rs`:
```rust
extern "C" {
    fn console_log(start: i32);
}

pub fn log(msg: &str) {
    unsafe {
        console_log(std::ffi::CString::new(msg).unwrap().into_raw() as i32);
    }
}

#[no_mangle]
pub fn main() -> () {
    log("hello world!");
}
```

# Documentation

All documented web IDL functions can be found in [api docs](https://github.com/richardanaya/wasm-module/blob/master/webidl.md)

You can configure your web assembly module by using different attributes on your HTML tag. For instance if instead of `main` you have a function named `start` you want called on module load.

```html
<wasm-module module="helloworld.wasm" execute="start"></wasm-module>
```

## `<wasm-module ... >` Attributes
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
