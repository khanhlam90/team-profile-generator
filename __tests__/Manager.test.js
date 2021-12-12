const Manager = require('../lib/Manager');

test('check if office number can be passed from contructor argument', () => {
    const employee = new Manager('Ken','123456', 'kentest@xyz.com', '4081234567');
    expect(employee.officeNumber).toBe('4081234567');
});

test('check if can get office number from getOfficeNumber()', () => {
    const employee = new Manager('Ken','123456', 'kentest@xyz.com', '4081234567');
    expect(employee.getOfficeNumber()).toBe('4081234567');
});

test('check if can get Manager role from getRole()', () => {
    const employee = new Manager('Ken','123456', 'kentest@xyz.com', '4081234567');
    expect(employee.getRole()).toBe('Manager');
});


