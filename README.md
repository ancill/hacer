# hacer

# api

https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql
npm init -y
npm install typescript ts-node @types/node --save-dev

Add the following JSON code into the file:

### tsconfig.json

```json
{
"compilerOptions": {
        "sourceMap": true,
        "outDir": "dist",
        "strict": true,
        "lib": ["esnext"],
        "esModuleInterop": true
    }
}
```

npm install prisma --save-dev

### docker-compose.yml

```yml
version: '3.8'
services:
  postgres:
    image: postgres:10.3
    restart: always
    environment:
      - POSTGRES_USER=sammy
      - POSTGRES_PASSWORD=your_password
    volumes:
      - postgres:/var/lib/postgresql/data
    ports:
      - '5432:5432'
volumes:
  postgres:
```

npx prisma init

change .env

make changes in schema.prisma

migrate by `npx prisma migrate dev --name init`

npm install @prisma/client

src/index.ts 
boilerplate 

```ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... your Prisma Client queries will go here
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())



```
