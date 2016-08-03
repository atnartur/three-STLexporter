// Use FileSaver.js 'saveAs' function to save the string
function saveSTL( scene, name ){  
  var exporter = new THREE.STLExporter();
  var stlString = exporter.parse( scene );
  
  var blob = new Blob([stlString], {type: 'text/plain'});
  
  saveAs(blob, name + '.stl');
}