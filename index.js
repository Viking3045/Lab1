import { trees } from "./trees.js";
const menu = document.querySelector(".menu");
const form = document.querySelector(".form");
const btn = document.querySelector(".submitFirstForm");
const selectPlatoon = document.querySelector(".selectPlatoon");
const selectTree = document.querySelector(".selectTree");
const selectName = document.querySelector(".name");
const selectMiddleName = document.querySelector(".middleName");
const selectLastName = document.querySelector(".lastName");

selectPlatoon.addEventListener("change", inputPlatoon);
selectTree.addEventListener("change", inputTree);
selectName.addEventListener("change", inputName);
selectMiddleName.addEventListener("change", inputMiddleName);
selectLastName.addEventListener("change", inputLastName);
btn.addEventListener("click", allInformation);
let massTree = {}
const obj = {
  name: "",
  middleName: "",
  lastName: "",
  platoon: "",
  typeOfTree: "",
  density: "",
  firstMass: "",
  secondMass: "",
  secondTemperature: "",
  maximumTemperatureIncrease: "",
  semplMassLost: "",
  time: "",
  first: "",
  second: "",
  third: "",
  fourth: "",
  fifth: "",
  sixth: "",
};

function inputName(event) {
  const name = event.target.value;
  obj.name = name;
  // console.log("name",name)
}
function inputMiddleName(event) {
  const middleName = event.target.value;
  obj.middleName = middleName;
  // console.log("middleName",middleName)
}
function inputLastName(event) {
  const lastName = event.target.value;
  obj.lastName = lastName;
  // console.log("lastName",lastName)
}
function inputPlatoon() {
  const platoon = selectPlatoon.value;
  // console.log("start>>>>>>>>>>>>",platoon)
  obj.platoon = platoon;
}

// console.log("obj>>>",obj)

function inputTree(event) {
  const tree = selectTree.value;
  // console.log(tree)
  obj.typeOfTree = tree;
}

//Підсумок за результатами експерименту

