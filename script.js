//XML-HTTP REQUEST:it is used to interact with
//the servers via API
//Why:to get the data from the server via api

//Step 01: creating a XHR objects
//variable names: userdefined-your choice
var request=new XMLHttpRequest();
//Step  02:specifiy the API url
request.open("GET","https://restcountries.com/v2/all");
//Step 03:sending the request
request.send();
//Step 04: Once the requested data is there in server
//once the data is successfully loaded, server response 
//will be of 200 status code
//Functions: they are used to perform specific task
//Functions applications: used in all js events
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);
//whatever conversion has to be done here only 
//not outside

}
//inside the function:we are converting the 
//data from the server to the client
//which is in string->Object