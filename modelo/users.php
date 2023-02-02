<?php
class Usuario {
    private $id;
    private $nombre;
    private $apellido1;
    private $apellido2;
    private $correo;
    private $clave;

    public function __construct( $nombre,$apellido1 ,$apellido2,$correo,$clave ){
        $this->nombre=$nombre;
        $this->apellido1=$apellido1;
}
}
