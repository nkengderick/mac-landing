import { FC } from 'react';
import { useTranslations } from 'next-intl';

const WhyUs: FC = () => {
    const t = useTranslations('WhyUs');

    return (
        <section id="why-us" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    {t('title')}
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {t('benefit1.title')}
                        </h3>
                        <p className="text-gray-600">
                            {t('benefit1.description')}
                        </p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {t('benefit2.title')}
                        </h3>
                        <p className="text-gray-600">
                            {t('benefit2.description')}
                        </p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {t('benefit3.title')}
                        </h3>
                        <p className="text-gray-600">
                            {t('benefit3.description')}
                        </p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {t('benefit4.title')}
                        </h3>
                        <p className="text-gray-600">
                            {t('benefit3.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
