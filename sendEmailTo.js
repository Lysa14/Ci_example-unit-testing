const core = require('@actions/core');
const nodemailer = require('nodemailer');

async function run() {
  const packageName = core.getInput('package_name');

  // Build the package

  const packageUri = await buildPackage(packageName);

  // Send the package via email

  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'your_email@gmail.com',
      pass: core.getSecret('SMTP_PASSWORD'),
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: core.getInput('email_address'),
    subject: `Package ${packageName} built successfully`,
    text: `The package ${packageName} has been built successfully and is attached to this email.`,
    attachments: [
      {
        filename: `${packageName}.zip`,
        path: packageUri,
      },
    ],
  };

  await smtpTransport.sendMail(mailOptions);

  core.setOutput('package_uri', packageUri);
}

run();
