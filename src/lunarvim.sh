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
