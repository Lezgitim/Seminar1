// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// const findElementByClass = (el, clas) => {
//   const children = [...el.children];

//   return children.forEach((element) => {
//     if (element.className === clas) {
//       console.log(element);
//     }
//   });
// };

const findElementByClass = (el, clas) => {
    const {children} = el;
    for (const key in children) {
        if (children[key].className === clas){
        return children[key]
        }
    }
}


const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);

// Я так и не понял как рекурсией можно сделать. Можете отправить мне правильное решение?