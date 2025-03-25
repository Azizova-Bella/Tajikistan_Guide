import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon

import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});

const TourismSearchPage = () => {
  const { t, i18n } = useTranslation();
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('searchHistory')) || []);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([38.5733, 68.7864], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapRef.current);
    }
  }, []);

  const updateSearchHistory = (name) => {
    const updated = [name, ...searchHistory.filter((item) => item !== name)].slice(0, 5);
    setSearchHistory(updated);
    localStorage.setItem('searchHistory', JSON.stringify(updated));
  };

  const addToFavorites = (name, lat, lon) => {
    const exists = favorites.some((f) => f.name === name);
    if (exists) return;
    const updated = [...favorites, { name, lat, lon }];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
    alert(t('added_to_favorites'));
  };

  const removeFromFavorites = (name) => {
    const updated = favorites.filter((f) => f.name !== name);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
    alert(t('removed_from_favorites'));
  };

  const searchAddress = (addressValue = null) => {
    const addressInput = document.getElementById('search-box');
    const address = addressValue || addressInput?.value;

    if (!address) return alert(t('enter_address'));

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.length) {
          alert(t('address_not_found'));
          return;
        }

        const { lat, lon, display_name } = data[0];
        if (markerRef.current) markerRef.current.remove();

        markerRef.current = L.marker([lat, lon])
          .addTo(mapRef.current)
          .bindPopup(
            `<b>${display_name}</b><br/>
            <button 
              style="
                background-color: #ff4757;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 10px;
              "
              onclick="window.addToFavorites('${display_name}', ${lat}, ${lon})"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="margin-right: 5px;">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              ${t('add to favorites')}
            </button>`
          )
          .openPopup();

        mapRef.current.setView([lat, lon], 14);
        updateSearchHistory(display_name);
        window.addToFavorites = (name, lat, lon) => addToFavorites(name, lat, lon);
      })
      .catch((err) => console.error('Search error:', err));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchAddress();
    }
  };

  const handleFavoriteClick = (fav) => {
    if (markerRef.current) markerRef.current.remove();

    markerRef.current = L.marker([fav.lat, fav.lon])
      .addTo(mapRef.current)
      .bindPopup(`<b>${fav.name}</b>`)
      .openPopup();

    mapRef.current.setView([fav.lat, fav.lon], 14);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>{t('address_search')}</h1>

      <div style={styles.searchBar}>
        <input
          id="search-box"
          type="text"
          placeholder={t('enter_address_placeholder')}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        <button onClick={() => searchAddress()} style={styles.searchBtn}>
          <SearchIcon style={{ marginRight: 5 }} />
          {t('search')}
        </button>
      </div>

      <div ref={mapContainerRef} style={styles.map}></div>

      <div style={styles.section}>
        <h3>{t('search_history')}</h3>
        {searchHistory.length === 0 ? (
          <p>{t('no_history')}</p>
        ) : (
          <ul style={styles.list}>
            {searchHistory.map((item, index) => (
              <li key={index}>
                <button onClick={() => searchAddress(item)} style={styles.historyBtn}>
                  <LocationOnIcon style={{ marginRight: 5 }} />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={styles.section}>
        <h3>{t('favorites')}</h3>
        {favorites.length === 0 ? (
          <p>{t('no_favorites')}</p>
        ) : (
          <ul style={styles.list}>
            {favorites.map((fav, index) => (
              <li key={index} style={styles.favItem}>
                <button onClick={() => handleFavoriteClick(fav)} style={styles.favBtn}>
                  <FavoriteIcon style={{ marginRight: 5, color: '#e74c3c' }} />
                  {fav.name}
                </button>
                <button
                  onClick={() => removeFromFavorites(fav.name)}
                  style={styles.deleteBtn}
                >
                  <DeleteIcon style={{ fontSize: '16px', color: '#ff4757' }} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  input: {
    width: '50%',
    minWidth: '250px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  searchBtn: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  map: {
    height: '500px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginTop: '20px',
  },
  section: {
    marginTop: '30px',
    textAlign: 'left',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '10px',
  },
  historyBtn: {
    backgroundColor: '#f1f1f1',
    border: '1px solid #ccc',
    padding: '8px 14px',
    margin: '4px 0',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  favItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '4px 0',
  },
  favBtn: {
    backgroundColor: '#ffe6e6',
    border: '1px solid #f99',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  deleteBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
  },
};

export default TourismSearchPage;