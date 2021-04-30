<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Beer;

class BeersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i = 0; $i < 10; $i++) {
            $beer = new Beer;
            $beer->beer_name = $faker->name();
            $beer->style = $faker->numerify('style-####');
            $beer->nation = $faker->numerify('nation-####');
            $beer->url_img = $faker->emoji();
            // una cifra dopo la virgola tra 20 e 30
            // $beer->alcohol_volume = $faker->randomFloat(1, 20, 30);
            $beer->alcohol_volume = $faker->randomFloat(1, 1, 15);
            $beer->vote = $faker->randomFloat(1, 1, 10);
            $beer->sub_style = $faker->numerify('sub_style-####');
            $beer->save();
        }
    }
}
