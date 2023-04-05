import { useSelector, useDispatch } from 'react-redux'
import { clearToken, setToken } from '../slices/auth.slice'
import { RootState } from '../store'

export default function useAuthState() {
    
    const dispatch = useDispatch()

    return {
        auth: useSelector((state: RootState) => state.auth),
        setToken: (token: string) => dispatch(setToken(token)),
        clearToken: () => dispatch(clearToken())
    }
    
}