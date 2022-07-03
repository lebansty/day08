//Printing names using forEach function:

const request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function()
{
    if(request.status==200)
    {
let country=JSON.parse(request.responseText)
country.forEach(coun=>{
    console.log(coun.name);
})
    }
}

//Printing capital using forEach function:

const request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    if(request.status===200){
        let country=JSON.parse(request.responseText);
        country.forEach(capit=>{
            console.log(capit.capital);
        })
    }
}

// Printing flag Using forEach function:

const request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    if(request.status===200){
        let country=JSON.parse(request.responseText);
        country.forEach(fla=>{
            console.log(fla.flag);
        })
    }
}