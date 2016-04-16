run:
	@ echo '* Start webpack dev server *'
	@ NODE_ENV=development TARGET=web ./node_modules/.bin/webpack-dev-server -d --host=127.0.0.1 --port 9000 --hot --inline --colors --progress --no-info
