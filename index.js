// Button variables
const catBtn = document.createElement("button");
main.appendChild(catBtn);
catBtn.innerText = "Cat Background"


const dogBtn = document.createElement("button");
main.appendChild(dogBtn);
dogBtn.innerText = "Dog Background"


const resetBtn = document.createElement("button");
main.appendChild(resetBtn);
resetBtn.innerText = "Reset"


//button attribute

catBtn.setAttribute("id", "catBtn");
dogBtn.setAttribute("id", "dogBtn");
resetBtn.setAttribute("id", "resetBtn");

catBtn.setAttribute("class", "Btn");
dogBtn.setAttribute("class", "Btn");
resetBtn.setAttribute("class", "Btn");


//button event listener
catBtn.addEventListener("click", function () {

    document.body.style.backgroundImage = "url('images/cat.jpg'";

})

dogBtn.addEventListener("click", function () {

    document.body.style.backgroundImage = "url('images/dog.jpg'";

})


resetBtn.addEventListener("click", function () {

    document.body.style.backgroundImage = "";


})



