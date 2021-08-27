<?php
require_once('conexion.php');
require_once('API.php');
require_once('cors.php');
//obteniedo el metodo http
$method = $_SERVER['REQUEST_METHOD'];

if($method == "GET") {
    $tabla=$_GET['donde'];

    if(!empty($_GET['id'])){
       $id = $_GET['id'];
       $json = null;
       $api = new Api();
       $vector = $api->getInfo($id, $tabla);
       $json = json_encode($vector);
       echo $json; 
    }else{
       $vector = array();
       $api = new Api();
       $vector = $api->getInfos($tabla);
       $json = json_encode($vector);
       echo $json;
    }
   
}

if($method == "POST"){
    $tabla=$_GET['donde'];

    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $nombre = $data['nombre'];
    $edicion = $data['edicion'];
    $api = new Api();
    $json = $api->addInfo($nombre, $edicion, $tabla);
    echo $json;
}

if($method=="DELETE"){
    $tabla=$_GET['donde'];

    $json = null;
    $id = $_REQUEST['id'];
    $api = new Api();
    $json = $api->deleteInfo($id,$tabla);
    echo $json;
}

if($method == "PUT"){
    $tabla=$_GET['donde'];

    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $nombre = $data['nombre'];
    $edicion = $data['edicion'];
    $api = new Api();
    $json = $api->updateInfo($id, $nombre, $edicion, $tabla);
    echo $json;
}



?>