var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Aquifers_1 = new ol.format.GeoJSON();
var features_Aquifers_1 = format_Aquifers_1.readFeatures(json_Aquifers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aquifers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aquifers_1.addFeatures(features_Aquifers_1);
var lyr_Aquifers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aquifers_1, 
                style: style_Aquifers_1,
                popuplayertitle: 'Aquifers',
                interactive: true,
                title: '<img src="styles/legend/Aquifers_1.png" /> Aquifers'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Aquifers_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Aquifers_1];
lyr_Aquifers_1.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'm_per_year': 'Meters Change per Year', 'aquifer': 'Aquifer Name', 'broader': 'broader', });
lyr_Aquifers_1.set('fieldImages', {'fid': 'Hidden', 'ogc_fid': 'Hidden', 'm_per_year': 'TextEdit', 'aquifer': 'TextEdit', 'broader': 'Hidden', });
lyr_Aquifers_1.set('fieldLabels', {'m_per_year': 'no label', 'aquifer': 'no label', });
lyr_Aquifers_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});