const cvLink = document.querySelector('.download-cv');

async function downloadCV() {
  const cvFile = await fetch(
    'https://nazimajumaniyazova.github.io/portfolio/src/files/CV_Nazima_Jumaniyazova_EN.pdf'
  );
  const cvFileBlob = await cvFile.blob();

  const aElement = document.createElement('a');
  aElement.setAttribute('download', 'CV_Nazima_Jumaniyazova_EN.pdf');
  const href = URL.createObjectURL(cvFileBlob);
  aElement.href = href;
  aElement.click();
  URL.revokeObjectURL(href);
}
cvLink.addEventListener('click', downloadCV);
