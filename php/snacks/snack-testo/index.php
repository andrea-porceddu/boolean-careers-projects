<?php 

$paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla praesentium quisquam facilis voluptatem adipisci a. Quos dicta beatae non facilis accusantium doloribus vitae ducimus nostrum! Perferendis explicabo aperiam ea.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iusto culpa. Quibusdam enim veritatis sit facilis itaque corporis aspernatur adipisci dolores quo, voluptatibus delectus dolor at maxime debitis? Veritatis, officiis?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis sint velit deserunt aliquam iusto necessitatibus sed fugiat, fugit esse praesentium recusandae autem consequatur, laudantium repellat veritatis totam veniam maiores!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum quidem, ab atque a, tempore iste odio in mollitia ducimus totam reiciendis voluptates ipsum dolorem nemo? Deleniti laborum sed aut?";

$exploded = explode('.', $paragraph);
// var_dump($exploded);
// print_r($exploded);

$imploded = "<p>" . implode('.</p><p>', $exploded) . "</p>";
echo $imploded;