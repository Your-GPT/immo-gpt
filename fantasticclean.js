(function() {
    function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true; // Asynchrones Laden
        script.onload = () => callback && callback();
        script.onerror = () => console.error(`Failed to load script: ${src}`);
        document.body.appendChild(script);
    }
    loadScript('https://cdn.botpress.cloud/webchat/v2.2/inject.js', () => {
        console.log('Botpress-Webchat geladen.');
        loadScript('https://files.bpcontent.cloud/2024/11/28/11/20241128110207-4YHV7PQ4.js', () => {
            console.log('Custom-Skript geladen.');
            // Hier kannst du weitere Initialisierungen vornehmen
        });
    });
})();
