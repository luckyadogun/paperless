const axios = require('axios');

const url = process.env.apiUrl;

console.log(url)

function validateEmail (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// function confirmEmailExists (email) {
//     axios.get(`${url}?email_address_eq=${email}`)
//         .then(function (response) {
//             console.log(this);
//             if (response.status === 200){
//                 return true;
//             } else {
//                 return false;
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

function subscribeUser (email) {       
    axios.post(url, {email_address: email})
        .then(function (response) {
            console.log(response);           
        })
        .catch(function (error) {
            console.log(error);
        });  
}

export {validateEmail, subscribeUser};