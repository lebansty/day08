const request= new XMLHttpRequest;

request.open('GET','https://restcountries.com/v3.1/all');

request.send();

request.onload=function(){
    let countryData=JSON.parse(this.response);
    let countryAsia=countryData.filter(store=>store.region==='Asia')
    console.log(countryAsia);
}