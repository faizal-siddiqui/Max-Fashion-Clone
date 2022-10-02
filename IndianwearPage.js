
// Cards Grid

let objArr = [
    {
        price: 559,
        mrp: 799,
        name: "MAX Women Floral Print Sleeveless Shirt Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011189343-Green-DARKGREEN-1000011189343-21042022_01-2100.jpg",
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Women Floral Bell Sleeveless Printed Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011189244-Green-GREEN-1000011189244-20042022_01-2100.jpg",
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Women Floral Print straight Sleeveless Plazzo Rupatta Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011183810-Purple-VIOLET-1000011183810-22022022_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Women Floral Print Straight Kurta with Elasticated Plazzo and Dupatta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222290-Green-GREEN-1000011222290-06072022_01-2100.jpg"
    },

    {
        price: 750,
        mrp: 1499,
        name: "MAX Women Print Straight Kurta with Elasticated Plazzo",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010653752-Blue-Navy-1000010653752-8272021_01-2100.jpg"
    },

    {
        price: 850,
        mrp: 1699,
        name: "MAX Women Print Straight Kurta with Plazzo and Dupatta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010653414-Grey-Grey-1000010653414-8272021_01-2100.jpg"
    },

    {
        price: 349,
        mrp: 499,
        name: "MAX Women Floral Print quarter Sleeves Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010518954-Blue-Aqua-1000010518954-9032021_01-2100.jpg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Women Printed Three quarter Sleeves Straight Kurta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222589-Red-RED-1000011222589-27062022_01-2100.jpg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Women Polar Print Sleeves with Plazo Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010518929-Purple-Lilac-1000010518929-7222021_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 699,
        name: "MAX Women Embroided Sleeves Kurta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010653635-Pink-Pink-1000010653635-9032021_01-2100.jpg"
    },

    {
        price: 759,
        mrp: 1499,
        name: "MAX Women Floral Print Straight Kurta with Plazzos",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222277-Blue-BLUE-1000011222277-06072022_01-2100.jpg"
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Women Floral Print Straight Kurta with Plazzos with Rupatta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011188802-Yellow-MUSTARD-1000011188802-31032022_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Women Printed Print Sleeves Staright Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010518828-Blue-Blue-1000010518828-7222021_01-2100.jpg"
    },

    {
        price: 629,
        mrp: 799,
        name: "MAX Women Floral Print Sleeveless Shirt Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011188466-Multicolour-M-1000011188466-21042022_01-2100.jpg"
    },

    {
        price: 859,
        mrp: 1399,
        name: "MAX Women Embroided Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011188596-Blue-BLUE-1000011188596-12062022_01-2100.jpg"
    },

    {
        price: 959,
        mrp: 1399,
        name: "MAX Women Ethnic Print Sleeveless Shirt Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010467468-Yellow-Mustard-1000010467468-7222021_01-2100.jpg"
    },

    {
        price: 1859,
        mrp: 1909,
        name: "MAX Women Printed Band Collar kurta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011189752-Pink-PINK-1000011189752-21042022_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 799,
        name: "MAX Women straight Kurta with Elasticated Plazzo",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222381-Blue-BLUE-1000011222381-06072022_01-2100.jpg"
    },

    {
        price: 1259,
        mrp: 1599,
        name: "MAX Women Floral Kurta Pant",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011183823-Pink-PEACH-1000011183823-22022022_01-2100.jpg"
    },

    {
        price: 1759,
        mrp: 1909,
        name: "MAX Women Straight Kurta with Pants Full Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222524-Blue-LIGHTBLUE-1000011222524-20042022_01-2100.jpg"
    },

    {
        price: 750,
        mrp: 1499,
        name: "MAX Women Print Straight Kurta with elasticated Plazzo",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010653752-Blue-Navy-1000010653752-8272021_01-2100.jpg"
    },

    {
        price: 850,
        mrp: 1699,
        name: "MAX Women Print Straight Kurta with Plazzo and Dupatta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010653414-Grey-Grey-1000010653414-8272021_01-2100.jpg"
    },

    {
        price: 349,
        mrp: 499,
        name: "MAX Women Floral Print quarter Sleeves Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010518954-Blue-Aqua-1000010518954-9032021_01-2100.jpg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Women Printed Three quarter Sleeves Straight Kurta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222589-Red-RED-1000011222589-27062022_01-2100.jpg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Women Polar Print Sleeves with Plazo Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010518929-Purple-Lilac-1000010518929-7222021_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 699,
        name: "MAX Women Embroided Sleeves Kurta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010653635-Pink-Pink-1000010653635-9032021_01-2100.jpg"
    },

    {
        price: 759,
        mrp: 1499,
        name: "MAX Women Floral Print Straight Kurta with Plazzos",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222277-Blue-BLUE-1000011222277-06072022_01-2100.jpg"
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Women Floral Print Straight Kurta with Plazzos with Rupatta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011188802-Yellow-MUSTARD-1000011188802-31032022_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Women Printed Print Sleeves Staright Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010518828-Blue-Blue-1000010518828-7222021_01-2100.jpg"
    },

    {
        price: 629,
        mrp: 799,
        name: "MAX Women Floral Print Sleeveless Shirt Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011188466-Multicolour-M-1000011188466-21042022_01-2100.jpg"
    },

    {
        price: 859,
        mrp: 1399,
        name: "MAX Women Embroided Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011188596-Blue-BLUE-1000011188596-12062022_01-2100.jpg"
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Women Floral Print Sleeveless Shirt Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011189343-Green-DARKGREEN-1000011189343-21042022_01-2100.jpg",
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Women Floral Bell Sleeveless Printed Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011189244-Green-GREEN-1000011189244-20042022_01-2100.jpg",
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Women Floral Print straight Sleeveless Plazzo Rupatta Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011183810-Purple-VIOLET-1000011183810-22022022_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Women Floral Print Straight Kurta with elasticated Plazzo and Dupatta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222290-Green-GREEN-1000011222290-06072022_01-2100.jpg"
    },

    {
        price: 750,
        mrp: 1499,
        name: "MAX Women Print Straight Kurta with elasticated Plazzo",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010653752-Blue-Navy-1000010653752-8272021_01-2100.jpg"
    },

    {
        price: 959,
        mrp: 1399,
        name: "MAX Women Ethnic Print Sleeveless Shirt Dress",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010467468-Yellow-Mustard-1000010467468-7222021_01-2100.jpg"
    },

    {
        price: 1859,
        mrp: 1909,
        name: "MAX Women Printed Band Collar kurta",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011189752-Pink-PINK-1000011189752-21042022_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 799,
        name: "MAX Women straight Kurta with Elasticated Plazzo",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011222381-Blue-BLUE-1000011222381-06072022_01-2100.jpg"
    },

    {
        price: 1259,
        mrp: 1599,
        name: "MAX Women Floral Kurta Pant",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011183823-Pink-PEACH-1000011183823-22022022_01-2100.jpg"
    },


];

