extern "C" {
    fn global_postMessage(start: i32, len:i32);
}

fn cstr(s:&str) -> i32{
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

#[no_mangle]
pub fn main(worker_id:i32) -> () {
    unsafe {
        let msg = &format!("hello world from worker {}!",worker_id);
        global_postMessage(cstr(msg),msg.len() as i32);
    }
}
