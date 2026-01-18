@echo off
if exist "C:\Users\fluxo\.ssh\id_rsa" del "C:\Users\fluxo\.ssh\id_rsa"
if exist "C:\Users\fluxo\.ssh\id_rsa.pub" del "C:\Users\fluxo\.ssh\id_rsa.pub"
ssh-keygen -t rsa -b 4096 -f C:\Users\fluxo\.ssh\id_rsa -N ""
