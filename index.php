-- Active: 1730377041341@@localhost@3306
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titolo della mia Pagina</title>

</head>

<body>

    <header>
        <h1>Benvenuto sul mio Sito PHP</h1>
    </header>

    <main>
        <?php
        function frizbuzz($number)
        {
            for ($i = 1; $i <= $number; $i++) {

                if ($i % 3 == 0 && $i % 5 == 0) {
                    echo ("FrizzBuzz" . ",");
                } elseif ($i % 3 == 0) {
                    echo ("Frizz" . ",");
                } elseif ($i % 5 == 0) {
                    echo ("Buzz" . ",");
                } else {
                    echo ($i . ",");
                }
            }
        }
        frizbuzz(15)
        ?>
    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> Il Mio Sito. Tutti i diritti riservati.</p>
    </footer>

</body>

</html>