function navegar(pagina) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    const sec = document.getElementById(pagina);
    if (sec) sec.classList.add("active");
    const btn = document.querySelector(`nav button[onclick="navegar('${pagina}')"]`);
    if (btn) btn.classList.add("active");
    history.pushState({ pagina }, "", `#${pagina}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('popstate', (e) => {
    if (e.state && e.state.pagina) navegar(e.state.pagina);
});

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        navegar(hash);
    }
});
