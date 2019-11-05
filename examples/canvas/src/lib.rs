use js_ffi::*;

#[no_mangle]
fn main() {
	let api = globals::get::<API>().lock();

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

impl Default for API {
	fn default() -> Self {
		API {
			query_selector_handle: register("document.querySelector"),
			get_context_handle: register("HTMLCanvasElement.prototype.getContext"),
			fill_style_handle: register("(function(s){this.fillStyle = s;})"),
			fill_rect_handle: register("CanvasRenderingContext2D.prototype.fillRect"),
		}
	}
}

impl API {
	fn query_selector(&self, s: &str) -> JSValue {
		call_1(DOCUMENT, self.query_selector_handle,TYPE_STRING,to_js_string(s))
	}

	fn get_context(&self, o: JSValue, s: &str) -> JSValue {
		call_1(o,self.get_context_handle,TYPE_STRING,to_js_string(s))
	}

	fn fill_style(&self, o: JSValue, s: &str) {
		call_1(o,self.fill_style_handle,TYPE_STRING,to_js_string(s));
	}

	fn fill_rect(&self, o: JSValue, x: JSValue, y: JSValue, w: JSValue, h: JSValue) {
		call_4(o,self.fill_rect_handle,TYPE_NUM,x,TYPE_NUM,y,TYPE_NUM,w,TYPE_NUM,h);
	}
}