This is an example script to generate an html of an interactive map with more than 1 marker.
To keep it extremely basic, each marker is added individually and hard coded

Steps to adjust initial view:
1. Higher Zoom number the closer in it goes
2. You can replace the base map layer with another from provided options (see documentation folder on google drive
3. You can determine how you want to use or not
4. Note leaflet has wrappers in other languages like Folium in Python for similiar features that may better fit with the skillsets of who work on this.
5. 
Steps to add or change locations and markers:
1. Copy and Paste existing marker code but make sure you rename the variable (ie: Marker2 -> Marker3)
1. Get the Lon Lat for the address (right click in google maps on the location and copy the numbers)
2. Paste those into the geo field
3. Copy and paste the tool tip information, again replace the variable and content to match new location
4. Hit save and rerun
