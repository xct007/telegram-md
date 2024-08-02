import { _toMarkdown } from './_toMarkdown.js'
import { Markdown } from './markdown.js'

/**
 * Creates a Markdown expandable block quote.
 * @example
 * md.expandableQuote('foo_bar') // => Markdown with value '**>foo\\_bar||'
 */
export const expandableQuote = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown()
  }
  return _toMarkdown(
    `**${(text as string)
      .split('\n')
      .map((part: string) => `>${_toMarkdown(part)}`)
      .join('\n')}||`,
    true,
  )
}
