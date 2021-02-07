# Старт проекта

###1. Установить зависимости
> npm i

###2. Запустить клиенскую часть
> npm start

**Frontend** start on **8080** port

###3. Запустить серверную часть
> npm run server

**Backend** start on **8000** port

###4. Наслаждайтесь!

Email и пароль для входа как админ
- email - admin@admin.com
- пароль - 123123

# О проекте

###  Описание проекта
Онлайн-магазин

### Клиентская часть
- выполнена с использованием react, react-router, react-intl, redux, redux-thunk, formik, classnames, reselect, less, swiper
- адаптивная верстка
- возможность выбора языка (en/ru)
- динамическая загрузка модулей
- типизация flow
- линтеры eslint, stylelint
- autoprefixer postcss
- кастомная сборка webpack (НЕ create react app)

### Серверная часть
- выполнена с использованием node, express, multer, mongoose, jsonwebtoken, cloudinary
- база данных MongoDB Cloud
- хранилище картинок cloudinary
- авторизация через jsonwebtoken

### Возможности
- sing in, log in, log out
- просматривать историю заказов (для login пользователей)
- создавать продукты (для admin пользователей)
- просматривать поступившие заказы (для admin пользователей)
- сортировать товары по цене
- фильтровать товары по цене
- добавлять товары к корзину
- просматривать текущую корзину
- выбор локали (en/ru)
