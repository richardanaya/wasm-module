#[no_mangle]
pub fn main() -> () {
    let console = globals::get::<web_console::Console>().lock();
    console.log("You wont see this");
    console.clear();
    console.time(None);
    console.log("Hello world!");
    console.time_end(None);
}
