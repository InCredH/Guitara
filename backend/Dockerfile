FROM alpine
COPY . .
RUN apk update && \
    apk add npm && \
    apk add nodejs && \
    npm i && \
    npm i -g nodemon
ENTRYPOINT ["nodemon", "server"]
