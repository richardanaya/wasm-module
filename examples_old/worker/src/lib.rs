extern "C" {
    fn console_log(start: i32);
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

#[no_mangle]
pub fn main(worker_id) -> () {
    unsafe {
        console_log(cstr(&format!("hello world from worker {}!",worker_id)));
    }
}
