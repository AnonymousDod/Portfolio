import { BubbleChat } from 'flowise-embed-react';

const Chatbot = () => {
  return (
    <BubbleChat
      chatflowid="b0f8bb98-33df-42dd-8af7-6d2ee4f4710c"
      apiHost="https://cloud.flowiseai.com"
      theme={{
        button: {
          backgroundColor: '#111827',
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: '#ffffff',
          customIconSrc: undefined,
          autoWindowOpen: {
            autoOpen: false,
            openDelay: 0,
            autoOpenOnMobile: false
          }
        },
        tooltip: {
          showTooltip: false
        },
        customCSS: `
          /* Clean minimalist style */
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
          }
          
          /* Compact chat window */
          [class*="chat-window"],
          [class*="bubble-chat"] {
            border-radius: 12px !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1) !important;
            border: 1px solid #e5e7eb !important;
          }
          
          /* Compact header */
          [class*="header"],
          [class*="title"] {
            padding: 0.75rem 1rem !important;
            border-bottom: 1px solid #e5e7eb !important;
            font-size: 14px !important;
          }
          
          /* Compact messages */
          [class*="message"],
          [class*="bubble"] {
            border-radius: 8px !important;
            padding: 0.5rem 0.75rem !important;
            font-size: 14px !important;
            line-height: 1.5 !important;
            margin: 0.25rem 0 !important;
          }
          
          /* Compact input */
          [class*="input"],
          [class*="text-input"] {
            border-radius: 6px !important;
            border: 1px solid #e5e7eb !important;
            padding: 0.5rem 0.75rem !important;
            font-size: 14px !important;
          }
          
          [class*="input"]:focus {
            border-color: #111827 !important;
            outline: none !important;
            box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.1) !important;
          }
          
          /* Thin scrollbar */
          *::-webkit-scrollbar {
            width: 4px !important;
          }
          
          *::-webkit-scrollbar-thumb {
            background: #cbd5e1 !important;
            border-radius: 2px !important;
          }
          
          /* Dark mode */
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
          
          .dark-mode *::-webkit-scrollbar-thumb {
            background: #4b5563 !important;
          }
          
          /* Hide disclaimer and footer */
          [class*="disclaimer"],
          [class*="footer"],
          [class*="powered-by"] {
            display: none !important;
          }
        `,
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: 'Rod Kent Ito',
          titleAvatarSrc: '/images/profile.png',
          welcomeMessage: 'Hi! Ask me anything about my portfolio, skills, or projects.',
          errorMessage: 'Sorry, I\'m having trouble connecting. Please try again later.',
          backgroundColor: '#ffffff',
          backgroundImage: undefined,
          height: 480,
          width: 320,
          fontSize: 14,
          starterPrompts: [
            "Tell me about your skills",
            "What projects have you worked on?",
            "How can I contact you?"
          ],
          starterPromptFontSize: 13,
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
            showAvatar: false,
            avatarSrc: undefined
          },
          textInput: {
            placeholder: 'Type your message...',
            backgroundColor: '#ffffff',
            textColor: '#111827',
            sendButtonColor: '#111827',
            maxChars: 1000,
            maxCharsWarningMessage: 'Character limit exceeded.',
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
            date: false,
            time: false
          },
          footer: {
            textColor: '#9ca3af',
            text: '',
            company: '',
            companyLink: ''
          }
        }
      }}
    />
  );
};

export default Chatbot;
