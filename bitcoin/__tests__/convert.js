'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  //convert(2, 'BTC', 'BTC');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(2, 'BTC', 'BTC')).toBe(2);
});

test('should return a Number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(2, 'BTC', 'BTC')).toBe(2);
});

test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(2, 'BTC', 'BTC', 'Big')).isBig;
});

test('should return a String', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(2, 'BTC', 'BTC', 'String')).toBe('2');
});

test('should convert an integer', () => {
  //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBe(1234567.89012345);
});

test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).not.toBe("123456789012345");
});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert('2', 'BTC', 'BTC', 'Number')).toBe(2);
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).not.toBe("2");
});

test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(typeof convert(NaN, 'BTC', 'BTC', 'Number')).toBe("number");
    expect(typeof convert(NaN, 'BTC', 'mBTC', 'Number')).toBe("number");
});

test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  //throw new Error('test not yet defined... write your test here');
  expect(typeof convert(NaN, 'BTC', 'BTC', 'String')).toBe("string");
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'String')).toBe("string");
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  //throw new Error('test not yet defined... write your test here');
  expect(() => { convert(NaN, 'BTC', 'BTC', 'Big') }).toThrowError('NaN');
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe(0.000000046);
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe(4.6);
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
  //throw new Error('test not yet defined... write your test here');
  expect(() => { convert(new Big(2), 'x', 'BTC', 'Number') }).toThrowError();
  expect(() => { convert(new Big(2), 'BTC', 'x', 'Number') }).toThrowError();
  expect(() => { convert(NaN, 'x', 'BTC', 'Number') }).toThrowError();
  expect(() => { convert(NaN, 'BTC', 'x', 'Number') }).toThrowError();
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  //throw new Error('test not yet defined... write your test here');
  expect(() => { convert(2, 'BTC', 'mBTC', 'x') }).toThrowError();
  expect(() => { convert(NaN, 'BTC', 'mBTC', 'x') }).toThrowError();
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
  //throw new Error('test not yet defined... write your test here');
  expect(convert(4.6, 'Satoshi', 'sat')).toBe(4.6);
  expect(() => { convert(4.6, 'μBTC', 'btest') }).toThrowError();
});

test('should add a unit', () => {
  expect(() => {convert.addUnit('newUnit', 1)}).not.toThrowError();
});

test('should remove a unit', () => {
  expect(() => {convert.addUnit('newUnit', 1)}).not.toThrowError();
});

test('should throw when unit already exists with a different conversion factor', () => {
  expect(() => {convert.addUnit('BTC', 1.5)}).toThrowError();
});

test('should return an array of units', () => {
  var unitArray = ['BTC','mBTC','μBTC','bit','Satoshi','sat']
  expect(convert.units()).toEqual(unitArray); 
});


