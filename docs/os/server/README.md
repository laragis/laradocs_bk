# Server

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
