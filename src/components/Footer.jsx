import { zuriLogo } from "../utils/constants"
import { ingressiveLogo } from "../utils/constants"

function Footer() {
  return (
    <div className='footer'>
      <img src={zuriLogo} alt='' style={{ width: '9rem' }} />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={ingressiveLogo} alt='' style={{ width: '5rem' }} />
    </div>
  )
}

export default Footer
