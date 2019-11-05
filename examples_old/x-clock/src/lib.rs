use webcomponent::*;

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

struct XClock {
    element: i32,
}

impl XClock {
    fn create(element: i32) {
        unsafe {
            // store xclock and keep its index
            get_components().push(XClock { element: element });
            let id = get_components::<XClock>().len() - 1;

            let mut cb = global_createEventListener();
            EventTarget_addEventListener(element, cstr("connected"), cb);
            add_callback(
                cb,
                Box::new(move |_| {
                    get_component::<XClock>(id).connected();
                }),
            );

            cb = global_createEventListener();
            EventTarget_addEventListener(element, cstr("attributechanged"), cb);
            add_callback(
                cb,
                Box::new(move |event| {
                    get_component::<XClock>(id).attribute_changed(event);
                }),
            );
        }
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

    fn attribute_changed(&self, _event: i32) {
        unsafe { console_log(cstr("my attributes changed")) }
    }
}

#[no_mangle]
pub fn main() -> () {
    unsafe {
        let win = global_getWindow();
        let cb = global_createEventListener();
        EventTarget_addEventListener(win, cstr("customelementcreated"), cb);
        add_callback(
            cb,
            Box::new(|event| {
                let element = global_getProperty(event, cstr("detail"));
                XClock::create(element);
            }),
        );
        CustomElement_define(cstr("x-clock"), cstr("time"));
    }
}

#[no_mangle]
pub fn callback(callback_id: i32, event: i32) {
    // this function routes callbacks to the right closure
    route_callback(callback_id, event);
}
