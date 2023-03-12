import { useState } from "react"


export const useLoginModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return [ isOpen, setIsOpen ] as [ typeof isOpen, typeof setIsOpen ]
}