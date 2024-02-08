import { $, sleep } from 'bun'
import Clear from '../Utils'

const Asdf = async () => {
  await $`echo instalando asdf-vm`
  await $`git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0`
  await $`asdf plugin add nodejs`
  await $`asdf install nodejs latest`
  await $`echo asdf-vm instalado com sucesso! 👏👏👏`
  sleep(3000)
  Clear()
}

export default Asdf
