import { $, sleep } from 'bun'
import Clear from '../Utils'

const Tmux = async () => {
  await $`echo Instalndo tmux...`
  await $`sudo apt-get install tmux -y`
  await $`sudo touch .tmux.conf && sudo sh -c 'curl -o /etc/tmux.conf https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/.tmux.conf\?token\=GHSAT0AAAAAACNLNZBYYS7RQM5HGIZ72QLAZOEBGVA`
  await $`echo tmux instalado e configurado`
  sleep(3000)
  Clear()
}

export default Tmux
