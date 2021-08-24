import React from "react";
import heart from "../../resources/heart.png"
import hands from "../../resources/hands.png"


export default function ConatctUs() {
	return (
		<div>
			<div className="row custom-misc-2-con-chart" style={{position:"relative"}}>
				<div className="col-6 contact">
					<h1>
						<strong>CONTACT US </strong>
					</h1>

					<div style={{ margin: "15px auto 15px 0" }} className="line2"></div>

					<form action="">
						<div className="row p-2">
							<div className="col-6">
                                <span className="usericon">
                                <i class="fas fa-user"></i>
                                <input
									type="text"
									placeholder="Full name"
									
								/>
                                </span>
							
							</div>
							<div className="col-6">
								<span className="form-icon">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Email"  />
                                {/* <input type="email" placeholder="Email" value="gg@mm.com" /> */}
						
                                </span>
                                
                                	</div>

								</div>
                                <div className="row p-2">
                                <div className="col-6">
                                    <span className="address">
                                    <i class="fas fa-home"></i>
                                    <input type="text" placeholder="Address" /> 
                                </span>

							</div>
							<div className="col-6">
                                <span className="tel">
                                <i class="fas fa-phone-alt"></i>  
                                <input type="tel" name="" id="" placeholder="Phone" />
                                </span>
								
							</div>
					
                                </div>

						<div className="row p-2">
							<div className="col-12">
								<textarea
									name=""
									id=""
									style={{ width: "94%" }}
									placeholder="Details"
								>
									
								</textarea>
							</div>
							<div className="col-12">
                                <br/>
                            <button className="btn btn-outline-dark" style={{borderRadius:"30px"}} > SUBMIT</button>
							</div>
			
							{/* 
                    <input type="button" value="hello" />
                        <input type="checkbox" name="" id="" />
                        <input type="color" name="" id="" />
                        <input type="date" name="" id="" />
                        <input type="file" name="" id="" />
                        <input type="password" name="" id="" />
                        <input type="range" name="" id=""  />
                        
                        <input type="radio" name="name" id="" />
                        <input type="radio" name="name" id="" />
                        <input type="radio" name="name" id="" />
                        <input type="reset" value="deafult" />
                         */}
						</div>

						{/* <label htmlFor="id">name</label> <input type="text" id="id" /> */}
					</form>
				</div>
                <img src={heart} alt="" className="transaprent-heart" />
                <img src={hands} alt="" className="transaprent-hands" />
            
            </div>
		</div>
	);
}