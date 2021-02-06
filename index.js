const { app, BrowserWindow, ipcMain, Notification}=require('electron')
const path=require('path')
const express=require('express')
const expressApp=express()

let mainWindow;
let settingsWindow

app.on('ready',()=>{
        mainWindow=new BrowserWindow({
        webPreferences:{nodeIntegration:true},
        fullscreen:true,
        backgroundColor:'#383838'
    })

    mainWindowUrl=path.join(__dirname,'./views/main.html')
    
    expressApp.listen(3000,()=>{
        console.log('Listening on port 3000')
    })
    mainWindow.loadURL('http://localhost:3000')
    
})

ipcMain.on('settings:open',()=>{
    settingsWindow=new BrowserWindow({
        webPreferences:{nodeIntegration:true}
    })
    
    settingsWindow.loadURL(path.join(__dirname,'./views/settings.html'))
})

expressApp.set('views',path.join(__dirname,'./views'))

expressApp.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/main.html'))
})

expressApp.get('/settings',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/settings.html'))
})