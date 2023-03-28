# Webhook

[webhook](https://github.com/adnanh/webhook) is a lightweight incoming webhook server to run shell commands

## Installation

```shell
sudo apt-get install -y webhook 
```

## Configuration

Make sure that your bash script has `#!/bin/bash` shebang on top

```json title='hooks.json'
[
  {
    "id": "becagis-docs-webhook",
    "execute-command": "/home/ubuntu/VNTT/PROJECT/BecaGIS_Docs/docker-deploy.sh",
    "command-working-directory": "/home/ubuntu/VNTT/PROJECT/BecaGIS_Docs"
  }
]
```

Or using **GitHub**

```shell title="/home/ubuntu/VNTT/SERVER/LaraServer/hooks.json"
[
  {
    "id": "becagis-docs-webhook",
    "execute-command": "/home/ubuntu/VNTT/PROJECT/BecaGIS_Docs/docker-deploy.sh",
    "command-working-directory": "/home/ubuntu/VNTT/PROJECT/BecaGIS_Docs",
    "trigger-rule": {
      "and": [
        {
          "match": {
            "type": "payload-hash-sha1",
            "secret": "<RANDOM-SECRET-STRING>",
            "parameter": {
              "source": "header",
              "name": "X-Hub-Signature"
            }
          }
        },
        {
          "match": {
            "type": "value",
            "value": "refs/heads/main",
            "parameter": {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]
```

Edit docker-deploy.sh

```shell title="/home/ubuntu/VNTT/PROJECT/BecaGIS_Docs/docker-deploy.sh"
#!/bin/bash

# Fetch the latest code from remote
git fetch --all
git checkout --force "origin/master"
# Or: git pull -f origin main


# Your next scripts
```

Make the script executable

```shell
sudo chmod +x /home/ubuntu/VNTT/PROJECT/BecaGIS_Docs/docker-deploy.sh
```

## Run Webhook

```shell
webhook -hooks /home/ubuntu/VNTT/SERVER/LaraServer/hooks.json -verbose --port 9090 -hotreload
```

Test HTTP endpoint

```shell
curl http://localhost:9090/hooks/becagis-docs-webhook
```

## FAQs
### Pass enviroments
Run HTTP request

```shell
curl -X POST http://localhost:9090/hooks/becagis-docs-webhook
   -H 'Content-Type: application/json'
   -d '{"data": {"APP_VERSION": "1.0.0"}}'
```

```shell
[
  {
    "id": "becagis-docs-webhook",
    ...
    "pass-environment-to-command": [
        {
            "envname": "APP_VERSION",
            "source": "payload",
            "name": "data.APP_VERSION"
        }
    ]
  }
]
```
