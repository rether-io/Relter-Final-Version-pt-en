import React, { useState } from 'react';
    import './FAQSection.css';

    const faqData = {
      pt: [
        {
          question: 'O que a Sofia pode fazer pelo meu negócio?',
          answer:
            'A Sofia é uma assistente virtual que automatiza todo seu atendimento no WhatsApp. Ela consegue atender, qualificar leads, agendar reuniões, resolver dúvidas dos clientes e até mesmo realizar vendas - tudo automaticamente. É como ter sua melhor funcionária trabalhando 24 horas por dia, 7 dias por semana, sem nunca perder uma oportunidade.',
        },
        {
          question: 'Quanto tempo leva para implementar?',
          answer: 'A implementação é super rápida e leva apenas 7 dias. Nossa equipe cuida de todo o processo, desde a configuração inicial até o treinamento da Sofia com as informações do seu negócio. Você não precisa se preocupar com nada técnico - nós fazemos tudo por você.',
        },
        {
          question: 'Como a Sofia aprende sobre meu negócio?',
          answer:
            'O processo é simples: coletamos as principais informações sobre seu negócio, produtos, serviços e forma de atendimento através de um briefing descomplicado. A Sofia usa essas informações para criar respostas personalizadas e alinhadas com seu negócio. Ela também aprende e se aperfeiçoa continuamente com cada interação.',
        },
        {
          question: 'É seguro usar a Sofia no meu WhatsApp?',
          answer:
            'Totalmente seguro! Utilizamos a API oficial do WhatsApp Business e seguimos todos os protocolos de segurança. Suas conversas e dados são criptografados e protegidos. Além disso, você mantém total controle sobre seu número e pode monitorar todos os atendimentos através de um painel exclusivo.',
        },
        {
          question: 'Preciso ter conhecimento técnico?',
          answer:
            'Não precisa de nenhum conhecimento técnico! Nossa equipe cuida de toda a parte tecnológica. Você só precisa nos fornecer as informações sobre seu negócio e nós configuramos tudo. A interface é super intuitiva e oferecemos todo o suporte necessário para você aproveitar ao máximo a Sofia.',
        },
        {
          question: 'Qual o investimento necessário?',
          answer:
            'Oferecemos planos que cabem no bolso e se pagam rapidamente. O investimento inicial conta com mensalidades a partir de R$1.500. Considerando que a Sofia trabalha 24h por dia, nunca tira férias e pode atender centenas de clientes simultaneamente, o custo-benefício é incomparável com a contratação de funcionários tradicionais.',
        },
      ],
      en: [
        {
          question: 'What can Sofia do for my business?',
          answer:
            'Sofia is a virtual assistant that automates all your customer service on WhatsApp. She can attend, qualify leads, schedule meetings, resolve customer doubts, and even make sales - all automatically. It\'s like having your best employee working 24 hours a day, 7 days a week, without ever missing an opportunity.',
        },
        {
          question: 'How long does it take to implement?',
          answer: 'Implementation is super fast! After our briefing meeting takes only 7 days to you see your own Sofia live. Our team takes care of the entire process, from the initial setup to training Sofia with your business information. You don\'t need to worry about anything technical - we do everything for you.',
        },
        {
          question: 'How does Sofia learn about my business?',
          answer:
            'The process is simple: we collect the main information about your business, products, services, and customer service approach through a straightforward briefing. Sofia uses this information to create personalized responses aligned with your business. She also learns and improves continuously with each interaction.',
        },
        {
          question: 'Is it safe to use Sofia on my WhatsApp?',
          answer:
            'Totally safe! We use the official WhatsApp Business API and follow all security protocols. Your conversations and data are encrypted and protected. In addition, you maintain full control over your number and can monitor all calls through an exclusive panel.',
        },
        {
          question: 'Do I need technical knowledge?',
          answer:
            'You don\'t need any technical knowledge! Our team takes care of all the technical aspects. You just need to provide us with information about your business and we will configure everything. The interface is super intuitive, and we offer all the necessary support for you to make the most of Sofia.',
        },
        {
          question: 'What is the necessary investment?',
          answer:
            'We offer plans that fit your budget and pay for themselves quickly. The initial investment is only $500 for implementation and monthly fees starting at $350. Considering that Sofia works 24 hours a day, never takes vacations, and can serve hundreds of customers simultaneously, the cost-benefit is incomparable to hiring traditional employees.',
        },
      ],
    };

    function FAQSection({ language }) {
      const [openIndex, setOpenIndex] = useState(null);
      const currentFaqData = faqData[language] || faqData.pt;

      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      const translatedFaqData = currentFaqData.map(faq => ({
        ...faq,
        question: language === 'en' ? translateFaqQuestion(faq.question) : faq.question,
        answer: language === 'en' ? translateFaqAnswer(faq.answer) : faq.answer,
      }));

      return (
        <div className="faq-section">
          <div className="faq-content">
            <div className="container mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="badge mb-4">
                  <span className="badge-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#4D4D4D"/>
                      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#1A1A1A"/>
                      <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="#666666"/>
                      <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"/>
                    </svg>
                  </span>
                  FAQ
                </div>
                <h2 className="text-4xl font-semibold text-white mb-2">
                  {language === 'pt' ? 'Alguma Dúvida?' : 'Any Questions?'}
                </h2>
                <p className="text-gray-300 text-xl mb-8">
                  {language === 'pt' ? 'Tudo Que Precisa Saber!' : 'Everything You Need to Know!'}
                </p>
              </div>
              <div className="w-full max-w-3xl mx-auto">
                {translatedFaqData.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div
                      className="faq-question"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="text-white font-medium">{item.question}</h3>
                      <span className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 4.16663V15.8333M4.16663 10H15.8333" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    {openIndex === index && (
                      <div className="faq-answer">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    const translateFaqQuestion = (question) => {
      switch (question) {
        case 'O que a Bianca pode fazer pelo meu negócio?':
          return 'What can Bianca do for my business?';
        case 'Quanto tempo leva para implementar?':
          return 'How long does it take to implement?';
        case 'Como a Bianca aprende sobre meu negócio?':
          return 'How does Bianca learn about my business?';
        case 'É seguro usar a Bianca no meu WhatsApp?':
          return 'Is it safe to use Bianca on my WhatsApp?';
        case 'Preciso ter conhecimento técnico?':
          return 'Do I need technical knowledge?';
        case 'Qual o investimento necessário?':
          return 'What is the necessary investment?';
        default:
          return question;
      }
    };

    const translateFaqAnswer = (answer) => {
      switch (answer) {
        case 'A Bianca é uma assistente virtual que automatiza todo seu atendimento no WhatsApp. Ela consegue atender, qualificar leads, agendar reuniões, resolver dúvidas dos clientes e até mesmo realizar vendas - tudo automaticamente. É como ter sua melhor funcionária trabalhando 24 horas por dia, 7 dias por semana, sem nunca perder uma oportunidade.':
          return 'Bianca is a virtual assistant that automates all your customer service on WhatsApp. She can attend, qualify leads, schedule meetings, resolve customer doubts, and even make sales - all automatically. It\'s like having your best employee working 24 hours a day, 7 days a week, without ever missing an opportunity.';
        case 'A implementação é super rápida e leva apenas 24 horas. Nossa equipe cuida de todo o processo, desde a configuração inicial até o treinamento da Bianca com as informações do seu negócio. Você não precisa se preocupar com nada técnico - nós fazemos tudo por você.':
          return 'Implementation is super fast and takes only 24 hours. Our team takes care of the entire process, from the initial setup to training Bianca with your business information. You don\'t need to worry about anything technical - we do everything for you.';
        case 'O processo é simples: coletamos as principais informações sobre seu negócio, produtos, serviços e forma de atendimento através de um briefing descomplicado. A Bianca usa essas informações para criar respostas personalizadas e alinhadas com seu negócio. Ela também aprende e se aperfeiçoa continuamente com cada interação.':
          return 'The process is simple: we collect the main information about your business, products, services, and customer service approach through a straightforward briefing. Bianca uses this information to create personalized responses aligned with your business. She also learns and improves continuously with each interaction.';
        case 'Totalmente seguro! Utilizamos a API oficial do WhatsApp Business e seguimos todos os protocolos de segurança. Suas conversas e dados são criptografados e protegidos. Além disso, você mantém total controle sobre seu número e pode monitorar todos os atendimentos através de um painel exclusivo.':
          return 'Totally safe! We use the official WhatsApp Business API and follow all security protocols. Your conversations and data are encrypted and protected. In addition, you maintain full control over your number and can monitor all calls through an exclusive panel.';
        case 'Não precisa de nenhum conhecimento técnico! Nossa equipe cuida de toda a parte tecnológica. Você só precisa nos fornecer as informações sobre seu negócio e nós configuramos tudo. A interface é super intuitiva e oferecemos todo o suporte necessário para você aproveitar ao máximo a Bianca.':
          return 'You don\'t need any technical knowledge! Our team takes care of all the technical aspects. You just need to provide us with information about your business and we will configure everything. The interface is super intuitive, and we offer all the necessary support for you to make the most of Bianca.';
        case 'Oferecemos planos que cabem no bolso e se pagam rapidamente. O investimento inicial é de R$4.000 para implementação e mensalidades a partir de R$1.500. Considerando que a Bianca trabalha 24h por dia, nunca tira férias e pode atender centenas de clientes simultaneamente, o custo-benefício é incomparável com a contratação de funcionários tradicionais.':
          return 'We offer plans that fit your budget and pay for themselves quickly. The initial investment is R$4,000 for implementation and monthly fees starting at R$1,500. Considering that Bianca works 24 hours a day, never takes vacations, and can serve hundreds of customers simultaneously, the cost-benefit is incomparable to hiring traditional employees.';
        default:
          return answer;
      }
    };

    export default FAQSection;
