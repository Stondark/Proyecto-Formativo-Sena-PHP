console.log("Jquery validation its run");

$("#form-contact").validate({
        rules: {
            subject: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true,
            }, 
            phone: {
                required: true,
                digits: true,
            }, 
            mensaje: {
                required: true,
                minlength: 3,
                maxlength: 200,
            },
        },
        messages:{
            subject:{
                required: "Este campo es obligatorio",
                minlength: "El mínimo de carácteres es 3",
                },
            email: {
                required: "Este campo es obligatorio",
                email: "No es un correo electrónico válido",
                }, 
            phone: {
                required: "Este campo es obligatorio",
                digits: "Ingresa solo números",
                }, 
            mensaje: {
                required: "Este campo es obligatorio",
                minlength: "Escribe un mensaje de más de 3 carácteres",
                maxlength: "Escribe un mensaje de menos de 200 carácteres",
                },
        }
})


$("#new-producto").validate({
    rules: {
        producto: {
            required: true,
            minlength: 3
        },
        cantidad: {
            required: true,
            digits: true
        },
        precio: {
            required: true,
            digits: true,
        }
    }, 
    messages: {
        producto: {
            required: "Este campo es obligatorio",
            minlength: "El mínimo de carácteres es 3"
            }, 
        cantidad: {
            required: "Este campo es obligatorio",
            digits: "Se admiten solo números"
        },
        precio: {
            required: "Este campo es obligatorio",
            digits: "Se admiten solo números"
        }
    }
})
    

$("#new-venta").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3
        }, 
        numero: {
            required: true,
            digits: true
        }, 
        direccion: {
            required: true,
            minlength: 3
        }, 
        productos: {
            required: true,
            minlength: 3
        }, 
        cantidad: {
            required: true,
            digits: true
        },
        total: {
            required: true,
            digits: true
        }
    },
    messages: {
        nombre: {
            required: "Ingrese un nombre",
            minlength: "Ingrese más de 3 dígitos"
        },
        numero: {
            required: "Ingrese un número",
            digits: "Ingrese solo números"
        }, 
        direccion: {
            required: "Ingrese una dirección",
            minlength: "Ingrese más de 3 dígitos"
        }, 
        productos: {
            required: "Ingrese productos",
            minlength: "Ingrese más de 3 dígitos"
        }, 
        cantidad: {
            required: "Ingrese una cantidad válida",
            digits: "Ingrese solo números"
        }, 
        total: {
            required: "Ingrese un total",
            digits: "Ingrese solo números"
        }
    }
});

$("#form-login").validate({
    rules: {
        user: {
            required: true,
            minlength: 3
        }, 
        password: {
            required: true,
            minlength: 3
        }
    }, 
    messages: {
        user: {
            required: "Ingrese un usuario válido",
            minlength: "Ingrese más de 3 carácteres"
        }, 
        password: {
            required: "Ingrese una contraseña válida",
            minlength: "Ingrese más de 3 carácteres"
        }
    }
});


$("#form-new-producto").validate({
    rules: {
        producto: {
            required: true,
            minlength: 2
        },
        cantidad: {
            required: true,
            digits: true
        },
        precio: {
            required: true,
            digits: true
        }
    },
    messages: {
        producto: {
            required: "Ingrese un producto válido",
            minlength: "Ingrese más de 2 carácteres"
        },
        cantidad: {
            required: "Ingrese una cantidad",
            digits: "Ingrese solo números"
        },
        precio: {
            required: "Ingrese un precio",
            digits: "Ingrese solo números"
        }
    }
});