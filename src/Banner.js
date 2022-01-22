function Banner() {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1 className="jumbotron-heading my-auto mr-2 title">Arapahoe County CAPS</h1>
                    <img className="logo" src="aclogo.png" alt="Arapahoe County Logo" />
                </div>

                <p className="lead text-muted mb-2">Find out if a career in social work is right for you!</p>
                <div className="justify-content-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YWYG-Yj9dhE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="row align-items-start">
                    <div className="col d-flex text-left">
                        <div className="card-body">
                            <h5 className="card-title text-center">Perks</h5>
                            <hr />
                            <ul>
                                <li>Hybrid work model</li>
                                <li><a href="https://www.socialworkers.org/Advocacy/Policy-Issues/Student-Loan-Forgiveness" className="card-link">Tuition Reimbursement</a></li>
                                <li>Professional Development</li>
                                <li>Work-Life Balance</li>
                                <li>15 vacation days annually (120 hours accrued per pay period)</li>
                                <li>12 sick days annually (96 hours)</li>
                                <li>12 paid holidays + 2 additional floating holidays (after 6 months of service)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col d-flex text-left">
                        <div className="card-body">
                            <h5 className="card-title text-center">Eligible Degrees</h5>
                            <hr />
                            <ul>
                                <li>Psychology</li>
                                <li>Sociology</li>
                                <li>Social Work</li>
                                <li>Counseling</li>
                                <li>Criminal Justice</li>
                                <li>Foreign Language Courses</li>
                                <li>History*</li>
                                <li>Anthropology Courses*</li>
                                <div className="text-muted">* Must be relevant to cultural development</div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Banner;