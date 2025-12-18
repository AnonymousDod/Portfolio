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
          size: 56,
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
          .bubble-chat-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          .dark-mode .bubble-chat-container {
            background-color: #0f172a;
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
          width: 380,
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
            autoFocus: true,
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
