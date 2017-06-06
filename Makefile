

init:
	npm install

clean:
	rm -rf node-modules

watch:
	webpack -w

serve:
	node server.js


