interface LoginModalContextType {
    showModal: (type: string) => void,
    closeModal: () => void
}

interface TrendingType{
    author: string,
    title: string,
    publish: Date,
}


interface UserType {
    img: string,
    id: string,
    username: string
}

interface UserContextType {
    user: UserType | null,
    isLoading: boolean,
    error: boolean,
}

