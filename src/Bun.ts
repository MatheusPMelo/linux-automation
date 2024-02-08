import { $, sleep } from 'bun'
import Clear from '../Utils'

const Bun = async () => {
  await $`echo instalando bun...`
  await $`curl -fsSL https://bun.sh/install | bash`
  await $`Bun instalado com sucesso`
  sleep(3000)
  Clear()
}

export default Bun
