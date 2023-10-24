const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (
  timestamp,
  location,
  temperature_celsius,
  humidity_percent,
  pressure_hpa
) => {
  const msg = {
    to: 'jagustin@stratpoint.com',
    from: 'jagustin@stratpoint.com',
    templateId: process.env.TEMPLATE_ID,
    dynamicTemplateData: {
      user: 'jagustin@stratpoint.com', // fixed email for testing
      timestamp,
      location,
      temperature_celsius,
      humidity_percent,
      pressure_hpa,
    },
  };

  try {
    const sendMailResponse = await sgMail.send(msg);
    // console.log('sendMailResponse', sendMailResponse);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = {
  sendEmail,
};
