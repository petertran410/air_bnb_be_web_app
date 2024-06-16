FROM node:18

WORKDIR /usr/share/air_bnb_be_web_app

COPY package*.json /usr/share/air_bnb_be_web_app

RUN yarn install

COPY prisma ./prisma/

RUN yarn prisma generate

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start:prod"]
