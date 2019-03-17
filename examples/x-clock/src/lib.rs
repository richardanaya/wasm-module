use cstring::*;
use callback::{add_callback,route_callback};

extern "C" {
    fn console_log(msg: i32);
    fn global_getWindow() -> i32;
    fn global_createEventListener() -> i32;
    fn global_getProperty(obj: i32, name: i32) -> i32;
    fn EventTarget_addEventListener(element: i32, eventName: i32, callback: i32) -> i32;
    fn Element_set_innerHTML(element: i32, text: i32);
    fn Element_attachShadow(element: i32) -> i32;
    fn CustomElement_define(name: i32, attributes: i32);
}

// A global store of components to prevent deallocation
static mut COMPONENTS: Option<Vec<XClock>> = None;
fn get_components() -> &'static mut Vec<XClock> {
    unsafe {
        if COMPONENTS.is_none() {
            COMPONENTS = Some(Vec::new());
        }
        COMPONENTS.as_mut().unwrap()
    }
}


struct XClock {
    element: i32,
}

impl XClock {
    fn create(element: i32) {
        let id = get_components().len();
        let c = XClock { element: element };
        get_components().push(c);
        listen(
            element,
            "connected",
            Box::new(move |event| {
                get_components()[id].connected();
            }),
        );
        listen(
            element,
            "attributechanged",
            Box::new(move |event| {
                get_components()[id].attribute_changed();
            }),
        );
    }

    fn connected(&self) {
        unsafe {
            let shadow = Element_attachShadow(self.element);
            Element_set_innerHTML(
                shadow,
                cstr("<style>:host{font-size:30px}</style><div>12:00 AM</div>"),
            );
        }
    }

    fn attribute_changed(&self) {
        unsafe { console_log(cstr("my attributes changed")) }
    }
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        let win = global_getWindow();
        listen(
            win,
            "customelementcreated",
            Box::new(|event| {
                let element = global_getProperty(event, cstr("detail"));
                let c = XClock::create(element);
            }),
        );
        CustomElement_define(cstr("x-clock"), cstr("time"));
    }
}

#[no_mangle]
pub fn callback(callback_id: i32, event: i32) {
    // this function routes callbacks to the right closure
    route_callback(callback_id,event);
}

fn listen<F>(element: i32, event_name: &str, f: Box<F>)
where
    F: Fn(i32) + 'static,
{
    unsafe {
        let cb = global_createEventListener();
        EventTarget_addEventListener(element, cstr(event_name), cb);
        add_callback(cb, f);
    }
}
