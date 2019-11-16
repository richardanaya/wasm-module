# 🦆 wasm-module

A custom HTML element `<wasm-module>` that loads your web assembly module and dynamically exposes access to javascript to your web assembly module with no special setup.

## Features
- [x] interact with browser imperatively and with no code generation using [js_ffi](https://github.com/richardanaya/js_ffi)
- [x] [standard libraries](https://github.com/richardanaya/wasm-module#standard-web-libraries) that expose new functionality so you don't having to know javascript
- [x] usable for Rust, C, or [any other language that compiles to WASM](https://github.com/appcypher/awesome-wasm-langs)
- [ ] run your wasm module on a separate thread in a web worker

# Hello World

See demo [here](https://richardanaya.github.io/wasm-module/examples/helloworld/)

```rust
use js_ffi::*;

#[no_mangle]
pub fn main() -> () {
    js!(console.log).invoke_1(JSString::from("Hello World"));
}
```
```toml
[dependencies]
js_ffi = "0.5" # for talking to javascript
```
```makefile
# cli commands for building web assembly
build:
	@RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release
	@cp target/wasm32-unknown-unknown/release/helloworld.wasm .
lint:
	@cargo fmt
serve:
	python3 -m http.server 8080
```
```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<script src="https://unpkg.com/wasm-module@latest/wasm-module.min.js"></script>
<wasm-module src="helloworld.wasm"></wasm-module>
```
# Drawing

See demo [here](https://richardanaya.github.io/wasm-module/examples/canvas/)

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<script src="https://unpkg.com/wasm-module@latest/wasm-module.min.js"></script>
<canvas id="screen" width="500" height="200"></canvas>
<wasm-module src="drawing.wasm"></wasm-module>
```
```rust
use js_ffi::*;

#[no_mangle]
fn main() {
    let api = API::new();

    let screen = api.query_selector("#screen");
    let ctx = api.get_context(&screen, "2d");

    api.fill_style(&ctx, "red");
    api.fill_rect(&ctx, 0.0, 0.0, 50.0, 50.0);

    api.fill_style(&ctx, "green");
    api.fill_rect(&ctx, 15.0, 15.0, 50.0, 50.0);

    api.fill_style(&ctx, "blue");
    api.fill_rect(&ctx, 30.0, 30.0, 50.0, 50.0);
}

struct API {
    query_selector_handle: JSInvoker,
    get_context_handle: JSInvoker,
    fill_style_handle: JSInvoker,
    fill_rect_handle: JSInvoker,
}

impl API {
    fn new() -> API {
        API {
            query_selector_handle: js!(document.querySelector),
            get_context_handle: js!(HTMLCanvasElement.prototype.getContext),
            fill_style_handle: js!(function(color){
                this.fillStyle = color;
            }),
            fill_rect_handle: js!(CanvasRenderingContext2D.prototype.fillRect),
        }
    }

    fn query_selector(&self, s: &str) -> JSObject {
        JSObject(
            self.query_selector_handle
                .call_1(JSGlobal::document(), JSString::from(s)),
        )
    }

    fn get_context(&self, o: &JSObject, s: &str) -> JSObject {
        JSObject(self.get_context_handle.call_1(o, JSString::from(s)))
    }

    fn fill_style(&self, o: &JSObject, s: &str) {
        self.fill_style_handle.call_1(o, JSString::from(s));
    }

    fn fill_rect(&self, o: &JSObject, x: f64, y: f64, w: f64, h: f64) {
        self.fill_rect_handle.call_4(
            o,
            JSNumber::from(x),
            JSNumber::from(y),
            JSNumber::from(w),
            JSNumber::from(h),
        );
    }
}
```

# Standard Web Libraries

A collection of libraries exist that expose javascript functionality so you don't have to implement it yourself. Just add them to your project and go!

* [web_console](https://github.com/richardanaya/web_console)
* [web_random](https://github.com/richardanaya/web_random)
* [web_timer](https://github.com/richardanaya/web_timer)

# Don't like Rust?

There's nothing Rust specific about this web component. `js_ffi` has a [technology agnostic interface](https://github.com/richardanaya/js_ffi/#dont-like-rust) that can't be used by many web assembly languages.

# Want small web assembly modules?
You can drastically reduce the size of your web assembly modules by:

* be sure to make your library`#![no_std]`
* utilize the `alloc` crate for standard data structues
* ONLY use dependent libraries that are `#![no_std]`
* use a custom allocator like [`wee_alloc`](https://github.com/rustwasm/wee_alloc) instead of the bulky standard jemalloc
* compile in release with flag to strip symbols: `RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release`

# License

This project is licensed under either of

 * Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or
   http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license ([LICENSE-MIT](LICENSE-MIT) or
   http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in `wasm-module` by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
