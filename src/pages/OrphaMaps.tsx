import React, {useEffect, useState} from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkImg from '../images/Local.svg'

import '../styles/Pages/orpha_map.css'
import api from '../services/api';


interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkImg,
  iconSize: [46,68],
  iconAnchor:[23, 68],
  popupAnchor:[170, 2]
})


function OrphaMap() {
  const [orphanages, setOrphanades] = useState <Orphanage[]> ([])
  
    useEffect(()=>{
    api.get('/orphanages').then(response=>{
      setOrphanades(response.data)
    })
  }, [])

  return(
   <div id="page-map">
     <aside>
       <header>
         <img src={mapMarkImg} alt="Happy"/>

         <h2>Escolha um orfanato no mapa</h2>
         <p>Muitas crianças estão esperando a sua visita :)</p>
       </header>

       <footer>
       <strong>São Paulo</strong>
        <span>São Paulo</span>
       </footer>
     </aside>
    <Map 
      center = {[-23.5372544,-46.546944]}
      zoom={15}
      style={{width: '100%', height: '100%' }}
    >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {orphanages.map(orphanage =>{
        return(
          
          <Marker 
          icon = {mapIcon}
            position = {[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color = "#fff" />
              </Link>
            </Popup>
          </Marker>
 
        )
      })}
    </Map>

    <Link to="/orphanages/create" className='create'>
      <FiPlus size={32} color='#fff' />
    </Link>

   </div>
  )
}

export default OrphaMap;