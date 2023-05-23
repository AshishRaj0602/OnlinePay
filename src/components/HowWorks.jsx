import React from 'react'
import workApi from "../API/WorkApi"
const HowWorks = () => {
    // const [workData, setworkData] = React.useState(workApi)
    // console.log({ workData});
    return (
        <>
            <section className="container work-container">
                <h1 className="main-heading text-center">India’s most widely-used checkout, now on your website & app</h1>
                <div className="row">
                    {
                        workApi.map((ele,index) => {
                            return (
                                <div key={index}>
                                    <div className="col-12 col-lg-4 mx-auto work-container-subdiv" key={index*0.1}>
                                        <i className={ele.logo} id="fontawesome-work"></i>
                                        <h2 className="sub-heading">{ele.title}</h2>
                                        <p className="main-hero-para" id="work-container-heading">{ele.info}</p>
                                        
                                    </div>
                       
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default HowWorks