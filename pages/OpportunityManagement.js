import OpportuntyManagementScreen from '../Components/OpportunityManagement/OpportunityManagementScreen'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setCookie } from 'cookies-next'
import withUser from '../HOC/WithUserhoc'
import { setIsActive } from '../store/isActiveSidebarSlice'

export default withUser (function OpportunityManagement() {
  const dispatch = useDispatch()
  useEffect(() => {
      setCookie('isActive', 'opportunityManage')
      dispatch(setIsActive('opportunityManage'))
  }, []);
  return (
    <>
          <OpportuntyManagementScreen/>
    </>
  )
}
)