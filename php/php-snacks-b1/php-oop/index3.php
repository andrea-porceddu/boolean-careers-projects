<?php

class Author {
	public $tipo;
	public $nome;
	public $dataPost;

	public function __construct($tipo, $nome, $dataPost) {
		$this->tipo = $tipo;
		$this->nome = $nome;
		$this->dataPost = $dataPost;
	}

}

class Writer extends Author {
	public function setTipo() {
		$this->tipo = 'Writer';
	}
}

class Reader extends Author {
	public function setTipo() {
		$this->tipo = 'Reader';
	}
}

class Image {
	public $url;

	public function __construct($url) {
		$this->url = $url;
	}
}

class Comment {
	public $user;
	public $commento;
	public $dataCommento;

	public function __construct($user, $commento, $dataCommento) {
		$this->user = $user;
		$this->commento = $commento;
		$this->dataCommento = $dataCommento;
	}
}

class Post {
	public $posts = [];

	public function __construct($posts) {
		$this->posts[] = $posts;
	}

	public function aggiungiAutore(Author $autore) {
		$this->posts[] = $autore;
	}

	public function aggiungiImmagine(Image $url) {
		$this->posts[] = $url;
	}

	public function aggiungiCommento(Comment $comment) {
		$this->posts[] = $comment;
	}

	public function getPosts() {
		return $this->posts;
	}

}

$autore = new Author('Admin', 'nome autore', 'data post');
$img = new Image('url immagine');
$commento = new Comment('nome user', 'blablalbla', '12/12/2021');

$nuovoPost = new Post('Nuovo Post');
$nuovoPost->aggiungiAutore($autore);
$nuovoPost->aggiungiImmagine($img);
$nuovoPost->aggiungiCommento($commento);

echo '<pre>' . var_export($nuovoPost->getPosts(), true) . '</pre>';
// print_r($nuovoPost->getPosts());