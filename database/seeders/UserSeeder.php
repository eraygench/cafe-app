<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@test',
            'organization_id' => \App\Models\Organization::factory()->create([
                'uuid' => (string)\Illuminate\Support\Str::uuid(),
                'name' => 'Test',
                'slug' => \Illuminate\Support\Str::slug('Test'),
                'active' => true
            ])->id,
            'password' => \Illuminate\Support\Facades\Hash::make('test'),
            'active' => true
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Root User',
            'email' => 'root@root',
            'password' => \Illuminate\Support\Facades\Hash::make('root'),
            'is_admin' => true,
            'active' => true
        ]);
    }
}
