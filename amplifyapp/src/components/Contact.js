export default function Contact(){
    return (
        <div className="w-full flex justify-content-center">
            <h1>Contact Form</h1>
            <div className="flex justify-content-center text-start">
                <form className="w-100 align-center" style={{paddingLeft: "20%", paddingRight: "20%"}}>
                    <div class="form-group mb-3">
                        <label for="first-name">First Name</label>
                        <input type="text" class="form-control" 
                            id="first-name" placeholder="Enter your first name"/>
                    </div>
                    <div class="form-group mb-3">
                        <label for="last-name">Last Name</label>
                        <input type="text" class="form-control" 
                            id="last-name" placeholder="Enter your last name"/>
                    </div>
                    <div class="form-group mb-3">
                        <label for="phone-number">Phone Number</label>
                        <input type="tel" class="form-control" 
                            id="phone-number" placeholder="Enter your phone number"/>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" 
                            id="email" placeholder="Enter your email address"/>
                    </div>
                    <div class="form-group mb-3">
                        <label for="country">Country</label>
                        <input type="text" class="form-control" 
                            id="country" placeholder="Enter your country"/>
                    </div>
                    <div class="form-group mb-3">
                        <label for="message">Message</label>
                        <input type="text" class="form-control" 
                            id="message" placeholder="Enter your message"/>
                    </div>
                </form>
            </div>
        </div>
    );
}