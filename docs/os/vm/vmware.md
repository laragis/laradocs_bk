# VMWare

## Ubuntu

### Share folders between host and VM

Open **Virtual Machine Settings** > **Options** and click **Add** to add shared folders

![vm_1680797942.png](img/vm_1680797942.png)

Run the following command

```shell
# Checking shared folders
vmware-hgfsclient

# Create folder if not exist
sudo mkdir -p /mnt/hgfs

# Edit file 
sudo nano /etc/fstab
```

Add the following line at the end of the **/etc/fstab** file to automatically mount the VMware share on boot. Please check **uid**, **gid**

```shell title="/etc/fstab"
# Use shared folders between VMWare guest and host
.host:/    /mnt/hgfs    fuse.vmhgfs-fuse    defaults,allow_other,uid=1000,gid=1000     0    0
```

Run `sudo reboot` or `sudo mount -a`
