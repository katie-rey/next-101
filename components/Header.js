import headerStyles from '../styles/Header.module.css'

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>Keep up to date with the latest WebDev news</p>

      {/* example of inline styling  */}
      {/* <style jsx>
        {`
      .title {
        color: red
      `}
      </style> */}
    </div>
  )
}

export default Header
