import { $, sleep } from 'bun'
import Clear from '../Utils'

const Lunarvim = async () => {
  await $`echo Instalando Lunarvim...`
  await $`bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)`

  await $`mkdir ~/.config/lvim/lua ~/.config/lvim/lua/user`

  await $`cd ~/.config/lvim/lua/user`

  await $`sudo touch autocmds.lua colorschema.lua keymap.lua lang.lua options.lua plugins.lua`
  await $`sudo sh -c 'curl -o autocmds.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/autocmds.lua?token=GHSAT0AAAAAACNLNZBZ2UXI2JNXH7MXLHEEZOEIK3A'`
  await $`sudo sh -c 'curl -o colorschema.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/autocmds.lua?token=GHSAT0AAAAAACNLNZBZ2UXI2JNXH7MXLHEEZOEIK3A'`
  await $`sudo sh -c 'curl -o keymap.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/keymap.lua?token=GHSAT0AAAAAACNLNZBZKLDA77UBKNZNEMPKZOEIMZQ'`
  await $`sudo sh -c 'curl -o lang.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/lang.lua?token=GHSAT0AAAAAACNLNZBZQVNW4RSYIWRDNEWIZOEINJA'`
  await $`sudo sh -c 'curl -o options.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/lang.lua?token=GHSAT0AAAAAACNLNZBZQVNW4RSYIWRDNEWIZOEINJA'`
  await $`sudo sh -c 'curl -o plugins.lua 'https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/plugins.lua?token=GHSAT0AAAAAACNLNZBZIPYBHZISJ5UAT4K2ZOEIOBQ'`

  await $`cd ../..`

  await $`sudo touch config.lua`
  await $`sudo sh -c 'curl -o config.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/config.lua?token=GHSAT0AAAAAACNLNZBZSTHV6ZHHAPPANKX4ZOEIQHQ'`
  await $`sudo touch lazy-lock.json`

  await $`sudo sh -c 'curl -o lazy-lock.json https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lazy-lock.json?token=GHSAT0AAAAAACNLNZBZDOMX62E3K67FAKI4ZOEISMQ'`
  await $`echo Lunarvim instalado com sucesso! 👏👏👏`

  sleep(3000)
  Clear()
}

export default Lunarvim
