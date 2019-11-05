extern "C" {
    fn global_getWindow() -> i32;
    fn Window_get_document(window:i32) -> i32;
    fn global_createEventListener() -> i32;
    fn Window_alert(window:i32,msg:i32);
    fn Document_querySelector(document:i32,selector:i32) -> i32;
    fn EventTarget_addEventListener(element:i32,eventName:i32,callback:i32) -> i32;
    fn HTMLInputElement_get_value(element:i32) -> i32;
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

#[no_mangle]
pub fn malloc(_len:i32) -> i32 {
    // this is a really dumb memory allocator that always says there's free memory at the position 0
    // since we only have one string coming back from the browser via HTMLInputElement_get_value
    // we don't really have a problem
    return 0;
}

#[no_mangle]
pub fn callback(_callback_id:i32,_event:i32) -> () {
    unsafe {
        let win = global_getWindow();
        let doc = Window_get_document(win);
        let input = Document_querySelector(doc,cstr("input"));
        // get the memory position of a cstring that represents the value of the input
        let msg = HTMLInputElement_get_value(input);
        // give it to alert function to show on screen
        Window_alert(win,msg);
    }
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        let win = global_getWindow();
        let doc = Window_get_document(win);
        let btn = Document_querySelector(doc,cstr("button"));
        let callback_id = global_createEventListener();
        EventTarget_addEventListener(btn,cstr("click"),callback_id);
    }
}
