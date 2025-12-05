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
        };
        frizbuzz(15);


        // Rimuovi Duplicati 

        function rimuoviDuplicati($string)
        {

            $removeDuplicati = str_split($string);
            $prova = array_unique($removeDuplicati);
            $prova2 = implode($prova);

            echo $prova2;
        };

        rimuoviDuplicati("mississipi");

        // Conteggio Frequenza

        function conteggioFrequenza($word)
        {
            $cleanedWord = strtolower(str_replace(' ', '', $word));
            $arrayWord = str_split($cleanedWord);
            $conteggio = [];
            foreach ($arrayWord as $char) {
                if (isset($conteggio[$char])) {
                    $conteggio[$char]++;
                } else {
                    $conteggio[$char] = 1;
                }
            };
            return $conteggio;
        };

        $result = ConteggioFrequenza("Banana");
        print_r($result);

        // Risultato con codico Ascii
        $word = "Banana";

        $risultato = count_chars($word, 1);

        print_r($risultato);


        // Somma Condizionale
        $numbers = [10, 5, 20, 3, 8];

        $filterArr = array_filter($numbers, fn($n) => $n > 5);
        $totale = array_sum($filterArr);

        echo ("totale " . $totale);



        // Ritorno di Chiavi con Valore Massimo

        $array_key = ['A' => 42, 'B' => 100, 'C' => 100, 'D' => 88];
        // prende il valore piu alto
        $highestValue = max($array_key);
        //  estrae la chiave e filtra solo quellle con il valore piu alto (100)
        $maxKeys = array_keys($array_key, $highestValue);
        print_r($maxKeys);


        // Logica e Algoritmi di Base

        // Obiettivo: Scrivi una funzione che generi la sequenza di Fibonacci fino all'ennesimo elemento.
        // Input: Intero $n = 8
        // Output Atteso: Array: [0, 1, 1, 2, 3, 5, 8, 13]



        function Fibonacci($n)
        {

            $starterArray = [0, 1];

            for ($i = 0; $i < $n - 2; $i++) {
                $length = count($starterArray);
                $newValue = $starterArray[$length - 2] +  $starterArray[$length - 1];

                array_push($starterArray, $newValue);
            };
            print_r($starterArray);
        };

        Fibonacci(8);

        // Sistema di Calcolo Area
        // Obiettivo: Implementa le classi necessarie per calcolare l'area di diverse forme, usando l'ereditarietà o le interfacce.
        // Struttura richiesta:Crea un'interfaccia Forma con il metodo calcolaArea().
        // Crea due classi: Cerchio (richiede il raggio) e Rettangolo (richiede larghezza e altezza).
        // Entrambe le classi devono implementare Forma.

        interface Forma
        {
            public function calcolaArea(): float;
        };
        class Cerchio implements Forma
        {
            private float $raggio;

            public function __construct(float $raggio)
            {
                $this->raggio = $raggio;
            }

            public function  calcolaArea(): float
            {
                return M_PI * pow($this->raggio, 2);
            }
        };


        class Rettangolo implements Forma
        {
            private float $larghezza;
            private float $altezza;

            public function __construct(float $larghezza, float $altezza)
            {
                $this->larghezza = $larghezza;
                $this->altezza = $altezza;
            }

            public function calcolaArea(): float
            {
                return $this->larghezza * $this->altezza;
            }
        }

        $raggio_cerchio = 5;
        $cerchio = new Cerchio($raggio_cerchio);
        $area_cerchio = $cerchio->calcolaArea();

        echo "Area calcolata: " . $area_cerchio . "\n\n";

        $larghezza = 5;
        $altezza = 5;
        $rettangolo = new Rettangolo($larghezza, $altezza);
        $area_rettangolo = $rettangolo->calcolaArea();

        echo "Area calcolata: " . $area_rettangolo . "\n\n";












        ?>



    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> Il Mio Sito. Tutti i diritti riservati.</p>
    </footer>

</body>

</html>