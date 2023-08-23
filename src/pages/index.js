import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {useState, useEffect} from "react";



export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Denys Koval Portfolio</title>
            </Head>
            <main className={darkMode ? "bg-gray-900 px-10 md:px-20 lg:px-40" : "bg-white px-10 md:px-20 lg:px-40"}>
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="text-xl font-semibold">Personal Website</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                                                     className="cursor-pointer text-2xl"/>
                            </li>
                            <li>
                                {/*<a className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8 no-underline"*/}
                                {/*   href="/My%20Resume.pdf" download="MyResume.pdf">Resume</a>*/}
                                <a className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8 no-underline"
                                   href="#Portfolio">Portfolio</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-5">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl max-w-lg mx-auto dark:text-teal-400">Denys
                            Koval</h2>
                        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Full Stack developer.</h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200">
                            As a driven individual in the field of web development, I possess a solid background in
                            various frameworks and databases. I come with significant expertise in working on group
                            projects and a deep enthusiasm for ongoing education.</p>
                    </div>
                    <div className={'text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'}>
                        <a href="https://twitter.com/DenkoTwit"><img className="w-10 h-10 icon-white" src="/twitter.png"
                                                                     alt="Twitter"/></a>
                        <a href="https://www.linkedin.com/in/денис-undefined-32b534261"><img
                            className="w-10 h-10 icon-white" src="/linkedin.png" alt="LinkedIn"/></a>
                        <a href="https://www.instagram.com/denys_kowal/"><img className="w-10 h-10 icon-white"
                                                                              src="/instagram.png" alt="Instagram"/></a>
                    </div>
                    <div
                        className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
                        <img className="absolute top-0 left-0 w-full h-full object-cover" src="/avatarTest.png"
                             alt="Profile"/>
                    </div>
                </section>

                <section className="mt-20">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white text-center">About my education, courses I took, and previous experience</h3>
                        <br/>
                        {/*<p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200 text-2xl">Courses:</p>*/}
                        <div className="list-group">
                            <a href="#"
                                className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Algorithms and data structures</h5>
                                <small className="text-muted"><span className="text-teal-600">1.5 years ago</span></small>
                            </div>
                            <p className="mb-1">CS50, Harvard University's introduction to the intellectual enterprises of computer science and the art of programming.</p>
                        </a>
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Python</h5>
                                    <small className="text-muted "><span className="text-teal-600">1 year ago</span></small>
                                </div>
                                <p className="mb-1">CS50's Introduction to Programming with Python (CS50P) 2022 .</p>
                            </a>

                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1 ">Python for Data Science</h5>
                                    <small className="text-muted"><span className="text-teal-600">December 2022 - January 2023</span></small>
                                </div>
                                <p className="mb-1">Machine Learning A-Z™: AI, Python & R</p>
                            </a>
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">SQL and Databases</h5>
                                    <small className="text-muted"><span className="text-teal-600">January 2023 - February 2023</span></small>
                                </div>
                                <p className="mb-1">The Complete SQL Bootcamp: Go from Zero to Hero</p>
                            </a>
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Frontend and Full Stack technologies</h5>
                                    <small className="text-muted"><span className="text-teal-600">March 2023 - June 2023</span></small>
                                </div>
                                <p className="mb-1">The Complete 2023 Web Development Bootcamp. HTML, CSS, Javascript, Node, React, MongoDB</p>
                            </a>
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Django</h5>
                                    <small className="text-muted"><span className="text-teal-600">June 2023 - Present</span></small>
                                </div>
                                <p className="mb-1">Explored the documentation, followed some little courses, read the book Django for APIs: Build web APIs with Python & Django and keep getting more advanced by doing personal projects.</p>
                            </a>
                        </div>
                        <br/>
                            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                                I also finished a year at university, where I studied how to solve <span
                                className="text-teal-500">algorithmic problems</span>,
                                learned about the rules of writing clean code using <span
                                className="text-teal-500">OOP principles</span> and <span
                                className="text-teal-500">design patterns</span>.
                                I have mastered <span
                                className="text-teal-500">Linear Algebra</span>, <span
                                className="text-teal-500">Mathematical Analysis</span>, <span
                                className="text-teal-500">Discrete Mathematics</span>, and <span
                                className="text-teal-500">Probability Theory</span>. I also understand how a computer works thanks to the subject <span className="text-teal-500">Computer Architecture</span> and Embedded Systems Programming.
                            </p>
                    </div>
                </section>

                {/*// Section 2 //*/}
                <section className="mt-20">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                            As a full-stack developer, I offer versatile
                            web development services using <span
                            className="text-teal-500">React</span> and <span className="text-teal-500">Django</span>. I
                            create responsive user interfaces with
                            HTML, CSS, and JavaScript while ensuring secure data storage through <span
                            className="text-teal-500">PostgreSQL</span> and <span
                            className="text-teal-500">MongoDB</span>.
                            My profound knowledge of algorithms, data structures, and OOP aids in delivering efficient
                            software solutions.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                            I offer from a wide range of services, including these:
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image className="mx-auto" src="/design.png" width={100} height={100}/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Frontend Development</h3>
                            <p className="py-2">
                                Responsive Webpages.
                            </p>
                            <h4 className="py-4 text-teal-600">What I can do</h4>
                            <p className="text-gray-800 py-1">Leveraging my skills in HTML, CSS, and JavaScript along
                                with React, I craft visually appealing and highly responsive user interfaces that
                                prioritize usability and user experience. My attention to detail and understanding of
                                design principles help me deliver intuitive and engaging web experiences to the end
                                users.</p>

                        </div>


                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image className="mx-auto" src="/code.png" width={100} height={100}/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Backend Development</h3>
                            <p className="py-2">
                                API Development and Integration.
                            </p>
                            <h4 className="py-4 text-teal-600">What I can do</h4>
                            <p className="text-gray-800 py-1">Employing Django REST Framework, I design and implement
                                custom APIs, allowing seamless integration with various web services and applications to
                                extend functionality and improve user experience.</p>

                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image className="mx-auto" src="/consulting.png" width={100} height={100}/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Full Stack Development</h3>
                            <p className="py-2">
                                Web Application Development.
                            </p>
                            <h4 className="py-4 text-teal-600">What I can do</h4>
                            <p className="text-gray-800 py-1">Combining my knowledge of front-end technologies like
                                HTML, CSS, and JavaScript with back-end expertise in Django, I offer end-to-end web
                                development solutions that cater to a wide range of project requirements.</p>

                        </div>
                    </div>
                </section>

                {/*//Section 3//*/}
                <section id="Portfolio">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                            As a full-stack developer, I've had the chance to work on a <span
                            className="text-teal-500">variety of projects</span>, applying my
                            knowledge in <span
                            className="text-teal-500">frontend</span> and <span
                            className="text-teal-500">backend</span> technologies to develop interactive and dynamic web
                            applications. Below are a few examples from my <span
                            className="text-teal-500">portfolio</span>.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 rounded-lg">
                            <div className="card" width="100%">
                                <img className="card-img-top" src="/TinDog.png" alt="Card image cap" height="200px"/>
                                <div className="card-body">
                                    <h5 className="card-title">My first static website</h5>
                                    <p className="card-text">Technologies used: HTML, CSS, BOOTSTRAP</p>
                                    <br/>
                                    <br/>
                                    <a href="https://tindog-3qo4.onrender.com" className="btn btn-primary">Visit a website</a>
                                </div>
                            </div>
                            {/*<a href="https://tindog-3qo4.onrender.com">*/}
                            {/*    <img src="/TinDog.png" alt="" width="100%" height="100%"*/}
                            {/*         className="rounded-lg object-cover"/>*/}
                            {/*</a>*/}
                        </div>
                        <div className="basis-1/3 flex-1 rounded-lg">
                            <div className="card" width="100%">
                                <img className="card-img-top" src="/quenic.png" alt="Card image cap" height="200px"/>
                                <div className="card-body">
                                    <h5 className="card-title">Project for university</h5>
                                    <p className="card-text">Technologies used: GIT, REACT, DJANGO, POSTGRES, RESTAPI, HTML, CSS, BOOTSTRAP, AWS AMPLIFY, DOCKER, AWS EC2, SWAGGER, AWS ROUTE 53</p>
                                    <a href="https://www.quenic.space" className="btn btn-primary">Visit a website</a>
                                </div>
                            </div>
                            {/*<a href="https://www.quenic.space">*/}
                            {/*    <img src="/quenic.png" alt="" width="100%" height="100%"*/}
                            {/*         className="rounded-lg object-cover"/>*/}
                            {/*</a>*/}
                        </div>

                        {/*<p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">*/}
                        {/*    */}
                        {/*</p>*/}

                        <div className="basis-1/3 flex-1 rounded-lg">
                            <div className="card" width="100%">
                                {/*<img className="card-img-top" src="/Restaurant.png" alt="Card image cap"/>*/}
                                <video className="card-img-top" width="100%" controls>
                                    <source src="/Restaurant_Trailer.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="card-body">
                                    <h5 className="card-title">Restaurant marketplace</h5>
                                    <p className="card-text">Technologies used: PYTHON, DJANGO, HTML, CSS, JS, EXPRESS JS, POSTGRES, GOOGLE MAPS API, PAYPAL API, GDAL</p>
                                    <div className="col-lg-4 col-md-4 inline-block">
                                    <p className="card-text">✔️Purchase & Implement template<br/>
                                        ✔️PostgreSQL Database Configuration<br/>
                                        ✔️Custom user model, Media files & signals<br/>
                                        ✔️User Registration and Django messages<br/>
                                        ✔️Vendor registration and authentication<br/>
                                        ✔️Token verification & Email configuration<br/>
                                        ✔️Vendor approval by admin, dashboards<br/>
                                        ✔️Make restaurant profile form & custom validators<br/>
                                        <br/>
                                        <br/>
                                        </p></div>
                                    <div className="col-lg-4 col-md-4 inline-block">
                                    <p className="card-text">
                                        ✔️Dynamic Business hours module with AJAX<br/>
                                        ✔️Menu Builder - Category CRUD<br/>
                                        ✔️Menu Builder - Food Items CRUD<br/>
                                        ✔️Marketplcae implementation<br/>
                                        ✔️Cart functionalities with AJAX request<br/>
                                        ✔️Basic & Smart search functionalities<br/>
                                        ✔️Location based search nearby<br/>
                                        ✔️Get user's current location & show nearby restaurant on homepage<br/>
                                        <br/>
                                        <br/>
                                        </p></div>
                                        <div className="col-lg-4 col-md-4 inline-block">
                                    <p className="card-text">
                                        ✔️Dynamic Tax Module<br/>
                                        ✔️Orders model and checkout page<br/>
                                        ✔️Place order and generate order number<br/>
                                        ✔️Implement PayPal payment gateway<br/>
                                        ✔️After order functionalities<br/>
                                        ✔️ManyToMany Relationships<br/>
                                        ✔️Integrate Email Templates<br/>
                                        ✔️Make the site mobile-friendly (responsive)<br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </p></div>
                                    <a className="btn btn-primary">This website isn't deployed yet</a>
                                </div>
                            </div>
                            {/*<a href="#">*/}
                            {/*    <img src="/Restaurant.png" alt="" width="100%" height="100%"*/}
                            {/*         className="rounded-lg object-cover"/>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}
