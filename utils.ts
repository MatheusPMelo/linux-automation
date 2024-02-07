import { $ } from 'bun'

export async function clear() {
  await $`clear`
}

export async function sleep(seconds: number) {
  await $`sleep ${seconds}`
}

export async function installApt(dep: string) {
  await $`sudo apt-get install ${dep} -y`
}

export async function upgradeApt(dep: string) {
  await $`sudo apt-get upgrade ${dep} -y`
}

export async function updateApt() {
  await $`sudo apt-get update`
}

export async function installBrew(dep: string) {
  await $`brew install ${dep}`
}

export async function upgradeBrew(dep: string) {
  await $`brew upgrade ${dep}`
}

export async function installFlatpak(dep: string) {
  await $`flatpak install flathub ${dep} -y`
}
