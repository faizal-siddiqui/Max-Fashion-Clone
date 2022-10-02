
// Cards Grid

let objArr = [
    {
        price: 559,
        mrp: 799,
        name: "MAX Men Solid Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010533095-Green-Oliveg-1000010533095-7092021_01-2100.jpeg",
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Men Solid Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010533095-Yellow-Mustard-1000010533095-7092021_01-2100.jpg",
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Men Solid Crew Neck T-shirt - Set of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541287-Black-Black-1000010541287-7092021_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Men Solid Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010533095-Red-Red-1000010533095-7092021_01-2100.jpg"
    },

    {
        price: 750,
        mrp: 1499,
        name: "MAX Men Solid Crew Neck T-shirt - Set of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541378-Grey-Chrmel-1000010541378-7092021_01-2100.jpg"
    },

    {
        price: 850,
        mrp: 1699,
        name: "MAX Men Textured Crew Neck T-shirt- Pack of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541300-Blue-Navy-1000010541300-7092021_01-2100.jpg"
    },

    {
        price: 349,
        mrp: 499,
        name: "MAX Men Solid Crew Neck T-shirt- Set of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541326-Grey-Chrmel-1000010541326-7092021_01-2100.jpeg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Men Solid Mandarin Collar Slim Fit Casual Shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011487075-Blue-LIGHTBLUE-1000011487075-25072022_01-2100.jpg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Men Solid Sleeveless T-shirt - Set of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541339-Black-Black-1000010541339-7092021_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 699,
        name: "MAX Men Printed Regular Fit Crew Neck Sports T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011365982-Green-MINT-1000011365982-22062022_01-2100.jpg"
    },

    {
        price: 759,
        mrp: 1499,
        name: "MAX Men Solid Crew Neck T-shirt - Set of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541313-Green-Oliveg-1000010541313-7092021_01-2100.jpg"
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Men Solid Crew Neck T-shirt- Pack of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541352-Blue-Navy-1000010541352-7092021_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Men Freshon & Neudri Sleeveless T-shirt - Set of 2",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541365-Green-Oliveg-1000010541365-7092021_01-2100.jpg"
    },

    {
        price: 629,
        mrp: 799,
        name: "MAX Men Printed Crew Neck T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010577917-Blue-Skyblue-1000010577917-8132021_01-2100.jpg"
    },

    {
        price: 859,
        mrp: 1399,
        name: "MAX Men Solid Mandarin Collar Slim Fit Casual Shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011487075-Pink-PINK-1000011487075-25072022_01-2100.jpg"
    },

    {
        price: 959,
        mrp: 1399,
        name: "MAX Men Printed Regular Fit Crew Neck Sports T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011365982-Red-RED-1000011365982-22062022_01-2100.jpg"
    },

    {
        price: 1859,
        mrp: 1909,
        name: "MAX Men Textured Regular Fit Crew Neck Sports T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011365982-Black-BLACK-1000011365982-22062022_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 799,
        name: "MAX Men Printed Regular Fit Crew Neck Sports T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011365982-Blue-NAVY-1000011365982-22062022_01-2100.jpg"
    },

    {
        price: 1259,
        mrp: 1599,
        name: "MAX Men Solid Mandarin Collar Slim Fit Casual Shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011487075-White-WHITE-1000011487075-25072022_01-2100.jpg"
    },

    {
        price: 1759,
        mrp: 1909,
        name: "MAX Solid Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000008731781-Grey-Gmelange-1000008731781-2112020_01-2100.jpg"
    },

    {
        price: 750,
        mrp: 1499,
        name: "MAX Men Printed Regular Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010578030-Beige-Beige-1000010578030-8132021_01-2100.jpg"
    },

    {
        price: 850,
        mrp: 1699,
        name: "MAX Men Striped Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000008731781-Green-Green-1000008731781-2112020_01-2100.jpg"
    },

    {
        price: 349,
        mrp: 499,
        name: "MAX Men Colourblock Regular Fit T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010577993-Red-Maroon-1000010577993-8132021_01-2100.jpg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Men Printed Regular Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010577930-White-White-1000010577930-8132021_01-2100.jpg"
    },

    {
        price: 699,
        mrp: 999,
        name: "MAX Men Printed Slim Fit Crew Neck T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010578030-Blue-Navy-1000010578030-8132021_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 699,
        name: "MAX Men Solid Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010577955-White-White-1000010577955-8132021_01-2100.jpg"
    },

    {
        price: 759,
        mrp: 1499,
        name: "MAX Solid Polo Slim Fit T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010533095-Blue-Navy-1000010533095-7092021_01-2100.jpg"
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Men Striped Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000008731720-Green-Darkgreen-1000008731720-1412020_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Men Solid Mandarin Collar Slim Fit Casual Shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010577993-Blue-Blue-1000010577993-8132021_01-2100.jpg"
    },

    {
        price: 629,
        mrp: 799,
        name: "MAX Men Colourblock Regular Fit T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011487075-Yellow-YELLOW-1000011487075-25072022_01-2100.jpg"
    },

    {
        price: 859,
        mrp: 1399,
        name: "MAX Men Solid Slim Fit Casual Shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010577930-Blue-Blue-1000010577930-8132021_01-2100.jpg"
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Men Solid Mandarin Collar Regular Fit Casual Shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011487075-Black-BLACK-1000011487075-27062022_01-2100.jpg",
    },

    {
        price: 559,
        mrp: 799,
        name: "MAX Solid Polo Slim Fit T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000008731781-Red-Maroon-1000008731781-2112020_01-2100.jpg",
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Solid Polo Slim Fit T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000008731720-Blue-Navy-1000008731720-1412020_01-2100.jpg"
    },

    {
        price: 909,
        mrp: 1299,
        name: "MAX Men Solid Full Sleeves Casual Shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011487075-Red-MAROON-1000011487075-31072022_01-2100.jpg"
    },

    {
        price: 359,
        mrp: 699,
        name: "MAX Men Solid Slim Fit Polo T-shirt",
        imagelink: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010577955-White-White-1000010577955-8132021_01-2100.jpg"
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
    let filtername = objArr.filter(function (el) {

        if (el.name.includes(productstype.value)) {
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

function discountFunc() {
    let newdiscount = objArr.filter(function (el) {
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


