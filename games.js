var iframeUrl = '';

document.getElementById("iframeBtn1").addEventListener("click", function() {
  iframeUrl = 'https://learnsmartly.org/shuttle-uv/hvtrs8%2F-dksaopd%2Ccmm-lmgkn';
  createIframe();
});

document.getElementById("iframeBtn2").addEventListener("click", function() {
  iframeUrl = 'https://example.com/another-url';
  createIframe();
});

function createIframe() {
  window.onload = function() {
    window.document.body.style.margin = '0';
    window.document.body.style.height = '100vh';
    window.navigator.serviceWorker.register('../sw.js', {
      scope: '/service/',
    });
    var iframe = window.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = iframeUrl;
    window.document.body.appendChild(iframe);
    window.history.pushState("", "", '/library/');
  };
}