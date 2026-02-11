# Petitorium Installation Script
# https://petitorium.dev

$ErrorActionPreference = 'Stop'

# Configuration
$Owner = "petitorium"
$Repo = "petitorium"
$BinaryName = "petitorium"
$Version = "v0.3.0"

# Detect Architecture
if ($env:PROCESSOR_ARCHITECTURE -eq "AMD64") {
    $Arch = "x86_64"
} elseif ($env:PROCESSOR_ARCHITECTURE -eq "ARM64") {
    $Arch = "arm64"
} else {
    Write-Error "Unsupported Architecture: $env:PROCESSOR_ARCHITECTURE"
    exit 1
}

# Construct download URL
$Filename = "${BinaryName}_Windows_${Arch}.zip"
$Url = "https://github.com/${Owner}/${Repo}/releases/download/${Version}/${Filename}"

Write-Host "Downloading ${BinaryName} ${Version} for Windows/${Arch}..."

# Create temporary directory
$TmpDir = Join-Path $env:TEMP "petitorium_install"
if (Test-Path $TmpDir) { Remove-Item -Recurse -Force $TmpDir }
New-Item -ItemType Directory -Force -Path $TmpDir | Out-Null

try {
    # Download
    $ZipPath = Join-Path $TmpDir $Filename
    Invoke-WebRequest -Uri $Url -OutFile $ZipPath

    # Install Directory (AppData/Local/petitorium)
    $InstallDir = Join-Path $env:LOCALAPPDATA "petitorium"
    if (-not (Test-Path $InstallDir)) {
        New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
    }

    # Extract
    Write-Host "Extracting..."
    Expand-Archive -Path $ZipPath -DestinationPath $TmpDir -Force
    
    # Move binary
    $SourceExe = Join-Path $TmpDir "${BinaryName}.exe"
    $DestExe = Join-Path $InstallDir "${BinaryName}.exe"
    
    if (Test-Path $SourceExe) {
        Move-Item -Path $SourceExe -Destination $DestExe -Force
        Write-Host "Installed to $DestExe"
    } else {
        # Fallback: Maybe it's inside a folder in the zip?
        # Check for any .exe in the extracted content
        $Exes = Get-ChildItem -Path $TmpDir -Filter "*.exe" -Recurse
        if ($Exes.Count -gt 0) {
            Move-Item -Path $Exes[0].FullName -Destination $DestExe -Force
            Write-Host "Installed to $DestExe"
        } else {
            throw "Could not find ${BinaryName}.exe in the downloaded archive."
        }
    }

    # Add to PATH if not already present
    $UserPath = [Environment]::GetEnvironmentVariable("Path", "User")
    if ($UserPath -notlike "*$InstallDir*") {
        Write-Host "Adding $InstallDir to User PATH..."
        [Environment]::SetEnvironmentVariable("Path", "$UserPath;$InstallDir", "User")
        $env:PATH += ";$InstallDir"
        Write-Host "PATH updated."
    }

    Write-Host "Successfully installed ${BinaryName}!"
    Write-Host "You may need to restart your terminal for PATH changes to take effect."
    
    # Verify installation
    & "$DestExe" --version

} catch {
    Write-Error "Installation failed: $_"
    exit 1
} finally {
    # Cleanup
    if (Test-Path $TmpDir) { Remove-Item -Recurse -Force $TmpDir }
}
