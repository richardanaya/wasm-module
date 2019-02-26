extern "C" {
    fn console_log(start: i32);
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

fn from_cstr(start: i32, len:i32) -> String {
    String::from("hello")
}

#[no_mangle]
pub fn malloc(len:i32) -> i32 {
    0
}

#[no_mangle]
pub fn message(start: i32, len:i32) -> () {
    unsafe {
        console_log(cstr(&format!("message recieved:{}",from_cstr(start,len))));
    }
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        console_log(cstr("listening for message"));
    }
}
