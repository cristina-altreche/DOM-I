const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Top Nav
let navList = document.querySelectorAll("a");
navList[0].textContent = "Services";
navList[1].textContent = "Product";
navList[2].textContent = "Vision";
navList[3].textContent = "Features";
navList[4].textContent = "About";
navList[5].textContent = "Contact";
//nav-links color
for (i = 0; i < navList.length; i++) {
  navList[i].style.color = "green";
}
//Append & Prepend
const lastNav = document.createElement("a");
const firstNav = document.createElement("a");

lastNav.textContent = "Blog";
firstNav.textContent = "Home";

let navigation = document.querySelector("nav");
navigation.appendChild(lastNav).style.color = "green";
navigation.prepend(firstNav);
firstNav.style.color = "green";

//Top section
let head = document.querySelector(".cta-text h1");
head.textContent = "DOM is awesome";
let btn = document.querySelector(".cta-text button");
btn.textContent = "Get Started";
let topImg = document.querySelector("#cta-img");
topImg.src = "/img/header-img.png";

//Main Content
let allH4 = document.querySelectorAll("h4");
allH4[0].textContent = "Features";
allH4[1].textContent = "About";
allH4[2].textContent = "Services";
allH4[3].textContent = "Product";
allH4[4].textContent = "Vision";
allH4[5].textContent = "Contact";
let midImg = document.querySelector("#middle-img");
midImg.src = "/img/mid-page-accent.jpg";
let allMidP = document.querySelectorAll(".main-content p");
allMidP[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
allMidP[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
allMidP[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
allMidP[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
allMidP[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Contact
let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = "123 Way 456 Street Somewhere, USA";
contactP[1].textContent = "1 (888) 888-8888";
contactP[2].textContent = "sales@greatidea.io";

//Footer
let copyright = document.querySelector("footer p");
copyright.textContent = "Copyright Great Idea! 2018";
