document.addEventListener('DOMContentLoaded', function() {
  // Styles
  const styles = `
    @import url('https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css');

    :root {
      --widget-button-color: #fefefe;
      --widget-icon-color: #000000;
      --widget-button-hover-color: #bfbfbf;
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

    .cb-widget-button {
      background-color: var(--widget-button-color);
      color: var(--widget-icon-color);
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.5s ease, opacity 0.5s ease;
      position: relative;
      overflow: hidden;
    }

    .cb-widget-button svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
      display: block;
    }

    .cb-widget-button:hover {
      background-color: var(--widget-button-hover-color);
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
      width: 260px;
      height: 80px;
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
      z-index: 9999 !important;
      transition: all 0.3s ease;
    }

    df-messenger {
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 9999 !important;
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
      z-index: 9999 !important;
    }

    df-messenger::part(input-wrapper:focus-within) {
      border-color: var(--widget-button-color) !important;
    }

    df-messenger::part(chat-wrapper) {
      z-index: 10000 !important;
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

    .social-icons {
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
    }

    .social-icons a {
      color: #000000;
      font-size: 18px;
      transition: color 0.3s ease, filter 0.3s ease;
    }

    .social-icons a:hover {
      color: #0B65C2;
      filter: brightness(1.5);
    }

    .social-icons svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    .grecaptcha-badge {
      visibility: hidden;
    }

    .recaptcha-text {
      font-size: 12px;
      color: #666;
      text-align: center;
      margin-top: 10px;
    }

    .recaptcha-text a {
      color: var(--widget-button-color);
      text-decoration: none;
    }

    .recaptcha-text a:hover {
      text-decoration: underline;
    }
    
    .flip-vertical {
      transform: scaleX(-1);
    }

    @media (max-width: 480px) {
      df-messenger {
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
  chatPopupContainer.id = 'cbchatPopupContainer';
  chatPopupContainer.className = 'cb-chat-popup-container';
  document.body.appendChild(chatPopupContainer);

  const widgetButtons = document.createElement('div');
  widgetButtons.className = 'cb-widget-buttons';
  widgetButtons.innerHTML = `
    <button class="cb-widget-button" id="searchWidgetTrigger">
      <svg  pointer-events="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
      </svg>
    </button>
    <button class="cb-widget-button" onclick="window.location.href='tel:+4915908136728';">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="flip-vertical">
        <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
      </svg>
    </button>
    <button class="cb-widget-button" onclick="window.location.href='mailto:kontakt@your-gpt.de';">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
      </svg>
    </button>
  `;
  document.body.appendChild(widgetButtons);

  const buttonStackArea = document.createElement('div');
  buttonStackArea.className = 'cb-button-stack-area';
  document.body.appendChild(buttonStackArea);

  const dfMessenger = document.createElement('df-messenger');
  dfMessenger.setAttribute('intent', 'WELCOME');
  dfMessenger.setAttribute('chat-title', 'YourGPT');
  dfMessenger.setAttribute('agent-id', '2b083f8e-0972-445f-b086-1a77242a3ac5');
  dfMessenger.setAttribute('language-code', 'de');
  document.body.appendChild(dfMessenger);

  const recaptchaText = document.createElement('div');
  
  recaptchaText.className = 'recaptcha-text';
  recaptchaText.innerHTML = `
    This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and
    <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
  `;
  document.body.appendChild(recaptchaText);

  let searchWidget = null;

  // Load Gen App Builder script
  const script = document.createElement('script');
  script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=de_DE';
  script.async = true;
  document.body.appendChild(script);

  // Create and append the search widget
  script.onload = function() {
    searchWidget = document.createElement('gen-search-widget');
    searchWidget.setAttribute('configId', '7059425d-0df0-429c-846a-86f698dc3fde');
    searchWidget.setAttribute('triggerId', 'searchWidgetTrigger');
    document.body.appendChild(searchWidget);
    console.log('Search widget created and appended');
  };

  // Handle search click
  function handleSearchClick() {
    if (searchWidget) {
      searchWidget.setAttribute('open', '');
      console.log('Search widget opened');
    } else {
      console.log('Search widget not loaded yet');
    }
  }

  // Add click event listener to the button
  const searchButton = document.getElementById('searchWidgetTrigger');
  searchButton.addEventListener('click', handleSearchClick);

  // Script logic
  let lastScrollTop = 0;
  let buttonsCollapsed = false;
  let collapseTimeout;
  let shownPopups = new Set();
  let maxScrollReached = 0;
  let pageLoadTime = Date.now();
  let firstTwoBubblesShown = false;

    window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;
  const scrollTop = window.pageYOffset;
  const scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;

  // Add the following lines to initialize widgetButtons if it's not already initialized.
  if (!widgetButtons) {
    widgetButtons = document.getElementById('widgetButtons'); // Replace 'widgetButtons' with the actual ID of your button element.
    if (!widgetButtons) {
      console.error("widgetButtons element not found!");
    }
  }

  if (scrollPercentage >= 90 && buttonsCollapsed) {
    expandButtons();
  } else if (scrollTop > lastScrollTop && !buttonsCollapsed && scrollPercentage < 90) {
    collapseButtons();
  } else if ((scrollTop < lastScrollTop || scrollPercentage >= 90) && buttonsCollapsed) {
    expandButtons();
  }

  lastScrollTop = scrollTop; // Update lastScrollTop after each scroll event

});

    function getCurrentPage() {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
      return 'home';
    } else if (path.includes('aktuelle-immobilienangebote')) {
      return 'immobilien';
    } else if (path.includes('immobilienbewertung')) {
      return 'bewertung';
    } else if (path.includes('immobilien-verkaufen')) {
      return 'verkaufen';
    } else if (path.includes('kontakt')) {
      return 'kontakt';
    } 
    else {
      return 'other';
    }
  }

  function showChatPopup(message, duration, socialIcons = false) {
    if (shownPopups.has(message)) return;
    shownPopups.add(message);

    const popup = document.createElement('div');
    popup.className = 'cb-chat-popup';
    popup.innerHTML = message;

    if (socialIcons) {
      popup.innerHTML += `
        <div class="social-icons">
          <a href="https://www.linkedin.com/company/your-gpt/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </a>
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
    if (firstTwoBubblesShown && Date.now() - pageLoadTime > 30000 && !shownPopups.has('Kann ich zu einer speziellen Frage behilflich sein?')) {
      showChatPopup('Kann ich zu einer speziellen Frage behilflich sein?', 5000);
    }
  }

  function initializeChatPopupListeners() {
    chatPopupContainer.addEventListener('click', function(event) {
      const popup = event.target.closest('.cb-chat-popup');
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

  // Initialize components
  initializeChatPopupListeners();

    // Show the first chat popup after a short delay
  setTimeout(function() {
    const currentPage = getCurrentPage();
    let message = '';

    switch(currentPage) {
      case 'home':
        message = '👋 Willkommen! Wie kann ich Ihnen helfen?';
        break;
      default:
        message = 'Haben Sie Fragen? Ich bin hier, um zu helfen!';
    }

    showChatPopup(message, 5000);
  }, 1500);

    function getSecondMessage() {
  const currentPage = getCurrentPage();
  switch(currentPage) {
    case 'home':
      return '🔎 Haben Sie gefunden was Sie suchen?';
    default:
      return 'Kann ich Ihnen bei etwas Bestimmtem helfen?';
  }
}

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

    if (maxScrollReached > 1300 && !shownPopups.has('second')) {
    showChatPopup(getSecondMessage(), 5000, false, 'second');
    }

    if (scrollPercentage > 90 && !shownPopups.has('Besuchen Sie uns gerne auf LinkedIn!')) {
      showChatPopup('Besuchen Sie uns gerne auf LinkedIn!', 7000, true);
    }

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

  // Force a repaint of the SVGs
  const buttons = document.querySelectorAll('.cb-widget-button');
  buttons.forEach(button => {
    const svg = button.querySelector('svg');
    if (svg) {
      svg.style.display = 'none';
      svg.offsetHeight; // Trigger a reflow
      svg.style.display = 'block';
    }
  });

  // Load external resources
  const dfMessengerStyleLink = document.createElement('link');
  dfMessengerStyleLink.rel = 'stylesheet';
  dfMessengerStyleLink.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
  document.head.appendChild(dfMessengerStyleLink);

  const dfMessengerScript = document.createElement('script');
  dfMessengerScript.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
  document.body.appendChild(dfMessengerScript);

  // Clean up function
  window.addEventListener('unload', function() {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
    if (searchWidget && searchWidget.parentNode) {
      searchWidget.parentNode.removeChild(searchWidget);
    }
  });
});
