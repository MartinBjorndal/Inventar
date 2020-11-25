<?php
/*
    Returnerer liste av inventar
 */
header("Access-Control-Allow-Origin: *"); 
require 'connect.php';
    
$inventar = [];
$sql = "SELECT invId, invNavn, invUid FROM inventar";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id']    = $row['invId'];
    $cars[$cr]['navn'] = $row['invNavn'];
    $cars[$cr]['uid'] = $row['invUid'];
    $cr++;
  }
    
  echo json_encode(['data'=>$inventar]);
}
else
{
  http_response_code(404);
}