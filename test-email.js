import { Resend } from 'resend';

const resend = new Resend('re_aWQvrkvs_GL1gpNofb5zHoCcztX6F2NRZ');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'aman195.work@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});