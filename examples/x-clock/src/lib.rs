extern "C" {
    fn console_log(msg: i32);
    fn global_getWindow() -> i32;
    fn global_createEventListener() -> i32;
    fn global_getProperty(obj: i32, name: i32) -> i32;
    fn EventTarget_addEventListener(element: i32, eventName: i32, callback: i32) -> i32;
    fn Element_set_innerHTML(element: i32, text: i32);
    fn Element_attachShadow(element:i32) -> i32;
    fn CustomElement_define(name: i32, attributes: i32);
}

fn cstr(s: &str) -> i32 {
    std::ffi::CString::new(s).unwrap().into_raw() as i32
}

static mut CLOCK_COMPONENT: i32 = -1;
static mut WEB_COMPONENT_CREATED_CALLBACK: i32 = -1;
static mut WEB_COMPONENT_CONNECTED_CALLBACK: i32 = -1;
static mut WEB_COMPONENT_ATTRIBUES_CHANGED_CALLBACK: i32 = -1;

#[no_mangle]
pub fn callback(callback_id: i32, event: i32) -> () {
    unsafe {
        if callback_id == WEB_COMPONENT_CREATED_CALLBACK {
            CLOCK_COMPONENT = global_getProperty(event, cstr("detail"));
            WEB_COMPONENT_CONNECTED_CALLBACK = global_createEventListener();
            EventTarget_addEventListener(
                CLOCK_COMPONENT,
                cstr("connected"),
                WEB_COMPONENT_CONNECTED_CALLBACK,
            );
            WEB_COMPONENT_ATTRIBUES_CHANGED_CALLBACK = global_createEventListener();
            EventTarget_addEventListener(
                CLOCK_COMPONENT,
                cstr("attributechanged"),
                WEB_COMPONENT_ATTRIBUES_CHANGED_CALLBACK,
            );
        } else if callback_id == WEB_COMPONENT_CONNECTED_CALLBACK {
            let shadow = Element_attachShadow(CLOCK_COMPONENT);
            Element_set_innerHTML(shadow, cstr("<style>:host{font-size:30px}</style><div>12:00 PM</div>"));
        } else if callback_id == WEB_COMPONENT_ATTRIBUES_CHANGED_CALLBACK {
            console_log(cstr("someone changed my time attribute!"))
        }
    }
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        let win = global_getWindow();
        WEB_COMPONENT_CREATED_CALLBACK = global_createEventListener();
        EventTarget_addEventListener(win, cstr("webcomponent"), WEB_COMPONENT_CREATED_CALLBACK);
        CustomElement_define(cstr("x-clock"), cstr("time"));
    }
}
