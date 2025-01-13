import React, { useState } from 'react';
    import './ProblemSection.css';

    const tabData = {
      pt: [
        {
          id: 'eficiencia',
          label: 'Eficiência',
          title: 'Atendimento Que Não Para De Vender',
          content:
            'A Bianca atende, qualifica e vende automaticamente, permitindo que sua equipe foque apenas nos casos mais importantes. Diga adeus ao trabalho manual - apenas configure uma vez e veja seu WhatsApp se transformar em uma máquina de vendas 24h por dia.',
        },
        {
          id: 'automacao',
          label: 'Automação',
          title: 'Vendas No Piloto Automático',
          content:
            'Automatize todo o seu processo de vendas, desde o primeiro contato até o fechamento. A Bianca cuida de tudo, garantindo que nenhuma oportunidade seja perdida e que seus clientes recebam o melhor atendimento possível.',
        },
        {
          id: 'inteligencia',
          label: 'Inteligência',
          title: 'Inteligência Artificial A Seu Favor',
          content:
            'A Bianca utiliza inteligência artificial para aprender com cada interação, otimizando seu desempenho e oferecendo um atendimento cada vez mais personalizado e eficaz. Tenha uma assistente que evolui com o seu negócio.',
        },
        {
          id: 'escalabilidade',
          label: 'Escalabilidade',
          title: 'Cresça Sem Limites',
          content:
            'A Bianca é capaz de lidar com um grande volume de atendimentos simultaneamente, permitindo que seu negócio cresça sem se preocupar com a capacidade de atendimento. Expanda suas vendas sem aumentar sua equipe.',
        },
        {
          id: 'resultados',
          label: 'Resultados',
          title: 'Resultados Que Você Pode Medir',
          content:
            'Acompanhe de perto os resultados da Bianca através de relatórios detalhados e métricas precisas. Veja como sua assistente está impulsionando suas vendas e otimize suas estratégias para alcançar resultados ainda melhores.',
        },
      ],
      en: [
        {
          id: 'efficiency',
          label: 'Efficiency',
          title: 'Service That Never Stops Selling',
          content:
            'Bianca automatically attends, qualifies, and sells, allowing your team to focus only on the most important cases. Say goodbye to manual work - just set it up once and watch your WhatsApp turn into a 24/7 sales machine.',
        },
        {
          id: 'automation',
          label: 'Automation',
          title: 'Sales On Autopilot',
          content:
            'Automate your entire sales process, from the first contact to closing. Bianca takes care of everything, ensuring that no opportunity is missed and that your customers receive the best possible service.',
        },
        {
          id: 'intelligence',
          label: 'Intelligence',
          title: 'Artificial Intelligence In Your Favor',
          content:
            'Bianca uses artificial intelligence to learn from each interaction, optimizing its performance and offering increasingly personalized and effective service. Have an assistant that evolves with your business.',
        },
        {
          id: 'scalability',
          label: 'Scalability',
          title: 'Grow Without Limits',
          content:
            'Bianca is able to handle a large volume of calls simultaneously, allowing your business to grow without worrying about service capacity. Expand your sales without increasing your team.',
        },
        {
          id: 'results',
          label: 'Results',
          title: 'Results You Can Measure',
          content:
            'Closely monitor Bianca\'s results through detailed reports and precise metrics. See how your assistant is boosting your sales and optimize your strategies to achieve even better results.',
        },
      ],
    };

    const stats = {
      pt: {
        satisfaction: 'Satisfação dos Clientes',
        sales: 'Mais Vendas Automáticas',
        messages: 'Das Mensagens Respondidas',
      },
      en: {
        satisfaction: 'Customer Satisfaction',
        sales: 'More Automatic Sales',
        messages: 'Of Messages Answered',
      },
    };

    function ProblemSection({ language }) {
      const [activeTab, setActiveTab] = useState(tabData[language][0].id);
      const currentTabData = tabData[language];
      const currentStats = stats[language];

      const handleTabClick = (id) => {
        setActiveTab(id);
      };

      return (
        <div className="problem-section relative py-12 bg-gradient-to-b from-zinc-900/50 via-zinc-900/70 to-zinc-900 rounded-3xl">
          <div className="container mx-auto text-center relative z-10">
            <div className="badge inline-flex items-center mb-4">
              <span className="badge-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#4D4D4D"/>
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#1A1A1A"/>
                  <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="#666666"/>
                  <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"/>
                </svg>
              </span>
              {language === 'pt' ? 'Benefícios' : 'Benefits'}
            </div>
            <h2 className="problem-title">
              {language === 'pt'
                ? 'Benefícios De Ter A Melhor Funcionária Do Mundo'
                : 'Benefits Of Having The Best Employee In The World'}
            </h2>
          </div>
          <div className="container mx-auto max-w-6xl flex flex-col mt-8 p-4">
            <div className="flex justify-around mb-8">
              <div className="text-center">
                <div className="text-4xl font-semibold text-[#34D399]">98%</div>
                <div className="text-gray-400 text-sm">{currentStats.satisfaction}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-[#34D399]">5X</div>
                <div className="text-gray-400 text-sm">{currentStats.sales}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-[#34D399]">100%</div>
                <div className="text-gray-400 text-sm">{currentStats.messages}</div>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4 flex flex-col">
                {currentTabData.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button text-left py-3 px-4 rounded-md transition-colors duration-200 ${activeTab === tab.id ? 'bg-[#333] border-l-2 border-[#34D399] text-white' : 'text-gray-300 hover:bg-[#1a1a1a]'}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="w-3/4 ml-8">
                {currentTabData.map((tab) => {
                  if (tab.id === activeTab) {
                    return (
                      <div key={tab.id} className="bg-[#1a1a1a] p-6 rounded-md border border-[#34D399]/20">
                        <h3 className="text-2xl font-medium text-gray-200 mb-4">{tab.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{tab.content}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a href="https://wa.me/5511972247344" className="action-button primary bg-[#00FF94] text-black font-semibold py-3 px-6 rounded-md hover:bg-[#00cc7a] transition-colors duration-300 text-lg">
                {language === 'pt' ? 'Testar Gratuitamente' : 'Try For Free'}
              </a>
            </div>
          </div>
        </div>
      );
    }

    export default ProblemSection;
