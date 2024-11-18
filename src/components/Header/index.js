import { Link } from "react-router-dom";
import escudo from '../../assets/images/escudo.png';
import Button from '@mui/material/Button'
import { MdOutlineMenuOpen } from "react-icons/md";
/*import { MdOutlineMenu } from "react-icons/md";*/


const Header = () =>{
    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/*Logo y título*/}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center escudo">
                                <img src={escudo} alt="Escudo de la aplicación MDSM"/>
                                <span className="ms-3">MDSM</span>
                            </Link>
                        </div>
                        {/*Botón de menu*/}
                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle"><MdOutlineMenuOpen/></Button>
                        </div>
                    </div>   
                </div>
            </header>
        </>
    )
}

export default Header;