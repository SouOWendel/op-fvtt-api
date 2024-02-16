import * as userService from './../../src/services/user.js';

const mockUserData = {
	valid: {
		username: 'Wendel',
		password: '123',
	},
	invalid: {
		username: '',
		password: '',
	},
	validPassword: 'Abcedfg123',
	invalidPassword: 'abc',
};

// Tests with Jest for user authentication and validation of all data.
describe('user validation', () => {
	test('User is valid', () => {
		const result = userService.validateRequiredField(mockUserData.valid);
		expect(result).toBe(true);
	});

	test('User is not valid', () => {
		const result = userService.validateRequiredField(mockUserData.invalid);
		expect(result).toBe(false);
	});

	test('Password should be valid', () => {
		const result = userService.validatePassword(mockUserData.validPassword);
		expect(result).toBe(true);
	});

	test('Password should be invalid', () => {
		const result = userService.validatePassword(mockUserData.invalidPassword);
		expect(result).toBe(false);
	});
});
