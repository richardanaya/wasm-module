use js_ffi::*;

#[no_mangle]
fn main() {
    let screen = js!(document.querySelector).call_1(DOCUMENT, "#screen");
    let ctx = js!(HTMLCanvasElement.prototype.getContext).call_1(screen, "2d");

    let fill_style = js!(function(color){
        this.fillStyle = color;
    });
    let fill_rect = js!(CanvasRenderingContext2D.prototype.fillRect);

    fill_style.call_1(ctx, "red");
    fill_rect.call_4(ctx, 0.0, 0.0, 50.0, 50.0);

    fill_style.call_1(ctx, "green");
    fill_rect.call_4(ctx, 15.0, 15.0, 50.0, 50.0);

    fill_style.call_1(ctx, "blue");
    fill_rect.call_4(ctx, 30.0, 30.0, 50.0, 50.0);
}
