export default function Card(){
    return (
        <div className="d-flex container w-100 justify-content-center">
            <div class="card text-white bg-primary m-2" style={{maxWidth: "18rem"}}>
                <div class="card-header">Card 01</div>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card text-white bg-danger m-2" style={{maxWidth: "18rem"}}>
                <div class="card-header">Card 02</div>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card text-white bg-success m-2" style={{maxWidth: "18rem"}}>
                <div class="card-header">Card 02</div>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        
    );
}