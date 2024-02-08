import { $ } from 'bun'
import Neovim from './src/Neovim'
import Lunarvim from './src/Lunarvim'
import Pnpm from './src/Pnpm'
import Asdf from './src/Asdf'
import Yarn from './src/Yarn'
import Bun from './src/Bun'
import Tmux from './src/Tmux'

await $`cd`
// Initial update system
await $`sudo apt-get update && sudo apt-get upgrade -y`

// Download essetials
const essetialsItems = [
  'git',
  'wget',
  'curl',
  'vim',
  'ninja-build',
  'snapd',
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

await Bun()
await Neovim()
await Lunarvim()
await Tmux()
await Pnpm()
await Asdf()
await Yarn()


const snapInstallations = [
  'code --classic',
  'spotify',
  'slack --classic',
  'discord',
  'telegram-desktop',
  'whatsapp-for-linux',
  'insomnia',
  'bw',
]

for (const item of snapInstallations) {
  await $`sudo snap install ${item}`
}
