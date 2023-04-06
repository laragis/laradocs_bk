# VMWare

## Ubuntu

### Mounting VMware Shares

```shell
vmware-hgfsclient
sudo mkdir -p /mnt/hgfs
```

Add the following line at the end of the /etc/fstab file. Please check **uid**, **gid**

```shell
# Use shared folders between VMWare guest and host
.host:/    /mnt/hgfs    fuse.vmhgfs-fuse    defaults,allow_other,uid=1000,gid=1000     0    0
```