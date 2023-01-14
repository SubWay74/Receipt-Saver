const cursor = document.querySelector(".cursor");

let topScroll;
function cursorMove(e) {
  cursor.style.top = `${e.pageY}px`
  cursor.style.left = `${e.pageX}px`
  console.log(e.clientY)
  topScroll = e.pageY;
}

window.addEventListener("mousemove", cursorMove);


const navLinks = document.querySelector(".nav-links");

navLinks.childNodes.forEach(link => {
  if (link.nodeType !== 3) {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("cursor-hovered")

    })
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hovered")
    })
    
  }
})

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const maintxt = document.querySelector(".main-txt");
const mainVid = document.getElementById("mainvideo");



function all() {
  
  setTimeout(() => {
    one.style.top = "30%";
    two.style.top = "23%";
    three.style.right = "25%";
    maintxt.textContent += "Never";
  }, 1000);
  setTimeout(() => {
    one.style.left = "30%";
    two.style.right = "30%";
    three.style.bottom = "41%";
    maintxt.textContent += " lose";
  }, 2000);
  setTimeout(() => {
    one.style.top = "30%";
    one.style.left = "41%";
    two.style.top = "37%";
    two.style.right = "45%";
    three.style.bottom = "50%";
    three.style.right = "45%";
    maintxt.textContent += " your";
  }, 3000);
  setTimeout(() => {
    one.style.opacity = 0;
    two.style.opacity = 0;
    three.style.opacity = 0;
    maintxt.textContent += " Receipt";
    mainVid.play();
  }, 4000);
  setTimeout(() => {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    maintxt.textContent += " again";

  }, 5000);
}

all()

const partnersUl = document.getElementById("partners-list");

let partnersArr = [
  {
    name: "Amazon",
    img: "img/amazon-logo.webp"
  },
  {
    name: "jumia",
    img: "img/jumia-logo.webp"
  },
  {
    name: "adidas",
    img: "img/adidas-logo.webp"
  },
  {
    name: "chanel",
    img: "img/chanel-logo.webp"
  }
];

for(let i = 0; i < partnersArr.length; i++) {
  const partnerLi = document.createElement("li");
  const partnerImg = document.createElement("img");

  partnerImg.setAttribute("src", partnersArr[i].img);
  partnerImg.setAttribute("alt", partnersArr[i].name);
  partnersArr[i].name === "jumia" ? partnerImg.classList.add("jumia") : "";

  partnerLi.appendChild(partnerImg);
  partnersUl.appendChild(partnerLi);
}

const bundelLists = document.querySelectorAll(".list");


bundelLists.forEach(list => {
  list.addEventListener("mouseover", () => {
    bundelLists[0].classList.remove("list-hovered");
    bundelLists[1].classList.remove("list-hovered");
    bundelLists[2].classList.remove("list-hovered");
    list.classList.add("list-hovered");
  })
});

