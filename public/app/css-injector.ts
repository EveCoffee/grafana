const urlParams = new URLSearchParams(location.search?.replace(/^\?/, ''));
const cssInject = urlParams.get('cssInject');
if (cssInject) {
  console.log('hello, css-injector');
  console.log(cssInject);
  const cssLinks = cssInject.split(',');
  cssLinks.forEach((cssLink) => {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssLink;
    head.appendChild(link);
    console.log(link);
  });
}
