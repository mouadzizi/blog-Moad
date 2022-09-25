import './TopBar.css'

export default function TopBar() {
  return (
    <div className='TopBar'>

      <div className='TopLeft'>
      <i class="topIcon fa-brands fa-linkedin"></i>
      <i class="topIcon fa-brands fa-instagram"></i>
      <i class="topIcon fa-brands fa-facebook"></i>
      </div>
      <div className='TopCenter'>
        <ul className='TopCenterList'>
        <li className='TopCenterItem'> Home</li>
        <li className='TopCenterItem'> About</li>
        <li className='TopCenterItem'> Contact</li>
        </ul>

      </div>
      <div className='TopRight'>
      <i class="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}
