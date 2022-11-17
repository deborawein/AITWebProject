// import { Navigation } from "./Navigation"
// import { Link } from "react-router-dom"

// export function Header(props) {
//     return (
//         <header className="navbar bg-light navbar-expand-lg">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">{ props.title }</Link>
//                 <div className="collapse navbar-collapse">
//                     <Navigation items={ props.headernav } />
//                 </div>
//             </div>
//         </header>
//     )
// }

import { LeftNav } from "./LeftNav"
import { SearchBar } from "./SearchBar"
import { RightNav } from "./RightNav"
import {Link} from 'react-router-dom'

export function Header(props) {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                {/* Navbar brand */}
                <Link className="navbar-brand fw-bold" to="/">BRAND</Link>

                {/* Toggle button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left nav */}
                    <LeftNav leftItems={props.leftnav}/>

                    {/* Search form */}
                    <SearchBar />
                    
                    {/* right nav */}
                    <RightNav rightItems={props.rightnav} />

                </div>
            </div >
        </header >

    )
}