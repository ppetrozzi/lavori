<?php

//Server SOAP

function sayHello($qty, $valuta){

$fileXML="http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
$xml = simplexml_load_file($fileXML);
foreach($xml->Cube[0]->Cube[0]->Cube as $a) {

    if ($valuta==$a['currency']) {
        $conv=($a['rate'][0])*$qty;
    }
}
   return $conv; 
}

$server= new SoapServer("test.wsdl");
$server->addFunction("sayHello");
$server->handle();

?>
