<<<<<<< HEAD
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Setup SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Errore durante l\'apertura del database:', err);
    } else {
        console.log('Connesso al database SQLite.');

        // Creazione delle tabelle, se non esistono
        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT,
                role TEXT
            );
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS campionature (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                cliente TEXT,
                commerciale TEXT,
                stato TEXT,
                dataAggiunta TEXT,
                dataConsegna TEXT,
                thumbnail TEXT
            );
        `);
    }
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route per aggiungere una nuova campionatura
app.post('/api/campionature', (req, res) => {
    const { nome, cliente, commerciale, stato, dataAggiunta, dataConsegna, thumbnail } = req.body;

    const sql = `
        INSERT INTO campionature (nome, cliente, commerciale, stato, dataAggiunta, dataConsegna, thumbnail)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
    db.run(sql, [nome, cliente, commerciale, stato, dataAggiunta, dataConsegna, thumbnail], function (err) {
        if (err) {
            console.error('Errore durante l\'inserimento:', err);
            res.status(500).send('Errore durante l\'inserimento.');
        } else {
            res.status(201).send({ id: this.lastID });
        }
    });
});

// Route per ottenere tutte le campionature
app.get('/api/campionature', (req, res) => {
    db.all('SELECT * FROM campionature', [], (err, rows) => {
        if (err) {
            console.error('Errore durante il recupero delle campionature:', err);
            res.status(500).send('Errore durante il recupero delle campionature.');
        } else {
            res.json(rows);
        }
    });
});

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
=======
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Setup SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Errore durante l\'apertura del database:', err);
    } else {
        console.log('Connesso al database SQLite.');

        // Creazione delle tabelle, se non esistono
        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT,
                role TEXT
            );
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS campionature (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                cliente TEXT,
                commerciale TEXT,
                stato TEXT,
                dataAggiunta TEXT,
                dataConsegna TEXT,
                thumbnail TEXT
            );
        `);
    }
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route per aggiungere una nuova campionatura
app.post('/api/campionature', (req, res) => {
    const { nome, cliente, commerciale, stato, dataAggiunta, dataConsegna, thumbnail } = req.body;

    const sql = `
        INSERT INTO campionature (nome, cliente, commerciale, stato, dataAggiunta, dataConsegna, thumbnail)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
    db.run(sql, [nome, cliente, commerciale, stato, dataAggiunta, dataConsegna, thumbnail], function (err) {
        if (err) {
            console.error('Errore durante l\'inserimento:', err);
            res.status(500).send('Errore durante l\'inserimento.');
        } else {
            res.status(201).send({ id: this.lastID });
        }
    });
});

// Route per ottenere tutte le campionature
app.get('/api/campionature', (req, res) => {
    db.all('SELECT * FROM campionature', [], (err, rows) => {
        if (err) {
            console.error('Errore durante il recupero delle campionature:', err);
            res.status(500).send('Errore durante il recupero delle campionature.');
        } else {
            res.json(rows);
        }
    });
});

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
>>>>>>> 1afec302e243e2cf5deb3e27a9ae0df5a2df834e
