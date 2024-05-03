// import { pp } from 'passprint'

export function extractFrontMatter (inputMarkdown) {
  const lines = inputMarkdown.split(/\r?\n|\r|\n/g)
  const frontMatter = {}
  let i = 0
  if (lines[i].trim() === '---') {
    i++
    while (lines[i].trim() !== '---') {
      const [key, value] = lines[i].trim().split(/:\s*/)
      frontMatter[key] = value
      i++
    }
    i++
  }
  const markdown = lines.slice(i).join('\n')
  return { frontMatter, markdown }
}

export const frontMatterText = obj =>
        `---  \n${Object.entries(obj)
            .filter(([k, v]) => v !== undefined)
            .map(([k, v]) => `${k}: ${v}`)
            .join('\n')
        }\n---  \n`
