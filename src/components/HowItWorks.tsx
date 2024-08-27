"use client";

import { FC, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faCreditCard, faThumbsUp, faUpload, faTag, faBullhorn, faDollarSign, faDownload, faUserPlus, faCogs, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from "next-intl";

const icons: Record<string, any> = {
  "fa-house": faHouse,
  "fa-search": faSearch,
  "fa-credit-card": faCreditCard,
  "fa-thumbs-up": faThumbsUp,
  "fa-upload": faUpload,
  "fa-tag": faTag,
  "fa-bullhorn": faBullhorn,
  "fa-dollar-sign": faDollarSign,
  "fa-download": faDownload,
  "fa-user-plus": faUserPlus,
  "fa-cogs": faCogs,
  "fa-play": faPlay,
};

type Step = {
  title: string;
  description: string;
  icon: string;
};

const HowItWorks: FC = () => {
  const t = useTranslations('howItWorks');
  const [activeTab, setActiveTab] = useState<'consumer' | 'artCreators' | 'app'>('consumer');

  const data = {
    consumer: [
      { title: t('consumer.Step1.title'), description: t('consumer.Step1.description'), icon: 'fa-house' },
      { title: t('consumer.Step2.title'), description: t('consumer.Step2.description'), icon: 'fa-search' },
      { title: t('consumer.Step3.title'), description: t('consumer.Step3.description'), icon: 'fa-credit-card' },
      { title: t('consumer.Step4.title'), description: t('consumer.Step4.description'), icon: 'fa-thumbs-up' }
    ],
    artCreators: [
      { title: t('artCreators.Step1.title'), description: t('artCreators.Step1.description'), icon: 'fa-upload' },
      { title: t('artCreators.Step2.title'), description: t('artCreators.Step2.description'), icon: 'fa-tag' },
      { title: t('artCreators.Step3.title'), description: t('artCreators.Step3.description'), icon: 'fa-bullhorn' },
      { title: t('artCreators.Step4.title'), description: t('artCreators.Step4.description'), icon: 'fa-dollar-sign' }
    ],
    app: [
      { title: t('app.Step1.title'), description: t('app.Step1.description'), icon: 'fa-download' },
      { title: t('app.Step2.title'), description: t('app.Step2.description'), icon: 'fa-user-plus' },
      { title: t('app.Step3.title'), description: t('app.Step3.description'), icon: 'fa-cogs' },
      { title: t('app.Step4.title'), description: t('app.Step4.description'), icon: 'fa-play' }
    ]
  };

  const handleTabChange = (tab: 'consumer' | 'artCreators' | 'app') => {
    setActiveTab(tab);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t(`${activeTab}.title`)}</h2>
        
        <div className="mb-6 text-center">
          <button
            onClick={() => handleTabChange('consumer')}
            className={`mx-4 px-4 py-2 ${activeTab === 'consumer' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {t('consumer.title')}
          </button>
          <button
            onClick={() => handleTabChange('artCreators')}
            className={`mx-4 px-4 py-2 ${activeTab === 'artCreators' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {t('artCreators.title')}
          </button>
          <button
            onClick={() => handleTabChange('app')}
            className={`mx-4 px-4 py-2 ${activeTab === 'app' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {t('app.title')}
          </button>
        </div>

        <div className="flex flex-col items-center">
          {data[activeTab].map((step, index) => (
            <div key={index} className="flex items-center mb-8">
              {index > 0 && (
                <div className="text-center text-gray-400 mx-4">
                  <span className="text-xl">&rarr;</span>
                </div>
              )}
              <div className="flex items-start">
                <FontAwesomeIcon icon={icons[step.icon]} className="text-4xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
