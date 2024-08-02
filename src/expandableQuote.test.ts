import { _toMarkdown } from './_toMarkdown.js'
import { expandableQuote } from './expandableQuote.js'

test('should return empty Markdown', () => {
  expect(expandableQuote(null)).toEqual(_toMarkdown())
  expect(expandableQuote(undefined)).toEqual(_toMarkdown())
})

test('should return formatted Markdown', () => {
  expect(expandableQuote('foo_bar')).toEqual(
    _toMarkdown('**>foo\\_bar||\n', true),
  )
})

test('should return formatted Markdown with multiple lines', () => {
  expect(expandableQuote('foo\nbar\nbaz')).toEqual(
    _toMarkdown('**>foo\n>bar\n>baz||\n', true),
  )
})
