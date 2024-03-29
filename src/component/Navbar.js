import React from 'react'
export default function Navbar(props){
    return (
        <>
  <nav className={`navbar navbar-expand-lg nabar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid text-light" style={{color:props.mode === 'light'?'black':'white'}}>
    <a className="navbar-brand" href="/">About</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav text-light" style={{color:props.mode === 'light'?'black':'white'}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} mx-5`} >
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
        </>
    )
}