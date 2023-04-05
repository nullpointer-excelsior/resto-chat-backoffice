import { useSelector, useDispatch } from 'react-redux'
import { AccountState, setAccount } from '../slices/account.slice'
import { RootState } from '../store'

export default function useAccountState() {
    
    const dispatch = useDispatch()

    return {
        account: useSelector((state: RootState) => state.account),
        setAccount: (account: AccountState) => dispatch(setAccount(account))
    }
    
}