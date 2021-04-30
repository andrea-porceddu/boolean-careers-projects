<?php

use Illuminate\Database\Seeder;
use App\CarModel;
use Illuminate\Support\Facades\DB;

class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('cars')->insert([
            [
                'brand' => 'Alfa Romeo',
                'model' => 'Giulietta',
                'generation' => 'Giulietta (Type 940 facelift 2016)',
                'start_of_production' => '2019',
                'doors' => '5',
                'body_type' => 'Hatchback',
                'fuel_type' => 'Diesel',
                'max_speed' => '214',
                'power' => '170',
                'url_img' => 'https://www.auto-data.net/images/f9/file4126160.jpg'
            ],
            [
                'brand' => 'Audi',
                'model' => 'RS 3',
                'generation' => 'RS 3 sportback (8VA facelift 2017)',
                'start_of_production' => '2017',
                'doors' => '5',
                'body_type' => 'Hatchback',
                'fuel_type' => 'Petrol (Gasoline)',
                'max_speed' => '250',
                'power' => '400',
                'url_img' => 'https://www.auto-data.net/images/f1/audi-rs3-sportback-8va-facelift-2017.jpg'
            ],
            [
                'brand' => 'Ford',
                'model' => 'Shelby',
                'generation' => 'Shelby III',
                'start_of_production' => '2016',
                'doors' => '2',
                'body_type' => 'Coupe',
                'fuel_type' => 'Petrol (Gasoline)',
                'max_speed' => '299',
                'power' => '533',
                'url_img' => 'https://www.auto-data.net/images/f3/ford-shelby-iii.jpg'
            ]
        ]);
    }
}
