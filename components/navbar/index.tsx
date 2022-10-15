import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface INavLink {
    name: string
    href: string
    current: boolean
}

const navigation: INavLink[] = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

const profileMenuItems = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign Out", href: "#" }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const NavLink = ({ item }: { item: INavLink}) => {
    return (
        <Link
            href={item.href}
        >
            <div className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-2 py-2 rounded-md text-sm font-medium block'
            )}
                aria-current={item.current ? 'page' : undefined}>
                <HomeIcon className="h-4 w-4 mx-auto" />
            </div>
        </Link>
    );
}

const Navbar = () => {

    const avatarImageUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

    const brandLogoUrl = "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500";

    return (
        <Disclosure as="nav" className="bg-gray-800 h-screen w-16">
            {({ open }) => (
                <>
                    <div className="flex flex-col py-4 h-full">
                        <div className="flex flex-col flex-1 items-stretch justify-start">
                            {/* Brand Logo */}
                            <div className="flex justify-center">
                                <img
                                    className="h-8 w-auto block"
                                    src={brandLogoUrl}
                                    alt="Your Company"
                                />
                            </div>
                            {/* Nav Links */}
                            <div className="flex flex-col mx-2 flex-1">
                                <div className="flex flex-col flex-1 justify-center space-y-4">
                                    {navigation.map((item) => (
                                        <NavLink key={item.name} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;