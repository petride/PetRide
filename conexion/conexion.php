
<?php

class Conexion {
	
 public function getConexion(){
   $host = "localhost";  //127.0.0.1 0 localhost
   $db = "PetRide";      //base de datos de mysql
   $user = "PetRide";       // usuario de mysql
   $password = "cdBlaWmlOIKNJdHQ";       //contraseña de mysql

//conexion a la base datos utilizando pdo
 $db = new PDO("mysql:host=$host;dbname=$db;", $user, $password);

  return $db;
}

}

?>
