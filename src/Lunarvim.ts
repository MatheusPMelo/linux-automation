import { $, sleep } from 'bun'
import Clear from '../Utils'

const Lunarvim = async () => {
  await $`echo Instalando Lunarvim...`
  await $`bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)`
  await $`echo Lunarvim instalado com sucesso! 👏👏👏`
  sleep(3000)
  Clear()
}

export default Lunarvim
