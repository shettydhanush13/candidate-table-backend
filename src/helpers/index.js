const sgMail = require('@sendgrid/mail');
const { config } = require("../config")
const { apiKey } = config.sendGrid
sgMail.setApiKey(apiKey);

const emailuser = body => {
    return new Promise((resolve, reject) => {
        const msg = {
            to: body.email,
            from: 'info@interview.com',
            subject: `INTERVIEW NOTICE`,
            html:   `<div>
                        <p>Your interview request has been moved Forward</p>
                        <p>Appointment Date : ${body.appointment_date.split("T")[0]}</p>
                    </div>`
        };
        sgMail.send(msg).catch(err => reject({ error : true, message : "Email not sent" }))
        resolve({ error : false, message : "Email sent" })
    });
}

module.exports = { emailuser }