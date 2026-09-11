.PHONY: reset setup dev start refresh update format format-check lint test test-all

# Disable parallel make: `refresh` chains destructive targets (reset runs rm -rf)
# that must never race with setup's npm install.
.NOTPARALLEL:

reset:
	@rm -rf .next node_modules

setup:
	@npm install
	@NODE_OPTIONS="--max_old_space_size=8192" npm run build

dev:
	@npm run dev

start:
	@npm start

refresh: reset setup dev

update:
	@git fetch origin main
	@git checkout main
	@git pull --ff-only origin main
	@${MAKE} setup
	@pm2 restart farox

format:
	@npm run format

format-check:
	@npm run format:check

lint:
	@npm run lint

test:
	@npm run test

test-all: format-check lint test
