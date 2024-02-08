import { $, sleep } from 'bun'
import Clear from '../Utils'

const Neovim = async () => {
  await $`git clone https://github.com/neovim/neovim`
  await $`cd neovim && make CMAKE_BUILD_TYPE=RelWithDebInfo`
  await $`sudo make install`
  await $`make CMAKE_BUILD_TYPE=Release`
  await $`echo Neovim instalado com sucesso! 👏👏👏`
  sleep(3000)
  await Clear()
}

export default Neovim
