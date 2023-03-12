import { useState, useEffect } from 'react'
import { publicRequest } from '../util/axiosRequest'


const usePostList = (url: string, isSideData?: boolean) => {
    const [posts, setPosts] = useState<any[]>([])
    // const [total, setTotal] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    useEffect(()=> {
        const getPost = async () => {
            setIsLoading(true)
            setPosts([])
            try {
                const res = await publicRequest.get(url)
                const data = isSideData ? res.data : res.data.posts
                setPosts(data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        getPost()
    },[url])

    return { posts,  isLoading, setPosts, setIsLoading }  
    
}

export default usePostList