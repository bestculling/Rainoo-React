export interface User {
    id: number,
    username: string
}

export interface AuthState {
    isAuthenticated: boolean,
    user: User | null
}

export interface AuthAction {
    type: string,
    payload?: User
}

export interface AuthProviderProps {
    children: React.ReactNode
}

export interface AuthContextType {
    state: AuthState,
    dispatch: React.Dispatch<AuthAction>
}