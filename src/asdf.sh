#!/bin/bash

echo "instalando asdf-vm"
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0

echo '. "$HOME/.asdf/asdf.sh"' > ~/.zshrc

asdf plugin add nodejs
asdf install nodejs latest

echo "asdf-vm instalado com sucesso! 👏👏👏"
sleep 3
clear

