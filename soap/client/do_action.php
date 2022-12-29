<?php
//Client SOAP
$wsdl_url = "http://petrozzi.000webhostapp.com/soap/server/test.wsdl";
if (isset($_POST['name']) && !empty($_POST['name'])){
    try {
        $client = new SoapClient($wsdl_url, ["location" =>"http://petrozzi.000webhostapp.com/soap/server/","uri" => "" ]);
        $risposta = $client->sayHello(htmlentities($_POST['name']));
        echo $risposta;
    } catch (SoapFault $e){
        echo '<br>Errore nel client SOAP: ' . $e->getMessage();
    }
}
?>
