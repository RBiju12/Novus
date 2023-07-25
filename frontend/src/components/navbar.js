import {Link} from 'react-router-dom'

function navbar(){
    return(
    <div>
    <li>
      <Link to="/">Novus</Link>
    </li>
    <li>
      <Link to="/markets">Markets</Link>
    </li>
    <li>
      <Link to="/progression">Progression</Link>
    </li>
    <li>
      <Link to="/articles">Articles</Link>
    </li>
    <li>
        <Link to="/contact">Contact Us</Link>
    </li>
  </div>
    )

}

export default navbar;