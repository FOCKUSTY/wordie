### Какие зависимости используются ?
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
2. next - Next js (Главный фреймворк/Библиотека)
3. react & react-dom  - React js

### Как работает код обоих частей ?
- Как уже понятно, весь основной код написан в `src/`
- Большинство файлов написано в таком стиле: `НАЗВАНИЕ.ТИП.РАСШИРЕНИЕ`, пример: `layout.ui.tsx` или `init.database.ts`

### Как работает код клиентской части ?
- Страницы сайта написаны в папке `pages/`, хотелось сделать их через классы, но оставил функциями, потому что не понял
- `api/` - Главные функции, помогающие обращаться к серверу
- `context/` - Создание контекста, для сохранения пользователя
- `styles/` - Думаю, тут и объяснять не надо
- `ui/` - Интерфейс и компоненты, короче, удобство
- `utility/` - Утилиты, по типу обработчиков и типов. Тоже для более удобной работы

### Как работает код серверной части ?
- `controllers/` - Контроллеры, я не знаю, как еще это описать, с `services/` также
- `database/` - База данных, `schema/` - Схема моделей, `logic/` - логика, хотя она нужна в крайнем случае
- `routes/` - Пути в `{url}/api`, в `index.ts` мы инициализируем другие пути
- `strategies/` - Стратегии, в `discord.ts` мы описываем схемы работы с авторизацией и аутентификацией
- `types/` - Ну, тут и так всё понятно. Тупо пути
- `utils/` - Утилиты для более упрощенной работы, эту папку мы разберем более подробно
1. В `app.ts` мы описываем приложение, создаем класс `App` и в этом классе создаем приватный метод `init`, после используем его в конструкторе
2. `middleware.ts` мы пропустим
3. `session.ts` - Мы создаем класс `Session` и в этом классе создаем публичный метод `create`, для того, чтобы создать сессию