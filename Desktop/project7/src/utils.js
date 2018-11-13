//load_google_maps function from Ryan Waite's coding walkthrough link: https://github.com/ryanwaite28/script-store/blob/master/js/react_resolve_google_maps.js
export function load_google_maps() {
  return new Promise(function(resolve, reject) {
    // define the global callback that will run when google maps is loaded
    window.resolveGoogleMapsPromise = function() {
      // resolve the google object
      resolve(window.google);
      // delete the global callback to tidy up since it is no longer needed
      delete window.resolveGoogleMapsPromise;
    }
    // Now, Load the Google Maps API
    const script = document.createElement("script");
    const API_KEY = 'AIzaSyBB0GNJz7JVts9FogqSIAghnGUOPdnDiOA';
    script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}

export function load_places() {
  let city = 'Pittsburgh, PA';
  let query = 'pizza';
  var apiURL = 'https://api.foursquare.com/v2/venues/search?client_id=20UNPXJ2EXJT2FJRRZTI4I1ZAOWID0GLZSHAHOSFIU3TAHPE&client_secret=KSBXW31GXQMD5PMAIPX5BAEQVT5YXX1SCEUGYK5HLMPGCL0E&v=20181211%20&limit=50&near=' + city + '&query=' + query + '';
  return fetch(apiURL).then(response => response.json())
}
