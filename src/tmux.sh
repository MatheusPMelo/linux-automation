echo "Instalando tmux..."
sudo apt-get install tmux -y

echo "Configurando .tmux.conf..."
sudo touch ~/.tmux.conf && sudo sh -c 'curl -o /etc/tmux.conf https://raw.githubusercontent.com/MatheusPMelo/my_lunarvim/main/.tmux.conf\?token\=GHSAT0AAAAAACNLNZBYYS7RQM5HGIZ72QLAZOEBGVA'

echo "tmux instalado e configurado."
sleep 3
clear
