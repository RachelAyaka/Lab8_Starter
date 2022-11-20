// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// tests for function isPhoneNumber
test ('345-267-8349 isPhoneNumber', () => {
    expect(functions.isPhoneNumber('345-267-8349')).toBe(true);
})

test ('(012)-345-6789 isPhoneNumber', () => {
    expect(functions.isPhoneNumber('(012)-345-6789')).toBe(true);
})

test ('(345)-(267)-(8349) isNotPhoneNumber', () => {
    expect(functions.isPhoneNumber('(345)-(267)-(8349)')).toBe(false); // extra ()
})

test ('3452678349 isNotPhoneNumber', () => {
    expect(functions.isPhoneNumber('3452678349')).toBe(false); // missing - in between
})

// tests for functions isEmail
test ('tbmai@ucsd.edu isEmail', () => {
    expect(functions.isEmail('tbmai@ucsd.edu')).toBe(true);
})

test ('rachel@gmail.com isEmail', () => {
    expect(functions.isEmail('rachel@gmail.com')).toBe(true);
})

test ('abc@defg isNotEmail', () => {
    expect(functions.isEmail('abc@defg')).toBe(false); // missing . part
})

test ('empty string isNotEmail', () => {
    expect(functions.isEmail('')).toBe(false); // invalid empty email
})

// tests for function isStrongPassword
test ('abcd_123 isStrongPassword', () => {
    expect(functions.isStrongPassword('abcd_123')).toBe(true);
})

test ('pineapple isStrongPassword', () => {
    expect(functions.isStrongPassword('pineapple')).toBe(true);
})

test ('abc isNotStrongPassword', () => {
    expect(functions.isStrongPassword('abc')).toBe(false); // less than 4 letters
})

test ('0248 isNotStrongPassword', () => {
    expect(functions.isStrongPassword('02468')).toBe(false); // should contain at least 1 letter
})

// tests for function isDate
test ('11/20/2022 isDate', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
})

test ('1/2/2022 isDate', () => {
    expect(functions.isDate('1/2/2022')).toBe(true);
})

test ('11/20/22 isNotDate', () => {
    expect(functions.isDate('11/20/22')).toBe(false); // year must be XXXX
})

test ('11/2022 isNotDate', () => {
    expect(functions.isDate('11/2022')).toBe(false); // missing day or month
})

// tests for function isHexColor
test ('#BF9BD6 isHexColor', () => {
    expect(functions.isHexColor('#BF9BD6')).toBe(true);
})

test ('FFCCFF isHexColor', () => {
    expect(functions.isHexColor('FFCCFF')).toBe(true);
})

test ('#F1 isNotHexColor', () => {
    expect(functions.isHexColor('#F1')).toBe(false);  // 3 or 6 characters
})

test ('Z0000 isNotHexColor', () => {
    expect(functions.isHexColor('Z0000')).toBe(false); // Z is not in hex color
})

