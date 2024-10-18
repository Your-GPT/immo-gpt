export default function Component() {
  // Styles
  const styles = `
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
    @import url('https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css');

    :root {
      --cb-widget-button-color: #800101;
      --cb-widget-icon-color: #f2f2f2;
      --cb-widget-button-hover-color: #a00c0c;
    }

    .cb-widget-buttons {
      position: fixed;
      bottom: 20px;
      right: 78px;
      display: flex;
      flex-direction: row-reverse;
      gap: 10px;
      z-index: 998;
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .cb-chat-wrapper {
    border-radius: 50%;
    }

    .cb-widget-button {
      background-color: var(--cb-widget-button-color);
      color: var(--cb-widget-icon-color);
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

    .cb-widget-button div {
      pointer-events: none;
    }

    .cb-widget-button:hover {
      background-color: var(--cb-widget-button-hover-color);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    .cb-widget-buttons.collapsed {
      transform: translateX(70px);
      opacity: 0;
    }

    .cb-widget-buttons.collapsed .cb-widget-button {
      transform: scale(0);
    }

    .cb-button-stack-area {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 300px;
      height: 200px;
      z-index: 997;
    }

    cb-df-messenger {
      --df-messenger-bot-message: var(--cb-widget-button-color);
      --df-messenger-button-titlebar-color: var(--cb-widget-button-color);
      --df-messenger-chat-background-color: #fafafa;
      --df-messenger-font-color: #000000;
      --df-messenger-send-icon: var(--cb-widget-button-color);
      --df-messenger-user-message: #5a0f0f;
      --df-messenger-fab-color: var(--cb-widget-button-color);
      --df-messenger-fab-icon-color: var(--cb-widget-icon-color);
      --df-messenger-chat-bubble-size: 48px;
      --df-messenger-chat-bubble-background: var(--cb-widget-button-color);
      --df-messenger-chat-bubble-icon-color: var(--cb-widget-icon-color);
      --df-messenger-chat-bubble-border-radius: 50%;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    cb-df-messenger {
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }

    cb-df-messenger:hover {
        --df-messenger-chat-bubble-background: var(--cb-widget-button-hover-color);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 50%;
    }

    cb-df-messenger::part(chat-bubble) {
        border-radius: 50%;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    cb-df-messenger:hover::part(chat-bubble) {
        background-color: #e0e0e0;
        border-radius: 50%;
    }

    cb-df-messenger {
      --df-messenger-primary-color: var(--cb-widget-button-color);
      --df-messenger-titlebar-background: #ffffff;
      --df-messenger-font-color: #333333;
      --df-messenger-message-bot-background: #f2f2f2;
      --df-messenger-message-user-background: var(--cb-widget-button-color);
      --df-messenger-message-user-font-color: var(--cb-widget-icon-color);
      --df-messenger-chat-background: #ffffff;
      --df-messenger-input-background: #ffffff;
      --df-messenger-send-icon-color: var(--cb-widget-button-color);
      --df-messenger-chat-scroll-button-background: var(--cb-widget-button-color);
      --df-messenger-chat-scroll-button-font-color: var(--cb-widget-icon-color);
      --df-messenger-input-box-focus-border: 2px solid var(--cb-widget-button-color);
      --df-messenger-chat-window-height: 650px;
      --df-messenger-chat-window-width: 400px;
      --df-messenger-chat-border-radius: 2px;
      --df-messenger-card-background: #f2f2f2;
    }

    cb-df-messenger::part(input-wrapper:focus-within) {
      border-color: var(--cb-widget-button-color) !important;
    }

    .cb-chat-popup-container {
      position: fixed;
      bottom: 82px;
      right: 20px;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 0px;
      z-index: 999;
    }

    .cb-chat-popup {
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

    .cb-chat-popup:first-child {
      margin-bottom: 0;
    }

    .cb-chat-popup::after {
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

    .cb-chat-popup:hover {
      background-color: #e0e0e0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .cb-chat-popup:hover::after {
      border-top-color: #e0e0e0;
    }

    .cb-chat-popup.show {
      opacity: 1;
      transform: translateY(0);
    }

    .cb-chat-popup.hide {
      opacity: 0;
      transform: translateY(10px);
    }

    .cb-social-icons {
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
    }

    .cb-social-icons a {
      color: var(--cb-widget-button-color);
      font-size: 18px;
      transition: color 0.3s ease, filter 0.3s ease;
    }

    .cb-social-icons a:hover {
      color: var(--cb-widget-button-hover-color);
      filter: brightness(1.5);
    }

    .cb-grecaptcha-badge {
      visibility: hidden;
    }

    .cb-recaptcha-text {
      font-size: 12px;
      color: #666;
      text-align: center;
      margin-top: 10px;
    }

    .cb-recaptcha-text a {
      color: var(--cb-widget-button-color);
      text-decoration: none;
    }

    .cb-recaptcha-text a:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      cb-df-messenger {
        --df-messenger-chat-window-height: 75vh;
        --df-messenger-chat-window-width: calc(100vw - 40px);
      }
    }
  `;

  // Create style element
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);

  // Create and append elements
  const chatPopupContainer = document.createElement('div');
  chatPopupContainer.id = 'cbChatPopupContainer';
  chatPopupContainer.className = 'cb-chat-popup-container';
  document.body.appendChild(chatPopupContainer);

  const widgetButtons = document.createElement('div');
  widgetButtons.className = 'cb-widget-buttons';
  widgetButtons.innerHTML = `
    <button class="cb-widget-button" id="cbSearchWidgetTrigger">
      <div class="fas fa-search"></div>
    </button>
    <button class="cb-widget-button" id="cbPhoneButton">
      <div class="fas fa-phone"></div>
    </button>
    <button class="cb-widget-button" id="cbEmailButton">
      <div class="fas fa-envelope"></div>
    </button>
  `;
  document.body.appendChild(widgetButtons);

  const buttonStackArea = document.createElement('div');
  buttonStackArea.className = 'cb-button-stack-area';
  document.body.appendChild(buttonStackArea);

  const dfMessenger = document.createElement('cb-df-messenger');
  dfMessenger.setAttribute('intent', 'WELCOME');
  dfMessenger.setAttribute('chat-title', 'ChatBot');
  dfMessenger.setAttribute('agent-id', '');
  dfMessenger.setAttribute('language-code', 'de');
  document.body.appendChild(dfMessenger);

  const recaptchaText = document.createElement('div');
  recaptchaText.className = 'cb-recaptcha-text';
  recaptchaText.innerHTML = `
    This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and
    <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
  `;
  document.body.appendChild(recaptchaText);

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
    popup.className = 'cb-chat-popup';
    popup.innerHTML = message;

    if (socialIcons) {
      popup.innerHTML += `
        <div class="cb-social-icons">
          <a href="#" target="_blank"><div class="fab fa-instagram"></div></a>
          <a href="#" target="_blank"><div class="fab fa-facebook"></div></a>
          <a href="#" target="_blank"><div class="fab fa-youtube"></div></a>
          <a href="#" target="_blank"><div class="fab fa-linkedin"></div></a>
        </div>
      `;
    }

    chatPopupContainer.insertBefore(popup, chatPopupContainer.firstChild);

    const existingPopups = chatPopupContainer.querySelectorAll('.cb-chat-popup');
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
        const remainingPopups = chatPopupContainer.querySelectorAll('.cb-chat-popup');
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
    if (firstTwoBubblesShown && Date.now() - pageLoadTime > 30000 && !shownPopups.has('Kann ich Ihnen zu einer speziellen Frage behilflich sein?')) {
      showChatPopup('Kann ich Ihnen zu einer speziellen Frage behilflich sein?', 5000);
    }
  }

  function initializeSearchButton() {
    const searchButton = document.getElementById('cbSearchWidgetTrigger');
    if (searchButton) {
      searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        const searchWidget = document.querySelector('cb-gen-search-widget');
        if (searchWidget) {
          searchWidget.setAttribute('open', '');
        }
      });
    }
  }

  function initializePhoneButton() {
    const phoneButton = document.getElementById('cbPhoneButton');
    if (phoneButton) {
      phoneButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'tel:+123456789';
      });
    }
  }

  function initializeEmailButton() {
    const emailButton = document.getElementById('cbEmailButton');
    if (emailButton) {
      emailButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'mailto:info@example.com';
      });
    
    }
  }

  function initializeChatPopupListeners() {
    chatPopupContainer.addEventListener('click', function(event) {
      const popup = event.target.closest('.cb-chat-popup');
      if (popup) {
        if (event.target.closest('.cb-social-icons a')) {
          return;
        }
        const dfMessenger = document.querySelector('cb-df-messenger');
        if (dfMessenger) {
          dfMessenger.setAttribute('expand', 'true');
        }
      }
    });
  }

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeSearchButton();
    initializePhoneButton();
    initializeEmailButton();
    initializeChatPopupListeners();
    showChatPopup('👋 Willkommen! Wie kann ich Ihnen helfen?', 5000);
  });

  // Wait for the window to fully load
  window.addEventListener('load', function() {
    initializeSearchButton();
    
    // Create and append the search widget
    const searchWidget = document.createElement('cb-gen-search-widget');
    searchWidget.setAttribute('configId', '');
    searchWidget.setAttribute('triggerId', 'cbSearchWidgetTrigger');
    document.body.appendChild(searchWidget);
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

    if (maxScrollReached > 1300 && !shownPopups.has('🔎 Haben Sie gefunden was Sie suchen?')) {
      showChatPopup('🔎 Haben Sie gefunden was Sie suchen?', 5000);
    }

    if (scrollPercentage > 90 && !shownPopups.has('Besuchen Sie uns gerne auf Social Media!')) {
      showChatPopup('Besuchen Sie uns gerne auf Social Media!', 7000, true);
    }

    checkForFourthBubble();
  });

  setInterval(checkForFourthBubble, 1000);

  buttonStackArea.addEventListener('mouseenter', expandButtons);

  document.addEventListener('mousemove', function(e) {
    const chatbot = document.querySelector('cb-df-messenger');
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

  return null;
}
