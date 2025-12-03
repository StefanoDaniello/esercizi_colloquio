-- Database: fullstack_interview_data
--
-- Impostazione per il corretto funzionamento in phpMyAdmin
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Struttura della tabella `users`
--
CREATE TABLE users (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dati di esempio per la tabella `users`
--
INSERT INTO users (name, email) VALUES
('Mario Rossi', 'mario.rossi@example.com'),
('Laura Bianchi', 'laura.bianchi@example.com'),
('Giovanni Verdi', 'giovanni.verdi@example.com'),
('Anna Neri', 'anna.neri@example.com');

--
-- Struttura della tabella `orders`
--
CREATE TABLE orders (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) UNSIGNED NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    order_date DATE NOT NULL,
    KEY user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dati di esempio per la tabella `orders`
--
INSERT INTO orders (user_id, total, order_date) VALUES
(1, 150.00, '2025-10-01'),
(1, 45.50, '2025-10-05'),
(2, 220.75, '2025-10-02'),
(2, 80.00, '2025-10-08'),
(3, 99.99, '2025-10-03'),
(4, 300.00, '2025-10-10'),
(4, 120.00, '2025-10-15');

--
-- Aggiunta del vincolo di chiave esterna (Foreign Key)
--
ALTER TABLE orders
  ADD CONSTRAINT orders_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;