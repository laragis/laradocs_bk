# Server

## Setup

Install basic tools
Setup IP
+ Setup static IP
Setup git username, email
Setup ssh: 
+ Open port 22
+ copy publickey to server
+ Check port open
Setup ssh-config: github
Setup NAT Port Modem:
+ Open port 80, 443
+ Check port open

## SSH

[SSH cheatsheet](https://quickref.me/ssh.html)

### Generate an SSH Key

```shell
ssh-keygen -t rsa -b 4096 -C "becagis.vntts@gmail.com" -f ~/.ssh/id_rsa_becagis

# Your identification
cat ~/.ssh/id_rsa_becagis
# Your public key
cat ~/.ssh/id_rsa_becagis.pub

# Set permissions
chmod 400 ~/.ssh/id_rsa_becagis
```

### Copy the key to a server

```shell
ssh-copy-id -i ~/.ssh/id_rsa_becagis.pub user@host
```

### Test the new key

```shell
ssh -i ~/.ssh/id_rsa_becagis user@host
```

### Config SSH

```shell title="~/.ssh/config"
Host github.com
  IdentityFile ~/.ssh/id_rsa_becagis
```
