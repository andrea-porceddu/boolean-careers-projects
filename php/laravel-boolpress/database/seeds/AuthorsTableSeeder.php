<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Author;
use App\AuthorDetail;
use App\Post;
use App\Comment;
use App\Tag;

class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i = 0; $i < 5; $i++) {
            $author = new Author;
            $author->name = $faker->name();
            $author->last_name = $faker->lastname();
            $author->save();

            $authorDetail = new AuthorDetail;
            $authorDetail->bio = $faker->text(500);
            $authorDetail->website_url = $faker->url();
            $authorDetail->logo_url = 'https://picsum.photos/seed/' . rand(0, 1000) . '/200';
            $authorDetail->email = $faker->email();
            $authorDetail->telephone = $faker->e164PhoneNumber() ;
            $author->detail()->save($authorDetail);

            for ($y = 0; $y < rand(1, 10); $y++) {
                $authorPost = new Post;
                $authorPost->title = $faker->sentence(2);
                $authorPost->body = $faker->text(500);
                $author->post()->save($authorPost);

                for ($z = 0; $z < rand(1, 6); $z++) {
                    $guestComment = new Comment;
                    $guestComment->author_comment = $faker->name();
                    $guestComment->body = $faker->text(500);
                    $authorPost->comment()->save($guestComment);
                }
            }
        }

        $tags = [
            'Cronaca',
            'Politica',
            'Economia',
            'Mondo',
            'Cultura',
            'Tecnologia',
            'Sport'
        ];

        for ($j = 0; $j < count($tags); $j++) {
            $tag = new Tag;
            $tag->title = $tags[$j];
            $tag->desc = $faker->text(500);
            $tag->save();
        }

    }
}
