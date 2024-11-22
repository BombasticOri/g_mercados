import { Link } from "react-router-dom";
import escudo from '../../assets/images/escudo.png';
import Button from '@mui/material/Button'
import { MdOutlineMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";


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
                            <Button className="rounded-circle me-3"><MdOutlineMenuOpen/></Button>
                            <SearchBox/>
                        </div>
                        {/*Barra Busqueda*/}
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
                            <Button className="rounded-circle me-3"><MdOutlineLightMode/></Button>
                            <Button className="rounded-circle me-3"><MdOutlineMail/></Button>
                            <Button className="rounded-circle me-3"><FaRegBell/></Button>
                            <div className="MyCuenta d-flex align-items-center">
                                <div className="imagenUsuario">
                                    <span className="rounded-circle">
                                        <img src="https://images.vexels.com/media/users/3/138564/isolated/preview/25896912e377be157ffd277bcac3a910-silueta-de-perfil-de-hombre-guapo.png"/>
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>   
                </div>
            </header>
        </>
    )
}

export default Header;