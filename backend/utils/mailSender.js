const axios = require("axios");

// Sends a transactional email via Brevo's HTTP API.
// Render's free web services block outbound traffic on SMTP ports (25/465/587),
// so a direct nodemailer/SMTP connection to Gmail always times out there.
// Brevo's API runs over plain HTTPS, so it is not affected by that block.
const mailSender = async (email, title, body) => {
        try{
                    const response = await axios.post(
                                    "https://api.brevo.com/v3/smtp/email",
                        {
                                            sender: {
                                                                    email: process.env.BREVO_SENDER_EMAIL,
                                                                    name: "StudyNotion - by Yash Kumar Rastogi",
                                            },
                                            to: [{ email }],
                                            subject: title,
                                            htmlContent: body,
                        },
                        {
                                            headers: {
                                                                    "api-key": process.env.BREVO_API_KEY,
                                                                    "Content-Type": "application/json",
                                                                    Accept: "application/json",
                                            },
                        }
                                );
                    console.log(response.data);
                    return response.data;
        }
        catch(error) {
                    console.log(error.response ? error.response.data : error.message);
                    throw error;
        }
}

module.exports = mailSender;
