import { describe, it } from "mocha";
import { assert, expect } from "chai";

import { listaVentasporSucursalAdministrador } from "../functions/funcionesAdministrador.js";

import { administradorPrueba } from "../Schemas/administrador.js";
import { liderPrueba } from "../Schemas/lider.js";

describe("6.	Como Administrador, necesitó acceder a lista de Ventas por Sucursal.", () => {
  it("a.	Recibe una lista en formato de arreglo", () => {
    const user = administradorPrueba;
    const sucursal = "Sucursal prueba3";

    const resultado = listaVentasporSucursalAdministrador(user, sucursal);

    expect(resultado).to.be.an("array");
  });

  it("b.	Error, al intentar obtener información sin ser Administrador", () => {
    const usuario = liderPrueba;
    const sucursal = "Sucursal prueba3";

    assert.throws(
      () => listaVentasporSucursalAdministrador(usuario, "Branch1"),
      Error,
      "Su rol no cuenta con el permiso necesarios"
    );
  });

  it("Error, si el parametro sucursal esta vacio", () => {
    const usuario = administradorPrueba;
    assert.throws(
      () => listaVentasporSucursalAdministrador(usuario, ""),
      Error,
      "Falta nombre de Sucursal"
    );
  });

  it("Error, si sucursal no existe", () => {
    const usuario = administradorPrueba;
    assert.throws(
      () => listaVentasporSucursalAdministrador(usuario, "Branch5"),
      Error,
      "Sucursal no existe"
    );
  });
});
