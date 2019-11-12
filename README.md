# 🦆 wasm-module

A custom HTML element `<wasm-module>` that loads your web assembly module and dynamically exposes access to javascript to your web assembly module with no special setup.

## Features
- [x] interact with browser imperatively and with no code generation using [js_ffi](https://github.com/richardanaya/js_ffi)
- [x] [standard libraries](https://github.com/richardanaya/wasm-module#standard-web-libraries) that expose new functionality so you don't having to know javascript
- [x] usable for Rust, C, or [any other language that compiles to WASM](https://github.com/appcypher/awesome-wasm-langs)
- [ ] run your wasm module on a separate thread in a web worker

# Hello World
`wasm-module` suports [js_ffi](https://github.com/richardanaya/js_ffi) as a mechanism for communicating with the browser. Let's load a web assembly module called `helloworld.wasm` and call `main` to see it in action:

See demo [here](https://richardanaya.github.io/wasm-module/examples/helloworld/)

```rust
use js_ffi::*;

#[no_mangle]
pub fn main() -> () {
    let fn_log = register("console.log");
    call_1(UNDEFINED,fn_log,TYPE_STRING,to_js_string("Hello World!));
}
```
```toml
[dependencies]
js_ffi = "0.0" # for talking to javascript
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

	let s = api.query_selector("#screen");
	let ctx = api.get_context(s,"2d");

	api.fill_style(ctx, "red");
	api.fill_rect(ctx,0.0,0.0,50.0,50.0);

	api.fill_style(ctx, "green");
	api.fill_rect(ctx,15.0,15.0,50.0,50.0);

	api.fill_style(ctx, "blue");
	api.fill_rect(ctx,30.0,30.0,50.0,50.0);
}

struct API {
	query_selector_handle: JSValue,
	get_context_handle: JSValue,
	fill_style_handle: JSValue,
	fill_rect_handle: JSValue,
}

impl API {
	fn new() -> Self {
		API {
			query_selector_handle: register("document.querySelector"),
			get_context_handle: register("HTMLCanvasElement.prototype.getContext"),
			fill_style_handle: register("(function(s){this.fillStyle = s;})"),
			fill_rect_handle: register("CanvasRenderingContext2D.prototype.fillRect"),
		}
	}
	
	fn query_selector(&self, s: &str) -> JSValue {
		call_1(DOCUMENT, self.query_selector_handle,TYPE_STRING,to_js_string(s))
	}

	fn get_context(&self, o: JSValue, s: &str) -> JSValue {
		call_1(o,self.get_context_handle,TYPE_STRING,to_js_string(s))
	}

	fn fill_style(&self, o: JSValue, s: &str) {
		call_1(o,self.fill_style_handle,TYPE_STRING,to_js_string(s));
	}

	fn fill_rect(&self, o: JSValue, x: f32, y: f32, w: f32, h: f32) {
		call_4(o,self.fill_rect_handle,TYPE_NUM,x,TYPE_NUM,y,TYPE_NUM,w,TYPE_NUM,h);
	}
}
```

# Standard Web Libraries

A collection of libraries exist that expose javascript functionality so you don't have to implement it yourself. Just add them to your project and go!

* [web_console](https://github.com/richardanaya/web_console)
* [web_random](https://github.com/richardanaya/web_random)
* [web_timer](https://github.com/richardanaya/web_timer)

```

# Want to make your own library?

Checkout [web_common](https://github.com/richardanaya/web_common) for some types and common values to use in your project so you don't have to re-create te wheel

```toml
[dependencies]
web_common = "0.0.1"
```

An example of library using JQuery

```rust
use web_common::*;

struct JQuery {
    fn_get:JSValue
}

impl Default for JQuery {
    fn default() -> Self {
        Console {
            fn_get:register("(x) => $(x)")
        }
    }
}

impl JQuery {
    fn get(&self, selector:&str) -> JSValue {
        call_1(UNDEFINED,self.fn_get,TYPE_STRING,to_js_string(selector));
    }
}
```

# Don't like Rust?

There's nothing Rust specific about this library. Here's an example of using C and js_ffi's interface:

```C
// define js_ffi functions
extern int register(char*);
extern void call_1(JSValue,int,int,JSValue);
// look at https://github.com/richardanaya/

typedef double JSValue;

// Common constants
JSValue const UNDEFINED = 0.0;
JSValue const FALSE = 0.0;
JSValue const TRUE = 1.0;

int const TYPE_NOTHING = 0;
int const TYPE_NUM = 1;
int const TYPE_STRING = 2;
int const TYPE_BOOL = 3;
int const TYPE_FUNCTION = 4;
int const TYPE_OBJ = 5;
int const TYPE_UINT8_ARRAY = 6;

int main() {
	int log = register("console.log");
	call_1(UNDEFINED,log,TYPE_STRING,"Hello World");
	return 0;
}
```

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
