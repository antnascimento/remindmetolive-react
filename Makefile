dist/server/app.js:
	npm run build:prod

build-prod: dist/server/app.js

build-prod-docker-app: build-prod
	docker build -f Dockerfile-App -t danpersa/remindmetolive-app:latest .

build-prod-docker-nginx:
	docker build -f Dockerfile-Nginx -t danpersa/remindmetolive-nginx:latest .

build-prod-docker: build-prod-docker-app build-prod-docker-nginx

run-prod-docker-node-1:
	docker run -d --name node1 -p 3000 \
		-t danpersa/remindmetolive-app:latest

run-prod-docker-node-2:
	docker run -d --name node2 -p 3000 \
		-t danpersa/remindmetolive-app:latest

run-prod-docker-nginx: run-prod-docker-node-1 run-prod-docker-node-2
	docker run -d --name nginx -p 8080:8080 \
		--link node1:node1 --link node2:node2 \
		-t danpersa/remindmetolive-nginx:latest

stop-docker:
	docker kill nginx node1 node2
	docker container rm nginx node1 node2

docker-run:
	docker run -p 3000:3000\
		-t danpersa/remindmetolive-app:latest

 docker-push:
	docker push danpersa/remindmetolive-nginx
	docker push danpersa/remindmetolive-app
