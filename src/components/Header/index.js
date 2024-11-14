import { Link } from "react-router-dom";
import escudo_san from '../../assets/images/escudo_san.png';

const Header = () =>{
    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">
                        {/* logo wraper */}
                        <div className="col-xs-3">
                            <Link to={'/'}><img src={escudo_san} className="escudo_san"></img></Link>
                        </div>
                    </div>   
                </div>
            </header>
        </>
    )
}

export default Header;