import { $ } from 'bun'
import Neovim from './src/Neovim'
import Lunarvim from './src/Lunarvim'
import Pnpm from './src/Pnpm'
import Asdf from './src/Asdf'
import Yarn from './src/Yarn'

// Initial update system
await $`sudo apt-get update && sudo apt-get upgrade -y`

// Download essetials
const essetialsItems = [
  'git',
  'wget',
  'curl',
  'vim',
  'ninja-build',
  'gettext',
  'cmake',
  'unzip',
  'apache2',
  'mysql-server',
  'mysql-client',
  'open-ssh',
]

for (const item of essetialsItems) {
  await $`sudo apt-get install ${item} -y`
}

await Neovim()
await Lunarvim()
await Pnpm()
await Asdf()
await Yarn()
