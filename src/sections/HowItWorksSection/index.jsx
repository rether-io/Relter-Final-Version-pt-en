import React from 'react';
    import './HowItWorksSection.css';

    const steps = {
      pt: [
        {
          number: '1',
          label: 'Aprende',
          tooltip: 'Treinamos a assistente sobre seu negócio e suas melhores práticas',
        },
        {
          number: '2',
          label: 'Adapta',
          tooltip: 'Adapta-se ao seu estilo de comunicação e processos de venda',
        },
        {
          number: '3',
          label: 'Opera 24/7',
          tooltip: 'Pronto! Seu WhatsApp vende 24h por dia automaticamente',
        },
      ],
      en: [
        {
          number: '1',
          label: 'Learns',
          tooltip: 'We train the assistant on your business and best practices',
        },
        {
          number: '2',
          label: 'Adapts',
          tooltip: 'Adapts to your communication style and sales processes',
        },
        {
          number: '3',
          label: 'Operates 24/7',
          tooltip: 'Ready! Your WhatsApp sells 24 hours a day automatically',
        },
      ],
    };

    function HowItWorksSection({ language }) {
      const currentSteps = steps[language];

      return (
        <div className="how-it-works-section">
          <h2 className="how-it-works-title">
            {language === 'pt' ? 'Atendimento Perfeito em 3 Passos' : 'Perfect Service in 3 Steps'}
          </h2>
          <div className="steps-container">
            {currentSteps.map((step, index) => (
              <div
                key={index}
                className="step"
              >
                <div className="step-number">{step.number}</div>
                <div className="step-label">{step.label}</div>
                <div className="tooltip">{step.tooltip}</div>
                {index < currentSteps.length - 1 && <div className={`line line-${index + 1}`} />}
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default HowItWorksSection;
