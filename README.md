# README for development

## Start
1. in terminal, type `yarn` and enter
2. type `yarn dev`
3. visit `http://localhost:5173` to see your website

## Frontend Path
* `http://localhost:5173` -> 主頁，使用者點進來網頁看到的畫面
* `http://localhost:5173/users/login` -> Login Page
* `http://localhost:5173/users/register` -> Register Page
* `http://localhost:5173/member` -> Member Page，會員畫面
* `http://localhost:5173/books` -> 登入成功後會看到的畫面，推薦書的那個畫面
* `http://localhost:5173/books/filter` -> 當使用者使用 filter 功能的時候的畫面，如搜尋特定的繪本，看已收藏的繪本，已經購買的書本等等...
* `http://localhost:5173/reads` -> 看繪本內容的畫面
* `http://localhost:5173/edit` -> Profile Page
* `http://localhost:5173/edit/profile` -> 使用者更改自己的資訊的畫面
* `http://localhost:5173/edit/book` -> 創建一本繪本的畫面
* `http://localhost:5173/purchase` -> 購買書本時的畫面

## Get data from backend
### What function and defined at where?
checkout `/src/api/{book, category, content, rate, user}.js`
### How to use?
import `{user, book, category, content, rate}Api` from their file. For example, if you want to login, you may implement the following code
```js
const loginUser = async (username, password) => {
    const response = await userApi.login(username, password);
    console.log(response); // response.status, response.data
    if( response.status === 200 ){
      const userData = response.data;
      // do something with userData
    } else {
      const errorMessage = response.data;
      // do something with error message sent from backend
    }
}
```
### What the structure of response
You can use `console.log` to check what will be inside the return value of function. Basically it will be defined as the following structure
```js
response.status // HTTP Status Code, 200 will be success code, otherwise error(fail)
response.data // Data sent from backend, 200 will be expected data, otherwise will be error message
```

