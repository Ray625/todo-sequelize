![myimage]()
## 簡介
簡易Todo清單，使用者登入後，可以新增、瀏覽、編輯及刪除Todo資訊。
## 功能
+ 瀏覽Todo列表。  
+ 新增Todo資訊。 
+ 查看Todo內容。
+ 編輯Todo資訊。
+ 刪除所選Todo資料。
## 環境設置
Node.js@18.14.0  
express@4.16.4  
express-handlebars@3.0.0  
body-parser@1.20.2  
method-override@3.0.0  
express-session@1.17.1  
passport@0.4.1  
passport-local@1.0.0  
connect-flash@0.1.1  
bcryptjs@2.4.3  
passport-facebook@3.0.0  
mysql2@2.1.0  
sequelize@5.21.13  
sequelize-cli@5.5.1
## 開始使用
1. 請先安裝Node.js與npm  
2. clone專案至本地
3. 於終端機移至專案資料夾輸入:
```
npm install
```
4. 設定環境變數: 在專案資料夾下新增.env檔案，照著.env.example填入對應資料
```
MONGODB_URI = '你的連線字串'  
FACEBOOK_ID = '你的應用程式編號'  
FACEBOOK_SECRET = '你的應用程式密鑰'  
FACEBOOK_CALLBACK = http://localhost:3000/auth/facebook/callback  
SESSION_SECRET = ThisIsMySecret
```
5. 啟用伺服器
```
npm run start
```
6. 若看見此訊息代表順利運行，打開瀏覽器進入到以下網址
```
The web app is running on http://localhost:3000
```
7. 新增種子資料
```
npx sequelize db:seed:all
```
8. 若欲停止使用請輸入
```
Ctrl + C
```

