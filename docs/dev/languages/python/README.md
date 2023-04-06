# Python

## Installation
- https://hackersandslackers.com/multiple-python-versions-ubuntu-20-04/

```shell title=""
# 1. Add the deadsnakes repository
sudo add-apt-repository -y ppa:deadsnakes/ppa

# 2. Update packages visible to Ubuntu
sudo apt update -y

# 3. Check for your desired version of Python
apt list | grep python3.x

# 4. Confirm your version of Python exists for download
apt list | grep python3.10

# 5. Install Python3.x
sudo apt install -y python3.10
```

## Managing Alternative Python Installations

```shell
# Set alternative versions for Python
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 2

# List installed versions of Python
sudo update-alternatives --list python3

# Swapping between versions
sudo update-alternatives --config python3
```

In the case you like `python` to refer to `python3`, you can simply install `python-is-python3`

```shell
sudo apt-get install python-is-python3
```

## Install basic

```shell
# Pip
sudo apt install -y python3-pip
pip --version
python3 -m pip install --upgrade pip

# Venv
sudo apt install -y python3-venv


```

:::info Adjust your path
Add custom line to ~./zshrc

```shell
# Add ~/.local/ to PATH
export PATH=$HOME/.local/bin:$PATH
```

:::


