function Verificar() {
    if (!localStorage.getItem("usuarioAtivo") && !sessionStorage.getItem("usuarioAtivo")) {
        return false
    }
    return true
}