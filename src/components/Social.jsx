import { github, slack } from '../utils/constants'

function Social() {
  return (
    <div className='social-container'>
      <img 
        src={github} 
        alt='github-logo'
        style={{ width: '1.5rem' }} 
      />
      <img 
        src={slack} 
        alt='slack-logo'
        style={{ width: '1.5rem' }} 
      />
    </div>
  )
}

export default Social;
