@echo off
echo Stopping Hexo server...
taskkill /IM "node.exe" /F
echo Hexo server stopped.

echo Starting Hexo server...
hexo clean && hexo g && gulp && hexo d
echo Hexo deploy success !

