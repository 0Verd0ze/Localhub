locationSearch.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      alert(`Searching for local connections in: ${this.value}`);
    }
  });
locationSearch.addEventListener('keypress', async function(e) {
    if (e.key === 'Enter') {
      // Get human-readable location
      const location = await getLocationName(this.value);
      alert(`Searching for connections near: ${location}`);
    }
  });
  
  async function getLocationName(input) {
    try {
      // Use geolocation API (example using OpenStreetMap)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${input}`
      );
      const data = await response.json();
      return data[0]?.display_name || input; // Fallback to raw input
    } catch {
      return input; // Fallback if API fails
    }
  }
navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      alert(`Welcome! We've detected you're near coordinates: ${latitude}, ${longitude}`);
    },
    (error) => {
      console.error('Geolocation error:', error);
      alert('Allow location access for better matches!');
    }
);
// New alert using SweetAlert2
Swal.fire({
  title: 'Welcome to LocalHub!',
  text: `Thanks for signing up, ${name}!`,
  icon: 'success',
  confirmButtonText: 'Start Connecting',
  confirmButtonColor: '#FF6B6B'
});

Swal.fire({
  title: 'LocalHub Notification',
  text: 'COngrats! You have a new connection request.',
  icon: 'success'
});