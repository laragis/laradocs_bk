---
sidebar_position: 1
---

# Terraform

## Install Terraform
[Link](https://computingforgeeks.com/how-to-install-terraform-on-ubuntu/)

```shell
# Run system updates
sudo apt update && apt upgrade -y

# Install Terraform Package dependencies
sudo apt install -y gnupg software-properties-common curl

# Add Hashicorp GPG key
sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com focal main"
sudo apt update

# Install Terraform on Ubuntu 22.04
sudo apt install terraform

# Check version
terraform -v
```

```shell
terraform init
terraform apply --auto-approve
```