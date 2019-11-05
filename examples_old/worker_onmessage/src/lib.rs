extern "C" {
    fn console_log(start: i32);
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

fn from_raw_utf8(start: i32, len:i32) -> String {
    let arg0 = unsafe {
        let slice = ::std::slice::from_raw_parts(start as *const u8, len as usize);
        ::std::str::from_utf8_unchecked(slice)
    };
    return String::from(arg0);
}

#[no_mangle]
pub fn malloc(_len:i32) -> i32 {
    0
}

#[no_mangle]
pub fn message(start: i32, len:i32) -> () {
    unsafe {
        console_log(cstr(&format!("message recieved:{}",from_raw_utf8(start,len))));
    }
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        console_log(cstr("listening for message"));
    }
}
