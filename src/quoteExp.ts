import { _toMarkdown } from './_toMarkdown.js'
import { Markdown } from './markdown.js'

/**
 * Creates a Markdown expandable block quote.
 * @example
 * md.qExp('foo_bar') // => Markdown with value '**>foo\\_bar**'
 */
export const qExp = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown()
  }

  return _toMarkdown(`**>${_toMarkdown(text)}**`, true)
}
