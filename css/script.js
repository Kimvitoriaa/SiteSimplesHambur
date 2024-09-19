// Scroll suave para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exibir animações ao rolar a página (scroll reveal)
const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  })
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Validação simples no formulário de contato
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        form.reset(); // Limpa o formulário após envio
    }
});
