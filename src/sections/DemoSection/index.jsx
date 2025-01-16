import React from 'react';

    const demoContent = {
      pt: {
        title: 'Teste Sofia Agora Mesmo',
        description:
          'Converse com ela no WhatsApp e veja pessoalmente como ela pode transformar seu atendimento',
        inputPlaceholder: 'Seu WhatsApp',
        buttonText: 'Começar Teste Grátis',
        subText1: 'Teste grátis e sem compromisso',
        subText2: 'Resposta em menos de 1 minuto',
        subText3: 'Veja ela funcionando ao vivo',
      },
      en: {
        title: 'Test Sofia Now',
        description:
          'Chat with her on WhatsApp and see for yourself how she can transform your customer service',
        inputPlaceholder: 'Your WhatsApp',
        buttonText: 'Start Free Trial',
        subText1: 'Free and no-obligation trial',
        subText2: 'Response in less than 1 minute',
        subText3: 'See her working live',
      },
    };

    function DemoSection({ language }) {
      const currentContent = demoContent[language] || demoContent.pt;

      return (
        <div className="bg-black py-12 font-inter">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold text-white mb-4" style={{
              fontSize: '3rem',
              fontWeight: 300,
              lineHeight: 1.2,
            }}>
              {currentContent.title}
            </h2>
            <p className="text-gray-300 text-xl mb-8" style={{
              fontSize: '1.5rem',
              fontWeight: 300,
              lineHeight: 1.4,
            }}>
              {currentContent.description}
            </p>
            <div className="max-w-md mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
              <form className="flex flex-col gap-4">
                <input
                  type="tel"
                  placeholder={currentContent.inputPlaceholder}
                  className="bg-[#333] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
                <button
                  type="submit"
                  className="bg-[#00FF9D] text-black font-semibold py-3 rounded-md hover:bg-[#00cc7a] transition-colors duration-300"
                >
                  {currentContent.buttonText}
                </button>
              </form>
              <div className="mt-6 flex flex-col items-center">
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-white">{currentContent.subText1}</span>
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-white">{currentContent.subText2}</span>
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">{currentContent.subText3}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default DemoSection;
