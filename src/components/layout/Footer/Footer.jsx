
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
return (
    <>
        <MDBFooter  className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
            <span>Conoce Nuestras Redes!</span>
            </div>
            
        <div>
            <Link href='' className='me-4 text-reset'>
                <FacebookIcon  />
            </Link>
            <Link href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
            </Link>
            <Link href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
            </Link>
            <Link href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
            </Link>
            </div>
        </section>

        <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                    <img src="https://res.cloudinary.com/dmnvvzz6y/image/upload/v1689192651/icons8-mate-50_k6bigh.png" icon="gem" className="me-3" />
                    Matelandia
                </h6>
                <p>
                    Los Mejores Productos para que disfrutes de un buen mate con amigos y familia!!
                </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
                <p>
                    <Link  style={{ textDecoration: 'none' , color: 'black' }}  className='text-reset' to="/category/mates">
                    Mates
                    </Link>
                </p>
                <p>
                    <Link  style={{ textDecoration: 'none' , color: 'black' }}  className='text-reset' to="/category/yerbas">
                    Yerbas
                    </Link>
                </p>
                <p>
                    <Link style={{ textDecoration: 'none' , color: 'black' }}  className='text-reset' to="/category/bombillas">
                    Bombillas
                    </Link>
                </p>

                <p>
                    <Link style={{ textDecoration: 'none' , color: 'black' }}   className='text-reset' to="/category/termos">
                    Termos
                    </Link>
                </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                <p>
                    <MDBIcon icon="home" className="me-2" />
                    ¡Barcelona, España 08014, Sants
                </p>
                <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    info@Matelandia.com
                </p>
                <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center p-4' >
            © 2023 Copyright:
        </div>
        </MDBFooter>
        </>
);
}


export default Footer