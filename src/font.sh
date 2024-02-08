cd ~/Download
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Lilex.zip
unzip Lilex.zip
mkdir ~/.local/share/fonts/
mv *.ttf ~/.local/share/fonts/
fc-cache -f -v
cd
