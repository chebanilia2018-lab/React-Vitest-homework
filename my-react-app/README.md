# React + Vite + Vitest - User Profile Project

## Описание проекта

Проект создан с использованием React и Vite.  
Реализован компонент, который выполняет асинхронный GET-запрос к API и отображает данные пользователя.

Компонент UserProfile получает данные с:
https://jsonplaceholder.typicode.com/users/1

Отображается:
- имя пользователя
- email пользователя
- состояние загрузки
- сообщение об ошибке при неудачном запросе

---

## Установка

npm install

---

## Запуск проекта

npm run dev

---

## Запуск тестов

npm run test

---

## Ссылка на GitHub репозиторий

https://github.com/chebanilia2018-lab/React-Vitest-homework.git

---

## Ссылка на деплой (Vercel)

https://my-react-app-phi-ashy.vercel.app

---

## Тесты проверяют

- состояние загрузки
- успешное получение данных пользователя
- обработку ошибки
- мокирование API-запроса

---

## Структура проекта
```
src/
├── components/
│ ├── UserProfile.jsx
│ ├── UserProfile.test.jsx
├── App.jsx
├── main.jsx

```