function Banner() {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1 className="jumbotron-heading my-auto mr-2 title">Arapahoe County CAPS</h1>
                    <img className="logo" src="aclogo.png" alt="Arapahoe County Logo" />
                </div>

                <p className="lead text-muted mb-2">Find out if a career in social work is right for you!</p>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YWYG-Yj9dhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col d-flex justify-content-center text-left my-auto">
                        <ul>
                            <li>Hybrid work model</li>
                            <li><a href="https://www.socialworkers.org/Advocacy/Policy-Issues/Student-Loan-Forgiveness" className="">Tuition Reimbursement</a></li>
                            <li>Professional Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;