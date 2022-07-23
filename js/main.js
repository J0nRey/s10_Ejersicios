/*
1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
Peso inferior al normal	: IMC Menos de 18.5
Normal	: IMC 18.5 – 24.9
Peso superior al normal	: IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0
*/

var peso = parseFloat(prompt("ingrese su peso en k"))
var estatura = parseFloat(prompt("ingrese su estatura en metros"))

var imc = peso/(estatura*estatura)

if(imc<18.5){
    alert(imc+" Menor de 18.5")
}else if(imc>18.5 && imc<24.9){
    alert(imc+" Normal")
}else if(imc>25 && imc<29.9){
    alert(imc+" Peso superior al normal")
}
else{alert(imc+" Obecidad")
}


/*
2. Usando como referencia los siguientes datos de estaturas promedio:
            General Varón   Mujer
México	    169.9	170.0	160.8   cm's
Australia	172.6	179.2	165.9   cm's
Canadá	    171.0	178.1	163.9   cm's
Brasil	    167.3	173.6	160.9   cm's
Reino Unido	171.0	177.5	164.4   cm's
crear un script que me permita conocer si mi estatura es superior, 
inferior o igual al promedio dependiendo de mi país y género. 
Si mi país no se encuentra en la lista, indicar que no se cuenta 
con el dato de estatura para ese país.
-recibir el dato del país
-recibir el dato de la estatura
-comprar los datos con base en la información brindada
*/


var contry = prompt("eres de México, Australia, Canadá, Brasil, Reino Unido")
var genero = prompt("Ingresa genero hombre o mujer")
var estatura = parseFloat(prompt("digita tu estatura en centimetros"))

switch(contry){

    case "mexico":

    switch(genero){
        case "hombre":
            if(estatura<=169.9){
                alert("Tu estatura "+estatura+" es menor a la general")
            }else if(estatura==170.0){
              alert("tu estatura "+estatura+" es el promedio")
            }else if(estatura>=170.1){
              alert("tu estatura "+estatura+" es mayor al promedio")
            }
            break;
            case "mujer":
                if(estatura<=160.8){
                    alert("tu estatura "+estatura+" es el promedio")
                }else if(estatura>160.8 && estatura<=169.9){
                    alert("tu estatura "+estatura+" es el general")
                }else if(estatura>=170){
                  alert("tu estatura "+estatura+" es mayor al general")
                }
                break;
        }

        break

    case "australia":
        
            switch(genero){
                case "hombre":
                    if(estatura<=169.9){
                        alert("Tu estatura "+estatura+" es menor a la general")
                    }else if(estatura==170.0){
                      alert("tu estatura "+estatura+" es el promedio")
                    }else if(estatura>=170.1){
                      alert("tu estatura "+estatura+" es mayor al promedio")
                    }
                    break;
                    case "mujer":
                        if(estatura<=160.8){
                            alert("tu estatura "+estatura+" es el promedio")
                        }else if(estatura>160.8 && estatura<=169.9){
                            alert("tu estatura "+estatura+" es el general")
                        }else if(estatura>=170){
                          alert("tu estatura "+estatura+" es mayor al general")
                        }
                        break;
                }
        
                break
        
    case "canada":
            
                switch(genero){
                    case "hombre":
                        if(estatura<=169.9){
                            alert("Tu estatura "+estatura+" es menor a la general")
                        }else if(estatura==170.0){
                          alert("tu estatura "+estatura+" es el promedio")
                        }else if(estatura>=170.1){
                          alert("tu estatura "+estatura+" es mayor al promedio")
                        }
                        break;
                        case "mujer":
                            if(estatura<=160.8){
                                alert("tu estatura "+estatura+" es el promedio")
                            }else if(estatura>160.8 && estatura<=169.9){
                                alert("tu estatura "+estatura+" es el general")
                            }else if(estatura>=170){
                              alert("tu estatura "+estatura+" es mayor al general")
                            }
                            break;
                    }
            
                    break

    case "brasil":
                
                    switch(genero){
                        case "hombre":
                            if(estatura<=169.9){
                                alert("Tu estatura "+estatura+" es menor a la general")
                            }else if(estatura==170.0){
                              alert("tu estatura "+estatura+" es el promedio")
                            }else if(estatura>=170.1){
                              alert("tu estatura "+estatura+" es mayor al promedio")
                            }
                            break;
                            case "mujer":
                                if(estatura<=160.8){
                                    alert("tu estatura "+estatura+" es el promedio")
                                }else if(estatura>160.8 && estatura<=169.9){
                                    alert("tu estatura "+estatura+" es el general")
                                }else if(estatura>=170){
                                  alert("tu estatura "+estatura+" es mayor al general")
                                }
                                break;
                        }
                
                        break

    case "reino unido":
                    
                        switch(genero){
                            case "hombre":
                                if(estatura<=169.9){
                                    alert("Tu estatura "+estatura+" es menor a la general")
                                }else if(estatura==170.0){
                                  alert("tu estatura "+estatura+" es el promedio")
                                }else if(estatura>=170.1){
                                  alert("tu estatura "+estatura+" es mayor al promedio")
                                }
                                break;
                                case "mujer":
                                    if(estatura<=160.8){
                                        alert("tu estatura "+estatura+" es el promedio")
                                    }else if(estatura>160.8 && estatura<=169.9){
                                        alert("tu estatura "+estatura+" es el general")
                                    }else if(estatura>=170){
                                      alert("tu estatura "+estatura+" es mayor al general")
                                    }
                                    break;
                            }
                    
                            break

    default:
        alert("tu nacionalidad no corresponde a las indicadas")
        break    
}//switch
                    