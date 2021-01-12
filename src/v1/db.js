const mongoose = require('mongoose');

module.exports.db = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log(
			`----------------------------
      Database Connected
  ----------------------------
          `,
		);
	} catch (error) {
		console.log(
			`-------------------------------------
                  Db connection failed Due to :
  
                  ${error}
              
              -------------------------------------`,
		);
	}
};
