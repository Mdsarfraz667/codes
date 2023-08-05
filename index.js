const btnEl=document.getElementById("btn");


const apiURL="https://api.quotable.io/random"

const leftEl=document.getElementById("lefticon");
const rightEl=document.getElementById("righticon");

console.log(leftEl);

const quoteEl=document.getElementById("quote");

const authorEl=document.getElementById("author");


 async function getQoute(){
    try {
        btnEl.innerText="Loading...";
        btnEl.disabled=true;
        quoteEl.innerText="Updating...."
        authorEl.innerText="Updating...."
        leftEl.style.display="none"
        rightEl.style.display="none"
        const response = await fetch(apiURL)
        const data =  await response.json();
        leftEl.style.display="inline"
        rightEl.style.display="inline"
        quoteEl.innerText=data.content;
        console.log(data);
        authorEl.innerText="~"+data.author;
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
    } catch (error) {
        quoteEl.innerText="An error occured ,try again later"
        authorEl.innerText="An error happened"
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
    }
}

getQoute();

btnEl.addEventListener("click" ,getQoute)