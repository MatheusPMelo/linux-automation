# !/bin/bash
# adicionar docker
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

echo "instalando asdf-vm..."
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0

echo '. "$HOME/.asdf/asdf.sh"' > ~/.zshrc

asdf plugin add nodejs
asdf install nodejs latest

echo "asdf-vm instalado com sucesso! 👏👏👏"
sleep 3
clear

echo "instalando bun..."
curl -fsSL https://bun.sh/install | bash
echo "Bun instalado com sucesso"
sleep 3
clear

echo "Clonando o repositório do Neovim..."
git clone https://github.com/neovim/neovim
cd neovim || exit

echo "Compilando Neovim (CMAKE_BUILD_TYPE=RelWithDebInfo)..."
make CMAKE_BUILD_TYPE=RelWithDebInfo

echo "Instalando Neovim..."
sudo make install

echo "Compilando Neovim (CMAKE_BUILD_TYPE=Release)..."
make CMAKE_BUILD_TYPE=Release

echo "Neovim instalado com sucesso! 👏👏👏"
sleep 3
clear
echo "Instalando Lunarvim..."
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)

# Criar diretórios e arquivos de configuração
mkdir -p ~/.config/lvim/lua ~/.config/lvim/lua/user
cd ~/.config/lvim/lua/user || exit

touch autocmds.lua colorschema.lua keymap.lua lang.lua options.lua plugins.lua

# Baixar arquivos de configuração
curl -o autocmds.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/autocmds.lua?token=GHSAT0AAAAAACNLNZBZ2UXI2JNXH7MXLHEEZOEIK3A
curl -o colorschema.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/autocmds.lua?token=GHSAT0AAAAAACNLNZBZ2UXI2JNXH7MXLHEEZOEIK3A
curl -o keymap.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/keymap.lua?token=GHSAT0AAAAAACNLNZBZKLDA77UBKNZNEMPKZOEIMZQ
curl -o lang.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/lang.lua?token=GHSAT0AAAAAACNLNZBZQVNW4RSYIWRDNEWIZOEINJA
curl -o options.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/lang.lua?token=GHSAT0AAAAAACNLNZBZQVNW4RSYIWRDNEWIZOEINJA
curl -o plugins.lua 'https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lua/user/plugins.lua?token=GHSAT0AAAAAACNLNZBZIPYBHZISJ5UAT4K2ZOEIOBQ'

cd "$HOME" || exit

touch .config/lvim/config.lua
curl -o .config/lvim/config.lua https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/config.lua?token=GHSAT0AAAAAACNLNZBZSTHV6ZHHAPPANKX4ZOEIQHQ
touch .config/lvim/lazy-lock.json
curl -o .config/lvim/lazy-lock.json https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/lazy-lock.json?token=GHSAT0AAAAAACNLNZBZDOMX62E3K67FAKI4ZOEISMQ

echo "Lunarvim instalado com sucesso! 👏👏👏"
sleep 3
clear
echo "Instalando PNPM..."
curl -fsSL https://get.pnpm.io/install.sh | sh -
echo "PNPM instalado com sucesso! 👏👏👏"
sleep 3
clear
echo "Instalando tmux..."
sudo apt-get install tmux -y

echo "Configurando .tmux.conf..."
sudo touch ~/.tmux.conf && sudo sh -c 'curl -o /etc/tmux.conf https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/.tmux.conf\?token\=GHSAT0AAAAAACNLNZBYYS7RQM5HGIZ72QLAZOEBGVA'

echo "tmux instalado e configurado."
sleep 3
clear
# Exibir mensagem de instalação
echo "Instalando yarn"
# Instalar Yarn globalmente
npm i -g yarn
# Exibir mensagem de sucesso
echo "Sucesso ao instalar Yarn! 👏👏👏"
# Esperar por 3 segundos
sleep 3
clear

sudo apt-get exa

echo "alias ls='exa --icons'" > ~/.zshrc
echo "alias ll='exa --icons --long'" > ~/.zshrc

pcd ~/Download
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Lilex.zip
unzip Lilex.zip
mkdir ~/.local/share/fonts/
mv *.ttf ~/.local/share/fonts/
fc-cache -f -v
cd

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

sudo apt-get install zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
zinit self-update

echo 'zinit load zdharma-continuum/history-search-multi-word' > ~/.zshrc
echo 'zinit light zsh-users/zsh-autosuggestions' > ~/.zshrc
echo 'zinit light zdharma-continuum/fast-syntax-highlighting' > ~/.zshrc
echo 'zinit snippet https://gist.githubusercontent.com/hightemp/5071909/raw/' > ~/.zshrc