function allInformation() {
  if (
    obj.lastName.length > 1 &&
    obj.name.length > 1 &&
    obj.middleName.length > 1 &&
    obj.platoon.length > 1 &&
    obj.typeOfTree.length > 1
  ) {
    menu.innerHTML = "";
    const container = document.createElement("div")
    container.classList = "container"
    const section = document.createElement("div")
    section.classList = "section"
    section.append(container)
    const ul = document.createElement("ul");
    container.append(ul)
    const li = document.createElement("li");
    ul.append(li);
    const video = document.createElement("video");
    // video.src = "./Лабораторна 1.mp4";
    const source = document.createElement("source")
    source.src = "./Лабораторна 1.mp4"
    // video.autoplay = "autoplay";
    video.classList = "video"
    // video.width = "320";
    // video.height = "300";
    // video.muted = "muted";
    // video.controls = "controls";
    // video.textContent = " Ваш браузер не розпізнає video";
    video.append(source);
    li.append(video);
    menu.append(section);

    const liData = document.createElement("li");
    const title = document.createElement("h2");
    title.textContent = "Початкові данні";
    liData.append(title);
    const tree = document.createElement("ul");
    const itemNameTree = document.createElement("li");
    itemNameTree.classList = "list"
    itemNameTree.textContent = `Назва деревини: ${obj.typeOfTree}`;
    tree.append(itemNameTree);

const treeForTrees = obj.typeOfTree
    console.log("treeForTrees", treeForTrees)
    
    for (let key in trees) {
      // Ключ
      if(key === treeForTrees)
       {massTree = {...trees[key]}
        
       }

    }
// console.log("dsadasd", massTree)
    const itemDensity = document.createElement("li");
 itemDensity.classList = "list"

    itemDensity.textContent = `Густина: ${massTree.density}г/см2`;
    tree.append(itemDensity);
    obj.density = massTree.density;

    const itemSize = document.createElement("li");
    itemSize.textContent = "Розмір зразка:60*150*30 мм";
    itemSize.classList = "list"
    tree.append(itemSize);
    const itemMass = document.createElement("li");
    itemMass.classList = "list"
    itemMass.textContent = `Маса:${massTree.mass}г`;
    obj.firstMass = massTree.mass;
    tree.append(itemMass);
    const itemFirstTemperature = document.createElement("li");
    itemFirstTemperature.classList = "list"
    itemFirstTemperature.textContent = "Початкова температура:200Сг";
    tree.append(itemFirstTemperature);

    liData.append(tree);
    ul.append(liData);
    const final = document.createElement("li");
    final.classList = "result"
    final.textContent =
      "Після завершення випробування фінальні данні з'являться тут:";
// Результати випробувань
    const timerId = setTimeout(() => {
      const randomMass = (Math.random() * (100 - 50) + 50).toFixed(2);
      obj.secondMass = randomMass;
      const secondMass = document.createElement("li");
      secondMass.classList = "secondMass"
      secondMass.textContent = `маса після проведення експерименту: ${randomMass}`;
      const randomTemperature = (Math.random() * (260 - 240) + 240).toFixed(2);
      obj.secondTemperature = randomTemperature;
      const secondTemperature = document.createElement("li");
      secondTemperature.classList = "secondTemperature"
      secondTemperature.textContent = `максимальна температура: ${randomTemperature}`;
      const maximumTemperatureIncrease = document.createElement("li")
      const maxiTemp = (randomTemperature - 200).toFixed(2)
      obj.maximumTemperatureIncrease = maxiTemp
      maximumTemperatureIncrease.textContent = `Максимальний приріст температури ${maxiTemp}`
      maximumTemperatureIncrease.classList = "maximumTemperatureIncrease"
      const sampleMassLoss = document.createElement("li")
      const semplMass = (((massTree.mass-randomMass)/massTree.mass)*100).toFixed(2)
      obj.semplMassLost = semplMass;
      sampleMassLoss.textContent = `Втрата маси зразка  ${semplMass}`
      sampleMassLoss.classList = "sampleMassLoss"
      //Час досягнення максимальної температури
      const randomTime = Number((Math.random() * (300 - 20) + 20).toFixed());
      obj.time = randomTime
      console.log("randomTime", randomTime)

        // за займистістю
           const combustibility = document.createElement("li")
      combustibility.classList = "combustibility"
      let combusityIn = ""
      if(randomTime< 30){
        combusityIn = 'легкозаймисті'
      }
      else if(30<randomTime && randomTime<240){
        combusityIn = 'середньої займистості'
      }
      else if (randomTime> 240){
        combusityIn = "важкозаймисті "
      }
console.log("combusityIn", combusityIn)
      // combustibility.textContent = `За займистістю ${obj.typeOfTree} належить до ${}`
   
      final.append(secondMass);
      final.append(secondTemperature);
      final.append(maximumTemperatureIncrease)
      final.append(sampleMassLoss)
      const prepareReport = document.createElement("button");
      prepareReport.textContent = "Піготувати звіт";
      prepareReport.classList = "report  btn";
      // prepareReport.classList = "";
      prepareReport.type = "button";
      final.append(prepareReport);
      const report = document.querySelector(".report");
      report.addEventListener("click", reportButton);

      // кнопка для початку виконання звіту

      function reportButton() {
        menu.innerHTML = "";
        const sectionReport = document.createElement("section")
        sectionReport.classList = "initialData reportSection"
        const containerReport = document.createElement("div")
        containerReport.classList = "container"
        const form = document.createElement("form");
        // form.id = "content"
        form.classList = "formClear"
        form.autocomplete = "off"
        const fieldset = document.createElement("fieldset");
        fieldset.classList = "fieldsetReport"
        // const h = document.createElement("h2")
        // h.textContent = " Проведіть фінальні розрахунки"
        // Проведіть фінальні розрахунки
        // const zeroQueshions = document.createElement("div")
        // zeroQueshions.classList = "zeroInput"
        // zeroQueshions.textContent =
        //   ``;
        //   const zeroInput = document.createElement("input");
        //   zeroInput.classList = " initialData__input";
        //   zeroInput.name = "zeroInput"
        //   // firstInput.rows = "1"
        //   zeroInput.type="text"

        const firstQuestion = document.createElement("div");
        firstQuestion.classList = "firstInput"
        firstQuestion.textContent =
          "1. Обладнання на якому визначали групи групи горючості будівельних матеріалів";
        const firstInput = document.createElement("input");
        firstInput.classList = " initialData__input";
        firstInput.name = "firstInput"
        // firstInput.rows = "1"
        firstInput.type="text"
        const secondQuestion = document.createElement("div");
        secondQuestion.textContent =
          "2. Згідно якого нормативного документу проводять випробування буд. матеріалів на визначення групи горючості?";
        const secondInput = document.createElement("input");
        secondInput.classList = "secondInput initialData__input";
        secondInput.name = "secondInput"
        secondInput.type="text"
        // secondInput.rows = "1"
        const thirdQuestion = document.createElement("div");
        thirdQuestion.textContent =
          "3. Які показники пожежної небезпеки будівельних матеріалів ви знаєте?";
        const thirdInput = document.createElement("textarea");
        thirdInput.classList = "thirdInput initialData__input";
        thirdInput.name = "thirdInput"
        // thirdInput.type="text"
        thirdInput.rows = "2"
        const fourthQuestion = document.createElement("div");
        fourthQuestion.textContent =
          "4. Які будівельні матеріали були випробувані на визначення групи горючості?";
        const fourthInput = document.createElement("textarea");
        fourthInput.classList = "fourthInput initialData__input";
        fourthInput.name = "fourthInput"
        // fourthInput.type="text"
        fourthInput.rows = "1"
        const fifthQuestion = document.createElement("div");
        fifthQuestion.textContent =
          "5. Класифікація матеріалів за групами горючості";
        const fifthInput = document.createElement("textarea");
        fifthInput.classList = "fifthInput initialData__input";
        fifthInput.name = "fifthInput"
        // fifthInput.type="text"
        fifthInput.rows = "2"
        const sixthQuestion = document.createElement("div");
        sixthQuestion.textContent = "Висновок";
        const sixthInput = document.createElement("textarea");
        sixthInput.classList = "sixthInput initialData__input";
        sixthInput.name = "sixthInput"
        // sixthInput.type="text"
        sixthInput.rows = "5"
        const print = document.createElement("button");
        print.textContent = "зберегти звіт";
        print.type = "button";
        print.classList = "print btn";
        const p = document.createElement("p")
        p.textContent = 


        // zeroQueshions.append(zeroInput);
        // fieldset.append(zeroQueshions)
        firstQuestion.append(firstInput);
        fieldset.append(firstQuestion);
        secondQuestion.append(secondInput);
        fieldset.append(secondQuestion);
        thirdQuestion.append(thirdInput);
        fieldset.append(thirdQuestion);
        fourthQuestion.append(fourthInput);
        fieldset.append(fourthQuestion);
        fifthQuestion.append(fifthInput);
        fieldset.append(fifthQuestion);
        sixthQuestion.append(sixthInput);
        fieldset.append(sixthQuestion);
        // fieldset.append()
      
        form.append(fieldset);
        form.append(print);
        containerReport.append(form)
        sectionReport.append(containerReport)
        menu.append(sectionReport);

// Кнопка збереження звіту

    const saveFirstInput = document.querySelector(".firstInput")
        saveFirstInput.addEventListener("change", saveFirst)
        function saveFirst (event){
          const first = event.target.value;
          obj.first = first
        }
        const saveSecondInput = document.querySelector(".secondInput")
        saveSecondInput.addEventListener("change", saveSecond)
        function saveSecond (event){
          const second = event.target.value;
          obj.second = second
        }
        const saveThirdInput = document.querySelector(".thirdInput")
        saveThirdInput.addEventListener("change", saveThird)
        function saveThird (event){
          const third = event.target.value;
          obj.third = third
        }
        const saveFourthInput = document.querySelector(".fourthInput")
        saveFourthInput.addEventListener("change", saveFourth)
        function saveFourth (event){
          const fourth = event.target.value;
          obj.fourth = fourth
        }
        const saveFifthInput = document.querySelector(".fifthInput")
        saveFifthInput.addEventListener("change", saveFifth)
        function saveFifth (event){
          const fifth = event.target.value;
          obj.fifth = fifth
        }
        const saveSixthInput = document.querySelector(".sixthInput")
        saveSixthInput.addEventListener("change", saveSixth)
        function saveSixth (event){
          const sixth = event.target.value;
          obj.sixth = sixth
        }
        const saveButton = document.querySelector(".print")
        saveButton.addEventListener("click", saveButtonFunction)
        function saveButtonFunction(){
          if (
            obj.first.length > 1 &&
            obj.second.length > 1 &&
            obj.third.length > 1 &&
            obj.fourth.length > 1 &&
            obj.fifth.length > 1 &&
            obj.sixth.length > 1 
          ){
            // console.log("objFinalInput", obj)
// 
const first = `
Автор звіту  ${obj.name} ${obj.lastName} ${obj.middleName} 
Данні по експерименту:
Назва зразка: ${obj.typeOfTree} ;
Розмір зразка: 60*150*30 мм
Густина:${obj.density} г/см ;
Початкова маса: ${obj.firstMass} г;
Початкова температура: 200 ^C;
Маса після проведення експерименту: ${obj.secondMass} г;
Максимальна температура: ${obj.secondTemperature} ^C;
Максимальний приріст температури: ${obj.maximumTemperatureIncrease} ^C;
Втрата маси зразка: ${obj.semplMassLost} г;

Відповіді на запитання:
1. ${obj.first}
2. ${obj.second}.
3. ${obj.third}.
4. ${obj.fourth}.
5. ${obj.fifth}.
Висновок: ${obj.sixth}.`

const blob = new Blob([first], { type: 'text/plain' });

// Створюємо URL для Blob
const url = URL.createObjectURL(blob);

// Створюємо елемент <a> для завантаження файлу
const a = document.createElement('a');
a.href = url;
a.download = `Звіт ${obj.lastName}.txt`; // Назва файлу

// Додаємо елемент до документа
document.body.appendChild(a);
// Симулюємо клік на елемент
a.click();
// Видаляємо елемент з документа
document.body.removeChild(a);
// Вивільняємо URL
URL.revokeObjectURL(url);
menu.innerHTML = ""
const sectionRefresh = document.createElement("section")
sectionRefresh.classList = "initialData refreshSection"
        const containerRefresh = document.createElement("div")
        containerRefresh.classList = "container"
const h = document.createElement("h2")
h.textContent = "Ваша робота збережена, відправте її викладачу"
const refreshBtn = document.createElement("button")
refreshBtn.classList = "btn"
refreshBtn.textContent = "Провести експеримент знову"
refreshBtn.type = "reset"
refreshBtn.addEventListener("click", function(){
  location. reload()
})
containerRefresh.append(h)
containerRefresh.append(refreshBtn)
sectionRefresh.append(containerRefresh)
menu.append(sectionRefresh)
          } else {
            alert("Будь ласка заповніть всі поля");
          }
          
        } 
      }
    }, 1000);
    ul.append(final);
    
  } else {
    alert("Будь ласка заповніть всі поля");
  }
}

//Збереження скріншоту

//   html2canvas(document.getElementById('content')).then(function(canvas) {
//     var imgData = canvas.toDataURL('image/png');
//     var pdf = new jsPDF();
    
//     // Додаємо зображення в PDF
//     pdf.addImage(imgData, 'PNG', 10, 10);
//     pdf.save('screenshot.pdf');



// menu.innerHTML = "Ваша робота збережена, відправте її викладачу"
// });

//   const { jsPDF } = window.jspdf;

//   // Створення нового PDF документа
//   const doc = new jsPDF();

//   doc.setFont("Roboto");
//   // Отримання даних з форми

//   const email = obj.middleName
//   console.log("name",name)
//   console.log("email",email)
// const n = "Ім'я:"
//   // Додавання тексту до PDF
//   doc.text(`${name}` , 10, 10);
//   // doc.text(`Електронна пошта: ${email}`, 10, 20);

//   // Збереження PDF файлу
//   doc.save('form-data.pdf');