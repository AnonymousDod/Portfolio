import { BubbleChat } from 'flowise-embed-react';
import { useTheme } from '../contexts/ThemeContext';

const Chatbot = () => {
  const { isDarkMode } = useTheme();
  
  // Dynamic colors based on theme
  const buttonBg = isDarkMode ? '#6366f1' : '#111827';
  const chatWindowBg = isDarkMode ? '#111827' : '#ffffff';
  const chatWindowBorder = isDarkMode ? '#374151' : '#e5e7eb';
  const headerBorder = isDarkMode ? '#374151' : '#e5e7eb';
  const botMessageBg = isDarkMode ? '#374151' : '#f3f4f6';
  const botMessageText = isDarkMode ? '#f3f4f6' : '#111827';
  const userMessageBg = isDarkMode ? '#6366f1' : '#111827';
  const inputBg = isDarkMode ? '#1f2937' : '#ffffff';
  const inputBorder = isDarkMode ? '#374151' : '#e5e7eb';
  const inputText = isDarkMode ? '#f3f4f6' : '#111827';
  const inputFocusBorder = isDarkMode ? '#6366f1' : '#111827';
  const scrollbarThumb = isDarkMode ? '#4b5563' : '#cbd5e1';
  
  return (
    <BubbleChat
      chatflowid="b0f8bb98-33df-42dd-8af7-6d2ee4f4710c"
      apiHost="https://cloud.flowiseai.com"
      theme={{
        button: {
          backgroundColor: buttonBg,
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
            box-shadow: 0 4px 16px rgba(0, 0, 0, ${isDarkMode ? '0.3' : '0.1'}) !important;
            border: 1px solid ${chatWindowBorder} !important;
            background-color: ${chatWindowBg} !important;
            transition: background-color 0.3s ease, border-color 0.3s ease !important;
          }
          
          /* Compact header */
          [class*="header"],
          [class*="title"] {
            padding: 0.75rem 1rem !important;
            border-bottom: 1px solid ${headerBorder} !important;
            font-size: 14px !important;
            background-color: ${chatWindowBg} !important;
            color: ${isDarkMode ? '#f3f4f6' : '#111827'} !important;
            transition: background-color 0.3s ease, border-color 0.3s ease !important;
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
          
          /* Text input box - fixed styling */
          [class*="input"],
          [class*="text-input"],
          input[type="text"],
          textarea {
            border-radius: 8px !important;
            border: 1px solid ${inputBorder} !important;
            padding: 0.625rem 0.875rem !important;
            font-size: 14px !important;
            background-color: ${inputBg} !important;
            color: ${inputText} !important;
            transition: all 0.2s ease !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          
          [class*="input"]::placeholder,
          [class*="text-input"]::placeholder,
          input[type="text"]::placeholder,
          textarea::placeholder {
            color: ${isDarkMode ? '#6b7280' : '#9ca3af'} !important;
          }
          
          [class*="input"]:focus,
          [class*="text-input"]:focus,
          input[type="text"]:focus,
          textarea:focus {
            border-color: ${inputFocusBorder} !important;
            outline: none !important;
            box-shadow: 0 0 0 2px ${isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(17, 24, 39, 0.1)'} !important;
          }
          
          /* Input container */
          [class*="input-container"],
          [class*="input-wrapper"] {
            background-color: ${chatWindowBg} !important;
            border-top: 1px solid ${headerBorder} !important;
            padding: 0.75rem 1rem !important;
            transition: background-color 0.3s ease, border-color 0.3s ease !important;
          }
          
          /* Thin scrollbar */
          *::-webkit-scrollbar {
            width: 4px !important;
          }
          
          *::-webkit-scrollbar-thumb {
            background: ${scrollbarThumb} !important;
            border-radius: 2px !important;
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
          titleAvatarSrc: '/images/Profile.png',
          welcomeMessage: 'Hi! Ask me anything about my portfolio, skills, or projects.',
          errorMessage: 'Sorry, I\'m having trouble connecting. Please try again later.',
          backgroundColor: chatWindowBg,
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
            backgroundColor: botMessageBg,
            textColor: botMessageText,
            showAvatar: true,
            avatarSrc: '/images/profile.png'
          },
          userMessage: {
            backgroundColor: userMessageBg,
            textColor: '#ffffff',
            showAvatar: false,
            avatarSrc: undefined
          },
          textInput: {
            placeholder: 'Type your message...',
            backgroundColor: inputBg,
            textColor: inputText,
            sendButtonColor: isDarkMode ? '#6366f1' : '#111827',
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
