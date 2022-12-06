const controlRoles = (usuario) => {
  if (usuario === "administrador") {
    return 0;
  } else if (usuario === "lider") {
    return 1;
  } else if (usuario === "empleado") {
    return 2;
  } else {
    return null;
  }
};

export default controlRoles;
