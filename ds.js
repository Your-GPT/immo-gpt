(function() {
  // Styles
  const styles = `
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
    @import url('https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css');

    :root {
      --widget-button-color: #000000;
      --widget-icon-color: #FFFFFF;
      --widget-button-hover-color: #3d3d3d;
    }

    .widget-buttons {
      position: fixed;
      bottom: 20px;
      right: 78px;
      display: flex;
      flex-direction: row-reverse;
      gap: 10px;
      z-index: 998;
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .chat-wrapper {
    border-radius: 50%;
    }

    .widget-button {
      background-color: var(--widget-button-color);
      color: var(--widget-icon-color);
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.5s ease, opacity 0.5s ease;
      position: relative;
    }

    .widget-button i {
      pointer-events: none;
    }

    .widget-button:hover {
      background-color: var(--widget-button-hover-color);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    .widget-buttons.collapsed {
      transform: translateX(70px);
      opacity: 0;
    }

    .widget-buttons.collapsed .widget-button {
      transform: scale(0);
    }

    .button-stack-area {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 300px;
      height: 200px;
      z-index: 997;
    }

df-messenger {
  --df-messenger-bot-message: var(--widget-button-color);
  --df-messenger-button-titlebar-color: var(--widget-button-color);
  --df-messenger-chat-background-color: #fafafa;
  --df-messenger-font-color: #000000;
  --df-messenger-send-icon: var(--widget-button-color);
  --df-messenger-user-message: #5a0f0f;
  --df-messenger-fab-color: var(--widget-button-color);
  --df-messenger-fab-icon-color: var(--widget-icon-color);
  --df-messenger-chat-bubble-size: 48px;
  --df-messenger-chat-bubble-background: var(--widget-button-color);
  --df-messenger-chat-bubble-icon-color: var(--widget-icon-color);
  --df-messenger-chat-bubble-border-radius: 50%;
  z-index: 10000;
  transition: all 0.3s ease;
}

df-messenger {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 10000;
}

df-messenger:hover {
    --df-messenger-chat-bubble-background: var(--widget-button-hover-color);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
}

df-messenger::part(chat-bubble) {
    border-radius: 50%;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

df-messenger:hover::part(chat-bubble) {
    background-color: #e0e0e0;
    border-radius: 50%;
}

    df-messenger {
      --df-messenger-primary-color: var(--widget-button-color);
      --df-messenger-titlebar-background: #ffffff;
      --df-messenger-font-color: #333333;
      --df-messenger-message-bot-background: #f2f2f2;
      --df-messenger-message-user-background: var(--widget-button-color);
      --df-messenger-message-user-font-color: var(--widget-icon-color);
      --df-messenger-chat-background: #ffffff;
      --df-messenger-input-background: #ffffff;
      --df-messenger-send-icon-color: var(--widget-button-color);
      --df-messenger-chat-scroll-button-background: var(--widget-button-color);
      --df-messenger-chat-scroll-button-font-color: var(--widget-icon-color);
      --df-messenger-input-box-focus-border: 2px solid var(--widget-button-color);
      --df-messenger-chat-window-height: 650px;
      --df-messenger-chat-window-width: 400px;
      --df-messenger-chat-border-radius: 2px;
      --df-messenger-card-background: #f2f2f2;
        z-index: 10000;

    }

    df-messenger::part(input-wrapper:focus-within) {
      border-color: var(--widget-button-color) !important;
    }

    .chat-popup-container {
      position: fixed;
      bottom: 82px;
      right: 20px;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 0px;
      z-index: 999;
    }

    .chat-popup {
      position: relative;
      background-color: #f2f2f2;
      color: #333333;
      padding: 12px 20px;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      z-index: 999;
      font-size: 13px;
      max-width: 400px;
      width: max-content;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.3;
      cursor: pointer;
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: translateY(10px);
      margin-bottom: -26px;
    }

    .chat-popup:first-child {
      margin-bottom: 0;
    }

    .chat-popup::after {
      content: '';
      position: absolute;
      bottom: -8px;
      right: 20px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #f2f2f2;
      transition: border-top-color 0.3s ease;
    }

    .chat-popup:hover {
      background-color: #e0e0e0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .chat-popup:hover::after {
      border-top-color: #e0e0e0;
    }

    .chat-popup.show {
      opacity: 1;
      transform: translateY(0);
    }

    .chat-popup.hide {
      opacity: 0;
      transform: translateY(10px);
    }


    @media (max-width: 480px) {
      df-messenger {
        --df-messenger-chat-window-height: 75vh;
        --df-messenger-chat-window-width: calc(100vw - 40px);
      }
  `;

  // Create style element
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);

  // Create and append elements
  const chatPopupContainer = document.createElement('div');
  chatPopupContainer.id = 'chatPopupContainer';
  chatPopupContainer.className = 'chat-popup-container';
  document.body.appendChild(chatPopupContainer);

  const widgetButtons = document.createElement('div');
  widgetButtons.className = 'widget-buttons';
  widgetButtons.innerHTML = `
    
    <button class="widget-button" onclick="window.location.href='tel:0800 955 66 77';">
      <i class="fas fa-phone"></i>
    </button>
    <button class="widget-button" onclick="window.location.href='mailto:kontakt@deinestadt-immo.de';">
      <i class="fas fa-envelope"></i>
    </button>
  `;
  document.body.appendChild(widgetButtons);

  const buttonStackArea = document.createElement('div');
  buttonStackArea.className = 'button-stack-area';
  document.body.appendChild(buttonStackArea);

  const dfMessenger = document.createElement('df-messenger');
  dfMessenger.setAttribute('intent', 'WELCOME');
  dfMessenger.setAttribute('chat-title', 'DeineStadtGPT');
  dfMessenger.setAttribute('agent-id', '8e73ae1d-7a89-47a4-a67c-610e59b4b4e3');
  dfMessenger.setAttribute('language-code', 'de');
  document.body.appendChild(dfMessenger);



  // Script logic
  let lastScrollTop = 0;
  let buttonsCollapsed = false;
  let collapseTimeout;
  let shownPopups = new Set();
  let maxScrollReached = 0;
  let pageLoadTime = Date.now();
  let firstTwoBubblesShown = false;

  function showChatPopup(message, duration, socialIcons = false) {
    if (shownPopups.has(message)) return;
    shownPopups.add(message);

    const popup = document.createElement('div');
    popup.className = 'chat-popup';
    popup.innerHTML = message;

    

    chatPopupContainer.insertBefore(popup, chatPopupContainer.firstChild);

    const existingPopups = chatPopupContainer.querySelectorAll('.chat-popup');
    existingPopups.forEach((existingPopup, index) => {
      if (index > 0) {
        existingPopup.style.transform = `translateY(-${index * 100}%)`;
      }
    });

    setTimeout(() => {
      popup.classList.add('show');
    }, 100);

    setTimeout(() => {
      popup.classList.remove('show');
      popup.classList.add('hide');
      setTimeout(() => {
        chatPopupContainer.removeChild(popup);
        const remainingPopups = chatPopupContainer.querySelectorAll('.chat-popup');
        remainingPopups.forEach((remainingPopup, index) => {
          remainingPopup.style.transform = `translateY(-${index * 100}%)`;
        });
      }, 300);
    }, duration);

    if (shownPopups.size === 2) {
      firstTwoBubblesShown = true;
      checkForFourthBubble();
    }
  }

  function checkForFourthBubble() {
    if (firstTwoBubblesShown && Date.now() - pageLoadTime > 30000 && !shownPopups.has('🔎 Haben Sie gefunden was Sie suchen?')) {
      showChatPopup('🔎 Haben Sie gefunden was Sie suchen?', 5000);
    }
  }



  function initializeChatPopupListeners() {
    chatPopupContainer.addEventListener('click', function(event) {
      const popup = event.target.closest('.chat-popup');
      if (popup) {
        if (event.target.closest('.social-icons a')) {
          return;
        }
        const dfMessenger = document.querySelector('df-messenger');
        if (dfMessenger) {
          dfMessenger.setAttribute('expand', 'true');
        }
      }
    });
  }

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeChatPopupListeners();
    showChatPopup('👋 Willkommen! Wie kann ich Ihnen helfen?', 5000);
  });



  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    maxScrollReached = Math.max(maxScrollReached, scrollTop);

    if (scrollTop > lastScrollTop && !buttonsCollapsed) {
      collapseButtons();
    } else if (scrollTop < lastScrollTop && buttonsCollapsed) {
      expandButtons();
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;



    

    checkForFourthBubble();
  });

  setInterval(checkForFourthBubble, 1000);

  buttonStackArea.addEventListener('mouseenter', expandButtons);

  document.addEventListener('mousemove', function(e) {
    const chatbot = document.querySelector('df-messenger');
    if (chatbot) {
      const chatbotRect = chatbot.getBoundingClientRect();
      const buttonStackRect = buttonStackArea.getBoundingClientRect();
      const isNearButtons = e.clientX > buttonStackRect.left && e.clientX < chatbotRect.right &&
                            e.clientY > buttonStackRect.top && e.clientY < chatbotRect.bottom;

      if (isNearButtons) {
        clearTimeout(collapseTimeout);
        expandButtons();
      } else if (!buttonsCollapsed && lastScrollTop > 0) {
        clearTimeout(collapseTimeout);
        collapseTimeout = setTimeout(collapseButtons, 1000);
      }
    }
  });

  function collapseButtons() {
    widgetButtons.classList.add('collapsed');
    buttonsCollapsed = true;
  }

  function expandButtons() {
    widgetButtons.classList.remove('collapsed');
    buttonsCollapsed = false;
  }

  // Load external resources
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  document.head.appendChild(fontAwesomeLink);

  const dfMessengerStyleLink = document.createElement('link');
  dfMessengerStyleLink.rel = 'stylesheet';
  dfMessengerStyleLink.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
  document.head.appendChild(dfMessengerStyleLink);

  const dfMessengerScript = document.createElement('script');
  dfMessengerScript.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
  document.body.appendChild(dfMessengerScript);

  // Load Gen App Builder script
  const genAppBuilderScript = document.createElement('script');
  genAppBuilderScript.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
  document.body.appendChild(genAppBuilderScript);
})();
