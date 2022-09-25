import './Header.css'
import cover from '../../Images/cover2.jpg'
export default function Header() {
  return (
    <div className='header'>
        
        <div className='titleHeader'>
        <span className='title2'>Moad Blog ReactJS</span>
        </div>
        <img
            className='headerImage'
            src={cover}
            alt='cover'
        />
    </div>
  )
}
