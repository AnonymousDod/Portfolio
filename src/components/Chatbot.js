import { useState, useRef, useEffect } from "react";
import './Chatbot.css';

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Rod Kent Ito. Ask me anything about my portfolio, skills, or projects! I am also available on LinkedIn and GitHub."
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const query = async (data) => {
    const response = await fetch(
      "https://cloud.flowiseai.com/api/v1/prediction/b0f8bb98-33df-42dd-8af7-6d2ee4f4710c",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    const result = await response.json();
    return result;
  };

  const sendMessage = async () => {
    if (!message.trim() || message.length > 1000) return;
    
    const userMessage = {
      type: 'user',
      text: message.trim()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    const currentMessage = message.trim();
    setMessage("");
    
    try {
      const response = await query({ question: currentMessage });
      const responseText = response.text || response.message || response.answer || JSON.stringify(response);
      
      setMessages(prev => [...prev, {
        type: 'bot',
        text: responseText
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "Sorry, I'm having trouble connecting right now. Please try again later."
      }]);
      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    if (!text) return '';
    
    // Split text into lines
    const lines = text.split('\n');
    const formatted = [];
    let currentList = null;
    let currentParagraph = [];
    
    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        formatted.push(
          <div key={`para-${formatted.length}`} className="chatbot__paragraph">
            {currentParagraph.map((line, idx) => (
              <div key={idx} className="chatbot__line">{line}</div>
            ))}
          </div>
        );
        currentParagraph = [];
      }
    };
    
    const flushList = () => {
      if (currentList && currentList.length > 0) {
        formatted.push(
          <div key={`list-${formatted.length}`} className="chatbot__list">
            {currentList.map((item, idx) => (
              <div key={idx} className="chatbot__list-item">
                <span className="chatbot__list-number">{item.number}.</span>
                <span className="chatbot__list-content">{item.content}</span>
              </div>
            ))}
          </div>
        );
        currentList = null;
      }
    };
    
    const formatBold = (str) => {
      const parts = str.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={idx}>{part.slice(2, -2)}</strong>;
        }
        return <span key={idx}>{part}</span>;
      });
    };
    
    lines.forEach((line, lineIndex) => {
      const trimmed = line.trim();
      
      // Check if line is a numbered list item
      const listMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
      if (listMatch) {
        flushParagraph();
        if (!currentList) currentList = [];
        currentList.push({
          number: listMatch[1],
          content: formatBold(listMatch[2])
        });
      } else if (trimmed === '') {
        // Empty line - flush current list or paragraph
        flushList();
        flushParagraph();
      } else {
        // Regular text line
        flushList();
        currentParagraph.push(formatBold(trimmed));
      }
    });
    
    // Flush any remaining content
    flushList();
    flushParagraph();
    
    return formatted.length > 0 ? formatted : text;
  };

  return (
    <>
      {!isOpen && (
        <button 
          className="chatbot__toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      )}
      
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot__header">
            <div className="chatbot__header-content">
              <div className="chatbot__header-avatar">
                <img 
                  src="/images/Profile.png" 
                  alt="Rod Kent M. Ito" 
                  className="chatbot__avatar-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const svg = e.target.parentElement.querySelector('svg');
                    if (svg) {
                      svg.style.display = 'flex';
                    }
                  }}
                />
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  style={{ display: 'none' }}
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="chatbot__header-text">
                <h3>Rod Kent Ito</h3>
                <span className="chatbot__status">Online</span>
              </div>
            </div>
            <button 
              className="chatbot__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          <div className="chatbot__messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot__message ${msg.type === 'bot' ? 'chatbot__message--bot' : 'chatbot__message--user'}`}>
                <div className="chatbot__message-bubble">
                  {msg.type === 'bot' ? formatMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot__message chatbot__message--bot">
                <div className="chatbot__message-bubble chatbot__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot__input-container">
            <div className="chatbot__input-wrapper">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="chatbot__input"
                disabled={isLoading}
                maxLength={1000}
              />
              <button 
                onClick={sendMessage}
                className="chatbot__send"
                disabled={isLoading || !message.trim()}
                aria-label="Send message"
              >
                {isLoading ? (
                  <svg className="chatbot__spinner" width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="31.416" strokeDashoffset="31.416">
                      <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416;0 31.416" repeatCount="indefinite"/>
                      <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416;-31.416" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                )}
              </button>
            </div>
            {message.length > 0 && (
              <div className="chatbot__char-count">{message.length}/1000</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
