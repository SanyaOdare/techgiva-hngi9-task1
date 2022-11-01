import { zuriLogo, ingressiveLogo } from "../utils/constants";

function Footer() {
  return (
    <div className='main-footer'>
      <img 
        src={zuriLogo} 
        alt='zuri-logo' 
        style={{ width: '9rem' }} 
      />
      <p>HNG Internship 9 Frontend Task</p>
      <img 
        src={ingressiveLogo} 
        alt='ingressive-logo' 
        style={{ width: '5rem' }} 

        />
    </div>
  )
}

export default Footer
