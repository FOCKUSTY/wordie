﻿# wordie

Небольшая игра для одного или двух человек, помогающая расслабиться или наоборот напрячь мозг

![Static Badge](https://img.shields.io/badge/fockusty-wordie-wordie)
![GitHub top language](https://img.shields.io/github/languages/top/fockusty/wordie)
![GitHub](https://img.shields.io/github/license/fockusty/wordie)
![GitHub Repo stars](https://img.shields.io/github/stars/fockusty/wordie)
![GitHub issues](https://img.shields.io/github/issues/fockusty/wordie)

![Logotype](./docs/Logo.png)

## Кратко о проекте:

### Локальная установка (Windows, npm/pnpm)

1. Склонируйте репозиторий

```
git clone https://github.com/FOCKUSTY/wordie.git
```

2. Перейдите в директорию

```
cd wordie
```

3. Перейдите в `server` & `client` (В разных терминалах/консолях)

```
cd server
```
&
```
cd client
```

4. Установка зависимостей

- server
```
npm install
```
или
```
pnpm install
```

- client
```
npm install
```
или
```
pnpm install
```

5. Установка дополнительных зависимостей

- server
```
npm install mongoose
```
или
```
pnpm install mongoose
```

- client
```
npm install random-js
```
или
```
pnpm install random-js
```

6. Установка базы данных
- Установите [mongodb](https://www.mongodb.com) и [mongodb compass](https://www.mongodb.com/products/tools/compass)

7. Удостовертесь, что Вы все правильно сделали
8. Наслаждайтесь!

### История
Я сначала играл с человеком в слова, а потом мне в голову пришла гениальная идея "Почему бы не сделать самому игру в слова, но с ботом или с человеком", сначала я сделал игру в консоли, а потом плавно перешел на React, с реакта я соскочил на Next, было весело

### Как играть ?
- Количество человек: от двух
- Начало игры: Какой-либо из людей начинает ход, загадывая любое слово
- Слово должно являться: Существительным именительного падежа в единственном числе любого склонения и любого рода
- ИСКЛЮЧЕНИЕ: Если данного слова нет в единственном числе, то можно написать во множественном числе
- После того, как первый человек назвал свое слово, нужно посмотреть на какую букву оно заканчиваться
- Когда мы узнали последюю букву, следующий человек (По договоренности группы людей) говорит свое слово, которое обязано начинаться на последнюю букву прошлого слова

- ГЛАВНОЕ, чтобы слова не повторялись, иначе это не будет защитано, как ответ. КАЖДОЕ слово должно быть УНИКАЛЬНЫМ
- ЕСЛИ последняя буква это: Ь, Ъ или Ы, ТО нужно выбрать предпоследнюю букву
- ЕСЛИ Вы не можете придумать слова на последнюю буквы, Вы ОБЯЗАНЫ спросить у группы людей/человека, играющих с вами поменять букву на предпоследнюю
- Игра расчитано на веселую и долгую игру, выбыть нельзя, если Вы еще можете придумывать слова


<hr>


# Если
- Если Вам не достаточно информации, можете почитать [дополнительную документацию](./docs/index.md)
- Если возникли проблемы или сложности, создайте [обсуждение](https://github.com/fockusty/wordie/issues/new/choose) в репозитории
- Если Вы заметили проблемы в коде, пишите мне в [Discord](https://discord.gg/5MJrRjzPec) или в [Telegram](https://t.me/FOCKUSTY)

<div align="center">
    <img src="./docs/TheVoid.TALL.jpg.png" alt="banner">
</div>
