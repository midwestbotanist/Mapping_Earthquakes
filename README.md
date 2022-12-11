# Mapping_Earthquakes

## Background/Purpose:
This project has been conducted to provide a visual reference for the differing earthquake magnitudes worldwide that has occurred over the past 7 days. The geographical coordinates of the earthquakes along with their resulting earthquake magnitudes were obtained from the USGS website.

Prior to this challenge, the earthquake data had already been added to a map. The focus of the challenge is to add these additional details:
1. Add tectonic plate data
2. Add major earthquake data (to differentiate from all earthquake data)
3. Add an additional map layer (the nightime navigation map has been selected)

JavaScript and the D3.js library were chosen to retrieve the data, and then Leaflet library was chosen to plot the data on a Mapbox map via an API request. Doing this allows for an interactive map. 

## Results:

### Below is the resulting (satellite) map showing just the tectonic plate data:

![2022-12-11 (1)](https://user-images.githubusercontent.com/101941048/206928485-577bf2be-8eb8-4b40-84ec-6815085a3ccf.png)

### Below is the resulting (street) map showing just the major earthquake data:

![2022-12-11 (2)](https://user-images.githubusercontent.com/101941048/206928561-87e7bd2e-a0fa-44da-9b5a-daecdcea525b.png)

### Below is the resulting (night navigation map) showing all eathquake, major earthquake, and tectonic plate data:

![2022-12-11 (3)](https://user-images.githubusercontent.com/101941048/206928664-7c87380e-23d3-479e-b923-33b9d57b1ef1.png)





## Sources
* M4.5+ Earthquakes, past 7 days: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
* Mapbox Style References: https://docs.mapbox.com/api/maps/styles/
* Leaflet Website: https://leafletjs.com/
