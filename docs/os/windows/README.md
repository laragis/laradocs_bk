# Get Started

## Tips
### Install Makefile


### Check available port
1. Press the **Windows key** and type "Windows features" in the search bar. Then, select **Turn Windows features on or off**
2. Tick the **Telnet Client** checkbox and click OK.


<img src={require('./img/windows_1677820184.png').default} width="450"/>

3. Press the **Windows key + R**, then type "cmd.exe" and click OK.
4. Enter "telnet + IP address or hostname + port number" (e.g., telnet www.example.com 1723 or telnet 10.17.xxx.xxx 5000) to run the telnet command in **Command Prompt** and test the TCP port status.

![windows_1677820698.png](./img/windows_1677820698.png)

5. If the port is open, only a cursor will show

![windows_1677821456.png](./img/windows_1677821456.png)

If the port is closed, a message will say Connect failed.

![windows_1677820183.png](./img/windows_1677820183.png)

### Kill port
```shell
# Method 1
netstat -ano | findstr :<PORT>
taskkill /PID <PID> /F

# Method 2
npx kill-port <PORT>
```

## Popular
