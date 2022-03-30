docker-up:
	@docker-compose -f docker-compose.local.yml up -d

docker-stop:
	@docker-compose -f docker-compose.local.yml stop

watch-log:
	docker-compose -f docker-compose.local.yml logs -f node
