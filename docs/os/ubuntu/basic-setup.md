# Basic setup
https://narasimmantech.com/10-awesome-modern-unix-command-line-tools/
https://engineeringfordatascience.com/posts/configure_terminal_for_data_science_with_oh_my_zsh/

# Install Basic

```shell
apt-get install -y bat exa
```

## First setup
```shell
git config --global user.name "ttungbmt"
git config --global user.email "ttungbmt@gmail.com"
git config --global credential.helper store
```

## Install ZSH

```shell
# Install zsh
apt-get install -y zsh

# Install Zinit
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
zinit self-update

# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```



:::note

Clear unused zsh plugins. `yes | zinit delete --clean` 

:::


## Tips
### Show all enviroment variables
```shell
printenv
```