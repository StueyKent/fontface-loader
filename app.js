if (!sessionStorage.fontsLoaded) {
  var fontA = new FontFaceObserver('Montserrat', {
    weight: 900
  });

  var fontB = new FontFaceObserver('Roboto', {
    weight: 100
  });

  Promise.all([fontA.load(), fontB.load()]).then(function () {
    document.querySelector('html').classList.add('fonts-loaded');
  }).then(function () {
    sessionStorage.fontsLoaded = true;
  }).catch(function () {
    sessionStorage.fontsLoaded = false;
  });
}
