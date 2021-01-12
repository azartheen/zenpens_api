// In this folder, you create the helper methods you need that can't be classified as
// services, controllers etc

const markAsDeleted = (input) => `${input}_deleted_${new Date().getTime()}`;

module.exports = {
	markAsDeleted,
};
