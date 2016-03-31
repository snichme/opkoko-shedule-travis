all: build

clean:
	rm -rf dist

rename:
	gmd5sum dist/*.{js,css} | sed -e 's/\([^ ]*\) \(.*\)\(\..*\)/mv -v \2\3 \2-\1\3/' | sh

webpack:
	NODE_ENV=production webpack -p --config webpack.config-prod.js
	cp -rf public/* dist

build: clean webpack rename
	@echo DONE