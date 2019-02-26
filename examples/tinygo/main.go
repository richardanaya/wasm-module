package main

//go:export console_log
func console_log(msg string)

//go:export main
func start(){
  console_log("hello world")
}

func main() {}
