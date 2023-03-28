# CI CD

## Supervisor

Install Supervisor

```shell
sudo apt-get install -y supervisor

# Check version
supervisord -v

# Verify status
systemctl status supervisor
```

Generate an nginx configuration file

```shell
vi /etc/supervisor/conf.d/nginx.conf
```

Add the following lines:

```shell title="/etc/supervisor/conf.d/nginx.conf"
[program:nginx]
command=/usr/sbin/nginx -g "daemon off;"
autostart=true
autorestart=true
startretries=5
numprocs=1
startsecs=0
process_name=%(program_name)s_%(process_num)02d
stderr_logfile=/var/log/supervisor/%(program_name)s_stderr.log
stderr_logfile_maxbytes=10MB
stdout_logfile=/var/log/supervisor/%(program_name)s_stdout.log
stdout_logfile_maxbytes=10MB
```

Reload and update config

```shell
# Reload new config
supervisorctl reread

# Update its config
supervisorctl update
```

Check nginx service

```shell
# Verify stauts
supervisorctl status

# Stop the nginx service
supervisorctl stop nginx:nginx_00

# Start the nginx service
supervisorctl start nginx:nginx_00

# Verify nginx process
ps -aux | grep nginx
```
