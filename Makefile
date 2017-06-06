

init:
	npm install

clean:
	rm -rf node-modules

serve:
	webpack
	node server.js


