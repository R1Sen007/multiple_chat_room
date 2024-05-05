# *Проект ChatRoom*

## Авторы
 - [Павел Тыртин](https://github.com/R1Sen007)

## Технологии
### backend
 - Django==4.2.11
 - djangorestframework==3.15.1
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

*Пользователи сервиса могут зарегистрироваться и присоединяться к существующим чат-румам
для общения с другими пользователями через WebSocket соединения.
В чатах присутствует история сообщений, так что никто ничего не пропустит :)*

<img width="741" alt="image" src="https://github.com/R1Sen007/multiple_chat_room/assets/107049101/b6ed2b13-e7f5-47c4-b166-549d1b080735">
<img width="718" alt="image" src="https://github.com/R1Sen007/multiple_chat_room/assets/107049101/ad76b1f4-2369-4309-88c2-70110976a296">
<img width="706" alt="image" src="https://github.com/R1Sen007/multiple_chat_room/assets/107049101/745a8244-3c70-4e65-b7c7-b553144094ff">




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
