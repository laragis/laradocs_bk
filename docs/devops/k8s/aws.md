---
sidebar_position: 2
---

# AWS

## Install AWS Cli

```shell
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm -rf awscliv2.zip aws

# Check version
aws --version

# Setup AWS
aws configure 
# Default region name: ap-southeast-1
# Default output format: ap-southeast-1
```

## FAQ
```shell
aws iam list-instance-profiles
aws iam delete-instance-profile --instance-profile-name profile_name_here
```
```