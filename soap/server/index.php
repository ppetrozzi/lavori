<?php

//Server SOAP

function sayHello($qty, $valuta){

//$val=$_POST['val'];
//$valuta=$_POST['valu'];

$fileXML="http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";

$xml = simplexml_load_file($fileXML);

foreach($xml->Cube[0]->Cube[0]->Cube as $a)
{
    
    switch((string) $a['currency']) { // Get attributes as element indices
        case $valuta==$a['currency']:
            $conv=($a['rate'][0])*$qty;
            break;
        case $valuta==$a['currency']:
            $conv=($a['rate'][0])*$qty;
            break;
        }
}
   
   return $conv; 

}

$server= new SoapServer("test.wsdl");

$server->addFunction("sayHello");

$server->handle();

?>
