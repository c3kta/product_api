# Пример реализации API на Node.js

Сделано Зинином Александром Александровичем

## Установка

Склонируйте репозиторий на свою локальную машину с помощью команды:
### `git clone https://github.com/c3kta/product_api.git`

Перейдите в директорию с проектом:
### `ls product_api`

Для начала, установите все зависимости:
### `npm install`

Затем, запустите приложение:

### `npm start`

Эта команда запускает демона [nodemon](https://www.npmjs.com/package/nodemon).\
Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть результаты в браузере или используйте [Postman](https://www.postman.com/) для обращения к ключам API.

## Методы API
### `/GET` localhost:3000/products
Возвращает список всех продуктов, которые хранятся в базе данных

### `/POST` localhost:3000/products
Параметры запроса:
`{
    name: String, price: Number
}`

Заносит продукт в базу данных и возвращает его в запросе

### `/PATCH` localhost:3000/products
Параметры запроса:
`{
    _id: objectId | String
}`

Изменяет продукт в базе данных и возвращает его в запросе

### `/GET` localhost:3000/products/:id
Возвращает продукт по его идентификатору

### `/DELETE` localhost:3000/products/:id
Удаляет продукт из базы данных и возвращает его в запросе

## Используемый стек

В данном проекте использовался [Node.js](https://nodejs.org/ru) в связке с [Express.js](https://www.typescriptlang.org/) и [MongoDB](https://www.mongodb.com/).

Вы можете связаться со мной в [Telegram](https://t.me/nodejsman) или найти моё резюме на сайте [HeadHunter](https://rostov.hh.ru/applicant/resumes/view?resume=2741aa41ff031e9b950039ed1f5a444f554777). 