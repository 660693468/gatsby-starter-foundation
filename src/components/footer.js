/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>Parafia Rzymskokatolicka p.w. Świętej Trójcy w Dąbiu Kujawskim</p>
    </div>
  </footer>
)

export default Footer