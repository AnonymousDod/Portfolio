import { BubbleChat } from 'flowise-embed-react';

const Chatbot = () => {
  return (
    <BubbleChat
      chatflowid="b0f8bb98-33df-42dd-8af7-6d2ee4f4710c"
      apiHost="https://cloud.flowiseai.com"
      theme={{
        button: {
          backgroundColor: '#111827',
          right: 24,
          bottom: 24,
          size: 60,
          dragAndDrop: true,
          iconColor: '#ffffff',
          customIconSrc: undefined, // Use default icon
          autoWindowOpen: {
            autoOpen: false,
            openDelay: 0,
            autoOpenOnMobile: false
          }
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: 'Hi! Ask me anything 👋',
          tooltipBackgroundColor: '#111827',
          tooltipTextColor: '#ffffff',
          tooltipFontSize: 14
        },
        disclaimer: {
          title: 'Disclaimer',
          message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
          textColor: '#111827',
          buttonColor: '#111827',
          buttonText: 'Start Chatting',
          buttonTextColor: '#ffffff',
          blurredBackgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundColor: '#ffffff'
        },
        customCSS: `
          /* Match website's minimalist style */
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          }
          
          /* Chat window container */
          .bubble-chat-container,
          [class*="chat-window"],
          [class*="bubble-chat"] {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
            border-radius: 16px !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
            border: 1px solid #e5e7eb !important;
          }
          
          /* Header styling */
          [class*="header"],
          [class*="title"] {
            border-bottom: 1px solid #e5e7eb !important;
            padding: 1rem 1.25rem !important;
          }
          
          /* Message bubbles */
          [class*="message"],
          [class*="bubble"] {
            border-radius: 12px !important;
            padding: 0.75rem 1rem !important;
            font-size: 15px !important;
            line-height: 1.6 !important;
          }
          
          /* Input area */
          [class*="input"],
          [class*="text-input"] {
            border-radius: 8px !important;
            border: 1px solid #e5e7eb !important;
            padding: 0.75rem 1rem !important;
            font-size: 15px !important;
          }
          
          [class*="input"]:focus {
            border-color: #111827 !important;
            box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.1) !important;
            outline: none !important;
          }
          
          /* Button styling */
          [class*="button"],
          [class*="send"] {
            border-radius: 8px !important;
            transition: all 0.2s ease !important;
          }
          
          [class*="button"]:hover {
            opacity: 0.9 !important;
            transform: scale(1.02) !important;
          }
          
          /* Scrollbar styling */
          *::-webkit-scrollbar {
            width: 6px !important;
          }
          
          *::-webkit-scrollbar-track {
            background: transparent !important;
          }
          
          *::-webkit-scrollbar-thumb {
            background: #cbd5e1 !important;
            border-radius: 10px !important;
          }
          
          *::-webkit-scrollbar-thumb:hover {
            background: #9ca3af !important;
          }
          
          /* Dark mode support */
          .dark-mode [class*="chat-window"],
          .dark-mode [class*="bubble-chat"] {
            background-color: #111827 !important;
            border-color: #374151 !important;
          }
          
          .dark-mode [class*="input"] {
            background-color: #1f2937 !important;
            border-color: #374151 !important;
            color: #f3f4f6 !important;
          }
          
          .dark-mode [class*="input"]:focus {
            border-color: #6366f1 !important;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2) !important;
          }
          
          .dark-mode *::-webkit-scrollbar-thumb {
            background: #4b5563 !important;
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            [class*="chat-window"],
            [class*="bubble-chat"] {
              width: calc(100vw - 2rem) !important;
              max-width: 380px !important;
              height: calc(100vh - 8rem) !important;
              max-height: 600px !important;
            }
          }
        `,
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: 'Rod Kent Ito',
          titleAvatarSrc: '/images/profile.png',
          welcomeMessage: 'Hi! I\'m Rod Kent Ito. Ask me anything about my portfolio, skills, or projects!',
          errorMessage: 'Sorry, I\'m having trouble connecting right now. Please try again later.',
          backgroundColor: '#ffffff',
          backgroundImage: undefined,
          height: 600,
          width: 400,
          fontSize: 15,
          starterPrompts: [
            "Tell me about your skills",
            "What projects have you worked on?",
            "How can I contact you?"
          ],
          starterPromptFontSize: 14,
          clearChatOnReload: false,
          sourceDocsTitle: 'Sources:',
          renderHTML: true,
          botMessage: {
            backgroundColor: '#f3f4f6',
            textColor: '#111827',
            showAvatar: true,
            avatarSrc: '/images/profile.png'
          },
          userMessage: {
            backgroundColor: '#111827',
            textColor: '#ffffff',
            showAvatar: true,
            avatarSrc: undefined // Use default user icon
          },
          textInput: {
            placeholder: 'Type your message...',
            backgroundColor: '#ffffff',
            textColor: '#111827',
            sendButtonColor: '#111827',
            maxChars: 1000,
            maxCharsWarningMessage: 'You exceeded the character limit. Please input less than 1000 characters.',
            autoFocus: false,
            sendMessageSound: false,
            sendSoundLocation: undefined,
            receiveMessageSound: false,
            receiveSoundLocation: undefined
          },
          feedback: {
            color: '#6b7280'
          },
          dateTimeToggle: {
            date: true,
            time: true
          },
          footer: {
            textColor: '#9ca3af',
            text: 'Powered by',
            company: 'Flowise',
            companyLink: 'https://flowiseai.com'
          }
        }
      }}
    />
  );
};

export default Chatbot;
