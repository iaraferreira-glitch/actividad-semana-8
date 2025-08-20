//acá empieza el fetch de empleados.json



fetch("empleados.json")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
  .then(data => {
    const contenedor = document.getElementById("card");
    contenedor.innerHTML = "";

    data.forEach(empleado => {
      const div = document.createElement("div");
      div.classList.add("empleado");
      div.innerHTML = `
        <h2>Nombres ${empleado.FirstName} ${empleado.LastName}</h2>
        <p><strong>Teléfono:</strong> ${empleado.ContactNo}</p>
        <p><strong>Email:</strong> ${empleado.Email}</p>
        <p><strong>Dirección:</strong> ${empleado.Address.City}, ${empleado.Address.State}, ${empleado.Address.Zip}</p>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Hubo un problema con el fetch:", error);
  });
