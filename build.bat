echo off

echo Building...
hexo clean & hexo generate

echo Committing...

git add -A
git commit -m "Deployment autocommit - %date% %time%
git push

set /p DUMMY=Hit ENTER to continue...