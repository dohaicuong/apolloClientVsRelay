FROM node:12.13

WORKDIR /etc/app

COPY ./package.json .
RUN yarn
RUN yarn global add nodemon
RUN yarn global add prisma

COPY . .

ENTRYPOINT yarn dev