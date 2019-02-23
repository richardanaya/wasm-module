everything: setup generate_webidl lint build minify examples
build:
	./node_modules/.bin/rollup src/webidl-loader.js --file webidl-loader.js --format umd --name webidlLoader
.PHONY: examples
examples:
	cd examples/helloworld && make
	cd examples/alert && make
	cd examples/canvas && make
	cd examples/events && make
setup:
	npm install
generate_webidl:
	node tools/generate_webidl.js Console.webidl Window.webidl Document.webidl HTMLCanvasElement.webidl CanvasRenderingContext2D.webidl EventTarget.webidl KeyboardEvent.webidl MouseEvent.webidl Element.webidl HTMLInputElement.webidl
lint:
	./node_modules/.bin/prettier --write src/webidl-loader.js src/webidl.js tools/generate_webidl.js
minify:
	./node_modules/.bin/babel-minify webidl-loader.js -o webidl-loader.min.js
publish:
	npm publish
