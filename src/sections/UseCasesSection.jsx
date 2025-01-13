import React from 'react';
    import './UseCasesSection.css';

    const useCases = {
      pt: [
        {
          title: 'E-commerce/Loja Virtual',
          description: 'Manage your budget, track expenses, and plan for the future.',
          chat: [
            { speaker: 'user', text: 'Quero saber se tem esse produto em preto' },
            {
              speaker: 'bot',
              text: 'Sim! Temos disponível em preto. O valor é R$199 e pode ser parcelado em até 12x. Quer ver fotos do produto?',
            },
            { speaker: 'user', text: 'Pode ser, e qual o prazo de entrega?' },
            {
              speaker: 'bot',
              text: 'Para sua região, o prazo é de 3-5 dias úteis. Posso finalizar seu pedido agora mesmo!',
            },
          ],
        },
        {
          title: 'Clínica/Serviços de Saúde',
          description: 'Automate invoicing, manage cash flow, and generate reports.',
          chat: [
            { speaker: 'user', text: 'Preciso marcar uma consulta' },
            {
              speaker: 'bot',
              text: 'Ótimo! Temos horários disponíveis essa semana. Qual especialidade você procura?',
            },
            { speaker: 'user', text: 'Nutricionista, pode ser quinta ou sexta' },
            {
              speaker: 'bot',
              text: 'Perfeito! Temos horário quinta às 14h ou sexta às 9h. Qual prefere? O valor da consulta é R$200',
            },
          ],
        },
        {
          title: 'Escola/Curso',
          description: 'Get personalized investment advice and track your portfolio.',
          chat: [
            { speaker: 'user', text: 'Quero informações sobre o curso de marketing' },
            {
              speaker: 'bot',
              text: 'O curso de marketing tem duração de 6 meses, aulas 2x por semana. Investimento de R$297/mês. Quer conhecer a grade completa?',
            },
            { speaker: 'user', text: 'Tem aulas presenciais?' },
            {
              speaker: 'bot',
              text: 'Sim! As aulas são híbridas - 70% online e 30% presencial. Quer agendar uma aula experimental gratuita?',
            },
          ],
        },
      ],
      en: [
        {
          title: 'E-commerce/Online Store',
          description: 'Manage your budget, track expenses, and plan for the future.',
          chat: [
            { speaker: 'user', text: 'I want to know if you have this product in black' },
            {
              speaker: 'bot',
              text: 'Yes! We have it available in black. The price is $199 and can be split into up to 12 installments. Would you like to see photos of the product?',
            },
            { speaker: 'user', text: 'Sure, and what is the delivery time?' },
            {
              speaker: 'bot',
              text: 'For your region, the delivery time is 3-5 business days. Can I finalize your order now?',
            },
          ],
        },
        {
          title: 'Clinic/Health Services',
          description: 'Automate invoicing, manage cash flow, and generate reports.',
          chat: [
            { speaker: 'user', text: 'I need to schedule an appointment' },
            {
              speaker: 'bot',
              text: 'Great! We have times available this week. Which specialty are you looking for?',
            },
            { speaker: 'user', text: 'Nutritionist, can it be Thursday or Friday' },
            {
              speaker: 'bot',
              text: 'Perfect! We have an appointment on Thursday at 2 PM or Friday at 9 AM. Which do you prefer? The appointment fee is $200',
            },
          ],
        },
        {
          title: 'School/Course',
          description: 'Get personalized investment advice and track your portfolio.',
          chat: [
            { speaker: 'user', text: 'I want information about the marketing course' },
            {
              speaker: 'bot',
              text: 'The marketing course lasts 6 months, with classes twice a week. Investment of $297/month. Would you like to see the full schedule?',
            },
            { speaker: 'user', text: 'Are there in-person classes?' },
            {
              speaker: 'bot',
              text: 'Yes! The classes are hybrid - 70% online and 30% in-person. Would you like to schedule a free trial class?',
            },
          ],
        },
      ],
    };

    function UseCasesSection({ language }) {
      const currentUseCases = useCases[language];
      return (
        <div className="use-cases-section">
          <h2 className="section-title">
            {language === 'pt' ? 'Se Adapta a Qualquer Negócio' : 'Adapts to Any Business'}
          </h2>
          <div className="cards">
            {currentUseCases.map((useCase, index) => (
              <div key={index} className="card-container">
                <div className="card-title-container">
                  <h3 className="card-title">{useCase.title}</h3>
                </div>
                <div className="card">
                  <div className="chat-container">
                    {useCase.chat.map((message, msgIndex) => (
                      <div key={msgIndex} className={`chat-message ${message.speaker}`}>
                        {message.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default UseCasesSection;
