// ======= JS del Portafolio de Facundo =======
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function filterProjects(tag){
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const tags = card.getAttribute('data-tags');
    if (tag==='all' || (tags && tags.includes(tag))){
      card.classList.remove('d-none');
    } else {
      card.classList.add('d-none');
    }
  });
}

function handleContactSubmit(form){
  const status = document.getElementById('formStatus');
  status.textContent = '¡Mensaje enviado! Te responderé pronto.';
  form.reset();
}
