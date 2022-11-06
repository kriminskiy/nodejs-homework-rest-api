const sgMail = require("@sendgrid/mail");
const { model } = require("mongoose");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "kriminskiy1@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;
