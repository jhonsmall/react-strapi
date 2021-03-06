import useFetch from '../hooks/useFetch';

const Factura = () => {
  const { estate, error, loading } = useFetch(
    'http://localhost:1337/api/facturas'
  );
  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error :( </p>;

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row">
              {estate.map((factura) => (
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
}

export default Factura