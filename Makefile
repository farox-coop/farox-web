.PHONY: reset setup dev start update tests test lint format

reset:
	@rm -rf .next node_modules

setup:
	@npm install
	@NODE_OPTIONS="--max_old_space_size=8192" npm run build

dev:
	@npm run dev

start:
	@npm start

update:
	@git pull origin main
	@${MAKE} setup
	@pm2 restart farox

tests: lint test
	@echo "All checks and tests passed!"

test:
	@npm run test

lint:
	@npm run lint

format:
	@npm run format
