import { $ } from 'bun'
import { clear, updateApt } from '../utils'

const Docker = async () => {
  clear()
  updateApt()
  await $`sudo apt-get install ca-certificates curl`
  await $`sudo install -m 0755 -d /etc/apt/keyrings`
  await $`sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc`
  await $`sudo chmod a+r /etc/apt/keyrings/docker.asc`
  await $`echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
  updateApt()
  await $`sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`
  await $`sudo usermod -aG docker $USER`

  console.log('Docker instalado com sucesso!	🐳')
}

export default Docker