1. установка модулей - npm install
2. накатываем миграции - npx sequelize-cli db:migrate (в этих миграциях создаются нужные таблицы)
3. запуск - npm start
4. далее просто используя например Postmen можно проверить работу эндпоинтсов:
   - http://localhost:5000/api/art - GET;
   - http://localhost:5000/api/art/ID - GET;
   - http://localhost:5000/api/art/comments - POST; (помимо полей userId(по желанию), name, content также вводится поле artId целого
                                              типа которое связывает данный коментарий с таблицей Art)
   - http://localhost:5000/api/users - GET;
   - http://localhost:5000/api/users/create - POST (вводятся поля name, age, location);
5. обработка ошибок сделана для эндпоинтса - http://localhost:5000/api/art/comments, приведённого также выше в котором создаются коментарии
