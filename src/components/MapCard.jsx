import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const destination = [30.7673, 76.5754]; // Chandigarh University

const MapCard = () => {
    const [map, setMap] = useState(null);
    const [routingControl, setRoutingControl] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [userMarker, setUserMarker] = useState(null);

    useEffect(() => {
        const mapInstance = L.map("map", {
            center: destination,
            zoom: 12,
            scrollWheelZoom: true,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(mapInstance);

        setMap(mapInstance);
        return () => {
            mapInstance.remove();
        };
    }, []);

    // Function to start tracking user location
    const trackUserLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation([latitude, longitude]);

                if (map) {
                    // Update user marker or add a new one
                    if (userMarker) {
                        userMarker.setLatLng([latitude, longitude]);
                    } else {
                        const newMarker = L.marker([latitude, longitude], {
                            icon: L.icon({
                                iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
                                iconSize: [25, 25],
                            }),
                        })
                            .addTo(map)
                            .bindPopup("You are here")
                            .openPopup();
                        setUserMarker(newMarker);
                    }

                    map.setView([latitude, longitude], 14); // Keep centering map on user
                }
            },
            (error) => {
                alert("Error getting location: " + error.message);
            },
            { enableHighAccuracy: true, maximumAge: 0 }
        );
    };

    // Function to start real-time navigation
    const startNavigation = () => {
        if (!map || !currentLocation) {
            alert("Please allow location access and try again.");
            return;
        }

        if (routingControl) {
            map.removeControl(routingControl);
        }

        const newRoutingControl = L.Routing.control({
            waypoints: [L.latLng(currentLocation), L.latLng(destination)],
            routeWhileDragging: true,
            autoRoute: true,
            createMarker: (i, waypoint) => {
                return L.marker(waypoint.latLng, {
                    draggable: false,
                    icon: L.icon({
                        iconUrl:
                            i === 0
                                ? "https://cdn-icons-png.flaticon.com/128/684/684908.png" // User icon
                                : "https://cdn-icons-png.flaticon.com/128/190/190411.png", // Destination icon
                        iconSize: [25, 25],
                    }),
                });
            },
            lineOptions: {
                styles: [{ color: "#007bff", weight: 5, opacity: 0.7 }],
            },
            router: L.Routing.osrmv1({
                serviceUrl: "https://routing.openstreetmap.de/routed-car/route/v1",
            }),
        }).addTo(map);

        setRoutingControl(newRoutingControl);
    };

    return (
        <div className="card" style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
            {/* Get Location & Start Navigation */}
            <div style={{ textAlign: "center", margin: "10px 0" }}>
                <button
                    onClick={trackUserLocation}
                    style={{ padding: "10px 15px", background: "#28a745", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", marginRight: "10px" }}
                >
                    📍 Track My Location
                </button>
                <button
                    onClick={startNavigation}
                    style={{ padding: "10px 15px", background: "#007bff", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
                >
                    🚗 Start Navigation
                </button>
            </div>

            {/* Map Container */}
            <div id="map" style={containerStyle}></div>

            <div className="card-body">
                <p className="card-text">
                    Click <b>"Track My Location"</b> first, then <b>"Start Navigation"</b> for **real-time movement tracking** to **Chandigarh University**. 🚗
                </p>
            </div>
        </div>
    );
};

export default MapCard;
