// import useFetch from '../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';

const FACTURAS = gql`
  {
    facturas {
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
                    <p className="card-text">{factura.attributes.Direccion}</p>
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
