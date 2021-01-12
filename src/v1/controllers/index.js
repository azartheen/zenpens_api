/* eslint-disable consistent-return */

const intro = async (req, res, next) => {
	try {
		return res.status(200).json({
			message: 'Zenpens API Home',
			admin: {
				login: '/admin/login',
				create: '/admin/create',
			},
			user: {
				login: '/user/login',
				register: '/user/register',
			},
			meta: {
				currentPage: 1,
				pageSize: 1,
				pageTotal: 1,
			},
		});
	} catch (e) {
		console.log('indexController-intro', e);
		next(e);
	}
};

module.exports = {
	intro,
};
