<?php

// classe User
class User {
	protected $id;
	protected $name;
	protected $lastName;
	protected $pwd;

	// set login
	public function logIn($id, $name, $lastName, $pwd) {
		$this->id = $id;
		$this->name = $name; 
		$this->lastName = $lastName;
		$this->pwd = $pwd;
	}

}

// classe figlia di User (Admin, operatore colui che gestisce i prodotti)
class Admin extends User {
	protected $userType = 'Admin';	
}

// classe figlia di User (Customer, cliente colui che visualizza e acquista prodotti)
class Guest extends User {
	protected $userType = 'Guest';
	protected $creditCard;

	public function setCreditCard($number) {
		$this->creditCard = $number;
	}
}

// classe Prodotto
class Product {
	protected $id;
	protected $name;
	protected $code;
	protected $quantity;
	protected $price;

	// public function __construct(int $id, string $name, string $code, int $quantity, float $price) {
	// 	$this->id = $id;
	// 	$this->name = $name;
	// 	$this->code = $code;
	// 	$this->quantity = $quantity;
	// 	$this->price = $price;
	// }

	// check sul tipo di Utente, unico metodo per la classe padre
	// public function getUserType() {
	// 	return $this->userType;
	// }

	// set new products
	public function addProduct(string $userType, int $id, string $name, string $code, int $quantity, float $price) {
		if ($userType !== 'Admin') {
			echo 'Non sei autorizzato ad aggiungere/eliminare articoli';
		} else {
			$this->id = $id;
			$this->name = $name;
			$this->code = $code;
			$this->quantity = $quantity;
			$this->price = $price;
		}
	}

	public function buyProduct(string $userType, string $creditCard, int $id, string $name, string $code, int $quantity, float $price) {
		if ($userType === 'Guest' && !empty($creditCard) && strlen($creditCard) === 16) {
			// if (empty($creditCard) || strlen($creditCard <> 15)) { // non funzia
			$this->id = $id;
			$this->name = $name;
			$this->code = $code;
			$this->quantity = $quantity;
			$this->price = $price;
		} else {
			echo 'Attenzione, carta di credito non valida';
		}

	}

}

// classe figlia di Prodotto (sottoclasse di prodotto)
class Carpfishing extends Product {
	
}

// classe figlia di Prodotto (sottoclasse di prodotto)
class Surfcasting extends Product {

}

// classe figlia di Prodotto (sottoclasse di prodotto)
class Bolognese extends Product {

}

// $id, $name, $lastname, $pwd
// $admin = new Admin(0001, 'Io sono', 'l\'Amministratore', 'passwordimpossibiledadecifraresenzauncifrario');
// echo '<pre>' . var_export($admin, true) . '</pre><br/>';

// $guest = new Guest(1000, 'Io sono', 'Il Cliente', '1234');
// $guest->setCreditCard('344427386263446');
// echo '<pre>' . var_export($guest, true) . '</pre><br/>';

// $product = new Product(1, 'product1', '0ART56', 10, 50.00);
// echo '<pre>' . var_export($product, true) . '</pre>';

// $admin = new Admin();
// $admin->logIn(1, 'Io sono', 'Amministratore', 'passwordimpossibiledadecifraresenzauncifrario');

// $guest = new Guest();
// $guest->logIn(1000, 'Io sono', 'Il Cliente', '1234');
// $guest->setCreditCard(344427386263446);

// echo '<pre>' . var_export($admin, true) . '</pre><br/>';
// echo '<pre>' . var_export($guest, true) . '</pre><br/>';

/* PROVA LOG IN */
// passo al metodo addProduct il tipo User (estensione dell'entità User);
// se Admin può aggiungere/eliminare articoli
$newProduct1 = new Product(); // creo classe per aggiunta articolo se user Admin
$newProduct2 = new Product(); // creo classe per aggiunta articolo se user Guest

echo 'Guest prova aggiunta aricolo <br/>';
$newProduct1->addProduct('Guest', 2, 'newProduct1', '0ART57', 8, 45.00);
echo '<pre>' . var_export($newProduct1, true) . '</pre><br/>';

echo '<br/><br/>';

echo 'Admin prova aggiunta aricolo';
$newProduct2->addProduct('Admin', 3, 'newProduct2', '0ART58', 12, 35.00);
echo '<pre>' . var_export($newProduct2, true) . '</pre><br/>';

/* PROVA BUYING PRODUCT */
// se Guest può solo visualizzare e comprare articoli

$newProduct3 = new Product(); // creo classe per aggiunta articolo se user Admin
$newProduct4 = new Product(); // creo classe per aggiunta articolo se user Guest

echo 'Guest prova compra aricolo senza carta <br/>';
$newProduct3->buyProduct('Guest', '', 2, 'newProduct3', '0ART57', 8, 45.00);
echo '<pre>' . var_export($newProduct3, true) . '</pre><br/>';

echo '<br/><br/>';

echo 'Guest prova compra aricolo con carta <br/>';
$newProduct4->buyProduct('Guest', '3444273824644331', 3, 'newProduct4', '0ART58', 12, 35.00);
echo '<pre>' . var_export($newProduct4, true) . '</pre><br/>';