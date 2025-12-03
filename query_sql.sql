-- Query 1: Selezione e Filtro su Join
-- Obiettivo: Trova il nome dell'utente, l'email e la data di tutti gli ordini effettuati nel mese di Ottobre 2025.

SELECT
    u.name,
    u.email,
    o.order_date
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.order_date BETWEEN '2025-10-01' AND '2025-10-31'
ORDER BY o.order_date ASC;

-- Query 2: Identificazione tramite Sottoquery
-- Obiettivo: Trova il nome di tutti gli utenti che non hanno mai fatto un ordine. (Alternativa al LEFT JOIN).

SELECT
    name
FROM users
WHERE id NOT IN (SELECT user_id FROM orders);

-- Query 3: Totale Speso, Numero di Ordini e Data Ultimo Ordine
-- Obiettivo: Riporta il nome di tutti gli utenti che hanno ordini, insieme al totale speso, al numero di ordini e alla data del loro primo ordine.

SELECT
    u.name,
    SUM(o.total) AS totale_speso,
    COUNT(o.id) AS numero_ordini,
    MIN(o.order_date) AS data_primo_ordine
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.name
ORDER BY numero_ordini DESC;


-- Query 4: Filtrare i Gruppi (HAVING) Obiettivo: 
-- Trova l'email degli utenti che hanno speso in totale più di $200.00$ e che hanno fatto 
-- meno di 3 ordini. (Combinazione di filtri HAVING).

SELECT users.email, SUM(orders.total) AS totale_speso , COUNT(orders.id) AS numero_ordini
FROM users
INNER JOIN orders ON users.id = orders.user_id
GROUP BY users.email
HAVING totale_speso > 200 AND numero_ordini < 3;

-- Query 5: Utenti Senza Ordini Specifici (LEFT JOIN + WHERE NULL)
-- Obiettivo: Trova il nome di tutti gli utenti che non hanno mai fatto un ordine 
-- (Usando LEFT JOIN, il metodo preferito).

SELECT u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NUll

-- Query 6: Classificazione dei Clienti (CASE WHEN)
-- Obiettivo: Mostra il nome dell'utente e il suo livello di cliente in base al totale speso:
-- "Top Client": Se totale speso è maggiore di $300$.
-- "Cliente Regolare": Se totale speso è tra $100$ e $300$.
-- "Nuovo Cliente": Se totale speso è minore di $100$.

SELECT
    u.name,
    SUM(o.total) AS totale_speso,
    CASE
        WHEN totale_speso > 300 THEN 'Top Client'
        WHEN totale_speso >= 100 THEN 'Cliente Regolare'
        ELSE 'Nuovo Cliente'
    END AS livello_cliente
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.name
ORDER BY totale_speso DESC;