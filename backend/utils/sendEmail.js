import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export const sendEmail = async (
  to,
  subject,
  html
) => {

  const response =
    await resend.emails.send({

      // TODO: Replace with verified domain before full launch. Add DNS records for your domain
      // in Resend dashboard, then change to: "DeutschFlow <noreply@yourdomain.com>"
      from: "DeutschFlow <onboarding@resend.dev>",

      to,

      subject,

      html,

    });

  if (response.error) {

    throw new Error(
      response.error.message
    );

  }

  return response;

};