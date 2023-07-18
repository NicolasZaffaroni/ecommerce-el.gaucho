
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom';

const Footer = () => {
return (
    <>
        <MDBFooter  className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
            <span>Conoce Nuestras Redes!</span>
            </div>
            
        <div>
            <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
            </a>
            </div>
        </section>

        <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Matelandia
                </h6>
                <p>
                    Los Mejores Productos para que disfrutes de un buen mate con amigos y familia!!
                </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
                <p>
                    <a href='#!' className='text-reset'>
                    Mates
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Yerbas
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Bombillas
                    </a>
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

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
        </div>
        </MDBFooter>
        </>
);
}


export default Footer