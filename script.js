function navegar(pagina) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    const sec = document.getElementById(pagina);
    if (sec) sec.classList.add("active");

    // marca o item escolhido no menu e fecha os dropdowns
    document.querySelectorAll(".dropdown-menu button").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("onclick") === `navegar('${pagina}')`);
    });
    fecharDropdowns();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function fecharDropdowns(exceto) {
    document.querySelectorAll(".dropdown").forEach(drop => {
        if (drop === exceto) return;
        drop.classList.remove("open");
        drop.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
    });
}

document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", e => {
        e.stopPropagation();
        const drop = toggle.closest(".dropdown");
        const abrindo = !drop.classList.contains("open");
        fecharDropdowns(drop);
        drop.classList.toggle("open", abrindo);
        toggle.setAttribute("aria-expanded", String(abrindo));
    });
});

document.addEventListener("click", () => fecharDropdowns());

document.addEventListener("keydown", e => {
    if (e.key === "Escape") fecharDropdowns();
});
