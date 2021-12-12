const Intern = require('../lib/Intern');

test('check if school can be passed from contructor argument', () => {
    const employee = new Intern('Ken','123456', 'kentest@xyz.com', 'UCD');
    expect(employee.school).toBe('UCD');
});

test('check if can get school from getSchool()', () => {
    const employee = new Intern('Ken','123456', 'kentest@xyz.com', 'UCD');
    expect(employee.getSchool()).toBe('UCD');
});

test('check if can get Intern role from getRole()', () => {
    const employee = new Intern('Ken','123456', 'kentest@xyz.com', 'UCD');
    expect(employee.getRole()).toBe('Intern');
});


