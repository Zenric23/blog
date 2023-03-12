import React, { useState, useEffect, useContext, useRef } from 'react'
import { LoginModalContext } from '../../../context/loginModalContext'
import { UserContext } from '../../../context/userContext'
import { publicRequest } from '../../../util/axiosRequest'
import Form from '../Add_blog/Form'
import { StyledModal, FormC, Foot, Link, Wrapper, FormCon, BackDrop, Badge } from './styles/login_regsiter.styled'
import { useNavigate } from 'react-router-dom'

interface Props {
  isOpen: boolean,
  type?: string
}

const Login_register = ({ isOpen, type }:Props) => {

  const loginUsernameRef = useRef<HTMLInputElement>(null)
  const loginPassRef = useRef<HTMLInputElement>(null)
  const regUsernameRef = useRef<HTMLInputElement>(null)
  const regPassRef = useRef<HTMLInputElement>(null)

  const [err, setErr] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { closeModal, showModal } = useContext(LoginModalContext) as LoginModalContextType
  const { dispatch, state } = useContext(UserContext)

  useEffect(()=> {
    if(isOpen) {
      document.body.style.overflow  = "hidden";
    } else {
      document.body.style.overflow  = "visible";
    }

    return () => {
      document.body.style.overflow  = "visible";
    }
  }, [isOpen])


  const clearInputs = (type: string): void => {
    if(type === 'login') {
      loginUsernameRef.current!.value = ''
      loginPassRef.current!.value = ''
    } else {
      regUsernameRef.current!.value = ''
      regPassRef.current!.value = ''
    }
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await publicRequest.post('/auth/register', {
        username: regUsernameRef.current?.value,
        pass: regPassRef.current?.value,
      })
      setIsLoading(false)
      setErr('')
      showModal('login')
    } catch (error: any) {
      setErr(error.response.data)
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await publicRequest.post('/auth/login', {
        username: loginUsernameRef.current?.value,
        pass: loginPassRef.current?.value,
      })
      if(res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data.user})
        window.location.replace('/')  
      }
    } catch (error: any) {
      dispatch({ type: 'LOGIN_FAIL', payload: 'username or password'  })
    }
  }

  const LoginForm = () => (
    <FormC onSubmit={handleLogin}>
        <h3>
          Welcome Back!
        </h3>
        {
          state.error ? (
            <Badge type="err">
              {state.error}
            </Badge>
            ) : state.user && !state.isLoading ? (
            <Badge type="succ">
              Login successfully
            </Badge>
            ) : null
        }
        <input ref={loginUsernameRef} type="text" placeholder='Username' required />
        <input ref={loginPassRef} type="password" placeholder='Password' required />
        <button type='submit' disabled={state.isLoading} style={{opacity: state.isLoading ? 0.8 : 1}}>
          {state.isLoading ?  'VERIFYING...' : 'LOGIN'}
        </button>
        <Foot>
          Don't have an account?
        <Link onClick={()=>{
          if(!isLoading) {
            clearInputs('login')
            showModal('register')
          }
        }}>
          {" "} Register
        </Link>
        </Foot>
      </FormC>
  )

  const RegsiterForm = () => (
    <FormC onSubmit={handleRegister}>
        <h3>
          Join Us!
        </h3>
        {
          err && (
            <Badge type="err">
              {err}
            </Badge>
          )
        }
        <input ref={regUsernameRef} type="text" placeholder='Username' name='username' required />
        <input ref={regPassRef} type="password" placeholder='Password' name='pass' required />
        <button disabled={isLoading} style={{opacity: isLoading ? 0.8 : 1}}>
          {isLoading ? 'CREATING...' : 'REGISTER'}
        </button>
        <Foot>
          Already have an account?
        <Link onClick={()=>{
          if(!isLoading) {
            clearInputs('register')
            showModal('login')
          }
        }}>
        {" "} Login
        </Link>
        </Foot>
      </FormC>
  )

  return (
    <StyledModal isOpen={isOpen}>
      <BackDrop onClick={closeModal} />
      <Wrapper>
        <FormCon formType={type as string}>
          <LoginForm />
          <RegsiterForm />
        </FormCon>
      </Wrapper>
    </StyledModal>
  )
}

export default Login_register