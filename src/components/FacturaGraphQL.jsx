// import useFetch from '../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';

const FACTURAS = gql`
  {
    facturas(pagination: { page: 1, pageSize: 20 }) {
      data {
        id
        attributes {
          Numero
          Nombre
          Direccion
          detalle_facturas {
            data {
              id
              attributes {
                Cantidad
                Nombre
                Valor
                createdAt
                medida {
                  data {
                    id
                    attributes {
                      Numero
                      Nombre
                      Comentario
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const FacturaGraphQL = () => {
  const { loading, error, data } = useQuery(FACTURAS);
  if (loading) return <p> {loading} Loading... </p>;
  if (error) return <p> {error} Error :( </p>;

  console.log('estate');
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row">
              {data.facturas.data.map((factura) => (
                <div
                  className="card m-4"
                  key={factura.id}
                  style={{ width: 18 + 'rem' }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{factura.attributes.Numero}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {factura.attributes.Nombre}
                    </h6>
                    <p className="card-text">
                      {console.log('datos es: ')}
                      {factura.attributes.detalle_facturas.data.map(
                        (detalle) => (
                            detalle.attributes.Nombre
                        )
                      )}
                      {/* {console.log(
                        factura.attributes.detalle_facturas.data.attributes
                          .Nombre
                      )} */}
                      {/* {factura.attributes.detalle_facturas.data.id} */}
                    </p>
                    <p className="card-text">{factura.attributes.Direccion}</p>
                    {/* <p className="card-text">
                      {factura.attributes.detalle_facturas.data.attributes.Nombre}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacturaGraphQL;
