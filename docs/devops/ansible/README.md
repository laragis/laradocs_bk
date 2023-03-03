# Ansible

## Installation
Install Ansible
```shell
# Method 1
python3 -m pip install --user ansible

# Method 2
apt-get install -y ansible
```

Check version
```shell
ansible --version
```

:::note

If not working. Please append line to `.zshrc` file
```shell
export PATH=$HOME/bin:/usr/local/bin:$HOME/.local/bin:$PATH
```
:::

Upgrade Ansible

```shell
python3 -m pip install --upgrade --user ansible
```

## Uninstallation

```shell
# Method 1
python3 -m pip uninstall ansible

# Method 2
apt-get -y autoremove --purge ansible
```