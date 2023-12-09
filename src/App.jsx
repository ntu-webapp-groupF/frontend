import { Button } from "antd"

function App() {

  const clickFunc = async () => {
    //const response = await userApi.login('admin', 'z0U6aFWoKw8Q');
    //console.log(response); // response.status, response.data
    //const response = await userApi.logout();
    //console.log(response)
    //const response = await userApi.register('wzwr', '123123')
    //console.log(response)
  }

  return (
    <Button type="primary" onClick={clickFunc}>Click me</Button>
  )
}

export default App
