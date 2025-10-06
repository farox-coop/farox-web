.PHONY: setup dev start update

setup:
	@npm install
	@NODE_OPTIONS="--max_old_space_size=8192" npm run build

dev:
	@npm run dev

start:
	@npm start

update:
	@clear && git pull origin main
	@${MAKE} setup
	@pm2 restart farox
