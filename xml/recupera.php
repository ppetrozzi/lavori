<?PHP
$quanti	= 5;
$indice = 256;
$contatore = 0;

$apri_xml = fopen("nomi.xml", 'r');

echo("<table border='1'><tr><th style='width:100px;'>Nome</th><th style='width:100px;'>Cognome</th></tr>");

while(!feof($apri_xml))
{
    $buffer = ltrim(Chop(fgets($apri_xml, $indice)));
    if (($buffer == "<utente>")) // && ($contatore < $quanti)
    {
        $nome = ltrim(Chop(fgets($apri_xml, $indice)));
        $cognome = ltrim(Chop(fgets($apri_xml, $indice)));

        $nome = str_replace( "<nome>", "", $nome );
        $nome = str_replace( "</nome>", "", $nome );


        $cognome = str_replace( "<cognome>", "", $cognome );
        $cognome = str_replace( "</cognome>", "", $cognome );
	
	
        echo("<tr><td>" . $nome . "</td><td>" . $cognome . "</td></tr>");
	
        $contatore++;
    }
}
echo("</table>");

fclose($apri_xml);
?>

<p>

<a href="scrivi.php">scrivi.php</a>
<br>
<a href="nomi.xml">nomi.xml</a>
<br>
<a href="leggi_cogn.html">leggi_cogn.html</a>
</p>