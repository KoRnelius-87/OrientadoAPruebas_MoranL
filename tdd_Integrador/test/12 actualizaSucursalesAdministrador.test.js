import { describe, it } from "mocha";
import { assert, expect } from "chai";

import { actualizarSucursalAdministrador } from "../functions/funcionesAdministrador.js";

import { administradorPrueba } from "../Schemas/administrador.js";
import { sucursalPrueba } from "../Schemas/sucursal.js";
import { liderPrueba } from "../Schemas/lider.js";

describe("12.	Como Administrador, necesito poder modificar Sucursales del sistema.", () => {
  it("a.	Sucursal fue modificada correctamente", () => {
    const usuario = administradorPrueba;

    const resultado = actualizarSucursalAdministrador(usuario, sucursalPrueba);

    return expect(resultado).to.be.true;
  });

  it("b.	Error al intentar crear sin tener Rol Administrador", () => {
    const usuario = liderPrueba;

    assert.throws(
      () => actualizarSucursalAdministrador(usuario, sucursalPrueba),
      Error,
      "Su rol no cuenta con el permiso necesario"
    );
  });

  it("c.	Valida parámetros correctos", () => {
    const usuario = administradorPrueba;
    const sucursal = {
      nombre: "",
      direccion: "",
    };
    assert.throws(
      () => actualizarSucursalAdministrador(usuario, sucursal),
      Error,
      "Nombre de Sucursal o direccion vacios"
    );
  });

  it("d.	Valida que la sucursal exista en la lista", () => {
    const usuario = administradorPrueba;
    const sucursal = {
      nombre: "Sucursal prueba1",
      direccion: "Direccion Sucursal prueba1",
    };
    assert.throws(
      () => actualizarSucursalAdministrador(usuario, sucursal),
      Error,
      "Sucursal ya existe"
    );
  });
});


//04/12/22