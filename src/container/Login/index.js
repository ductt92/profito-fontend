import React, { useState } from "react"
import { LoginContainerElement, FormContainerElement, TitleElement, InputElement, ButtonContainer, Button } from '../../components/LoginElement'
import { BsFillPersonFill } from "react-icons/bs"
const LoginContainer = () => {
  const [info, setInfo] = useState({ userName: '', passWord: '' })


  const LoginForm = () => {
    console.log(info)
  }
  return (
    <LoginContainerElement>
      <FormContainerElement>
        <TitleElement>
          Login
        </TitleElement>

        <div style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50%"
        }}>
          <div>

            <InputElement placeholder="User Name" onChange={(e) => setInfo(pre => ({
              ...pre,
              userName: e.target.value
            }))} />
          </div>
          <div>

            <InputElement placeholder="PassWord" 
            onChange={e => setInfo(pre => ({
              ...pre,
              passWord: e.target.value
            }))} />
          </div>
        </div>

        {/* $transition-bezier: 1.000, 0.000, 0.000, 1.000;
$transition-len: 0.35s; */}
        <ButtonContainer>
          <Button onClick={LoginForm}> Login</Button>
        </ButtonContainer>

      </FormContainerElement>
    </LoginContainerElement>
  )

}
export default LoginContainer