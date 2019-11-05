# wasm-module

A custom HTML element `<wasm-module>` that loads your web assembly and dynamically exposes access to javascript to your web assembly module with no special setup or code generation.

## Features
- [x] simply write front end in web assembly
- [x] modularly add libraries that expose new functionality without having to know javascript
- [x] exposes javascript in technology independent way for Rust, C, or [any other language that compiles to WASM](https://github.com/appcypher/awesome-wasm-langs)
- [ ] run your wasm module in a worker

# Hello World
Let's load a web assembly module called `helloworld.wasm` and call `main`:

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<script src="https://unpkg.com/wasm-module@latest/wasm-module.min.js"></script>
<wasm-module src="helloworld.wasm"></wasm-module>
```

```rust
use js_ffi::*;

struct Console {
    fn_logger:JSValue
}

impl Default {
    fn default() -> Self {
        Console {
            fn_logger:register("console.log")
        }
    }
}

impl Console {
    fn log(msg:&str){
        call_1(UNDEFINED, log, TYPE_STRING, to_js_string("Hello World"));
    }
}

#[no_mangle]
pub fn main() -> () {
    let console = globals::get::<Console>().lock();
    console.log("Hello world!")
}
```
```toml
[dependencies]
js_ffi = "0.0.13"
globals = "0.1.3"
```
```makefile
# cli commands for building web assembly
build:
	@RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release
	@cp target/wasm32-unknown-unknown/release/example.wasm .
lint:
	@cargo fmt
```

# Drawing
`drawing.html`:
```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<script src="https://unpkg.com/wasm-module@latest/wasm-module.min.js"></script>
<canvas id="screen" width="500" height="200"></canvas>
<wasm-module src="drawing.wasm"></wasm-module>
```

Here's a web assembly example to log to console using a Web IDL generated function

`drawing.rs`:
```rust
extern "C" {
    fn global_getWindow() -> i32;
    fn Window_get_document(window:i32) -> i32;
    fn Document_querySelector(document:i32,query:i32) -> i32;
    fn HTMLCanvasElement_getContext(element:i32,context:i32) -> i32;
    fn CanvasRenderingContext2D_fillText(canvas:i32,msg:i32,x:i32,y:i32);
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        let w = global_getWindow();
        let d = Window_get_document(w);
        let canvas = Document_querySelector(d,cstr("#screen"));
        let ctx = HTMLCanvasElement_getContext(canvas,cstr("2d"));
        CanvasRenderingContext2D_fillText(ctx,cstr("hello world!"),50,50);
    }
}
```
