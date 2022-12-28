function requestValidator(HttpObj) {

    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\w.]+$/g;
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&\'\"]+$/g;;

    if (!(HttpObj.hasOwnProperty('method') && validMethod.includes(HttpObj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!(HttpObj.hasOwnProperty('uri') && (HttpObj.uri.match(uriPattern)))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(HttpObj.hasOwnProperty('version') && validVersion.includes(HttpObj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!(HttpObj.hasOwnProperty('message') && (HttpObj.message === '' || HttpObj.message.match(messagePattern)))) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return HttpObj;
}
// requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });

  requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  });

// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });