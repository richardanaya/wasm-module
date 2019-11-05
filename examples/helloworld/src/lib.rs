use js_ffi::*;

#[no_mangle]
pub fn main() -> () {
    let console = globals::get::<Console>().lock();
    console.log("Hello world!")
}

struct Console {
    fn_log:JSValue
}

impl Default for Console {
    fn default() -> Self {
        Console {
            fn_log:register("console.log")
        }
    }
}

impl Console {
    fn log(&self,msg:&str){
        call_1(UNDEFINED,self.fn_log,TYPE_STRING,to_js_string(msg));
    }
}