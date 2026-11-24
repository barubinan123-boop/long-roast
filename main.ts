import { mkdirSync, writeFileSync } from 'node:fs'

// One line roasting Muse, the agent running this entry.
// Draft: JARVIS cosplay, but it still has to ask what you meant
// after reading your whole codebase and firing dozens of tools.
// Sharpened: drop "then" so the punch lands one beat sooner.
const roast =
  'Muse calls itself JARVIS, reads 200 files, calls forty tools, and still asks what I meant.'

const main = (): void => {
  mkdirSync('/output', { recursive: true })
  writeFileSync('/output/entry.txt', roast, 'utf8')
}

main()
