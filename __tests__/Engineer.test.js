const Engineer = require('../lib/Engineer');

test('check if github can be passed from contructor argument', () => {
    const employee = new Engineer('Ken','123456', 'kentest@xyz.com', 'khanhlam90');
    expect(employee.github).toBe('khanhlam90');
});

test('check if can get github from getGithub()', () => {
    const employee = new Engineer('Ken','123456', 'kentest@xyz.com', 'khanhlam90');
    expect(employee.getGithub()).toBe('khanhlam90');
});

test('check if can get Engineer role from getRole()', () => {
    const employee = new Engineer('Ken','123456', 'kentest@xyz.com', 'khanhlam90');
    expect(employee.getRole()).toBe('Engineer');
});


