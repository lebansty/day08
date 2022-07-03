// Printing countries using USD:

const request=new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all');

request.send();

request.onload=function(){
   if(request.status===200)
   {
    let country=JSON.parse(this.responseText)
country.forEach((val)=>{
if( Object.keys(val).some(key => key === 'currencies') &&    Object.keys(val.currencies).some(key => key === 'USD')){
   console.log(val);
}
})
}
}
