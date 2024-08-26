import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';

const Header: FC = () => {
    const t = useTranslations();

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">Cameroon Art</Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.home')}
                    </Link>
                    <Link href="/about" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.about')}
                    </Link>
                    <Link href="/services" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.services')}
                    </Link>
                    <Link href="/contact" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.contact')}
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="outline">{t('navbar.login')}</Button>
                    <Button>{t('navbar.signup')}</Button>
                </div>
                <div className="md:hidden flex items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="text-gray-800">
                                ☰
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white shadow-lg">
                            <DropdownMenuItem asChild>
                                <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.home')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.about')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.services')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.contact')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.contact')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.login')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.signup')}
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
};

export default Header;


