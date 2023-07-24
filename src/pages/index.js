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
            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="text-xl font-semibold">Personal Website</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                                                     className="cursor-pointer text-2xl"/>
                            </li>
                            <li>
                                <a className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
                                   href="/resume.pdf" download="MyResume.pdf">Resume</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-5">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl max-w-lg mx-auto dark:text-teal-400">Denys
                            Koval</h2>
                        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Full Stack developer.</h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200">As a highly
                            motivated
                            Web
                            Developer with a strong foundation in React, Django, MongoDB, and PostgreSQL, I bring
                            extensive experience in collaborative project development and a passion for continuous
                            learning.</p>
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
                            My basic knowledge of algorithms, data structures, and OOP aids in delivering efficient
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
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                            As a full-stack developer, I've had the chance to work on a <span
                            className="text-teal-500">variety of projects</span>, applying my
                            knowledge in <span
                            className="text-teal-500">frontend</span> and <span
                            className="text-teal-500">backend</span> technologies to develop interactive and dynamic web
                            applications. Below are a few examples from my <span
                            className="text-teal-500">portfolio</span> that demonstrate my range of
                            experience and the quality of my work.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 border-2 rounded-lg">
                            <a href="https://www.quenic.space">
                                <img src="/quenic.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                            </a>
                        </div>
                        <div className="basis-1/3 flex-1 border-2 rounded-lg">
                            <a href="https://tindog-3qo4.onrender.com">
                                <img src="/TinDog.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                            </a>
                        </div>
                        <div className="basis-1/3 flex-1 border-2 rounded-lg">
                            <a href="#">
                                <img src="/Restaurant.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                            </a>
                        </div>
                        {/*<div className="basis-1/3 flex-1">*/}
                        {/*    <img src="/web4.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>*/}
                        {/*</div>*/}
                        {/*<div className="basis-1/3 flex-1">*/}
                        {/*    <img src="/web5.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>*/}
                        {/*</div>*/}
                        {/*<div className="basis-1/3 flex-1">*/}
                        {/*    <img src="/web6.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </main>
        </div>
    )
}
