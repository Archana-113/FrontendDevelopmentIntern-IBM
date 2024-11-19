let form=document.querySelector("form")
// console.log(form);


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let dateOfBirth=document.getElementById("date").value
    // console.log(dateOfBirth);
    let birthdayDate=new Date(dateOfBirth)
    // console.log(birthdayDate);
    let currentDate=new Date()
    // let bdyDate=birthdayDate.getFullYear()
    // let curDate=currentDate.getFullYear()
    // console.log(bdyDate);
    // console.log(curDate);
    let age=currentDate.getFullYear()-birthdayDate.getFullYear();
    // console.log(age);
    let para=document.getElementById("third_section")
   
    if(dateOfBirth==""){
        alert("Please enter your data of birth")
    }
    else{
        para.innerHTML=`<h1>You are ${age} ${age>1?"years":"year"} old<\h1>`
    }
})