// console.log(objArr)

display(objArr);

// no of produvts 

let noofproducts = document.querySelector("#noofproducts");
let noofprod = document.querySelector("#noofprod");
noofprod.innerText = objArr.length;

noofproducts.innerText = objArr.length;



function display(data) {
    document.querySelector("#cards-grid").innerHTML = null;
    data.forEach(function (el) {
        let cards = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", el.imagelink);

        // Heart sign
        let heart = document.createElement("h3");
        heart.setAttribute("id", "heart")
        let heartsign = document.createElement("i");
        heartsign.setAttribute("class", "fa-solid fa-heart-circle-plus");
        heart.append(heartsign);
        heart.addEventListener("click", function () {
            heart.style.backgroundColor = "red"
        })



        // Online only

        let onlineOnly = document.createElement("h5");
        onlineOnly.setAttribute("id", "onlineOnly")
        onlineOnly.innerText = "ONLINE ONLY";

        // OFF

        let off = document.createElement("h5");
        off.setAttribute("id", "off")
        off.innerText = "30% OFF";

        let priceDiv = document.createElement("div")

        let price = document.createElement("h3");
        price.innerText = `₹${el.price}`;

        let mrp = document.createElement("h4");

        let strike = document.createElement("s");
        strike.innerText = `₹${el.mrp}`;
        mrp.append(strike)

        priceDiv.append(price, mrp);

        let name = document.createElement("p");
        name.innerText = el.name;

        // Button add to basket

        let Button = document.createElement("button");
        Button.setAttribute("class", "addtoBasket")
        Button.innerText = "ADD TO BASKET"

        // Button click to local storage to cart

        Button.addEventListener("click", function () {
            itemtoLocal(el);
        });

        cards.append(image, heart, onlineOnly, off, priceDiv, name, Button);

        document.querySelector("#cards-grid").append(cards)
    })
}

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function itemtoLocal(el) {
    cartItems.push(el);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


// sticky navbar

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("Navbar");
var sticky = Navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Signup

let signup = document.getElementById("signup-click");
signup.addEventListener("click", signupFunc);


function signupFunc(el) {
    el.preventDefault();
    let SignupForm = document.querySelector("form");
    SignupForm.setAttribute("id", "signup");
    let Signuprem = document.querySelector("form");
    Signuprem.style.display = "block"
}

let removesignup = document.getElementById("signupcut");
removesignup.addEventListener("click", signupRemFunc);

function signupRemFunc(el) {
    el.preventDefault();
    let Signuprem = document.querySelector("form");
    Signuprem.style.display = "none"

    console.log("rem")
}


// otp Page
let mobilenum = JSON.parse(localStorage.getItem("loginArr")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", function (ele) {
    ele.preventDefault();
    let otppage = document.querySelector("#otppage");
    otppage.style.display = "block"

    let obj = {
        mobile: form.mobile.value,
        name: form.name.value,
    };

    mobilenum.push(obj);

    localStorage.setItem("loginData", JSON.stringify(mobilenum));

})

