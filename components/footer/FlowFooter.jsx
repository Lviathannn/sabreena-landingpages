'use client';

import {Footer} from 'flowbite-react';

export default function FlowFooter() {
    return (
        <Footer container>
            <div className="w-full text-center md:mx-10">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        alt="Sabreena Construction Logo"
                        href="/"
                        name="Sabreena Construction"
                        src="/logo.png"
                    />
                    <Footer.LinkGroup className="flex gap-2">
                        <Footer.Link href="#">
                            Home
                        </Footer.Link>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Services
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider/>
                <Footer.Copyright
                    by="Sabreena Construction™"
                    href="#"
                    year={2023}
                />
            </div>
        </Footer>
    )
}


