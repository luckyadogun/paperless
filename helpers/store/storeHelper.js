
function validateEmail (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function subscribeUser (email) {       
    // install mailchimp dependency
    // add user to the list.
    console.log('subscribed!');     
}

export {validateEmail, subscribeUser};