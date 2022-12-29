<?php
if(isset($_POST['nome'])&&($_POST['cognome'])){

$nome = htmlspecialchars($_POST['nome']);
$cognome = htmlspecialchars($_POST['cognome']);

$lines = file('nomi.xml'); 
$last = sizeof($lines) - 1 ; 
unset($lines[$last]); 

$fp = fopen('nomi.xml', 'w'); 
fwrite($fp, implode('', $lines)); 
fclose($fp); 


$var = fopen("nomi.xml", "a+");

fwrite($var, " 
  <classe>
    <utente>
     		<nome>$nome</nome>
		<cognome>$cognome</cognome>
    </utente>
  </classe>
 </scuola>
"
);

fclose($var);

echo "<script>window.location.replace('recupera.php');</script>";


}
?>

<form action="#" method="POST">
nome: <br><input type="text" name="nome" size="20"><br>
cognome: <br><input type="text" name="cognome" size="20"><br>
<input type="submit" name="pulsante" style="margin-top:10px;">
</form>
<br>




