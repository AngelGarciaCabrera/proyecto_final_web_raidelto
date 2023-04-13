import DatosDePublicaciones from "./DatosDePublicaciones";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function EspacioPublicaciones(){
    
    return (
       <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div>
            <Route path='/Publicaciones' element={<DatosDePublicaciones/>} />
            </div>
       </div>
    );

}

export default(EspacioPublicaciones)