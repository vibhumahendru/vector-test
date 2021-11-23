FROM node:15.13-alpine
WORKDIR /vector_frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install && npm install -g react-scripts
RUN npm run build
CMD ["npm", "start"]
