let mune=document.getElementById('mune')
let list =document.querySelector('.navbar')
mune.addEventListener('click',function(){

    mune.classList.toggle('fa-times')
    list.classList.toggle('active')
})


let fname=document.getElementById('fname')
let lname=document.getElementById('lname')
let email=document.getElementById('email')
let btn1=document.querySelector('.btn1')
let home=document.getElementById('home')
let header=document.querySelector('header')
let links=document.querySelectorAll('ul li a')
let section=document.querySelectorAll('section')

for(let i=0;i<links.length;i++){
    links[i].addEventListener('click',function(linkId){
        document.querySelector('.active').classList.remove('active')
        links[i].classList.add('active')
    })
}
let currentpage='home';
window.addEventListener('scroll',function(){
    section.forEach(sec =>{

        if(this.window.scrollY >= sec.offsetTop -200){
    currentpage=sec.id;
        }
    });
    links.forEach(link =>{
        if( link.href.includes(currentpage)){
            this.document.querySelector('.active').classList.remove('active')
            link.classList.add('active')
        }

    })
})








btn1.addEventListener('click',function(){

    if (fname.value.trim() === '' && lname.value.trim() === '' && email.value.trim() === '') {
        alert('Enter your personal information');
    } else {
        alert('Message has been sent');
    }

})
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

var x=600;


window.addEventListener('scroll',function(){
    if(this.window.scrollY <=x)
    {
        header.style.backgroundColor='transparent';
    }
    else{
       
        header.style.backgroundColor='#000'
    }
})


   






