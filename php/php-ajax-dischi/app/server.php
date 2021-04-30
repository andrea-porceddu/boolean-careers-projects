<?php

require_once '../database/database.php';

header('Content-Type: application/json'); 

// echo json_encode($discs);

$discsJson = json_encode($discs);
echo $discsJson;

// controller => entità che gestisce le chiamate (a seconda della rotta) e sa come
// rispondere (sa dove andare e prendere il dato, come elaborarlo, se prima di
// rispondere deve chiamare una funzione)
// --- E' il punto di accesso HTTP dell'applicazione ---