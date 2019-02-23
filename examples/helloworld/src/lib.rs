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
