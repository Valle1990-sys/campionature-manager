<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const campionatureForm = document.getElementById("campionatureForm");
    const campionatureTable = document.getElementById("campionatureTable");

    // Variabile per tracciare il progressivo
    let progressivo = 1;

    // Aggiorna l'anno e azzera il contatore a inizio anno
    const oggi = new Date();
    let annoCorrente = oggi.getFullYear().toString().slice(2); // Es. "25" per il 2025

    // Calcola un nuovo nome progetto
    function generaNuovoNomeProgetto() {
        const nomeProgetto = `${annoCorrente}DGPC${String(progressivo).padStart(4, '0')}`;
        progressivo++;
        return nomeProgetto;
    }

    // Funzione per creare una nuova riga nella tabella
    function creaRigaCampionatura(campionatura) {
        const newRow = campionatureTable.insertRow();
        newRow.innerHTML = `
            <td>${campionatura.nome}</td>
            <td>${campionatura.cliente}</td>
            <td>${campionatura.commerciale}</td>
            <td>${campionatura.stato}</td>
            <td>${campionatura.dataAggiunta}</td>
            <td>${campionatura.dataConsegna || "N/A"}</td>
            <td>${campionatura.thumbnail ? `<img src="${campionatura.thumbnail}" alt="Thumbnail" style="width:50px;">` : "N/A"}</td>
            <td><button class="delete" data-id="${campionatura.id}">Elimina</button></td>
        `;
    }

    // Array per memorizzare le campionature
    let campionature = [];

    // Aggiunta campionature
    campionatureForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const cliente = document.getElementById("cliente").value.trim();
        const commerciale = document.getElementById("commerciale").value.trim();
        const stato = document.getElementById("stato").value;
        const dataAggiunta = document.getElementById("dataAggiunta").value || new Date().toISOString().split('T')[0];
        const dataConsegna = document.getElementById("dataConsegna").value;
        const thumbnail = document.getElementById("thumbnail").value.trim();

        if (!cliente || !commerciale || !dataAggiunta) {
            alert("Attenzione: tutti i campi essenziali devono essere compilati.");
            return;
        }

        const nuovaCampionatura = {
            id: campionature.length + 1,
            nome: generaNuovoNomeProgetto(),
            cliente,
            commerciale,
            stato,
            dataAggiunta,
            dataConsegna,
            thumbnail
        };

        campionature.push(nuovaCampionatura);
        creaRigaCampionatura(nuovaCampionatura);

        campionatureForm.reset();
    });

    // Cancella campionatura
    campionatureTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            const id = parseInt(event.target.getAttribute("data-id"), 10);
            campionature = campionature.filter(c => c.id !== id);
            event.target.parentElement.parentElement.remove();
        }
    });
});
=======
document.addEventListener("DOMContentLoaded", function () {
    const campionatureForm = document.getElementById("campionatureForm");
    const campionatureTable = document.getElementById("campionatureTable");

    // Variabile per tracciare il progressivo
    let progressivo = 1;

    // Aggiorna l'anno e azzera il contatore a inizio anno
    const oggi = new Date();
    let annoCorrente = oggi.getFullYear().toString().slice(2); // Es. "25" per il 2025

    // Calcola un nuovo nome progetto
    function generaNuovoNomeProgetto() {
        const nomeProgetto = `${annoCorrente}DGPC${String(progressivo).padStart(4, '0')}`;
        progressivo++;
        return nomeProgetto;
    }

    // Funzione per creare una nuova riga nella tabella
    function creaRigaCampionatura(campionatura) {
        const newRow = campionatureTable.insertRow();
        newRow.innerHTML = `
            <td>${campionatura.nome}</td>
            <td>${campionatura.cliente}</td>
            <td>${campionatura.commerciale}</td>
            <td>${campionatura.stato}</td>
            <td>${campionatura.dataAggiunta}</td>
            <td>${campionatura.dataConsegna || "N/A"}</td>
            <td>${campionatura.thumbnail ? `<img src="${campionatura.thumbnail}" alt="Thumbnail" style="width:50px;">` : "N/A"}</td>
            <td><button class="delete" data-id="${campionatura.id}">Elimina</button></td>
        `;
    }

    // Array per memorizzare le campionature
    let campionature = [];

    // Aggiunta campionature
    campionatureForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const cliente = document.getElementById("cliente").value.trim();
        const commerciale = document.getElementById("commerciale").value.trim();
        const stato = document.getElementById("stato").value;
        const dataAggiunta = document.getElementById("dataAggiunta").value || new Date().toISOString().split('T')[0];
        const dataConsegna = document.getElementById("dataConsegna").value;
        const thumbnail = document.getElementById("thumbnail").value.trim();

        if (!cliente || !commerciale || !dataAggiunta) {
            alert("Attenzione: tutti i campi essenziali devono essere compilati.");
            return;
        }

        const nuovaCampionatura = {
            id: campionature.length + 1,
            nome: generaNuovoNomeProgetto(),
            cliente,
            commerciale,
            stato,
            dataAggiunta,
            dataConsegna,
            thumbnail
        };

        campionature.push(nuovaCampionatura);
        creaRigaCampionatura(nuovaCampionatura);

        campionatureForm.reset();
    });

    // Cancella campionatura
    campionatureTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            const id = parseInt(event.target.getAttribute("data-id"), 10);
            campionature = campionature.filter(c => c.id !== id);
            event.target.parentElement.parentElement.remove();
        }
    });
});
>>>>>>> 1afec302e243e2cf5deb3e27a9ae0df5a2df834e
