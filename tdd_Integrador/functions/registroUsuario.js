const registroUsuario = (usuario) => {
  if (usuario.nombre === "" || usuario.password === "") {
    throw new Error("usuario o la contraseña están vacíos");
  }
  if (usuario.nombre !== "prueba") {
    return false;
  }
  if (usuario.password !== "prueba") {
    return false;
  }
  if(usuario.nombre===undefined || usuario.password===undefined ){
    return false;
  }
  return true;
};

export default registroUsuario;
