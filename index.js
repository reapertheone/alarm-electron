const { app, BrowserWindow, ipcMain, Notification}=require('electron')
const path=require('path')

app.on('ready',()=>{
    mainWindow=new BrowserWindow({
        webPreferences:{nodeIntegration:true},
        fullscreen:true,
        backgroundColor:'#383838'
    })

    mainWindowUrl=path.join(__dirname,'./views/main.html')
    mainWindow.loadURL(mainWindowUrl)
    
    

})