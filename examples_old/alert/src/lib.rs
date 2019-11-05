extern "C" {
    fn global_getWindow() -> i32;
    fn Window_alert(window:i32,message:i32);
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        let win = global_getWindow();
        Window_alert(win,cstr("hello world!"));
    }
}
