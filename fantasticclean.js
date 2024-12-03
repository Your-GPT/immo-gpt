(function() {
    // Funktion zum Laden eines Skripts
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.body.appendChild(script);
        });
    }

    // Skripte laden
    Promise.all([
        loadScript('https://cdn.botpress.cloud/webchat/v2.2/inject.js'),
        loadScript('https://files.bpcontent.cloud/2024/11/28/11/20241128110207-4YHV7PQ4.js')
    ])
    .then(() => {
        console.log('Alle Skripte wurden erfolgreich geladen.');
        // Hier können Sie weitere Initialisierungen vornehmen, falls erforderlich
    })
    .catch(error => {
        console.error(error);
    });
})();
