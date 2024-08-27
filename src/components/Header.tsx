"use client"
import { FC } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Header: FC = () => {
    const t = useTranslations();
    const locale = useLocale();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const changeLanguage = (lang: string) => {
        const params = new URLSearchParams(searchParams.toString());
        router.push(`/${lang}${pathname.substring(3)}?${params}`);
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">Mac</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.home')}
                    </Link>
                    <Link href="#features" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.features')}
                    </Link>
                    <Link href="#who-we-are" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.whoWeAre')}
                    </Link>
                    <Link href="#partners" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.partners')}
                    </Link>
                    <Link href="#services" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.services')}
                    </Link>
                    <Link href="#galleries" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.galleries')}
                    </Link>
                    <Link href="#blogs" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.blogs')}
                    </Link>
                    <Link href="#contact" className="text-gray-800 hover:text-blue-600">
                        {t('navbar.contact')}
                    </Link>
                </div>

                {/* Buttons and Language Selector */}
                <div className="flex items-center space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                {locale === 'en' ? 'English' : locale === 'fr' ? 'Français' : 'Español'}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white shadow-lg">
                            <DropdownMenuItem onSelect={() => changeLanguage('en')}>English</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => changeLanguage('fr')}>Français</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => changeLanguage('es')}>Español</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="outline">{t('navbar.login')}</Button>
                    <Button>{t('navbar.signup')}</Button>
                </div>

                {/* Mobile Menu */}
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
                                <Link href="#features" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.features')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#who-we-are" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.whoWeAre')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#partners" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.partners')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.services')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#galleries" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.galleries')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#blogs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {t('navbar.blogs')}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
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
