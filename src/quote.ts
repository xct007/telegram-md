import { _toMarkdown } from './_toMarkdown.js'
import { Markdown } from './markdown.js'

/**
 * Creates a Markdown block quote.
 * @example
 * md.quote('foo_bar') // => Markdown with value '>foo\\_bar'
 */
export const quote = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown()
  }

  return _toMarkdown(
    (text as string)
      .split('\n')
      .map((part) => `>${_toMarkdown(part)}`)
      .join('\n'),
    true,
  )
}
