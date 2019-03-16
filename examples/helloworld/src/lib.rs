extern "C" {
    fn console_log(msg: i32);
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
