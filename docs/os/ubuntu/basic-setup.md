# Basic setup
https://narasimmantech.com/10-awesome-modern-unix-command-line-tools/
https://engineeringfordatascience.com/posts/configure_terminal_for_data_science_with_oh_my_zsh/


## First setup
```shell
git config --global user.name "ttungbmt"
git config --global user.email "ttungbmt@gmail.com"
git config --global credential.helper store
```

### Install Basic

```shell
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install -y bat exa duf
```


### Install ZSH

```shell
# Install zsh
apt-get install -y zsh

# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install Zinit
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
zinit self-update
```

:::caution

Clear unused zsh plugins. `yes | zinit delete --clean` 

:::

Open `~/.zshrc` by command `code ~/.zshrc`. Append custom scripts 

```shell title="~/.zshrc"
# Plugins
zinit light-mode for \
    zsh-users/zsh-autosuggestions \
    zsh-users/zsh-syntax-highlighting

# Snippet
zinit snippet https://raw.githubusercontent.com/laragis/zsh-snippets/main/bash_aliases.sh
```

Reload Zsh

```shell
exec zsh
```
### Install NodeJS

## Tips
### Show all enviroment variables
```shell
printenv
```