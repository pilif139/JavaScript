import './styles/Header.css'
import SocialMedia from './SocialMedia'

export default function Header() {
  return (
    <div className="header-container">
        <h1 className='underline-ani'>Filip Kasperski</h1>
        <h2 className='underline-ani'>programmer</h2>
        <SocialMedia/>
    </div>
  )
}
