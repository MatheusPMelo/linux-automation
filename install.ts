import Configuration from './configuration'
import Essentials from './essentials'
import Atualization from './atualization'
import Docker from './softwares/docker'
import VSCode from './softwares/VSCode'


// initial setup
Atualization()
Essentials()
Configuration()

// instalations
Docker()