echo off
echo doing git stuff now:
echo "Going to deploy now"
hexo clean & hexo generate & git add -A & git commit -m "Deployment autocommit - %date% %time% & git push
set /p DUMMY=Hit ENTER to continue...