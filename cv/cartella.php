<!--

<?php
foreach (glob("*.json") as $nomefile) {
  $result = $nomefile;
  echo  $result."</br>";
}
?>
-->

<?php
echo json_encode([
  'files' => glob('*.json'),
]);
?>
