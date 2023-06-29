// NODE.JS INTRODUCTION
// 12-1.
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку,
// що містить ім’я поточного користувача операційної системи,
//  тип операційної системи, час роботи системи в хвилинах (використати модуль OS),
//  поточну робочу директорію і назву файлу сервера (використати модуль path).
// Зображення
const http = require("http");
const os = require("os");
const path = require("path");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`<h1>System information</h1>
    <div>
    <p>Current user name:${os.userInfo().username}</p>
    <p>OS type:${os.type}</p>
    <p>System work time:${os.uptime}</p>
    <p>Current work directory:${process.cwd()}</p>
    <p>Server file name: ${path.basename(__filename)}</p>
    </div>`);

    response.end();
  })
  .listen(500);

// 12-2.
// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера
//  і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера.
// /Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports.
const personalmodule = require("./personalmodule");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
    <p>Date of request: ${new Date()}</p>
    <p>${personalmodule.userGretting()}, ${os.userInfo().username}</p>
    `);
    response.end();
  })
  .listen(700);
