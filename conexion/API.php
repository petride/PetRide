<?php
 
class Api{

public function getInfos($tabla){
     $vector = array();
     $conexion = new conexion();
     $db = $conexion->getConexion();
     $sql = "SELECT * FROM $tabla";
     $consulta = $db->prepare($sql);
     $consulta->execute();
     while($fila = $consulta->fetch()) {
        $vector[] = array(
          "id" => $fila['id'],
          "nombre" => $fila['nombre'],
          "edicion" =>  $fila['edicion']); }

     return $vector;
}

public function getInfo($id,$tabla){
    $vector = array();
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "SELECT id, nombre, edicion FROM $tabla WHERE id=:id";
    $consulta = $db->prepare($sql);
    $consulta->bindParam(':id', $id);
    $consulta->execute();
    while($fila = $consulta->fetch()) {
       $vector[] = array(
         "id" => $fila['id'],
         "nombre" => $fila['nombre'],
         "edicion" =>  $fila['edicion']); }
  
    return $vector[0];
  }
  

public function addInfo($nombre, $edicion,$tabla){
  
  $conexion = new conexion();
  $db = $conexion->getConexion();
  $sql = "INSERT INTO $tabla (nombre, edicion) VALUES (:nombre,:edicion)";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':nombre', $nombre);
  $consulta->bindParam(':edicion', $edicion);
  $consulta->execute();

  return '{"msg":"Información agregada"}';
}

public function deleteInfo($id,$tabla){
  $conexion = new conexion();
  $db = $conexion->getConexion();
  $sql = "DELETE FROM $tabla WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id); 
  $consulta->execute();

  return '{"msg":"eliminado"}';
}


public function updateInfo($id, $nombre, $edicion,$tabla){
  
  $conexion = new conexion();
  $db = $conexion->getConexion();
  $sql = "UPDATE $tabla SET nombre=:nombre, edicion=:edicion WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->bindParam(':nombre', $nombre);
  $consulta->bindParam(':edicion', $edicion);
  $consulta->execute();

  return '{"msg":"Información actualizada"}';
}



}
?>