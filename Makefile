lint: ## or, "npm run lint"
	npx eslint --ext .ts src

build: lint ## or, "npm run build"
	npx swc src --out-dir=lib 

test: build ## or, "npm run test"
	npx mocha

tests: test ## since nobody can agree on this name

run: build ## or, "npm run main"
	node lib/main.js

