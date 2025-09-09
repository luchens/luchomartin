<?php
include("../conexion.php");

$jsondata = array();
$date = $_POST["date"];
$info = addslashes($_POST["info"]);
$players = addslashes($_POST["players"]);
$note = addslashes($_POST["note"]);

$sql = "INSERT INTO events (startdate, info, players, note) VALUES ('".$date."', '".$info."', '".$players."', '".$note."')";
if($db->query($sql) === true){
  $jsondata['action'] = "success";
} else {
  $jsondata['action'] = "error";
  //echo "ERROR: Could not able to execute $sql. ". $db->error;
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata);
$db->close();
?>
