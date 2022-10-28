# Docker Swarm

## Docker
[Install docker](https://www.linuxtechi.com/install-use-docker-on-ubuntu)
```shell
sudo apt install -y ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
sudo usermod -aG docker $USER
newgrp docker
docker version
sudo systemctl status docker
```

## Basic

[Install Oh My Zsh](https://trendoceans.com/install-zsh-on-ubuntu/)
```shell
sudo apt install zsh -y
# Change Bash shell to ZSH shell
chsh -s /usr/bin/zsh

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install Zplug
curl -sL --proto-redir -all,https https://raw.githubusercontent.com/zplug/installer/master/installer.zsh | zsh
```

Other
- https://github.com/sharkdp/bat#installation
- https://lindevs.com/install-exa-on-ubuntu

## Node management
```shell
# Initialize a swarm
docker swarm init
docker swarm join-token manager

# List swarm nodes
docker node ls
```