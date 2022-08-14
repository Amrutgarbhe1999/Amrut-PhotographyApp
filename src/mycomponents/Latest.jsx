import React from 'react'

function Latest() {
  return (
    <>
        <div className="Latest">

            <div className="Latest_Heading">
                <h1>Our latest Work</h1>
                <p>Here there is our latest work where we push ourself for the new challanges. We are here to  be with you .  <br /> so Lets envolve in this see our latest works</p>
            </div>
            <div className="Latest_images">
                <div className="rimage">
                    <img src="https://cdn.pixabay.com/photo/2019/02/09/18/41/camera-3985711_960_720.jpg" alt="" />
                </div>
                <div className="limage">
                    <img src="https://cdn.pixabay.com/photo/2014/11/03/10/44/camera-514992_960_720.jpg" alt="" />
                    <div className="twoimage">
                        <img src="https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_960_720.jpg" alt="" />
                        <img  style={{marginLeft: "4rem"}}src="https://cdn.pixabay.com/photo/2018/01/28/21/14/lens-3114729_960_720.jpg" alt="" />
                    </div>
                </div>
            </div>

            <a href="#">See More</a>

        </div>
    
    
    </>
  )
}

export default Latest