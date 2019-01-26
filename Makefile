everything: setup generate-webidl lint build
build:
	./node_modules/.bin/rollup src/webidl-loader.js --file webidl-loader.min.js --format iife
setup:
	npm install
generate-webidl:
	echo "make it"
lint:
	./node_modules/.bin/prettier --write src/webidl-loader.js src/webidl.js
