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
        loadScript('https://files.bpcontent.cloud/2024/11/25/13/20241125133558-N3O9ZU6A.js')
    ])
    .then(() => {
        console.log('Alle Skripte wurden erfolgreich geladen.');
        // Hier können Sie weitere Initialisierungen vornehmen, falls erforderlich
    })
    .catch(error => {
        console.error(error);
    });
})();
