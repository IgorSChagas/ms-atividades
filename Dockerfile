# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto para dentro do contêiner
COPY . .

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
