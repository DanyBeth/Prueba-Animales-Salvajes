class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;

        this.getNombre = () => this._nombre;
        this.getEdad = () => this._edad;
        this.getImg = () => this._img;
        this.getSonido = () => this._sonido;

        this.setComentarios = (comentarios) => (this._comentarios = comentarios);
    }
    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Img(){
        return this.getImg();
    }
    get Sonido(){
        return this.getSonido();
    }

    set Comentarios(comentarios){
        return this.setComentarios(comentarios);
    }
}



export default Animal;