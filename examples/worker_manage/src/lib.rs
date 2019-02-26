extern "C" {
    fn console_log(start: i32);
    fn global_getWindow() -> i32;
    fn Window_get_document(window:i32) -> i32;
    fn global_createEventListener() -> i32;
    fn WasmWorker_onWorkerLoaded(worker:i32,callback:i32);
    fn WasmWorker_onWorkerMessage(worker:i32,callback:i32);
    fn WasmWorker_sendWorkerMessage(worker:i32,start:i32,len:i32);
    fn WasmWorkerLoadEvent_getWorkerId(ev:i32) -> i32;
    fn WasmWorkerMessageEvent_get_length(ev:i32) -> i32;
    fn WasmWorkerMessageEvent_get_data(ev:i32) -> i32;
    fn Document_querySelector(document:i32,selector:i32) -> i32;
}

static mut WORKER:i32 = -1;
static mut WORKER_LOAD_CALLBACK: i32 = -1;
static mut WORKER_MESSAGE_CALLBACK: i32 = -1;

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
    return 0;
}

#[no_mangle]
pub fn callback(callback_id:i32,event:i32) -> () {
    unsafe {
        if callback_id == WORKER_LOAD_CALLBACK {
            let worker_id = WasmWorkerLoadEvent_getWorkerId(event);
            console_log(cstr(&format!("worker {} is loaded",worker_id)));
            let m = "hello";
            WasmWorker_sendWorkerMessage(WORKER,cstr(m),m.len() as i32);
        } else if callback_id == WORKER_MESSAGE_CALLBACK {
            let len = WasmWorkerMessageEvent_get_length(event);
            let start = WasmWorkerMessageEvent_get_data(event);
            console_log(cstr(&format!("message recieved:{}",from_raw_utf8(start,len))));
        }
    }
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        let win = global_getWindow();
        let doc = Window_get_document(win);
        WORKER = Document_querySelector(doc,cstr("#worker"));
        WORKER_LOAD_CALLBACK = global_createEventListener();
        WasmWorker_onWorkerLoaded(WORKER,WORKER_LOAD_CALLBACK);
        WORKER_MESSAGE_CALLBACK = global_createEventListener();
        WasmWorker_onWorkerMessage(WORKER,WORKER_MESSAGE_CALLBACK);
    }
}
