const express = require('express');

const app = express();

app.listen(3000, ()=> {
    console.log('server started listenig o port 3000');
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });  


app.get('/', (req,res)=> {
    res.json([{name: 'ABC', price:25000}]);
});

app.get('/empData',(req,res) => {
     res.json([
     { id: 1, 
        employee_name: 'John Doe', 
        employee_salary: 112000, 
        employee_age: 22, 
        profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMEPHjb5pR61oJm-FiffSrMUfPTdbb08-aNg&usqp=CAU' },  
     { id: 2, 
        employee_name: 'Wiliam Smith', 
        employee_salary: 130000, 
        employee_age: 41,
        profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnavuMycVzRp2FVtn50aq7VFoXRWNPLY6-yw&usqp=CAU' },  
     { id: 3, 
        employee_name: 'Sandy Gover', 
        employee_salary: 80000, 
        employee_age: 39,
        profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKYZ06dLHWPoo4JqBY2jIstouDIXp1wHKbsg&usqp=CAU' },  
     { id: 4, 
        employee_name: 'Lingda joshua', 
        employee_salary: 100000, 
        employee_age: 30,
        profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLWUWtipjbWDgYDzwu9KZNckzRy1R9KAuxQg&usqp=CAU' }  
   ]);

});