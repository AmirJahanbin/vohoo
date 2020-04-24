function readFile(path, callback) {
    let fileInfo = null;
    // some thing spends time
    setTimeout(() => {
        fileInfo = 'fileContentBuffer of file' + path;
        // some errors happened
        const err = null;
        if (err) {
            callback(err);
        } else {
            callback(null, fileInfo);
        }
    }, 1000);
}

function main() {
    readFile('C://text.txt', function (err, data) {
        if (err != null) {
            console.error('path is invalid');
        } else {
            console.log('file content is read ===', data);
            // work with the file

            readFile('e://', function (err, data) {
                if (err != null) {
                    console.error('path is invalid for second file');
                } else {
                    console.log('file content is read ===', data);
                    readFile("D://media", function(err, data){
                        if(err != null){
                            console.log("an error occurd")
                        }
                        else{
                            console.log("file path is: " + data);
                        }
                    })
                }
            })

        }
    });
}

main();