const nodemailer = require("nodemailer");
export default (req: any, res: any) => {

	const { firstName, lastName, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
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

	transporter.sendMail(mailOption, (err: any, data: any) => {
		if (err) {
			console.log(err);
			res.send("error" + JSON.stringify(err));
		} else {
			console.log("The email was succesfully sent");
			res.send("success");
		}
	});
};