    import { useEffect, useRef, useState } from "react"


const useElementOnScreen = (option: any) => {
    const containerRef = useRef(null)
    const [pageNum, setPageNum] = useState<number>(1)


    const callbackFunc = (entries: any, observer: any): void => {
        const [entry] = entries
        if(entry.isIntersecting) {
            setPageNum(num=> num + 1)
        }
    }

    useEffect(()=> {
        const Observer = new IntersectionObserver(callbackFunc, option)
        if(containerRef.current) Observer.observe(containerRef.current)
        return () => {
            if(containerRef.current) Observer.unobserve(containerRef.current)
        }
    }, [containerRef.current])

    return [ containerRef, pageNum, setPageNum ] as [ typeof containerRef, typeof pageNum, typeof setPageNum ]
}

export default useElementOnScreen