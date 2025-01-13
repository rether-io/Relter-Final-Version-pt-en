import React, { useState } from 'react';
    import './BenefitsSection.css';

    const benefitsData = [
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
    ];

    function BenefitsSection() {
      const [activeTab, setActiveTab] = useState(benefitsData[0].id);

      const handleTabClick = (id) => {
        setActiveTab(id);
      };

      return (
        <div className="benefits-section">
          <h2 className="benefits-title">Benefícios De Ter A Melhor Funcionária Do Mundo</h2>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-value">98%</div>
              <div className="stat-label">Satisfação dos Clientes</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5X</div>
              <div className="stat-label">Mais Vendas Automáticas</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Das Mensagens Respondidas</div>
            </div>
          </div>
          <div className="content-container">
            <div className="sidebar">
              {benefitsData.map((item) => (
                <div
                  key={item.id}
                  className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(item.id)}
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="main-content">
              {benefitsData.map((item) => {
                if (item.id === activeTab) {
                  return (
                    <div key={item.id}>
                      <h3 className="main-content-title">{item.title}</h3>
                      <p className="main-content-text">{item.content}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      );
    }

    export default BenefitsSection;
