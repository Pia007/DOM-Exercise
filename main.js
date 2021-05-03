// SELECTING ALL ELEMENTS BY id.

const headerSection = document.getElementById("page-header");
const headerTitle = document.getElementById("main-heading");
const articleOne = document.getElementById("para1");
const articleTwo = document.getElementById("para2");
const clickButton = document.getElementById("btn");
const articleFour = document.getElementById("para4");
const boxRed = document.getElementById("red");
const boxBlue = document.getElementById("blue");
const boxYellow = document.getElementById("yellow");
const boxGreen = document.getElementById("green");
const boxBlack = document.getElementById("black");

// Testing to confirm the selections
console.log(headerTitle); 
console.log(articleTwo); 
console.log(boxGreen); 

// Modifying the header text(innerHTML to maintain styling), adding the class bg-success, removing previous classes and confiming
headerTitle.innerHTML = "New DOM Layout";
headerSection.classList.add('bg-success');
headerSection.classList.remove('bg-dark', 'text-white', 'col-sm-12', 'mt-1');
console.log(headerSection);

// Adding text with styling to para1
articleOne.innerHTML = "The <i>Document Object Model (DOM)</i> is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";


// Adding text to para2 and styling the text
articleTwo.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
articleTwo.style.fontStyle = "italic";

// Adding a Click Event () that adds text to para4 when clicked
clickButton.addEventListener("click", () => {
    articleFour.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an boject representing a part of the document.";
    articleFour.style.fontStyle = "italic";
})

//Changing each box color, removing previous classes and confirming
boxRed.classList.add('bg-danger');
boxRed.classList.remove('card', 'text-black', 'bg-white', 'mb-3');
console.log(boxRed);

boxBlue.classList.add('bg-primary');
boxBlue.classList.remove('card', 'text-black', 'bg-white', 'mb-3', 'ml-4');
console.log(boxBlue);

boxYellow.classList.add('bg-warning');
boxYellow.classList.remove('card', 'text-black', 'bg-white', 'mb-3', 'ml-4');
console.log(boxYellow);

boxGreen.classList.add('bg-success');
boxGreen.classList.remove('card', 'text-black', 'bg-white', 'mb-3', 'ml-4');
console.log(boxGreen);

boxBlack.classList.add('bg-dark');
boxBlack.classList.remove('card', 'text-black', 'bg-white', 'mb-3', 'ml-4');
console.log(boxBlack);