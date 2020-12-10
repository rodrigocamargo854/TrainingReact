import React, {useState} from "react";
// import { Login, Register } from "./components/login/index";
import { StyledApp } from './styles'
import GlobalStyle from './styles/global'

type Mode = 'login' | 'register'

type AsideProps = {
  mode: Mode
  onClick: () => void
}

const App = () => {
  //useState é do tipo login ou register, seu valor inicial é login
  const [mode, setMode] = useState<Mode>('login')

  const toggleState = () => {
    setMode(mode === 'login' ? 'register' : 'login')
  }

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <div className="login">
          sadasdsa
          <div className="container">
            {/* {mode === 'login' ? <Login /> : <Register />} */}
          </div>
          {/* <Aside mode={mode} onClick={toggleState} /> */}
        </div>
      </StyledApp>
    </>
  )
}

// const Aside = ({ mode, onClick }: AsideProps) => (
//   <div onClick={onClick} className={`right-side ${mode === 'login' ? 'right' : 'left'}`}>
//     <div className="inner-container">
//       <div className="text">{mode === 'login' ? 'Login' : 'Register'}</div>
//     </div>
//   </div>
// )


export default App
