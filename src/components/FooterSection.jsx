import { Footer } from 'flowbite-react';
import React from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo/logo.png'

const FooterSection = () => {
    return (
        // <Footer container={true}>
        //     <div className="w-full text-center">
        //         <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        //             <Footer.Brand
        //                 href="https://flowbite.com"
        //                 src="https://flowbite.com/docs/images/logo.svg"
        //                 alt="Flowbite Logo"
        //                 name="tolo"
        //             />
        //             <Footer.LinkGroup>
        //                 <Footer.Link href="#">
        //                     About
        //                 </Footer.Link>
        //                 <Footer.Link href="#">
        //                     Privacy Policy
        //                 </Footer.Link>
        //                 <Footer.Link href="#">
        //                     Licensing
        //                 </Footer.Link>
        //                 <Footer.Link href="#">
        //                     Contact
        //                 </Footer.Link>
        //             </Footer.LinkGroup>
        //         </div>
        //         <Footer.Divider />
        //         <Footer.Copyright
        //             href="#"
        //             by="Flowbite™"
        //             year={2022}
        //         />
        //     </div>
        // </Footer>

        <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    
                    <Footer.Brand
                        href="#"
                        src={logo}
                        alt="Life Advice"
                        name="Life Advice"
                    />
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    About Sohag
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Courses
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Life Advice. All Rights Reserved. "
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="#"
                            icon={FaFacebook}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaInstagram}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaTwitter}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaGithub}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaDribbble}
                        />
                    </div>
                </div>
            </div>
        </Footer>


    );
};

export default FooterSection;