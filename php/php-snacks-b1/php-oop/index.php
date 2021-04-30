<?php

class Auto {

	// all'interno della classe c'è un motore se private posso accedere chiedendo ad Automobile
	// se public posso accedere anche dall'esterno
	public $modello;
	public $motore;
	public $cerchi;
	public $telaio;
	public $cambio;

	// int serbatoio
	public $serbatoio = 20; // litri

	public $maxSerbatoioCapacity = 100;

	// per creare un oggetto la classe deve avere un costruttore (deve istanziare tutte le proprietà)
	// public function __construct() {
	// 	echo('creo Automobile');
	// }
	public function __construct($modello, $motore, $cerchi, $telaio, $cambio) {
		// echo $motore;
		$this->modello = $modello;
		$this->motore = $motore;
		$this->cerchi = $cerchi;
		$this->telaio = $telaio;
		$this->cambio = $cambio;
	}

	// metodo getter
	public function getSerbatoio() {
		return $this->serbatoio;
	}

	// metodo setter
	public function fillSerbatoio($dieselQuantity) {
		$this->serbatoio += $dieselQuantity;
	}

	public function isSerbatoioFull() {
		return $this->serbatoio === $this->maxSerbatoioCapacity;
	}

}

$mito = new Auto('Alfa MiTo', 'jtd 16', '16"', 'tubolare', 'automatico');
echo 'Modello: ' . $mito->modello . '</br>';
// echo 'Morore: ' . $mito->motore . '</br>';
echo 'Serbatoio: ' . $mito->serbatoio. '</br></br>';

// $bmw = new Auto('BMW Serie 3', 'jtd 16', '16"', 'tubolare', 'automatico');
// echo 'Modello: ' .  $bmw->modello;

if (!$mito->isSerbatoioFull()) {
	// massimo serbatoio meno quanti litri di combustibile ci sono nel serbatoio
	$diesel = $mito->maxSerbatoioCapacity - $mito->getSerbatoio();
	$mito->fillSerbatoio($diesel);
}

echo $mito->getSerbatoio();