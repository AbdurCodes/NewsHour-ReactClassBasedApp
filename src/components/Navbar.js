import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Navbar extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <i class="fa-solid fa-newspaper">NewsHour</i>
               
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>

              <div className="btn-group mx-5">
                <button type="button" className="btn btn-warning">Select Country</button>
                <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  {/* <span className="visually-hidden">Toggle Dropdown</span> */}
                </button>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/ae">ae - United Arab Emirates</Link></li>
                <li><Link className="dropdown-item" to="/ar">ar - Argentina</Link></li>
                <li><Link className="dropdown-item" to="/at">at - Austria</Link></li>
                <li><Link className="dropdown-item" to="/au">au - Australia</Link></li>
                <li><Link className="dropdown-item" to="/be">be - Belgium</Link></li>
                <li><Link className="dropdown-item" to="/bg">bg - Bulgaria</Link></li>
                <li><Link className="dropdown-item" to="/br">br - Brazil</Link></li>
                <li><Link className="dropdown-item" to="/ca">ca - Canada</Link></li>
                <li><Link className="dropdown-item" to="/ch">ch - Switzerland</Link></li>
                <li><Link className="dropdown-item" to="/cn">cn - China</Link></li>
                <li><Link className="dropdown-item" to="/co">co - Colombia</Link></li>
                <li><Link className="dropdown-item" to="/cu">cu - Cuba</Link></li>
                <li><Link className="dropdown-item" to="/cz">cz - Czech Republic</Link></li>
                <li><Link className="dropdown-item" to="/de">de - Germany</Link></li>
                <li><Link className="dropdown-item" to="/eg">eg - Egypt</Link></li>
                <li><Link className="dropdown-item" to="/fr">fr - France</Link></li>
                <li><Link className="dropdown-item" to="/gb">gb - United Kingdom</Link></li>
                <li><Link className="dropdown-item" to="/gr">gr - Greece</Link></li>
                <li><Link className="dropdown-item" to="/hk">hk - Hong Kong</Link></li>
                <li><Link className="dropdown-item" to="/hu">hu - Hungary</Link></li>
                <li><Link className="dropdown-item" to="/id">id - Indonesia</Link></li>
                <li><Link className="dropdown-item" to="/ie">ie - Ireland</Link></li>
                <li><Link className="dropdown-item" to="/il">il - Israel</Link></li>
                <li><Link className="dropdown-item" to="/in">in - India</Link></li>
                <li><Link className="dropdown-item" to="/it">it - Italy</Link></li>
                <li><Link className="dropdown-item" to="/jp">jp - Japan</Link></li>
                <li><Link className="dropdown-item" to="/kr">kr - Republic of Korea</Link></li>
                <li><Link className="dropdown-item" to="/lt">lt - Lithuania</Link></li>
                <li><Link className="dropdown-item" to="/lv">lv - Latvia</Link></li>
                <li><Link className="dropdown-item" to="/ma">ma - Morocco</Link></li>
                <li><Link className="dropdown-item" to="/mx">mx - Mexico</Link></li>
                <li><Link className="dropdown-item" to="/my">my - Malaysia</Link></li>
                <li><Link className="dropdown-item" to="/ng">ng - Nigeria</Link></li>
                <li><Link className="dropdown-item" to="/nl">nl - Netherlands</Link></li>
                <li><Link className="dropdown-item" to="/no">no - Norway</Link></li>
                <li><Link className="dropdown-item" to="/nz">nz - New Zealand</Link></li>
                <li><Link className="dropdown-item" to="/ph">ph - Philippines</Link></li>
                <li><Link className="dropdown-item" to="/pl">pl - Poland</Link></li>
                <li><Link className="dropdown-item" to="/pt">pt - Portugal</Link></li>
                <li><Link className="dropdown-item" to="/ro">ro - Romania</Link></li>
                <li><Link className="dropdown-item" to="/rs">rs - Serbia</Link></li>
                <li><Link className="dropdown-item" to="/ru">ru - Russia</Link></li>
                <li><Link className="dropdown-item" to="/sa">sa - Saudi Arabia</Link></li>
                <li><Link className="dropdown-item" to="/se">se - Sweden</Link></li>
                <li><Link className="dropdown-item" to="/sg">sg - Singapore</Link></li>
                <li><Link className="dropdown-item" to="/si">si - Slovenia</Link></li>
                <li><Link className="dropdown-item" to="/sk">sk - Slovakia</Link></li>
                <li><Link className="dropdown-item" to="/th">th - Thailand</Link></li>
                <li><Link className="dropdown-item" to="/tr">tr - Turkey</Link></li>
                <li><Link className="dropdown-item" to="/tw">tw - Taiwan</Link></li>
                <li><Link className="dropdown-item" to="/ua">ua - Ukraine</Link></li>
                <li><Link className="dropdown-item" to="/us">us - United States</Link></li>
                <li><Link className="dropdown-item" to="/ve">ve - Venezuela</Link></li>
                <li><Link className="dropdown-item" to="/za">za - South Africa</Link></li>
                </ul>
              </div>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
