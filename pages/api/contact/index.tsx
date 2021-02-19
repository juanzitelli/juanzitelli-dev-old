const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default async (req: any, res: any) => {

	const { firstName, lastName, email, message } = req.body;

	const oAuth2Client = new google.auth.OAuth2(
		process.env.CLIENT_ID,
		process.env.CLIENT_SECRET,
		process.env.CLIENT_REDIRECT_URI)
	oAuth2Client.setCredentials({ refresh_token: process.env.CLIENT_REFRESH_TOKEN })

	const accessToken = await oAuth2Client.getAccessToken();

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: 'OAuth2',
			user: process.env.EMAIL,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.CLIENT_REFRESH_TOKEN,
			accessToken: accessToken,

		},
	});

	const mailOption = {
		from: `${email}`,
		to: `${process.env.EMAIL}`,
		subject: `New mail from ${email}`,
		text: `
	${firstName} ${lastName} wrote:
	${message}
	`,
	};

	transporter.sendMail(mailOption, (err: any) => {
		if (err) {
			console.log(err);
			res.send("error" + JSON.stringify(err));
		} else {
			console.log("The email was succesfully sent");
			res.send("Email was sent successfully!");
		}
	});

};