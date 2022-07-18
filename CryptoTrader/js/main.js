function check(form) {
    if(form.usuario.value == "admin" && form.clave.value == "root")
    {
        window.open('dashboard.html')
        window.close()
    } else {
        alert('Ingrese credenciales de acceso validas')
    }
}