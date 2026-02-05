# Futurix 2K26 - GitHub Pages Deployment Script
# This script helps you deploy your website to GitHub Pages

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Futurix 2K26 - Deployment Assistant  " -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Function to check if command exists
function Test-Command($cmdname) {
    return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Check prerequisites
Write-Host "Checking prerequisites..." -ForegroundColor Yellow

if (-not (Test-Command "git")) {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

if (-not (Test-Command "npm")) {
    Write-Host "❌ npm is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Prerequisites check passed`n" -ForegroundColor Green

# Get GitHub username
Write-Host "Enter your GitHub username:" -ForegroundColor Yellow
$githubUsername = Read-Host

if ([string]::IsNullOrWhiteSpace($githubUsername)) {
    Write-Host "❌ GitHub username cannot be empty" -ForegroundColor Red
    exit 1
}

Write-Host "`nYour GitHub username: $githubUsername" -ForegroundColor Green
Write-Host "Repository URL will be: https://github.com/$githubUsername/FuturiX_2026" -ForegroundColor Cyan
Write-Host "Website URL will be: https://$githubUsername.github.io/FuturiX_2026`n" -ForegroundColor Cyan

# Confirm
$confirm = Read-Host "Is this correct? (yes/no)"
if ($confirm -ne "yes") {
    Write-Host "Deployment cancelled." -ForegroundColor Yellow
    exit 0
}

# Update package.json
Write-Host "`n📝 Updating package.json..." -ForegroundColor Yellow
$packageJsonPath = "package.json"
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
$packageJson.homepage = "https://$githubUsername.github.io/FuturiX_2026"
$packageJson | ConvertTo-Json -Depth 100 | Set-Content $packageJsonPath

Write-Host "✅ package.json updated`n" -ForegroundColor Green

# Ask if repository already exists
Write-Host "Have you already created the GitHub repository 'FuturiX_2026'?" -ForegroundColor Yellow
Write-Host "If not, please create it now at: https://github.com/new" -ForegroundColor Yellow
$repoExists = Read-Host "(yes/no)"

if ($repoExists -ne "yes") {
    Write-Host "`n📋 Please create the repository now:" -ForegroundColor Cyan
    Write-Host "1. Go to https://github.com/new" -ForegroundColor White
    Write-Host "2. Name: FuturiX_2026" -ForegroundColor White
    Write-Host "3. Visibility: Public" -ForegroundColor White
    Write-Host "4. DO NOT initialize with README" -ForegroundColor White
    Write-Host "5. Click 'Create repository'`n" -ForegroundColor White
    
    $continue = Read-Host "Press ENTER when you've created the repository..."
}

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "⚠️ Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $updateRemote = Read-Host "Do you want to update it? (yes/no)"
    if ($updateRemote -eq "yes") {
        git remote set-url origin "https://github.com/$githubUsername/FuturiX_2026.git"
        Write-Host "✅ Remote updated`n" -ForegroundColor Green
    }
} else {
    # Add remote
    Write-Host "`n🔗 Adding GitHub remote..." -ForegroundColor Yellow
    git remote add origin "https://github.com/$githubUsername/FuturiX_2026.git"
    Write-Host "✅ Remote added`n" -ForegroundColor Green
}

# Commit the package.json change
Write-Host "📦 Committing configuration changes..." -ForegroundColor Yellow
git add package.json
git commit -m "Update homepage for GitHub Pages deployment" 2>$null
Write-Host "✅ Changes committed`n" -ForegroundColor Green

# Push to GitHub
Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You may be asked to enter your GitHub credentials.`n" -ForegroundColor Yellow

git branch -M main
$pushResult = git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub`n" -ForegroundColor Green
} else {
    Write-Host "⚠️ Push encountered an issue:" -ForegroundColor Yellow
    Write-Host $pushResult
    Write-Host "`nIf authentication failed, you may need to use a Personal Access Token." -ForegroundColor Yellow
    Write-Host "See: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token`n" -ForegroundColor Cyan
    
    $continue = Read-Host "Do you want to continue with deployment? (yes/no)"
    if ($continue -ne "yes") {
        exit 0
    }
}

# Deploy to GitHub Pages
Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Yellow
Write-Host "This may take a minute...`n" -ForegroundColor Yellow

npm run deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================" -ForegroundColor Green
    Write-Host "    ✅ DEPLOYMENT SUCCESSFUL! 🎉" -ForegroundColor Green
    Write-Host "========================================`n" -ForegroundColor Green
    
    Write-Host "Your website will be live shortly at:" -ForegroundColor Cyan
    Write-Host "https://$githubUsername.github.io/FuturiX_2026`n" -ForegroundColor Cyan
    
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Go to https://github.com/$githubUsername/FuturiX_2026/settings/pages" -ForegroundColor White
    Write-Host "2. Ensure source is set to 'gh-pages' branch" -ForegroundColor White
    Write-Host "3. Wait 1-2 minutes for the site to publish" -ForegroundColor White
    Write-Host "4. Visit your website!`n" -ForegroundColor White
} else {
    Write-Host "`n❌ Deployment failed. Please check the error messages above." -ForegroundColor Red
    Write-Host "For help, see DEPLOYMENT_GUIDE.md`n" -ForegroundColor Yellow
}

Write-Host "Press ENTER to exit..."
Read-Host
