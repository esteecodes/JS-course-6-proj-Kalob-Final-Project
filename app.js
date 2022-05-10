// my lovely messy project
const title = document.querySelector(".title");
const titleLetters = title.innerText.split("");
//const titleArray = title.split('')
let html = "";

titleLetters.forEach((letter) => {
  let classes = "";
  let upper = "";
  if (letter !== " ") {
    classes = "style js-style";
  }
  if (letter !== letter.toLowerCase()) {
    upper = "upper";
  }
  html = html + `<span class='${classes} ${upper}'>${letter}</span>`;
});

title.innerHTML = html;

const jsLetters = document.querySelectorAll(".js-style");

jsLetters.forEach((node) => {
  node.addEventListener("mouseover", function (event) {
    this.classList.add("active");
    // event.target.classList.add("red")
  });
  node.addEventListener("mouseout", function (event) {
    this.classList.remove("active");
    // event.target.classList.remove("red")
  });

  // node.addEventListener("click", function (event) {
  //   this.classList.toggle("upper");

  //   // if (node == node.toUpperCase()) {
  //   //   this.classList.toggle("yellow");
  //   // }

  //   // alert("STOP clicking me!");
  //   // this.classList.remove("active");
  //   // event.target.classList.remove("red")
  // });
});

const jsUpperCased = document.querySelectorAll(".upper");

jsUpperCased.forEach((node) => {
  node.addEventListener("click", function (event) {
    this.classList.toggle("upper");
    // event.target.classList.add("red")
  });
});

// for ( let i = 0; titleText.length; i++)
//title.addEventListener("mouseenter", function (event) {
// highlight the mouseover target
// event.target.style.color = "orange";

// 	for (let i = 0; titleArray.length; i++) {
// 		titleArray[i].classList.add("red");
// 	}
// });

// for (let i = 0; titleArray.length; i ++) {
// 	titleArray[i].classList.add("red");
// }

// NAME LINK HOVER REPLACEMENT
document.querySelector(".name").addEventListener("mouseenter", entering);
document.querySelector(".name").addEventListener("mouseleave", leaving);
function entering(ev) {
  ev.currentTarget.style.color = "#0e8a8a";
}

function leaving(ev) {
  ev.currentTarget.style.color = "#006666";
}

// MY-USERNAME LINK HOVER REPLACEMENT
// using 'mouseenter' again overrides my link style above, so I switched to 'mouseover
document.querySelector(".my-username").addEventListener("mouseover", overing);
document.querySelector(".my-username").addEventListener("mouseout", outing);
function overing(ev) {
  ev.currentTarget.style.color = "#357cce";
}

function outing(ev) {
  ev.currentTarget.style.color = "#1d61af";
}