// otp store

localStorage.setItem("otp", "1234");



// otppage remove

let removeotp = document.getElementById("otpcut");
removeotp.addEventListener("click", otpRemFunc);


function otpRemFunc(el) {
    el.preventDefault();
    let signup = document.querySelector(".form1");
    let otppage = document.querySelector("#otppage");
    otppage.style.display = "none";
    signup.style.display = "none";

}

let otppage = document.querySelector("#otppage");
otppage.addEventListener("submit", verifyotp)

function verifyotp(el) {
    el.preventDefault();
    let otp = otppage.otp.value;

    let localotp = JSON.parse(localStorage.getItem("otp"));

    if (otp == localotp) {
        alert("SIGN UP SUCCESFUL");
        otppage.style.display = "none";
        otppage.otp.value = "";
        form.style.display = "none";

    } else {
        alert("WRONG OTP")
    }
}

// HOMEPAGE REDIRECT

let homepage = document.querySelector("#homepageredirect");
homepage.addEventListener("click", function () {
    window.location.href = "index.html";
})

// slider Functionality of Price

let selector = document.querySelector("#selector")
let slider = document.querySelector("#slider");
slider.addEventListener("change", function () {
    selector.innerText = `₹100 - ₹${slider.value}`

    let filteredarr = objArr.filter(function (el) {
        return +el.price < slider.value;
    })

    noofproducts.innerText = filteredarr.length;
    noofprod.innerText = filteredarr.length;
    display(filteredarr)

})

// Filter by name

let productstype = document.querySelector("#productstype");
productstype.addEventListener("change", function () {
    let filtername = objArr.filter(function(el){

        if(el.name.includes(productstype.value)){
            return el.name;
        }

    }) 

    noofproducts.innerText = filtername.length;
    noofprod.innerText = filtername.length;
    display(filtername);
})


// Filter by Discount

let discountfilter = document.querySelector("#discountfilter");
discountfilter.addEventListener("change", discountFunc)

function discountFunc(){
    let newdiscount = objArr.filter(function(el){
        return (+el.mrp - +el.price) < discountfilter.value
    })

    display(newdiscount)
    noofproducts.innerText = newdiscount.length;
    noofprod.innerText = newdiscount.length;
}



// relevancesort

let relevancesort = document.querySelector("#relevancesort");
relevancesort.addEventListener("change", relevancesortFunc);

function relevancesortFunc(){
    if(relevancesort.value == "low"){
        let lowtohigh = objArr.sort(function(a, b){
            return a.price - b.price;
        })
        display(lowtohigh);
    } else if(relevancesort.value == "high"){
        let hightolow = objArr.sort(function(a, b){
            return b.price - a.price;
        })
        display(hightolow);
    } else{
        
        display(objArr);
    }
    
}









