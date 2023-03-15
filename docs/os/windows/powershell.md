# PowerShell

## Oh My Posh
### Installation
```shell
# Method 1: winget
winget install JanDeDobbeleer.OhMyPosh -s winget

# Method 2: scoop
scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json

# Method 3: manual
Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
```

### Update
```shell
# Method 1: winget
winget upgrade JanDeDobbeleer.OhMyPosh -s winget

# Method 2: scoop
scoop update oh-my-posh

# Method 3: manual
Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
```

### Configuration

#### Install Fonts
Oh My Posh was designed to use [Nerd Fonts](https://www.nerdfonts.com/font-downloads). Ex: CascadiaCode

```shell
oh-my-posh font install
```

#### Install Modules
```shell
Install-Module posh-git -Force
Install-Module -Name Terminal-Icons -Repository PSGallery -Force
Install-Module PSReadLine -Force
Install-Module PSFzf -Force
```

#### Setup
Enter command `code $PROFILE` to open `Microsoft.PowerShell_profile`

```shell title="C:\Users\%USERNAME%\Documents\PowerShell\Microsoft.PowerShell_profile"
# Load prompt configs
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\M365Princess.omp.json" | Invoke-Expression

# PowerShell environment for Git
Import-Module posh-git

# Terminal-Icons
Import-Module Terminal-Icons

# PSReadLine
Import-Module PSReadLine
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView

# Fzf
Import-Module PSFzf
Set-PsFzfOption -PsReadLineChordProvider 'Ctrl+f' -PSReadLineChordReverseHistory 'Ctrl+r'


function goto_cdserver { set-location "D:\VNTT\SERVER" }
function goto_cdproject { set-location "D:\VNTT\PROJECT" }
function goto_cdvagrant { set-location "D:\VNTT\SERVER\BecaGIS_Vagrant" }
function goto_cdhomestead { set-location "D:\VNTT\SERVER\Homestead" }
function do_vagrant_up { vagrant up }
function do_vagrant_destroy_parallel { vagrant destroy --parallel }

# Alias (Optional)
Set-Alias g git
Set-Alias d docker
Set-Alias dc docker-compose
Set-Alias v vagrant
Set-Alias vu do_vagrant_up
Set-Alias vdp do_vagrant_destroy_parallel

Set-Alias cd_server goto_cdserver
Set-Alias cd_project goto_cdproject
Set-Alias cd_vagrant goto_cdvagrant
Set-Alias cd_homestead goto_cdhomestead

$work= @{
    project = 'D:\VNTT\PROJECT'
}

# Ex: cd $work.webapp 

# Ultilities (Optional)
function which ($command) {
    Get-Command -Name $command -ErrorAction SilentlyContinue |
        Select-Object -ExpandProperty Path -ErrorAction SilentlyContinue
}
```