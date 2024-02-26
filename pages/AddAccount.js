
import AddAccountScreen from '../Components/AccountScreens/AddAccountScreen'
import { useDispatch } from 'react-redux'
import { setCookie } from 'cookies-next'
import { setIsActive } from '../store/isActiveSidebarSlice'

export default function AddAccount() {
    const dispatch = useDispatch()
    useEffect(() => {
        setCookie('isActive', 'account')
        dispatch(setIsActive('account'))
    }, []);
    return (
        <>
            <AddAccountScreen />   
        </>
    )
}
