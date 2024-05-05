# *Проект ChatRoom*

# [ССЫЛКА НА ПРОЕКТ](https://foodgram-project.sytes.net/)
## Авторы
 - [Павел Тыртин](https://github.com/R1Sen007)

## Технологии
### backend
 - Django==4.2.11
 - django-filter==24.2
 - django-cors-headers==4.3.1
 - djoser==2.2.2
 - channels==4.1.0  (daphne)
 - channels-redis==4.2.0
### frontend
 - React
### server
 - docker
 - daphne
 - redis

## Описание:

*Пользователи сервиса могут зарегистрироваться и присоединяться к существующим чат-румам для общения с другими пользователями через WebSocket соединения.*

## Как развернуть проект:

*Проект в разработке, поэтому развернуть пока что можно только локально.*

- Клонировать репозиторий
```
git clone https://github.com/R1Sen007/multiple_chat_room.git
```

- Запустить контейнер с Redis:
```
docker run -p 6379:6379 -d redis:5
```

- Запуск backend:
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Для доступа к админке создать суперюзера.

- Запуск фронт
```
cd frontend
yarn i
yarn start
```

- Ввести в адресной строке браузера "localhost:3000"