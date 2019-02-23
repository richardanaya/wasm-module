# wasm-module

A custom element `<wasm-module>` that loads your web assembly module and exposes every function for interacting with the DOM to a web assembly module, and gives you the option to import or not.  This creates a simple functional interface you can use in your web assembly module with no special setup or code generation.

* let people simply write front end in web assembly without javascript knowledge
* exposes standards based [Web IDL](https://heycam.github.io/webidl/) ( functions to manipulate browser DOM, write to console, etc. ) to web assembly as close to host bindings spec in technology agnostic way
* this project is very alpha and I plan is to expose progressively more and more functionality using a generator tool inside this project, right now there's enough to do some fun stuff.

# Functionality
- [x] [console/alerting](https://richardanaya.github.io/wasm-module/examples/helloworld/src/lib.rs)
- [x] [basic basic dom and dom events](https://richardanaya.github.io/wasm-module/examples/events/src/lib.rs)
- [x] [basic canvas api](https://richardanaya.github.io/wasm-module/examples/canvas/src/lib.rs)

# Hello World
Let's load a web assembly module called `helloworld.wasm` and call `main`:

`helloworld.html`:
```html
<script src="https://unpkg.com/wasm-module@latest/wasm-module.min.js"></script>
<!-- load your web assembly module, expose web IDL to it, and call 'main' by default -->
<wasm-module src="helloworld.wasm"></wasm-module>
```

Here's a web assembly example to log to console using a Web IDL generated function

`helloworld.rs`:
```rust
extern "C" {
    fn console_log(start: i32);
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        console_log(cstr("hello world!"));
    }
}
```

# Documentation

All documented web IDL functions can be found in [api docs](https://github.com/richardanaya/wasm-module/blob/master/webidl.md)

You can configure your web assembly module by using different attributes on your HTML tag. For instance if instead of `main` you have a function named `start` you want called on module load.

```html
<wasm-module src="helloworld.wasm" execute="start"></wasm-module>
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
