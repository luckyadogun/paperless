const axios = require('axios');

const url = process.env.API_URL;
const apiKey = process.env.API_KEY;

function validateEmail (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// function confirmEmailExists (email) {
//     axios.get(url, {
//         qs: {limit: '50', offset: '0'},
//         headers: {accept: 'application/json', 'api-key': apiKey}
//     }).then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

function subscribeUser (email) {    
    let data = {updateEnabled: false, email: email};

    if (location.href != "http://localhost:3000/"){
        axios.post(url, data, {
            headers: {
                accept: 'application/json', 
                'content-type': 'application/json',
                'api-key': apiKey
            },        
        }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }); 
    } else {
        console.log("Local server");
    }
}

export {validateEmail, subscribeUser};