import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p className="footer-text">
            &copy; {new Date().getFullYear()}
        </p>
    </footer>
  )
}

export default Footer