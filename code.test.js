
const {stringLength,reverseString, exit, capitalize} = require('./code.js');

describe('TASK-1', () => {
  it('stringLength-approved', () => {
     const string ='erik';
     expect(stringLength(string)).toBe(string.length);
  })

  it('stringLength-decline', () => {
    const string ='erikkkkkkkkkkkkkkkkk';
    expect(() => stringLength(string)).toThrow(Error);
  })
})

describe('TASK-2', () => {
  it('reverseString', () => {
    const string = 'volar';
    expect(reverseString(string)).toBe('ralov');
  })
})

describe('TASK-3', () => {

  // Add
  it('Calculator-add', () => {
    expect(exit.add(1,2)).toBe(3);
  })
  it('Calculator-add', () => {
    expect(exit.add(5,5)).toBe(10);
  })
  it('Calculator-add', () => {
    expect(exit.add(100,2)).toBe(102);
  })

  // subtrack
  it('Calculator-subtrack', () => {
    expect(exit.subtrack(5,3)).toBe(2);
  })
  it('Calculator-subtrack', () => {
    expect(exit.subtrack(10,3)).toBe(7);
  })
  it('Calculator-subtrack', () => {
    expect(exit.subtrack(5,1)).toBe(4);
  })

  // divide
  it('Calculator-divide', () => {
    expect(exit.divide(2,2)).toBe(1);
  })
  it('Calculator-divide', () => {
    expect(exit.divide(100,10)).toBe(10);
  })
  it('Calculator-divide', () => {
    expect(exit.divide(50,2)).toBe(25);
  })

  // multiply
  it('Calculator-multiply', () => {
    expect(exit.multiply(1,1)).toBe(1);
  })
  it('Calculator-multiply', () => {
    expect(exit.multiply(1,0)).toBe(0);
  })
  it('Calculator-multiply', () => {
    expect(exit.multiply(50,2)).toBe(100);
  })
})

describe('TASK-4', () => {
  it('capitalizeLetter', () => {
    expect(capitalize('prueba')).toBe('Prueba');
  })
})
