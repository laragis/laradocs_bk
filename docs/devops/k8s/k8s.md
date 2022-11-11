---
sidebar_position: 3
---

# Kubernetes

1. Cài đặt Master, Node 1,2
2. 

```shell
# Check how many nodes it created
kubectl get nodes
# Check the services for the whole cluster
kubectl get all --all-namespaces
# Delete the existing cluster
kind delete cluster --name wslkind
# Create a new cluster with the config file
kind create cluster --name wslkindmultinodes --config ./kind-3nodes.yaml
```

```shell
kubectl logs jobs/pi
```

## FAQ
1. Set permission of file equivalent to chmod 400 on Windows.
```shell
# Source: https://stackoverflow.com/a/43317244
$path = ".\aws-ec2-key.pem"
# Reset to remove explict permissions
icacls.exe $path /reset
# Give current user explicit read-permission
icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
# Disable inheritance and remove inherited permissions
icacls.exe $path /inheritance:r
```


