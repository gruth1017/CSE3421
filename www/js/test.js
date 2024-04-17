// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // Sample JSON data
        var jsonData = {
            name: 'John',
            age: 30,
            email: 'john@example.com'
        };

        var fileName = 'data.json';

        // Convert JSON data to a string
        var jsonString = JSON.stringify(jsonData);

        // Write JSON data to a file
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(directoryEntry) {
            directoryEntry.getFile(fileName, { create: true }, function(fileEntry) {
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.write(jsonString);
                    console.log('Data written to file successfully');
                }, function(error) {
                    console.error('Error writing to file:', error);
                });
            });
        });



}
