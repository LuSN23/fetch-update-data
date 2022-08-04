import fetch from 'node-fetch';

fetch('https://reqres.in/api/users', {  //applying a url to fetch data through an fake API called reqres
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'  //telling Fetch that you will gonna be passing JSON
    },
    body: JSON.stringify({ //converting the object into JSON to be transported, 
                           //the body is where the content you want to add go
        id: 7,
        email: 'bob.prescott@reqres.in',
        first_name: 'Robert',
        last_name: 'Prescott',
        avatar: 'https://reqres.in/img/faces/10-image.jpg' //adding a new user into the database
    })
}).then(response => response.json()) //receveing the Response object from Fetch, converting the data to JSON and passing ahead to the other .then
  .then(data => console.log(data))   //receveing the JSON converted response(Promise) and showing it in the log
  .catch(error => console.log('ERROR', error.message)); //handling possible errors