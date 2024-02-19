export const App = () => {
  return (
    <div className="flex flex-col items-center gap-y-7">
      <h1 className='text-center'>Ambiente de pruebas de chatbot la fabril</h1>
      <p className='text-center'>Este es un ambiente de pruebas para el chatbot de la fabril</p>
      <img src="/lafabril.png" alt="logo la fabril" />
      <div className="z-[999] fixed bottom-20 right-4" dangerouslySetInnerHTML={{ __html: `
          <df-messenger
            location="us-central1"
            project-id="fabril-chatbot-poc"
            agent-id="025c18b4-795f-4da7-bf18-5c7a1417e916"
            language-code="es"
            max-query-length="-1">
            <df-messenger-chat-bubble
            chat-title="Fabril-Chatbot">
            </df-messenger-chat-bubble>
          </df-messenger>
          ` }} />


    </div>
  )
}
