import React from 'react'
import Clients from './Clients'
import Contactus from './Contactus'
import Footer from './Footer'
import Different from './Different'
import Portfolio from './Portfolio'
import Latest from './Latest'
import Fromclients from './Formclients'

function Home() {
    return (
        <>

            <div className="nav">
                <div className="logo">
                    <h1>Junoon photography</h1>
                </div>
                <div className="lists">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Blogs</a>
                </div>
            </div>

            <div className=" main_image">
                <div className="right">
                    <div className="imageContent">
                        <p>Lorem ipsum dolor sit.</p>
                        <h1>Welome <br /> to   <span> Junoon <br /> Phography </span> </h1>
                        <p style={{ marginTop: "2rem" }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolorum fuga inventore rerum doloribus quasi nam, magni eos magnam deserunt nihil qui </p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="left">
                    <img src="https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_960_720.jpg" alt="" />
                </div>

            </div>
            <div className="info-heading">
                <p>we are celebrating our new start towards the goal...hurry. lets get together towards the new start</p>
                <p>We are planning to do a great job by keeping ourself infornt of you</p>
                <p> keep supporting us and we will never let you down</p>
            </div>


            <div className="more_things">
                <div className="things">
                    <div className="thing">
                        <div className="icon">
                            <i class="fa-solid fa-pen-nib"></i>

                        </div>
                        <div className="brief">
                            <h4> Locations</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam quo, earum quod quae suscipit hic modi consectetur eum facere.</p>
                        </div>
                    </div>
                    <div className="thing">
                        <div className="icon">
                            <i class="fa-solid fa-pen-nib"></i>


                        </div>
                        <div className="brief">
                            <h4> Night shoots</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam quo, earum quod quae suscipit hic modi consectetur eum facere.</p>
                        </div>
                    </div>
                    <div className="thing">
                        <div className="icon">
                            <i class="fa-solid fa-pen-nib"></i>


                        </div>
                        <div className="brief">
                            <h4> Destinatioon shoot</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam quo, earum quod quae suscipit hic modi consectetur eum facere.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more_things">
                <div className="things">
                    <div className="thing">
                        <div className="icon">
                            <i class="fa-solid fa-pen-nib"></i>

                        </div>
                        <div className="brief">
                            <h4> Locations</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam quo, earum quod quae suscipit hic modi consectetur eum facere.</p>
                        </div>
                    </div>
                    <div className="thing">
                        <div className="icon">
                            <i class="fa-solid fa-pen-nib"></i>


                        </div>
                        <div className="brief">
                            <h4> Night shoots</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam quo, earum quod quae suscipit hic modi consectetur eum facere.</p>
                        </div>
                    </div>
                    <div className="thing">
                        <div className="icon">
                            <i class="fa-solid fa-pen-nib"></i>


                        </div>
                        <div className="brief">
                            <h4> Destinatioon shoot</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam quo, earum quod quae suscipit hic modi consectetur eum facere.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="work">
                <h1>Our Latest Works</h1>
                <p style={{ marginTop: "2rem" }} >This is our latest work in this field we are so happy

                </p>
                <p>A small steps towards the rular area </p>

                <div className="work_image">
                    <img src="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2019/06/12/02/47/highway-4268179_960_720.jpg" alt="" />
                </div>
            <div className="seemore">
                    <a href="#">See more</a>
            </div>

            </section>

            <Clients/>
            <Different/>
            <Latest/>
            <Fromclients/>
            <Portfolio/>
            <Contactus/>
            <Footer/>
            

        </>
    )
}

export default Home