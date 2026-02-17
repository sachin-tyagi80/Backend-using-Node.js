let { URL }=require('url')
let url=new URL("https://localhost:3000/path/test?username='abc'&id=1221#contact");
console.log(url.protocol);
console.log(url.host);
console.log(url.href);
console.log(url.port);
console.log(url.pathname);
console.log(url.searchParams.get('username'));
console.log(url.searchParams.get('id'));
console.log(url.hash);




//let url1=http://example.com:8080/path/login?name='pqr'#about"
