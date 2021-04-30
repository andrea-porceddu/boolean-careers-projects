<?php

class Libro {
	public $autore;
	public $titolo;
	public $editore;

	public function __construct($autore, $titolo, $editore) {
		$this->autore = $autore;
		$this->titolo = $titolo;
		$this->editore = $editore;
	}
}

class Biblioteca {
	// public $nome;
	private $libri = [];

	// public function __construct() {
	// 	$this->nome = $nome;
	// }

	public function aggiungiLibro(Libro $libro) { //classe Libro come se fosse il tipo
		$this->libri[] = $libro;
	}

	public function getBooks() {
		return $this->libri;
	}

}

$dorian = new Libro('Oscar Wilde', 'Il ritratto di Dorian Grey', 'Newton');
echo 'Titolo: ' . $dorian->titolo . '<br/>';
echo 'Autore: ' . $dorian->autore . '<br/>';
echo 'Editore: ' . $dorian->editore . '<br/><br/>';

$svevo = new Libro('Italo Svevo', 'La coscienza di Zeno', 'Dall\'Oglio');
echo 'Titolo: ' . $svevo->titolo . '<br/>';
echo 'Autore: ' . $svevo->autore . '<br/>';
echo 'Editore: ' . $svevo->editore . '<br/><br/>';;

$nuovaBiblioteca = new Biblioteca('Nuova Biblioteca');
$nuovaBiblioteca->aggiungiLibro($dorian);

var_dump($nuovaBiblioteca);
print_r($nuovaBiblioteca->getBooks());