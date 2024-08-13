<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Turizm Projesi</title>

    <!-- Vite CSS ve React bileşenleri -->
    @viteReactRefresh
    @vite('resources/js/index.tsx')
</head>
<body class="bg-gray-100 text-gray-900">
<div id="root"></div>
</body>
</html>
