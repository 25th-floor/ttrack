FROM node:6

MAINTAINER 25th-floor GmbH "team@25th-floor.com"
EXPOSE "8080"

RUN apt-get update \
	&& apt-get install -y netcat \
	&& rm -rf /var/lib/apt/lists/*

# Installing production dependencies
ENV NODE_ENV production
ADD ./package.json /tmp/
RUN cd /tmp && \
	npm install

COPY . /app
WORKDIR /app
RUN cp -R /tmp/node_modules/ /app/node_modules/

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["ttrack-server"]
