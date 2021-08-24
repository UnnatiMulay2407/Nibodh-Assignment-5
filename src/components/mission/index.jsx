import React from 'react'
import mimage from "../../resources/mimage.jpg"
export default function card1() {
    return (
        <div>
            <div className="row card-1-custom-con" >
<div className="col-6 custom-card-img">
<img src={mimage} alt="" className="img-fluid" />

</div>
<div className="col-6" style={{backgroundColor:"#6c02b2"}}>
<div className="row">
<div className="col-12">
    <h1 className="text-white text-center">Our Mission</h1>
</div>
<div className="col-12">
    <p className="text-white text-center">
Mission
<br/>
To bring together creative, enthusiastic, young minds who recognize, nurture and celebrate passion and talent of underprivileged kids.
<br/>
Vission
<br/>
By 2024, 100,000 children will be passionate and independent learners, equipped with skills needed to be successful in their lives.
</p>
</div>
<div className="col-12 text-center">

<button className="btn btn-primary custom-card-btn" >Learn more</button>

</div>

</div>

</div>

            </div>
        </div>
    )
}
