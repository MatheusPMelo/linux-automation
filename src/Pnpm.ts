import { $, sleep } from 'bun'
import Clear from '../Utils'

const Pnpm = async () => {
  $`echo Instalando PNPM...`
  $`curl -fsSL https://get.pnpm.io/install.sh | sh -`
  $`echo PNPM instalado com sucesso 👏👏👏`
  sleep(3000)
  Clear()
}

export default Pnpm
