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
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
                            </li>
                            <li>
                                <a className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
                                   href="#">Resume</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-5">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl max-w-lg mx-auto dark:text-teal-400">Denys
                            Koval</h2>
                        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Fullstack developer.</h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200">As a highly motivated Full Stack
                            Web
                            Developer with a strong foundation in React, Django, MongoDB, and PostgreSQL, I bring
                            extensive experience in collaborative project development and a passion for continuous
                            learning.</p>
                    </div>
                    <div className={'text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'}>
                        <img className="w-10 h-10 icon-white" src="/twitter.png" alt="Twitter"/>
                        <img className="w-10 h-10 icon-white" src="/linkedin.png" alt="LinkedIn"/>
                        <img className="w-10 h-10 icon-white" src="/instagram.png" alt="Instagram"/>
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
                            As a highly motivated Full Stack Web Developer with a strong foundation in <span
                            className="text-teal-500">React</span>, <span className="text-teal-500">Django</span>, <span
                            className="text-teal-500">MongoDB</span>, and <span
                            className="text-teal-500">PostgreSQL</span>, I bring extensive experience in collaborative
                            project development and a passion for continuous learning. Currently studying <span
                            className="text-teal-500">Artificial Intelligence</span> at Lviv Polytechnic National
                            University, I excel in teamwork, embrace new challenges, and am adept at juggling multiple
                            tasks. My diverse interests, including volleyball and reading, have cultivated a
                            well-rounded skill set, and my fluency in English enables me to thrive in international
                            environments.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                            I offer from a wide range of services, including designing, programming and teaching.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image className="mx-auto" src="/design.png" width={100} height={100}/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs.
                            </p>
                            <h4 className="py-4 text-teal-600">Design tools I use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1 ">Figma</p>
                            <p className="text-gray-800 py-1 ">Adobe</p>
                        </div>


                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image className="mx-auto" src="/code.png" width={100} height={100}/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs.
                            </p>
                            <h4 className="py-4 text-teal-600">Design tools I use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1 ">Figma</p>
                            <p className="text-gray-800 py-1 ">Adobe</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <Image className="mx-auto" src="/consulting.png" width={100} height={100}/>
                            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs.
                            </p>
                            <h4 className="py-4 text-teal-600">Design tools I use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1 ">Figma</p>
                            <p className="text-gray-800 py-1 ">Adobe</p>
                        </div>
                    </div>
                </section>

                {/*//Section 3//*/}
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                            As a highly motivated Full Stack Web Developer with a strong foundation in <span
                            className="text-teal-500">React</span>, <span className="text-teal-500">Django</span>, <span
                            className="text-teal-500">MongoDB</span>, and <span
                            className="text-teal-500">PostgreSQL</span>, I bring extensive experience in collaborative
                            project development and a passion for continuous learning. Currently studying <span
                            className="text-teal-500">Artificial Intelligence</span> at Lviv Polytechnic National
                            University, I excel in teamwork, embrace new challenges, and am adept at juggling multiple
                            tasks. My diverse interests, including volleyball and reading, have cultivated a
                            well-rounded skill set, and my fluency in English enables me to thrive in international
                            environments.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1">
                            <img src="/web1.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img src="/web2.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img src="/web3.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img src="/web4.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img src="/web5.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img src="/web6.png" alt="" width="100%" height="100%" className="rounded-lg object-cover"/>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
