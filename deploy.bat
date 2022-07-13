echo off
echo doing git stuff now:

git add -A
git commit -m "Deployment autocommit - %date% %time%
git push

echo "Going to deploy now"
hexo clean & hexo generate & echo blog.seedganggames.com > public/CNAME & surge --project public

set /p DUMMY=Hit ENTER to continue...