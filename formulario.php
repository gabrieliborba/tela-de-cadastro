<?php
$nome = filter_input(INPUT_POST, 'nome',); //recebendo os dados do formulario $nome
$usuario = filter_input(INPUT_POST, 'usuario',); //recebendo os dados do formulario $usuario
echo "Nome: $nome <br>"; //
echo "Usúario: $usuario <br>";
// echo  Serve para escrever alguma coisa na tela.
//$usuario chamando valor da variavel.
