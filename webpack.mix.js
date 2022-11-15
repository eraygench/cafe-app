const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue(2)
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ])
    .version();
