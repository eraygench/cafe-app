const mix = require('laravel-mix');
const path = require("path");

mix.alias({
        ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue'), // or 'vendor/tightenco/ziggy/dist/vue' if you're using the Vue plugin
    })
    .js('resources/js/app.js', 'public/js')
    .extract()
    .vue(2)
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ])
    .version();
