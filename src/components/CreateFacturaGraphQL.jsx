import React from 'react';
import useForm from '../hooks/useForm';
import { gql, useMutation } from '@apollo/client';

const DATOS = gql`
  mutation CreateFactura($numero: String!, $nombre: String!, $direccion: String!) {
    createFactura(
      data: { Numero: $numero, Nombre: $nombre, Direccion: $direccion }
    ) {
      data {
        id
        attributes {
          Numero
          Nombre
          Direccion
        }
      }
    }
  }
`;

const CreateFacturaGraphQL = () => {
  const handleSave = async () => {
    console.log('datos son: ');
    console.log(values);
    const {data} = await createFactura();
    console.log('data');
    console.log(data);
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

  const [ createFactura ] = useMutation(DATOS, {
    variables: {
      numero: Numero,
      nombre: Nombre,
      direccion: Direccion,
    },
    onCompleted: (data) => {
      console.log('data');
      console.log(data);
    }
  });

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
            onClick={createFactura}
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

export default CreateFacturaGraphQL;
