import { $ } from 'bun'
import { installFlatpak } from '../utils'

const Flatpaks = async () => {

  const flatpakSoftware = [
    'org.videolan.VLC',
    'com.discordapp.Discord',
    'rest.insomnia.Insomnia',
    'com.spotify.Client',
    'org.gimp.GIMP',
    'io.dbeaver.DBeaverCommunity'
  ]

  for (const software of flatpakSoftware) {
    installFlatpak(software)
  }
}

export default Flatpaks