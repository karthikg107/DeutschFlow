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

      from:
        "DeutschFlow <onboarding@resend.dev>",

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