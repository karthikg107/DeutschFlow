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

      // TODO: replace with verified domain once DNS is configured (e.g. noreply@deutschflow.com)
      from:
        "DeutschFlow <noreply@yourdomain.com>",

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