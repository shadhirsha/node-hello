FROM node:16.20.1

# Install Doppler CLI
RUN curl -Ls https://cli.doppler.com/install.sh | sh

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]