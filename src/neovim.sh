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
