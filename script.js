document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema iniciado: Mobile First");

    // --- MENU HAMBÚRGUER ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // --- FORMULÁRIO WHATSAPP ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = form.querySelector('input[name="nome"]').value;
            const telefone = form.querySelector('input[name="telefone"]').value;
            const servico = form.querySelector('select[name="servico"]').value;
            const mensagem = form.querySelector('textarea[name="mensagem"]').value;
            
            // SEU NÚMERO (SP)
            const numeroDestino = "5511999009598"; 

            const textoZap = `*PEDIDO PELO SITE (SP)*\n` +
                             ` *Nome:* ${nome}\n` +
                             ` *Tel:* ${telefone}\n` +
                             ` *Serviço:* ${servico}\n` +
                             ` *Obs:* ${mensagem}`;

            const link = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(textoZap)}`;
            
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Abrindo WhatsApp...';
            btn.style.background = '#25D366';
            
            setTimeout(() => {
                window.open(link, '_blank');
                form.reset();
                btn.innerText = originalText;
                btn.style.background = '';
            }, 1000);
        });
    }
});