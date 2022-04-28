FROM node:alpine

USER node

# RUN sudo apt-get update

ENV PORT=3000 

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "run", "dev"]