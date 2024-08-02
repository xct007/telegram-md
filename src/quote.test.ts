import { _toMarkdown } from './_toMarkdown.js'
import { quote } from './quote.js'

test('should return empty Markdown', () => {
  expect(quote(null)).toEqual(_toMarkdown())
  expect(quote(undefined)).toEqual(_toMarkdown())
})

test('should return formatted Markdown', () => {
  expect(quote('foo_bar')).toEqual(_toMarkdown('>foo\\_bar', true))
})
