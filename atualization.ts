import { $ } from 'bun'
import { updateApt } from './utils'

const Atualization = async () => {
  updateApt()
  await $`sudo apt-get upgrade -y`
  await $`sudo apt-get dist-upgrade -y`
  await $`sudo apt-get autoremove -y`
}

export default Atualization