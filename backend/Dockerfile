FROM alpine
COPY . .
RUN apk update && \
    apk add npm && \
    apk add node-js && \
    npm i && \
    npm i -g nodemon
ENTRYPOINT ["nodemon", "server"]
