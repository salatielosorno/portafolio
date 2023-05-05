export default function Footer() {
  return (
    <footer className="center mt-5 flex justify-center space-x-4 bg-spurple p-4 text-white text-xs" style={{ 'position': 'relative' }}>
      <p>Sofy Piñatas </p>
      <span>|</span>
      <span

        className="font-medium text-white"
      >
        2023
      </span>
      <div className="chat-support__icons">
        <a
          className="chat-support__icon block mb-2"
          href="https://api.whatsapp.com/send/?phone=5212251121397"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/sofy/images/whats-icon.png" alt="whats-app-icon" />
        </a>
        {/* <div className="chat-support__icon"></div> */}
      </div>

    </footer>
  )
}
