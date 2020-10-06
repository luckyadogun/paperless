function validateEmail (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function subscribeUser (email) {       
    // install mailchimp dependency
    // add user to the list.
    const mailchimp = require('@mailchimp/mailchimp_marketing');

    mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: process.env.baseUrl
    })

    async function callPing() {
        const response = await mailchimp.ping.get();
        console.log(response);
    }

    callPing();
    console.log(process.env.baseUrl)
    console.log('subscribed!');     
}

export {validateEmail, subscribeUser};