import React from 'react'
import Card2 from "./card2" ;

export default function card1() {
    var array1=[
        {
            src: "https://campdiaries.org/wp-content/uploads/2020/07/homepage-slideshow-3-300x300.jpg",           
            title:"our journey",
            desc:"From that point there was no seeing back. Within just 6 months, we impacted around 3000 kids and had a team of 1500 volunteers. Camp Diaries is lucky to have a team of passionate volunteers willing to bring a change in this society. At Camp Diaries we have always believed, “Together We Can”  and yes, I am sure with our sustained efforts, we will build a society where every child gets to do what he/she wants to and leads a life full of passion and confidence. ",
            val:50
        },
        {
            src: "https://www.thehindu.com/society/uaof62/article29602965.ece/ALTERNATES/LANDSCAPE_615/hy03-selfdefense-campdiaries2",            
            title:"what we do",
            desc:"Identify and nurture hidden talents and interests of children, and makes them independent learners to pursue these passions on their own. We do this by conducting camps at Government and low-income schools to teach 4 extra-curricular and 4 co-curricular activities.",
            val:18
        },
        {
            src: "https://www.thehindu.com/society/fijke1/article29602971.ece/alternates/FREE_435/hy03beatboxing-campdiaries",
            title:"our impact",
            desc:"Our biggest achievement to date is actually a happy accident. We have trained and created thousands of independent learners to date and all of them are like gems to us but, our first batch of students has a special place in our heart. ",
            val:90
        }
    ]
    return (
        <div>
            <div className="row">
              <div classname="col-12 card-padding">

                <div className="d-flex justify-content-between">

                {array1.map(data=>{
                    console.log(data)
                                return(
                                <Card2 src={data.src} title={data.title} desc={data.desc} val={data.val} />
                                )
                            })
                        }

                </div>

              </div>
            </div>
        </div>
    )
}
