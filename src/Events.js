/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
   let btn = document.createElement('button');
   btn.textContent = "Удали меня";
   document.body.append(btn);
   btn.addEventListener('click',()=>{document.body.removeChild(btn), true});
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
   let list = document.createElement('ul');
   document.body.append(list);
   arr.forEach(line => {
      let list_elem = document.createElement('li');
      list_elem.textContent = line
      list_elem.addEventListener('mouseover',()=>{
         list_elem.setAttribute('title', line)
      }, true);
      list.append(list_elem)
   });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
   let a = document.createElement('a');
   a.setAttribute('href',"https://tensor.ru/")
   a.textContent = "tensor"
   a.addEventListener('click', ()=>{
      a.textContent += " " + a.href
   }, true)
   document.body.append(a)
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/

export function createList() {
  let list = document.createElement('ul')
  document.body.append(list)

  let funct = () => {
   let list_elem = document.createElement('li')
   list_elem.textContent = "Пункт"
   list_elem.addEventListener('click',()=>{
        list_elem.textContent+="!"
   }, true)
   list.append(list_elem);
   }
   funct()
   
   let btn = document.createElement('button')
   btn.textContent = "Добавить пункт"
   btn.addEventListener('click',funct,true);
   document.body.append(btn);
}
