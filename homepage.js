
    
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
            window.location.href="homepage.html";
        })
        

        // Indian wear redirect

        function indianwearredirect(){
            window.location.href="IndianwearPage.html";
        }


       
        
        
        
        