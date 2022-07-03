//Printing countries with less than 200000 population
const request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function (){
   if(request.status==200){
    let country=JSON.parse(this.responseText);
  var asianCountries=country.filter(coun=>coun.population<200000)
        console.log(asianCountries);
    }
    else{
        request.onerror=function(){
            console.log(error);
        }
    }
}

