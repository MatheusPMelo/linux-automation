import { $ } from 'bun'
import { clear, installApt, installBrew, sleep, upgradeApt, upgradeBrew } from './utils'

const Essentials = async () => {

  // install homebrew
  await $`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
  await $`curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher`

  const brewInstalation = [
    'git',
    'curl',
    'vim',
    'neovim',
    'asdf',
    'corepack',
    'pnpm',
    'fish',
    'starship',
  ]

  for (const dep of brewInstalation) {
    installBrew(dep)
    console.log(`Instalado ${dep} 👏`)
    upgradeBrew(dep)
    console.log(`Actualizado ${dep} 👏`)
    sleep(3)
    clear()
  }

  const aptInstalation = [
    'exa',
    'wget',
    'htop',
    'tree',
    'build-essential',
    'mysql-server',
    'postgresql',
    'sqlite3',
    'mysql-client',
    'git-flow',
    'flatpak',
    'snapd',
  ]

  for (const dep of aptInstalation) {
    installApt(dep)
    console.log(`Instalado ${dep} 👏`)
    upgradeApt(dep)
    console.log(`Actualizado ${dep} 👏`)
    sleep(3)
    clear()
  }

  await $`sudo apt install gnome-software-plugin-flatpak -y \
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`
}

export default Essentials