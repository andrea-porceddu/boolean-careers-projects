<?php

require_once __DIR__ . '/database/database.php';

// print_r($discs);

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- main css -->
	<link rel="stylesheet" href="./dist/css/style.css">
	<title>Document</title>
</head>
<body>
	
	<div class="body-container">

		<header class="top-header">
			<div class="top-nav">
				<div class="logo">
					<img src="./img/logo.png" alt="">
				</div>
				<div class="right-nav">
					
				</div>
			</div>
		</header>
	
		<main class="main-content">

			<!-- <div class="disc">
				<div class="disc-cover">
					<img src="./img/new-jersey.jpg" alt="">
				</div>
				<div class="disc-details">
					<span class="title">new jersey</span>
					<span class="author">bon jovi</span>
					<span class="year">1988</span>
				</div>
			</div> -->

			<?php

			if (empty($_GET["genere"]) || $_GET["genere"] === 'all') {
				foreach ($discs as $disc) {
					echo '
						<div class="disc">
							<div class="disc-cover">
								<img src=' . $disc["cover"] . ' alt="">
							</div>
							<div class="disc-details">
								<span class="title">' . $disc["title"] . '</span>
								<span class="author">' . $disc["author"] . '</span>
								<span class="year">' . $disc["year"] . '</span>
							</div>	
						</div>
					';
				}
			} else {
				foreach ($discs as $disc) {
					if ($disc["genre"] === $_GET["genere"]) {
						echo '
						<div class="disc">
							<div class="disc-cover">
								<img src=' . $disc["cover"] . ' alt="">
							</div>
							<div class="disc-details">
								<span class="title">' . $disc["title"] . '</span>
								<span class="author">' . $disc["author"] . '</span>
								<span class="year">' . $disc["year"] . '</span>
							</div>	
						</div>
					';
					}
				}
			}

			?>
			
		</main>

	</div>


</body>
</html>