document.querySelector("button").addEventListener("click", check)

    function check(){
        event.preventDefault();
        var input = document.getElementById("code").value == "123";
        if(input){
            alert("Payment Successful...! Welcome to Apple Community.");
            location.href="pricing.html"
        }
        else{
            alert("Incorrect OTP");
            location.href="otpPage.html"
        }
    }