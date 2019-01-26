# webidl-loader
* let people simply write front end in web assembly without javascript knowledge
* expose [Web IDL](https://heycam.github.io/webidl/) to wasm as close to host bindings spec in technology agnostic way

# HelloWorld
Web assembly examples written using [Poetry](https://github.com/FantasyInternet/poetry)

`helloworld.poem`:
```python
export_memory "memory"
import "env" "console_log" _log 2 0

func log message
  _log (address_of message) (size_of message)

export "main" main
  log "hello world!"
```

`helloworld.html`:
```html
<!-- polyfill web components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<!-- load webidl-loader component -->
<script src="https://unpkg.com/@webcomponents/webidl-loader@latest/webidl-loader.js"></script>
<!-- load and execute your wasm, exposing Web IDL to it, and call main by default -->
<webidl-loader src="helloworld.wasm"></webidl-loader>
```

# Host Bindings

This project hopes to emulate how host bindings work in web assembly as closely as possible. I believe i'll have to make some assumptions, but if anyone knows better details i'd love to talk.

For those who don't know what host bindings are, basically the future plan is to expose Web IDL in some way to web assembly in a standard way. But it's not been implemented yet. Maybe this can turn into a prototype.

https://webassembly.org/docs/future-features/
