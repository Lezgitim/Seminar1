"use strict";

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = (digit) => {
  return {
    increment: () => ++digit,
    decrement: () => --digit,
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.decrement());
