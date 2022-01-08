function Worker(props) {
    return (
        <div className="row mb-5 mt-4">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                <img src="pic.jpg" alt={props.name} className="worker-pic float-md-left img-fluid rounded pl-md-4 mx-auto align-self-sm-center"></img>
            </div>
            <div className="align-self-center col-md-6 col-lg-8 pl-lg-3">
                <h1 className="text-center text-sm-left">{props.name}</h1>
                <div className="row">
                    <ul className="col">
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                    </ul>
                    <ul className="col">
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                    </ul>
                </div>
            <p>For more information click <a href="#">here</a></p>
            </div>
        </div>
    );
}

export default Worker;