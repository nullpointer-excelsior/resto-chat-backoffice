import useAuthState from "../../../../state/hooks/useAuthState"

export interface Auth {
    isAuthenticated: boolean
}

export default function useAuth(): Auth {
    const { auth: authState } = useAuthState()
    return {
        isAuthenticated: authState.token? true: false
    }
}