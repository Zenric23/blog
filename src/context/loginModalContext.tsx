import React, { createContext, useState } from 'react'
import Login_register from '../components/pages/Home/Login_register'


export const LoginModalContext = createContext<LoginModalContextType | null>(null)

interface Props {
    children: React.ReactNode
}

type ShowModalArg = string

const LoginModalProvider = ({ children }:Props) => {    
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [type, setType] = useState<string>('')

    const closeModal = (): void => {
        setIsOpenModal(false)
    } 

    const showModal = (type: ShowModalArg): void => {
        setIsOpenModal(true)
        setType(type)
    }


  return (  
    <LoginModalContext.Provider value={{ showModal, closeModal }}>
        <Login_register type={type} isOpen={isOpenModal} />
        {children}
    </LoginModalContext.Provider>
  )
}

export default LoginModalProvider