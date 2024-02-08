import { $, sleep } from 'bun'
import Clear from '../Utils'

const Yarn = async () => {
  await $`echo Instalando yarn`
  await $`npm i -g yarn`
  await $`echo Sucesso ao instalar Yarn! 👏👏👏`
  sleep(3000)
  Clear()
}

export default Yarn
