const Employee = require('../lib/Employee');

test('to check if Employee could create object', () => {
    const employee = new Employee();
    expect(employee).toEqual(expect.any(Object));
});

test('check if name can be passed from contructor argument', () => {
    const employee = new Employee('Ken');
    expect(employee.name).toBe('Ken');
});

test('check if id can be passed from contructor argument', () => {
    const employee = new Employee('Ken','123456');
    expect(employee.id).toBe('123456');
});

test('check if email can be passed from contructor argument', () => {
    const employee = new Employee('Ken','123456', 'kentest@xyz.com');
    expect(employee.email).toBe('kentest@xyz.com');
});

test('check if can get name from getName()', () => {
    const employee = new Employee('Ken');
    expect(employee.getName()).toBe('Ken');
});

test('check if can get id from getId()', () => {
    const employee = new Employee('Ken','123456');
    expect(employee.getId()).toBe('123456');
});

test('check if can get email from getEmail()', () => {
    const employee = new Employee('Ken','123456', 'kentest@xyz.com');
    expect(employee.getEmail()).toBe('kentest@xyz.com');
});

test('check if can get default role of Employee from getRole()', () => {
    const employee = new Employee('Ken','123456', 'kentest@xyz.com');
    expect(employee.getRole()).toBe('Employee');
});
