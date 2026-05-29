FROM node:22
WORKDIR /usr/src/app

# Install SERVER deps
COPY package*.json ./
RUN npm ci

# Install CLIENT deps
COPY client/package*.json ./client/
RUN npm ci --prefix client

# Copy everything and build the client
COPY . .
RUN npm run build --prefix client

CMD [ "npm", "start" ]
