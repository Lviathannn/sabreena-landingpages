'use client';
export default function NavbarLink({isOpen}) {
    return (
        <div className={`${!isOpen ? 'hidden' : ''} w-full md:block md:w-auto  `} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900">
                <li>
                    <a href="#"
                       className="block py-2 pl-3 pr-4 text-white bg-cyan-500 rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-blue-500"
                       aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#"
                       className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                    <a href="#"
                       className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                    <a href="#"
                       className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
            </ul>
        </div>
    )
}