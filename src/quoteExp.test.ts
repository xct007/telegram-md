import { _toMarkdown } from './_toMarkdown.js'
import { qExp } from './quoteExp.js'

test('should return empty Markdown', () => {
  expect(qExp(null)).toEqual(_toMarkdown())
  expect(qExp(undefined)).toEqual(_toMarkdown())
})

test('should return formatted Markdown', () => {
  expect(qExp('foo_bar')).toEqual(_toMarkdown('**>foo\\_bar**', true))
})
