const cvLink = document.querySelector('.download-cv')

async function downloadCV(){
  const cvFile = await fetch('http://127.0.0.1:5500/src/files/CV_Nazima_Jumaniyazova_EN.pdf')
  const cvFileBlob = await cvFile.blob();

  const aElement = document.createElement('a');
  aElement.setAttribute('download', 'CV_Nazima_Jumaniyazova_EN.pdf');
  const href = URL.createObjectURL(cvFileBlob);
  aElement.href = href;
  //aElement.setAttribute('target', '_blank');
  aElement.click();
  URL.revokeObjectURL(href);
}
cvLink.addEventListener('click', downloadCV)