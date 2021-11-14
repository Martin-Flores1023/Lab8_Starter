// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumberF', () => {
    expect(functions.isPhoneNumber(8188188188)).toBe(false);
  });
test('isPhoneNumberF2', () => {
    expect(functions.isPhoneNumber(1234567890)).toBe(false);
  });
  test('isPhoneNumberT', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('isPhoneNumberT2', () => {
    expect(functions.isPhoneNumber('808-423-1290')).toBe(true);
  });

  test('isEmailF', () => {
    expect(functions.isEmail(1234)).toBe(false);
  });

  test('isEmailF2', () => {
    expect(functions.isEmail()).toBe(false);
  });

  test('isEmailT', () => {
    expect(functions.isEmail('abc@yahoo.com')).toBe(true);
  });

  test('isEmailT2', () => {
    expect(functions.isEmail('xyz@gmail.com')).toBe(true);
  });

  test('isStrongPasswordF', () => {
    expect(functions.isStrongPassword(12)).toBe(false);
  });

  test('isStrongPasswordF2', () => {
    expect(functions.isStrongPassword('M@artin123')).toBe(false);
  });

  test('isStrongPasswordT', () => {
    expect(functions.isStrongPassword('UCSD')).toBe(true);
  });

  test('isStrongPasswordT2', () => {
    expect(functions.isStrongPassword('Soccer_12')).toBe(true);
  });

  test('isDateF', () => {
    expect(functions.isDate('00/00/00')).toBe(false);
  });

  test('isDateF2', () => {
    expect(functions.isDate('123/00/1900')).toBe(false);
  });

  test('isDateT', () => {
    expect(functions.isDate('1/5/2019')).toBe(true);
  });

  test('isDateT2', () => {
    expect(functions.isDate('12/00/2000')).toBe(true);
  });

  test('isHexF', () => {
    expect(functions.isHexColor('')).toBe(false);
  });

  test('isHexF2', () => {
    expect(functions.isHexColor('0x')).toBe(false);
  });

  test('isHexT', () => {
    expect(functions.isHexColor('ff0000')).toBe(true);
  });

  test('isHexT2', () => {
    expect(functions.isHexColor('fa0020')).toBe(true);
  });

  




  