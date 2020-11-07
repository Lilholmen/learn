'use strict';

let name = prompt('Кто вы?', 'Ваше имя');

if (name === 'Админ') {
  let passwordEntered = prompt('Введите пароль', 'Пароль');
  if (passwordEntered === 'Я главный') {
    alert('Здравствуйте');
  } else if (passwordEntered === null) {
    alert('Действие отменено');
  } else {
    alert('Пароль неверный');
  }
} else if (name === null) {
  alert('Действие отменено');
} else {
  alert('Я вас не знаю');
}
