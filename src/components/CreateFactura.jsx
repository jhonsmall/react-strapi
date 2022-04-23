import React from 'react';
import useForm from '../hooks/useForm';
// import usePost from '../hooks/usePost';
import axios from 'axios';

const CreateFactura = () => {
  const handleSave = async () => {
    console.log(values);
    const datos = { data: values };
    console.log('datos son: ');
    console.log(datos);
    axios
      .post('http://localhost:1337/api/facturas', datos)
      .then((res) => {
        console.log('res');
        console.log(res);
      })
      .catch((err) => {
        console.log('err');
        console.log(err);
      });
  };

  // el orden de los props es importante
  const [values, setValues, handleInputChange, handleSubmit] = useForm(
    {
      Numero: '',
      Nombre: '',
      Direccion: '',
    },
    handleSave
  );

  const { Numero, Nombre, Direccion } = values;

  //   const handleSubmitForm = (e) => {
  //     e.preventDefault();
  //     // console.log(values);
  //     handleSubmit();
  //   };

  return (
    <>
      <div className="card" style={{ width: 18 + 'rem' }}>
        <div className="card-body">
          <h5 className="card-title">Ingrese sus datos: </h5>
          <div className="mb-3">
            <label htmlFor="Numero" className="form-label">
              Numero
            </label>
            <input
              type="text"
              className="form-control"
              name="Numero"
              placeholder="Numero..."
              value={Numero}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="Nombre"
              placeholder="Nombre..."
              value={Nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Direccion" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              name="Direccion"
              placeholder="Direccion..."
              value={Direccion}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateFactura;
