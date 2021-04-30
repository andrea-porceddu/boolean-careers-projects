<?php

/* Andata e Ritorno */
// Cagliari Elmas Italia
// Milano Linate Italia
// Ven, 19 Mar, 21
// Lun, 22 Mar, 21

/*
class Biglietto {
	public $aeroportoPartenza;
	public $aeroportoArrivo;
	public $dataPartenza;
	public $dataRitorno;
	public $adulti = 1;
	public $bambini;

	public function __construct
	(
		$aeroportoPartenza, 
		$aeroportoArrivo, 
		$dataPartenza, 
		$dataRitorno, 
		$adulti, 
		$bambini
	)
	{
		$this->aeroportoPartenza = $aeroportoPartenza;
		$this->aeroportoArrivo = $aeroportoArrivo;
		$this->dataPartenza = $dataPartenza;
		$this->dataRitorno = $dataRitorno;
		$this->adulti = $adulti;
		$this->bambini = $bambini;
	}
}
*/

/*
$biglietto1 = new Biglietto
(
	'Cagliari Elmas Italia', 
	'Milano Linate Italia', 
	'Ven, 19 Mar, 21',
	'Lun, 22 Mar, 21',
	'1',
	'0'
);

echo 'Partenza da: ' . $biglietto1->aeroportoPartenza . '<br/>';
echo 'Arrivo a: ' . $biglietto1->aeroportoArrivo . '<br/>';
echo 'Data Partenza: ' . $biglietto1->dataPartenza . '<br/>';
echo 'Data Ritorno: ' . $biglietto1->dataRitorno . '<br/>';
echo 'Adulti: ' . $biglietto1->adulti . '<br/>';
echo 'Bambini: ' . $biglietto1->bambini . '<br/>';
*/

class Biglietto {
	public $aeroportoPartenza;
	public $aeroportoArrivo;
	public $dataPartenza;
	public $dataRitorno;
	public $adulti = 1;
	public $bambini;

	public function __construct
	(
		$aeroportoPartenza, 
		$aeroportoArrivo, 
		$dataPartenza, 
		$dataRitorno, 
		$adulti, 
		$bambini
	)
	{
		$this->aeroportoPartenza = $aeroportoPartenza;
		$this->aeroportoArrivo = $aeroportoArrivo;
		$this->dataPartenza = $dataPartenza;
		$this->dataRitorno = $dataRitorno;
		$this->adulti = $adulti;
		$this->bambini = $bambini;
	}
}

class Volo {

	private $voli = [];

	public function aggiungiBiglietto(Biglietto $biglietto) {
		$this->voli[] = $biglietto;
	}

	public function getVoli() {
		return $this->voli;
	}

	public function __toString() {
		return $this->voli;
	}

}

$biglietto1 = new Biglietto
(
	'Cagliari Elmas Italia', 
	'Milano Linate Italia', 
	'Ven, 19 Mar, 21',
	'Lun, 22 Mar, 21',
	'1',
	'0'
);

$biglietto2 = new Biglietto
(
	'Roma Fiumicino Italia', 
	'Londra City Regno Unito Italia', 
	'Mar, 16 Mar, 21',
	'Gio, 18 Mar, 21',
	'2',
	'1'
);

$biglietto3 = new Biglietto
(
	'Cagliari Elmas Italia', 
	'Dublino Internazionale Irlanda', 
	'Ven, 14 Mag, 21',
	'Lun, 31 Mag, 21',
	'2',
	'0'
);

$nuovoVolo = new Volo();
$nuovoVolo->aggiungiBiglietto($biglietto1);
$nuovoVolo->aggiungiBiglietto($biglietto2);
$nuovoVolo->aggiungiBiglietto($biglietto3);

foreach ($nuovoVolo as $key => $value) {
	echo $key;
}

// var_dump($nuovoVolo);
// print_r($nuovoVolo->getVoli());