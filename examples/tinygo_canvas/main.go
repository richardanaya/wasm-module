
package main

//go:export global_getWindow
func GetWindow() int32
//go:export Window_get_document
func GetDocument(window int32) int32
//go:export Document_querySelector
func QuerySelector(document int32 ,query string) int32
//go:export HTMLCanvasElement_getContext
func GetContext(element int32,context string) int32
//go:export CanvasRenderingContext2D_fillRect
func FillRect(ctx ,x ,y ,w ,h int32)

func cstr(s string) string{
  return s+"\000"
}

//go:export main
func start(){
  win := GetWindow()
  doc := GetDocument(win)
  canvas := QuerySelector(doc,cstr("#screen"))
  ctx := GetContext(canvas,cstr("2d"))
  FillRect(ctx,0,0,50,50);
}

func main() {}
