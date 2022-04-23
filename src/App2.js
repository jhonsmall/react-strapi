import React from 'react';
import Characters from './uses/Characteres';

function App() {
    return (
      <div className="Container">
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row">
              <Characters />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
