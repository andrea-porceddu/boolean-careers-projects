<?php

$posts = [

    '10/01/2019' => [
        [
            'title' => 'Post 1',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 1'
        ],
        [
            'title' => 'Post 2',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 2'
        ],
    ],
    '10/02/2019' => [
        [
            'title' => 'Post 3',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 3'
        ]
    ],
    '15/05/2019' => [
        [
            'title' => 'Post 4',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 4'
        ],
        [
            'title' => 'Post 5',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 5'
        ],
        [
            'title' => 'Post 6',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 6'
        ]
    ],
		'15/05/2020' => [
			[
					'title' => 'Post 7',
					'author' => 'Michele Papagni',
					'text' => 'Testo post 7'
			],
			[
					'title' => 'Post 8',
					'author' => 'Michele Papagni',
					'text' => 'Testo post 8'
			],
			[
					'title' => 'Post 9',
					'author' => 'Michele Papagni',
					'text' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reiciendis ab nam harum aliquid doloribus illum quidem quod adipisci, incidunt sunt voluptatibus nobis, cupiditate est error assumenda hic omnis pariatur?'
			]
	],
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./css/style.css">
	<title>Foreach exercise</title>
</head>
<body>

	<div class="body-container">

		<?php

			foreach($posts as $date => $postsInDate) {
				foreach($postsInDate as $postDetail) {

				?>

					<div class="post">
					
						<h2 class="title"><?php echo $postDetail["title"]?></h2>
						<span class="author"><?php echo $postDetail["author"]?></span>
						<p class="text"><?php echo $postDetail["text"]?></p>

					</div>

				<?php

				}
			}

		?>
		
	</div>

	
</body>
</html>