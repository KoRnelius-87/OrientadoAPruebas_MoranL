import { listaSucursales } from "../List/listaSucursales.js";

///CRUD USUARIOS
export const adminCrearUsuario = (usuario, nuevoUsuario) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesario");
  }
  if (nuevoUsuario.nombre === "" || nuevoUsuario.password === "") {
    throw new Error("Nombre de usuario o contraseña vacia");
  }
  if (nuevoUsuario.nombre === "prueba" && nuevoUsuario.password === "prueba") {
    throw new Error("Error usuario duplicado");
  }
  if (
    nuevoUsuario.nombre === undefined ||
    nuevoUsuario.password === undefined
  ) {
    throw new Error("Faltan parametros");
  }
  return true;
};

export const eliminarUsuarioAdministrador = (usuario, usuarioAEliminar) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesarios");
  }
  if (!usuarioAEliminar.id || usuarioAEliminar.id === null) {
    throw new Error("Usuario no existe");
  }
  return true;
};

// export const adminModificarUsuario = (usuario, nuevoUsuario) => {
//   if (usuario.rol !== "administrador") {
//     throw new Error("Su rol no cuenta con el permiso necesario");
//   }
//   if (nuevoUsuario.nombre === "" || nuevoUsuario.password === "") {
//     throw new Error("Nombre de usuario o contraseña vacia");
//   }
//   if (nuevoUsuario.nombre === "prueba" && nuevoUsuario.password === "prueba") {
//     throw new Error("Error usuario duplicado");
//   }
//   if(nuevoUsuario.nombre===undefined || nuevoUsuario.password===undefined ){
//     throw new Error("Faltan parametros");
//   }
//   return true;
// };



///CRUD SUCURSALES
export const listaVentasporSucursalAdministrador = (usuario, sucursal) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesarios");
  }
  if (sucursal === "") {
    throw new Error("Falta nombre de Sucursal");
  }
  const resultado = listaSucursales.filter((item) => item.nombre === sucursal);
  if (resultado.length === 0) {
    throw new Error("Sucursal no existe");
  }
  return resultado;
};

export const actualizarSucursalAdministrador = (usuario, sucursal) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesario");
  }
  if (sucursal.nombre === "" || sucursal.address === "") {
    throw new Error("Nombre de Sucursal o direccion vacios");
  }
  if (listaSucursales.some((item) => item.nombre === sucursal.nombre)) {
    throw new Error("Sucursal ya existe");
  }
  return true;
};

export const eliminarSucursalAdministrador = (usuario, sucursal) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesario");
  }
  if (sucursal.id === null) {
    throw new Error("Sucursal no existe");
  }
  return true;
};

export const adminCrearSucursal = (usuario, nuevaSucursal) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesarios");
  }
  if (nuevaSucursal.nombre === "" || nuevaSucursal.direccion === "") {
    throw new Error("Nombre de sucursal o direccion estan vacia");
  }
  if (
    nuevaSucursal.nombre === "Sucursal prueba" &&
    nuevaSucursal.direccion === "Direccion Sucursal prueba"
  ) {
    throw new Error("Error sucursal duplicada");
  }
  if (
    nuevaSucursal.nombre === undefined ||
    nuevaSucursal.direccion === undefined
  ) {
    throw new Error("Faltan parametros");
  }
  return true;
};



///CRUD PRODUCTOS
export const adminCrearProducto = (usuario, nuevoProducto) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesario");
  }
  if (
    nuevoProducto.nombre === "" ||
    nuevoProducto.sucursal === "" ||
    nuevoProducto.receta === ""
  ) {
    throw new Error("Nombre de producto, sucursal, estado de receta vacia");
  }
  if (
    nuevoProducto.nombre === "Producto prueba" &&
    nuevoProducto.sucursal === "sucursalPrueba"
  ) {
    throw new Error("Error producto duplicado");
  }
  if (
    nuevoProducto.nombre === undefined ||
    nuevoProducto.sucursal === undefined ||
    nuevoProducto.receta === undefined
  ) {
    throw new Error("Faltan parametros");
  }
  return true;
};

// export const adminModificarProducto = (usuario, nuevoProducto) => {
//   if (usuario.rol !== "administrador") {
//     throw new Error("Su rol no cuenta con el permiso necesario");
//   }
//   if (nuevoProducto.nombre === "" || nuevoProducto.sucursal === "") {
//     throw new Error("Nombre de producto o sucursal vacia");
//   }
//   if (nuevoProducto.nombre === "Producto prueba" && nuevoProducto.sucursal === "sucursalPrueba") {
//     throw new Error("Error producto duplicado");
//   }
//   if(nuevoProducto.nombre===undefined || nuevoProducto.sucursal===undefined){
//     throw new Error("Faltan parametros");
//   }
//   return true;
// };

export const eliminarProductoAdministrador = (usuario, sucursal) => {
  if (usuario.rol !== "administrador") {
    throw new Error("Su rol no cuenta con el permiso necesario");
  }
  if (sucursal.id === null) {
    throw new Error("Producto no existe");
  }
  return true;
};
