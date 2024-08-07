import { _toMarkdown } from './_toMarkdown.js'
import { Markdown } from './markdown.js'

/**
 * Creates a Markdown block quote.
 * @example
 * md.quote('foo_bar') // => Markdown with value '>foo\\_bar\n'
 * md.quote('foo\nbar\nbaz') // => Markdown with value '>foo\n>bar\n>baz\n'
 */
export const quote = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown()
  }

  return _toMarkdown(`>${_toMarkdown(text).replaceAll('\n', '\n>')}\n`, true)
}
