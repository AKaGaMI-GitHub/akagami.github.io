var text = document.querySelector(".scroll-text").children;
var textlength = text.length
let index = 0;
const textintimer = 1500, textouttimer = 2000;

function animatedtext() {
    for (var i = 0; i < textlength; i++){
        text[i].classList.remove("textshow", "textnotshow")
    }
    text[index].classList.add("textshow")

    setTimeout(function(){
        text[index].classList.add("textnotshow");
    }, textouttimer)

    setTimeout(function(){
        if (index == textlength-1){
            index = 0;
        } else {
            index++
        }
    }, textintimer)
    setTimeout(animatedtext, 2000)
}

window.onload=animatedtext;

function sendEmail() {
    const serviceID = "service_nbqr8dt";
    const templateID = "template_sjbkred";   
    var data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs
    .send(serviceID,templateID,data)
    .then(
        (res) =>{
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res)
            alert("success")
        }
    )
    .catch(err=>console.log(err))
}
