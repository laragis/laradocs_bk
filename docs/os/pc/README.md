# PC

## Git

```shell
git config --global core.autocrlf false
git config --global core.eol lf
```

## SSH

```shell
ssh-copy-id -i ~/.ssh/id_rsa_becagis.pub vntts@180.148.1.190
```

```shell title="%USERPROFILE%\.ssh\config"
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_github

Host becagis
  HostName 180.148.1.190
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_becagis

Host homestead
  HostName 192.168.56.56
  PreferredAuthentications publickey
  User vagrant
  IdentityFile ~/.ssh/id_rsa_homestead
```