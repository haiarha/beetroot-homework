// Создать HTML-страницу для отображения/редактирования текста.

// ✅ При открытии страницы текст отображается с помощью тега div.

const CODE_E = "KeyE";
const KEY_CODE_E = 69;

const CODE_S = "KeyS";
const KEY_CODE_S = 83;

window.addEventListener("keydown", (e) => {
  if (!e.ctrlKey) return;

  // ✅ При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом,
  // который теперь можно редактировать.
  if (e.code === CODE_E || e.keyCode === KEY_CODE_E) {
    e.preventDefault();

    const divEl = document.getElementById("text");
    if (divEl === null) return;

    const divText = divEl.innerText;

    const textareaEl = document.createElement("textarea");
    textareaEl.id = "textarea";
    textareaEl.value = divText;
    textareaEl.rows = 5;
    textareaEl.cols = 50;

    divEl.parentElement.replaceChild(textareaEl, divEl);
  }

  // ✅ При нажатии Ctrl + S, вместо textarea появляется div с уже измененным текстом.
  // Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
  if (e.code === CODE_S || e.keyCode === KEY_CODE_S) {
    e.preventDefault();

    const textareaEl = document.getElementById("textarea");
    if (textareaEl === null) return;

    const textareaText = textareaEl.value;

    const divEl = document.createElement("div");
    divEl.id = "text";
    divEl.innerText = textareaText;

    textareaEl.parentElement.replaceChild(divEl, textareaEl);
  }
});

// window.addEventListener('keydown', (e) => {
//   e.preventDefault();
//     // console.log(1111, e);
// });

// document.onselectionchange = function() {
//   // selection = document.getSelection();
//   console.log('New selection made');
//   if (window.getSelection) {
//     if (window.getSelection().empty) {  // Chrome
//       window.getSelection().empty();
//     } else if (window.getSelection().removeAllRanges) {  // Firefox
//       window.getSelection().removeAllRanges();
//     }
//   } else if (document.selection) {  // IE?
//     document.selection.empty();
//   }
// };

// window.oncontextmenu = function (e) {
//   e.preventDefault();
// }
