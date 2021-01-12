const mailgun = require('mailgun-js')({ apiKey: process.env.EMAIL_API_KEY, domain: process.env.EMAIL_DOMAIN });
const moment = require('moment');
const fs = require('fs');

const { ServerError } = require('../errors');

const generatePassword = (len) => {
	const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#@$%&\()*+,-./:;<=>?^[\\]^_`{|}~';
	let retVal = '';
	// eslint-disable-next-line no-plusplus
	for (let i = 0, n = charset.length; i < len; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}

	return retVal;
};

const sendMail = async ({ mailTo, subject, message }) => {
	try {
		const data = {
			from: process.env.EMAIL,
			to: mailTo,
			subject,
			html: message,
		};

		return await mailgun.messages().send(data);
	} catch (error) {
		console.log(`send-mail--mailgun: ${error}`);

		throw new ServerError();
	}
};

const logger = async (message) => {
	const logTime = moment().format();
	const logContent = `${logTime} -- ${message}`;

	try {
		fs.appendFile('../logs/error.log', logContent, (err) => {
			if (err) throw err;
			console.log('Error Logged to file');
		});
	} catch (error) {
		throw new ServerError();
	}
};

module.exports = {
	generatePassword,
	sendMail,
	logger,
};
