module.exports = class DB{
    constructor(user, url, password ){
        console.log('soy una conexion')
        this.user=user
        this.url=url
        this.password=password 
    }
    Crear(){
        console.log('Crea datos')
    }


    Editar(){
        console.log('Edita datos')
    }


    Buscar(){
        console.log('Busca datos')
    }


    Eliminar(){
        console.log('Elimina datos')
    }


    Mostrar(){
        console.log('Muestra el/los datos')
    }
}