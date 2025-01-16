// Selezione degli elementi
const form = document.getElementById("campionatureForm");
const campionatureList = document.getElementById("campionatureList");

// Evento per l'aggiunta di una nuova campionatura
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impedisce il comportamento predefinito del form

  // Ottieni i valori dei campi
  const nomeCliente = document.getElementById("nomeCliente").value;
  const nomeCommerciale = document.getElementById("nomeCommerciale").value;
  const stato = document.getElementById("stato").value;
  const dataAggiunta = document.getElementById("dataAggiunta").value;
  const dataConsegna = document.getElementById("dataConsegna").value;
  const thumbnailInput = document.getElementById("thumbnail");
  const thumbnailFile = thumbnailInput.files[0];

  // Validazione dei campi obbligatori
  if (!nomeCliente || !nomeCommerciale || !stato || !dataAggiunta) {
    alert("Compila tutti i campi obbligatori!");
    return;
  }

  // Creazione di una nuova riga nella tabella
  const row = document.createElement("tr");

  // Creazione delle celle
  row.innerHTML = `
    <td>${nomeCliente}</td>
    <td>${nomeCommerciale}</td>
    <td>${stato}</td>
    <td>${dataAggiunta}</td>
    <td>${dataConsegna || "N/A"}</td>
    <td>
      ${
        thumbnailFile
          ? `<img src="${URL.createObjectURL(thumbnailFile)}" class="thumbnail" alt="Thumbnail">`
          : "Nessuna immagine"
      }
    </td>
    <td>
      <button class="deleteBtn">Elimina</button>
    </td>
  `;

  // Aggiungi la riga alla tabella
  campionatureList.appendChild(row);

  // Aggiungi l'evento per eliminare la campionatura
  const deleteBtn = row.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", function () {
    row.remove();
  });

  // Resetta il form
  form.reset();
});
