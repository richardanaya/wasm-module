everything: setup generate-webidl lint build
build:
	./node_modules/.bin/rollup webidl-loader.js --file dist/webidl-loader.min.js --format iife
setup:
	npm install
generate-webidl:
	echo "make it"
lint:
	./node_modules/.bin/prettier --write webidl-loader.js webidl.js
