<?php
header('Access-Control-Allow-Origin: *');

switch ($_GET['tamanho']) {
    case 'P':
    case 'M':
        echo 'Em estoque';
        break;
    default:
        echo 'Fora de estoque';
}