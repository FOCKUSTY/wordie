# wordie

Небольшая игра для одного или двух человек, помогающая расслабиться или наоборот напрячь мозг

![Static Badge](https://img.shields.io/badge/fockusty-wordie-wordie)
![GitHub top language](https://img.shields.io/github/languages/top/fockusty/wordie)
![GitHub](https://img.shields.io/github/license/fockusty/wordie)
![GitHub Repo stars](https://img.shields.io/github/stars/fockusty/wordie)
![GitHub issues](https://img.shields.io/github/issues/fockusty/wordie)

## Кратко о проекте:

### История
- Я сначала играл с человеком в слова, а потом мне в голову пришла гениальная идея "Почему бы не сделать самому игру в слова, но с ботом или с человеком", сначала я сделал игру в консоли, а потом плавно перешел на React, с реакта я соскочил на Next, было весело

### Как играть ?
- Количество человек: от двух
- Начало игры: Какой-либо из людей начинает ход, загадывая любое слово
- Слово должно являться: Существительным именительного падежа в единственном числе любого склонения и любого рода
- ИСКЛЮЧЕНИЕ: Если данного слова нет в единственном числе, то можно написать во множественном числе
- После того, как первый человек назвал свое слово, нужно посмотреть на какую букву оно заканчиваться
- Когда мы узнали последюю букву, следующий человек (По договоренности группы людей) говорит свое слово, которое обязано начинаться на последнюю букву прошлого слова

- ГЛАВНОЕ, чтобы слова не повторялись, иначе это не будет защитано, как ответ. КАЖДОЕ слово должно быть УНИКАЛЬНЫМ
- ЕСЛИ последняя буква это: Ь, Ъ или Ы, ТО нужно выбрать предпоследнюю букву
- ЕСЛИ вы не можете придумать слова на последнюю буквы, вы ОБЯЗАНЫ спросить у группы людей/человека, играющих с вами поменять букву на предпоследнюю
- Игра расчитано на веселую и долгую игру, выбыть нельзя, если вы еще можете придумывать слова

### Какие зависимости будут использоваться ?
- Сервер, зависимости для разработки
1. @types/(axios, cors, express, express-session, node, passport, passport-discord, passport-oauth2) - Для типов и typescipt
2. dotenv - Для env файлов
3. nodemon - Для запуска проекта в режиме разработки
4. ts-node - Для билда проекта (Вроде, сам еще не разобрался)
5. typescript - Для typescript

- Сервер, зависимости для работы
1. axios - Для запросов к разным серверам (Например, к Discord)
2. connect-mongo - Для создания подключение к mongo db
3. cors - (Не знаю зачем, серьезно, но оно нужно, без него ломается проект, я серьезно)
4. express - Главная библиотека, создание сервера
5. express-session - Создание сессий
6. passport, passport-discord, passport-oauth2 - Авторизация через Discord (passport - главная библиотека тут)
7. Возможно, Вам понадобиться еще доустановить самому mongoose этой командой `npm install mongoose` 

- Клиент, зависмости для разработки
1. @types/(node, react, react-dom) - Для типов и typescript
2. typescript - Для typescript и tsx

- Клиент, зависимости для работы
1. axios - Для запросов к серверам
2. next - Next js (Главный Фреймворк/Библиотека)
3. react - React js
4. react-dom - React js

### Как работает код клиентской части ?
- Как уже понятно, весь основной код написан в `src/`
- Страницы сайта написаны в папке `pages/`, хотелось сделать их через классы, но оставил функциями, потому что не понял
- `api/` - Главные функции, помогающие обращаться к серверу
- `context/` - Создание контекста, для сохранения пользователя
- `styles/` - Думаю, тут и объяснять не надо
- `ui/` - Интерфейс и компоненты, короче, удобство
- `utility/` - Утилиты, по типу обработчиков и типов. Тоже для более удобной работы
- Большинство файлов написано в таком стиле: `НАЗВАНИЕ.ТИП.РАСШИРЕНИЕ`, пример: `layout.ui.tsx`

### Как работает код серверной части ?
- `controllers/` - Контроллеры, я не знаю, как еще это описать, с `services/` также
- `database/` - База данных, `schema/` - Схема моделей, `logic/` - логика, хотя она нужна в крайнем случае
- `routes/` - Пути в `{url}/api`, в `index.ts` мы инициализируем другие пути
- `strategies/` - Стратегии, в `discord.ts` мы описываем схемы работы с авторизацией и аутентификацией
- `types/` - Ну, тут и так всё понятно. Тупо пути
- `utils/` - Утилиты для более упрощенной работы, эту папку мы разберем более подробно
В `app.ts` мы описываем приложение, создаем класс `App` и в этом классе создаем приватный метод `init`, после используем его в конструкторе
`middleware.ts` мы пропустим
`session.ts` - Мы создаем класс `Session` и в этом классе создаем публичный метод `create`, для того, чтобы создать сессию