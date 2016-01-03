## 簡易作業メモ

	mkdir -p build src/{components,views,assets,directives,filters}
	mkdir -p src/assets/{js,style,image}
	
	npm init 
	npm i -g webpack webpack-dev-server mocha babel-core babel-loader 
	npm i -S vue vuex
	npm i -D webpack webpack-dev-server style-loader css-loader sass-loader html-loader mocha mocha-loader chai babel-core babel-loader babel-plugin-add-module-exports babel-polyfill babel-preset-es2015 babel-preset-stage-2 babel-runtime eslint
	
	
- .babelrc追加
- src/assets/js/entry.js追加
- build/index.html追加
- src/components/app/index.js追加
- src/components/app/template.html追加
- webpack.config.js追加
- package.jsonのscriptsのなかに`"hot": "webpack-dev-server -d --inline"`追加


## TODO
vuex関連の最小動作サンプルを追加しておく