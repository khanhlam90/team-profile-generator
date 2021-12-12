const Employee = require('../lib/Employee.js');

test('to check if the employee data export as expected', () => {
    const employee = new Employee('Sun', 'F12365', 'xyz@gmail.com');

    expect(employee.name).toBe('Sun');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});