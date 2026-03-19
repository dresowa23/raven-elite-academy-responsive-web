
const business = [43.367235, -5.841739];

const map = L.map("map").setView(business, 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors"
}).addTo(map);


L.marker(business).addTo(map).bindPopup("Academia de Oposiciones, Cursos y FP Davante MasterD | Oviedo").openPopup();

const msg = document.getElementById("mapMsg");


if (!("geolocation" in navigator)) {
  msg.textContent = "Tu navegador no soporta geolocalización.";
} else {
  msg.textContent = "Activa tu ubicación para ver la ruta hasta tu posición.";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const user = [pos.coords.latitude, pos.coords.longitude];

     
      L.Routing.control({
        waypoints: [
          L.latLng(business[0], business[1]),
          L.latLng(user[0], user[1])
        ],
        addWaypoints: true,
        draggableWaypoints: true,
        routeWhileDragging: true,
        show: false
      }).addTo(map);

      map.fitBounds([business, user], { padding: [30, 30] });
      msg.textContent = "Ruta calculada: negocio → tu ubicación.";
    },
    () => {
      msg.textContent = "No has permitido la ubicación. No se puede mostrar la ruta.";
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}
