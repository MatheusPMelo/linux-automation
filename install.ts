import Configuration from './configuration'
import Essentials from './essentials'
import Atualization from './atualization'
import Docker from './softwares/docker'
import Flatpaks from './softwares/flatpaks'
import Snaps from './softwares/snaps'

// initial setup
Atualization()
Essentials()
Configuration()

// instalations
Docker()
Flatpaks()
Snaps()