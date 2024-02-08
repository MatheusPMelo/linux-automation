# Atualização inicial do sistema
sudo apt-get update && sudo apt-get upgrade -y

sudo touch ~/.zshrc

# Download de itens essenciais
essentialsItems=(
  'git'
  'wget'
  'curl'
  'vim'
  'ninja-build'
  'snapd'
  'gettext'
  'cmake'
  'unzip'
  'apache2'
  'mysql-server'
  'mysql-client'
  'openssh-server'
)

for item in "${essentialsItems[@]}"; do
  sudo apt-get install "$item" -y
done

source ./src/asdf.sh
source ./src/Bun.sh
source ./src/neovim.sh
source ./src/lunarvim.sh
source ./src/pnpm.sh
source ./src/tmux.sh
source ./src/yarn.sh
source ./src/exa.sh
source ./src/font.sh

# Lista de instalações do Snap
snapInstallations=(
  'code --classic'
  'spotify'
  'slack --classic'
  'discord'
  'telegram-desktop'
  'whatsapp-for-linux'
  'insomnia'
  'bw'
)

# Iterar sobre a lista e instalar os pacotes do Snap
for item in "${snapInstallations[@]}"; do
  sudo snap install "$item"
done

source ./src/zsh.sh
