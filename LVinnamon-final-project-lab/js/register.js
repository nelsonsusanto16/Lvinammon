function Submit(){
    let error = false

    let fname = document.getElementById("fname")

    if(fname.value.length <= 0) {
        error = true
        alert("First Name cannot be Empty")
        return
    }

    if(fname.value.length < 4 || fname.value.length > 10) {
        error = true
        alert("First Name must be 4 - 10 Characters!")
        return
    }

    let lname = document.getElementById("lname")

    if(lname.value.length <= 0) {
        error = true
        alert("Last Name cannot be Empty")
        return
    }

    if(lname.value.length < 4 || lname.value.length > 10) {
        error = true
        alert("Last Name Name must be 4 - 10 Characters!")
        return
    }

    let male = document.getElementById("male")
    let female = document.getElementById("female")

    if(!male.checked && !female.checked) {
        error = true
        alert("Pick a gender!")
        return
    }

    let region = document.getElementById("region")

    if(region.selectedIndex == 0) {
        error = true
        alert("Pick your region!")
        return
   }
   
   let psw = document.getElementById("psw")

    if(!ValidatePassword(psw.value)) {
        error = true
        return
    }

    let cfpw = document.getElementById("cfpw")

    if(psw.value !== cfpw.value){
        error = true
        alert("Password do not match!")
        return
    }

    let tos = document.getElementById("tos")

    if(!tos.checked) {
        error = true
        alert("You must agree to the Terms & Conditions!")
        return
    }

    if(error === false) {
        alert("Registration Successful!")
    }
}

function ValidatePassword(psw) {
    if(psw.length < 5 || psw.length > 10){
        alert("Password Length must be 5 - 10!")
        return false
    }

    let hasNumber = false
    let hasAlphabet = false

    for(i=0; i<psw.length; i++){
        if(isNaN(psw[i])) {
            hasAlphabet = true
        }else {
            hasNumber = true
        }
        if(hasAlphabet && hasNumber){
            return true
        }
    }
    alert("Password must be alphanumeric!")
    return false
}

