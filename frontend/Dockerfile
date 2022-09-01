FROM node:14 as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# build solution for production
RUN npm run build

# create a new image and "discard" previous (second stage)
FROM socialengine/nginx-spa

# copy from build folder in the first stage to folder in the server
COPY --from=build /app/dist /app

EXPOSE 80

CMD ["nginx"]

# docker build -f ShiftAppensGameFrontend/Dockerfile.prod -t vue ./ShiftAppensGameFrontend

# docker build image only up to "build" stage
# docker build --target build -f frontend/Dockerfile.prod -t goals-react-1-stage ./frontend