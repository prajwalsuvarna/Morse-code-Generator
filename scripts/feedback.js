const url="https://script.google.com/macros/s/AKfycbx8icYBqTlVKEYXmAJFAPD5tyPfzGjVqI0bVwNMSYBR22s4REd64XRhbl6t9747AR8y/exec"

const firstname=document.getElementById("fname")
const lastname=document.getElementById("lname")
const email=document.getElementById("email")
const country=document.getElementById("country")
const feedback=document.getElementById("subject")
const container=document.querySelectorAll('.container')


document.querySelector("form").addEventListener('submit',(e)=>{
    e.preventDefault()
    let params=new URLSearchParams({
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        country:country.value,
        feedback:feedback.value
    })
    console.log(url+'?'+params.toString())
    fetch(url+'?'+params.toString())
    .then(async(res)=>{
        let data= await res.json()
        if(data.status==="success")
        {
            firstname.value=''
            lastname.value=''
            email.value=''
            country.value=''
            feedback.value=''
            container[0].style.display='none'
            container[1].textContent="Thank You for your feedback"
        }
        else{
            container[1].textContent="Sorry Something went wrong"
            container[1].style.fontSize="1rem"
        }
    })
})