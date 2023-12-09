# README for development

## Start
1. in terminal, type `yarn` and enter
2. type `yarn dev`
3. visit `http://localhost:5173` to see your website

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

