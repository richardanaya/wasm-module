extern "C" {
    fn global_getWindow() -> i32;
    fn Window_get_document(window:i32) -> i32;
    fn Document_querySelector(document:i32,query:i32) -> i32;
    fn HTMLCanvasElement_getContext(element:i32,context:i32) -> i32;
    fn CanvasRenderingContext2D_fillRect(canvas:i32,x:i32,y:i32,w:i32,h:i32);
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
        CanvasRenderingContext2D_fillRect(ctx,0,0,50,50);
    }
}
