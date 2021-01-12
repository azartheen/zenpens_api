require('dotenv').config();
const seeder = require('mongoose-seed');

const data = [
	{
		model: 'Admin',
		documents: [
			{
				username: 'zenpens',
				firstName: 'Zen',
				lastName: 'Pens',
				password: process.env.SUPER_ADMIN_PWD,
				email: process.env.SUPER_ADMIN_EMAIL,
			},
		],
	},
];

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, () => {
	// Load Mongoose models
	seeder.loadModels(['./src/v1/models/admin.js']);

	// Clear specified collections
	seeder.clearModels(['Admin'], () => {
		// Callback to populate DB once collections have been cleared
		seeder.populateModels(data, () => {
			seeder.disconnect();
		});
	});
});
