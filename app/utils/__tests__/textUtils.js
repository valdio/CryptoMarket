import {firstLetterToUpperCase} from '../textUtils'

test('firstLetterToUpperCase test', () => {
  expect(firstLetterToUpperCase('hello world')).toBe('Hello world')
})

test('firstLetterToUpperCase test empty string', () => {
  expect(firstLetterToUpperCase('')).toBe('')
  expect(firstLetterToUpperCase()).toBe('')
})
