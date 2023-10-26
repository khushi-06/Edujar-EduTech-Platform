import style from './header.module.css';

const Header = () => {
  return (
    <div>
    <main>
        <div className={`${style.logo} logo`}>
            <h1>Edu<span>jar</span></h1>
        </div>

        <div className={`${style.menu} menu`}>
            <ui>Home</ui>
            <ui>Courses</ui>
            <ui>Partners</ui>
            <ui>Universities</ui>
            <ui>Blog</ui>
            <ui>Contact</ui>
        </div>

        <div className={`${style.Button} Button`}>
            <h4>Signup</h4>
        </div>

    </main> 
    </div>
  )
}

export default Header
