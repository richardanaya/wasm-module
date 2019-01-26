everything: setup generate-webidl lint build build_examples
build:
	./node_modules/.bin/rollup src/webidl-loader.js --file webidl-loader.js --format umd --name webidlLoader
build_examples:
	cd examples && ../node_modules/.bin/poetry helloworld.poem -b helloworld.wasm
setup:
	npm install
generate-webidl:
	node tools/generate_webidl.js
lint:
	./node_modules/.bin/prettier --write src/webidl-loader.js src/webidl.js tools/generate_webidl.js
publish:
	npm publish
