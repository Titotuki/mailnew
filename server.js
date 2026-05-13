const express = require("express");
const cron = require("node-cron");
const { Resend } = require("resend");
//const resend = new Resend("re_6ySeUKiJ_7TKtGTEHaPJwvbNQRfHp8MP9");
const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();

cron.schedule("0 */1 * * *", async () => {
  console.log("Running hourly email job");

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "swagata.chakraborty@delostylestudio.com",
    subject: "Hourly Email",
    html: "<h1>Hello from Cron Job</h1>",
  });
});

app.listen(5000, () => {
  console.log("Server running");
});

