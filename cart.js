
    
    
    
    
    
        // var navbar = document.getElementById("Navbar");
        // var menu = document.getElementById("menu");
    
        // window.onscroll = function(){
        //     if(window.pageYOffset >= menu.offsetTop){
        //        
        //         Navbar.classList.add("sticky");
        //     }
        //     else{
        //         Navbar.classList.remove("sticky");
        //         
        //     }
        // }
    
        // sticky navbar
    
        window.onscroll = function() {myFunction()};
    
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
        
        
        function signupFunc(el){
            el.preventDefault();
            let SignupForm = document.querySelector("form");
            SignupForm.setAttribute("id", "signup");
            let Signuprem = document.querySelector("form");
            Signuprem.style.display="block"
        }
        
        let removesignup = document.getElementById("signupcut");
        removesignup.addEventListener("click", signupRemFunc);
        
        function signupRemFunc(el){
            el.preventDefault();
            let Signuprem = document.querySelector("form");
            Signuprem.style.display="none"
            
            console.log("rem")
        }
        
        
        // otp Page
        let mobilenum = JSON.parse(localStorage.getItem("loginArr")) || [];
        
        let form = document.querySelector("form");
        form.addEventListener("submit", function(ele){
            ele.preventDefault();
            let otppage = document.querySelector("#otppage");
            otppage.style.display="block"
        
            let obj={
                mobile: form.mobile.value,
                name: form.name.value,
            };
        
            mobilenum.push(obj);
        
            localStorage.setItem("loginData",JSON.stringify(mobilenum));
        
        })
        
        // otp store
        
        localStorage.setItem("otp", "1234");
        
        
        
        // otppage remove
        
        let removeotp = document.getElementById("otpcut");
        removeotp.addEventListener("click", otpRemFunc);
        
        
        function otpRemFunc(el){
            el.preventDefault();
            let signup = document.querySelector(".form1");
            let otppage = document.querySelector("#otppage");
            otppage.style.display="none";
            signup.style.display = "none";
            
        }
        
        let otppage =document.querySelector("#otppage");
        otppage.addEventListener("submit", verifyotp)
        
        function verifyotp(el){
            el.preventDefault();
            let otp = otppage.otp.value;
        
            let localotp = JSON.parse(localStorage.getItem("otp"));
        
            if(otp == localotp){
                alert("SIGN UP SUCCESFUL");
                otppage.style.display= "none";
                otppage.otp.value = "";
                form.style.display= "none";
               
            } else{
                alert("WRONG OTP")
            }
        }
         
        // HOMEPAGE REDIRECT
        
        let homepage = document.querySelector("#homepageredirect");
        homepage.addEventListener("click", function(){
            window.location.href="index.html";
        })    



        // cart items append

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        display(cartItems);



        // TOTAL CHECKOUT mrp update
        let mrp_price = document.getElementById("mrp_price");
        let discount = document.getElementById("discount");
        let finalprice = document.getElementById("finalprice");
        
        
        
        let total_mrp = cartItems.reduce(function(acc, el){
            
            return acc + +(el.mrp);
        }, 0)

        mrp_price.innerText = `₹${total_mrp}`


        // Discount Update

        let discount_price = cartItems.reduce(function(acc, el){
            return acc + +(el.mrp) - +(el.price)
        }, 0)

        discount.innerText = `-₹${discount_price}`;


        // FINal PRIce UPDtate

        finalprice.innerText = total_mrp - discount_price;

        // No Of Product

        let noofprod = document.querySelector("#noofprod");
        noofprod.innerText = cartItems.length;


        function display(data){
            document.querySelector("#cartdiv").innerHTML = null;

            data.forEach(function(el, i){
            
                let cards = document.createElement("div");
    
                    let div1 = document.createElement("div");
    
                        let image = document.createElement("img");
                        image.setAttribute("src", el.imagelink);
    
                        let contentdiv = document.createElement("div");
    
                            let name = document.createElement("h3");
                            name.innerText = el.name;
    
                            let mrp = document.createElement("h4")
                            let strike = document.createElement("s");
                            
                            // mrp.innerText = el.mrp;
                            strike.innerText = el.mrp;
                          
                         
                            mrp.append(strike)
    
                            let price = document.createElement("h3")
                            price.innerText = el.price;
    
                            let saved = document.createElement("h3");

                            saved.innerText = `₹${+(el.mrp) - +(el.price)} saved`;
                           
                            
                          contentdiv.append(name, mrp, price, saved);
    
    
                        div1.append(image, contentdiv);
    
                    let div2 = document.createElement("div");
    
                        let remove = document.createElement("h3");
                        remove.innerText = "remove";

                        remove.addEventListener("click", function(){
                            removeitem(i);
                        })
                        
    
                        let favourites = document.createElement("h3");
                        favourites.innerText = "Move to Favourites";
    
                    div2.append(remove, favourites);
    
                cards.append(div1, div2);
    
                document.querySelector("#cartdiv").append(cards);
               
            })

        }


        // Remove Function
        function removeitem(i){

            // let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems.splice(i, 1);

            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            display(cartItems);

            noofprod.innerText = cartItems.length;

            // Total mrp checkout update

            let total_mrp = cartItems.reduce(function(acc, el){
            
                return acc + +(el.mrp);
            }, 0)
    
            mrp_price.innerText = `₹${total_mrp}`



            // total discount update
            let discount_price = cartItems.reduce(function(acc, el){
                return acc + +(el.mrp) - +(el.price)
            }, 0)
    
            discount.innerText = `-₹${discount_price}`;

            finalprice.innerText = total_mrp - discount_price;
        }

        

        

