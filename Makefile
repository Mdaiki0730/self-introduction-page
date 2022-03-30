docker-up:
	@docker-compose -f docker-compose.local.yml up -d

watch-log:
	docker-compose -f docker-compose.local.yml logs -f node
