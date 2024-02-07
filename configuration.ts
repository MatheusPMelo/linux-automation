import { $ } from 'bun'
const Configuration = async () => {
  // configure fish with starship
  await $`echo "starship init fish | source" > ~/.config/fish/config.fish`
  await $`clear`

  // install asdf
  await $`echo 'source ~/.asdf/asdf.fish' > ~/.config/fish/config.fish`

  // install asdf plugins
  await $`asdf plugin add nodejs`
  // install nodejs latest
  await $`asdf install nodejs latest`
  // set global nodejs latest
  await $`asdf global nodejs latest`
  await $`clear`

  // turn fish into default shell
  await $`echo /usr/local/bin/fish | sudo tee -a /etc/shells`
  await $`chsh -s /usr/local/bin/fish`
  await $`clear`

  // set aliases for exa listing directories
  await $`echo 'alias ll="exa --icons -la"' > ~/.config/fish/config.fish`
  await $`echo 'alias ls="exa --icons"' > ~/.config/fish/config.fish`
  await $`echo 'alias ll="exa --icons -la"' > ~/.config/fish/config.fish`

  await $`echo 'export BUN_INSTALL="$HOME/.bun"' > ~/.config/fish/config.fish`
}

export default Configuration