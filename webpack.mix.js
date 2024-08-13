// webpack.mix.js
const mix = require('laravel-mix');

mix.js('resources/js/App.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
