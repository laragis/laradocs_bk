# Django
Start project
```shell
pip install cookiecutter
cookiecutter --version
cookiecutter https://github.com/laragis/cookiecutter-django.git
cookiecutter

```

:::info Adjust your path
Add custom line to ~./zshrc

```shell
# Add ~/.local/ to PATH
export PATH=$HOME/.local/bin:$PATH
```
:::

## Install GDAL

```shell
sudo apt-get install -y python3-gdal gdal-bin libgdal-dev
```


## Dump data

```shell
# dumpdata whole database
dj man dumpdata --indent 2 > fixtures/db.json

# dumpdata for backup specific app
dj man dumpdata admin --indent 2 > fixtures/admin.json

# dumpdata for backup specific table
dj man dumpdata users.user --indent 2 > fixtures/user.json

# dumpdata (--exclude)
dj man dumpdata --exclude auth.permission --indent 2 > fixtures/db.json

# dumpdata (--format):  json ,xml ,yaml
dj man dumpdata users.user --indent 2 --format yaml > fixtures/user.yaml

# loaddata command
dj man loaddata fixtures/user.yaml

# Restore fresh database
dj man dumpdata --exclude auth.permission --exclude contenttypes --indent 2 > fixtures/db.json
dj man loaddata fixtures/db.json
```

## FAQs
### Fix pip install
Every time install packages by adding to requirements. You need to 
- Rebuild django image
- Reload interpreter pycharm by clicking Remote bottom right bar