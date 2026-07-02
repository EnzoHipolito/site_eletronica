function navegar(pagina) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    const sec = document.getElementById(pagina);
    if (sec) sec.classList.add("active");
}

