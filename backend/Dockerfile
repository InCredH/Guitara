FROM node:16-bullseye as builder
COPY . .
RUN apt update && \
    apt install -y npm && \
    npm i && \
    npm i -g nodemon
ENTRYPOINT ["nodemon", "server"]
