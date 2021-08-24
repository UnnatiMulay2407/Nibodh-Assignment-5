import React from "react";

export default function Graph() {

 var array1 = [
    { name: "Research", val: 66 },
    { name: "Fundraising", val: 50 },
    { name: "Education", val: 93 },
    { name: "Health Care", val: 82 },
    { name: "Culture and Community", val:76},
]



	return (
		<div>
			<br/>
			<br/>
			<br/>
			<div className="row custom-graph-2-con-chart">
				<div className="col-5">
					<h1>Our Model</h1>
					
					<ul style={{ color: "#ff6302" }}>
						{["Research", "Fundraising", "Education", "Health Care", "Culture and Community,"].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-primary"
						style={{ backgroundColor: "#ff6302", borderRadius: "30px" }}
					>
						DONATE NOW!
					</button>
				</div>
				<div className="col-7">
					<div className="height-creator">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
