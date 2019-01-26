# webidl-loader
* let people simply write front end without javascript knowledge
* expose web idl to wasm as close to host bindings spec in technology agnostic way

# HelloWorld
Examples written using [Poetry](https://github.com/FantasyInternet/poetry)

helloworld.poem
```
export_memory "memory"
import "env" "console_log" _log 2 0

func log message
  _log (address_of message) (size_of message)

export "main" main
  log "hello world!"
```

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<script src="https://unpkg.com/@webcomponents/webidl-loader@latest/webidl-loader.js"></script>
<webidl-loader src="helloworld.wasm"></webidl-loader>
```

# Host Bindings

This project hopes to emulate how host bindings work in wasm as closely as possible. I believe i'll have to make some assumptions, but if anyone knows better details i'd love to talk.

For those who don't know what host bindings are, basically the future plan is to expose webIDL in some way to wasm in a standard way. But it's not been implemented yet. Maybe this can turn into a prototype.
