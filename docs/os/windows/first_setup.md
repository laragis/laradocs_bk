# First Setup

https://community.chocolatey.org/packages?sortOrder=package-download-count&page=21&prerelease=False&moderatorQueue=False&moderationStatus=all-statuses

Figma


- Update Windows
- Enable Hyper-V, Linux, tenet
- WSL, Ubuntu
- Install Chocolatey


## FAQs
### Mount folder as a drive

```shell
# Mount folder
subst P: "D:\VNTT"

# View list
subst

# Unmount 
subst P: /d 
```


Set-ExecutionPolicy Unrestricted
Set-ExecutionPolicy AllSigned
https://www.sharepointdiary.com/2014/03/fix-for-powershell-script-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system.html

https://github.com/pyenv-win/pyenv-win

C:\Users\ttung\.pyenv\pyenv-win\versions

Check Powershell version: $PSVersionTable
Upgrade PowerShell: https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3

choco install -y nvm
Install Node
https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/
nvm install lts


Get-Host | Select-Object Version
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\Net Framework Setup\NDP' -Recurse | Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match '^(?!S)\p{L}'} | Select PsChildName, version