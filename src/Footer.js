function Footer() {
    return (
        <div className="row py-3 bg-dark text-light">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                <img src="pic.jpg" alt="Rabia Suleiman" className="footer-pic img-thumbnail float-md-left img-fluid rounded mx-auto align-self-sm-center"></img>
            </div>
            <div className="align-self-center col-md-6 col-lg-8 pl-lg-3">
                <p>For questions and concerns please contact Rabia Suleiman</p>
                <p>(123)456-7890</p>
                <p>rabia.suleiman@arapahoe.gov</p>
                
            </div>
        </div>
    );
}

export default Footer;