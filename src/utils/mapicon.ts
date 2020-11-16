import Leafleat from 'leaflet'

import mapMarkerImg from '../images/Local.svg';

const happyMapIcon = Leafleat.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})
export default happyMapIcon