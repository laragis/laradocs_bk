# Node.js

## Installation
### 1. NVM
Install Node Version Manager
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Reload and check version

```shell
## bash
source ~/.bashrc
## zsh
source ~/.zshrc
```

Check version
```shell
nvm -v
```

### 2. NodeJs
List installed versions

```shell
nvm ls
```

List available versions

```shell
nvm list-remote
```



Install NodeJS

```shell
nvm install --lts
```

Set the default version

```shell
nvm alias default 18.14.2
```

Switch to another version

```shell
# For a specific version provide a version number
nvm use 18.14.2

# Switch to the latest installed version
nvm use node

# Use the latest LTS version:
nvm use --lts
```

### 3. Yarn, PNPM

```shell
# Install Yarn, PNPM
npm i -g yarn pnpm

# Check version
yarn -v
pnpm -v
```