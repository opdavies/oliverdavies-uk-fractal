FROM node:12-alpine AS node

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm clean-install

ENV PATH=node_modules/.bin:$PATH

###

FROM node AS cli

COPY . /app

ENTRYPOINT ["fractal"]

###

FROM node AS fractal

COPY . /app

ENTRYPOINT ["npm", "run", "fractal:start"]

###

FROM node AS assets

ENTRYPOINT ["npm", "run", "postcss:watch"]
