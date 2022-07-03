const request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    if(request.status===200){
        let countrydet =JSON.parse(request.responseText);
        let totalPopulation= countrydet.reduce(function(previousValue,currentValue){
return previousValue+currentValue.population;
        },0)
        console.log('The sum of populations of all the countries are: '+totalPopulation)
    }
    else{
        request.onerror=function(){
console.log(error);
        }
    }
}