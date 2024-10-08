export interface PlatoInterface{
 
id_plato?:number,
id_categoria?:number,
nombre:string,
precio:number,
disponible:string,
descripcion:string,
grasa:number,
azucar:number,
proteina:number,
sal:number,
fibra:number,
vitamina:string,
mineral:string,
alergeno:string,
categoriaPlato: {
    id: number;
    categoria: string;
  };
}

/*id_plato INT AUTO_INCREMENT NOT NULL,
id_categoria INT NOT NULL,
nombre VARCHAR(40) NOT NULL,
precio DECIMAL(6,2) NOT NULL,
disponible BOOLEAN NOT NULL,
descripcion VARCHAR(250) NOT NULL,
grasa DECIMAL(5,2) NOT NULL,
azucar DECIMAL(5,2)NOT NULL,
proteina DECIMAL(5,2) NOT NULL,
sal DECIMAL(5,2) NOT NULL,
fibra DECIMAL(5,2) NOT NULL,
vitamina VARCHAR(15) NOT NULL,
mineral VARCHAR(15)NOT NULL,
alergeno VARCHAR(60) NOT NULL,*/