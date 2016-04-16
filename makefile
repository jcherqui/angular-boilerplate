run:
	@ echo '* Start webpack dev server *'
	@ NODE_ENV=development TARGET=web ./node_modules/.bin/webpack-dev-server \
		-d \
		--host=127.0.0.1 \
		--port 9000 \
		--colors \
		--progress \
		--no-info \
		--hot \
		--inline
