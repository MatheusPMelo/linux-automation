sudo apt-get install zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
zinit self-update

echo 'zinit load zdharma-continuum/history-search-multi-word' > ~/.zshrc
echo 'zinit light zsh-users/zsh-autosuggestions' > ~/.zshrc
echo 'zinit light zdharma-continuum/fast-syntax-highlighting' > ~/.zshrc
echo 'zinit snippet https://gist.githubusercontent.com/hightemp/5071909/raw/' > ~/.zshrc
