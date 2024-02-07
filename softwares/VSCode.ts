import {$} from 'bun'
import { clear } from '../utils'

const VSCode = async () => {
  clear()
  await $`/bin/bash -c "$(curl -fsSL https://code-server.dev/install.sh)"`
}

export default VSCode