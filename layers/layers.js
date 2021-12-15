ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([121.510630, 25.055973, 121.530153, 25.069095]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.754000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_1994_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1994年美軍繪製台灣地圖",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1994_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [121.488231, 25.015061, 121.589412, 25.090035]
                            })
                        });
var format_04_2 = new ol.format.GeoJSON();
var features_04_2 = format_04_2.readFeatures(json_04_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_04_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_2.addFeatures(features_04_2);
var lyr_04_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_04_2, 
                style: style_04_2,
                interactive: true,
                title: '<img src="styles/legend/04_2.png" /> 04身心障礙專用-機車'
            });
var format_03_3 = new ol.format.GeoJSON();
var features_03_3 = format_03_3.readFeatures(json_03_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_03_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_3.addFeatures(features_03_3);
var lyr_03_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_03_3, 
                style: style_03_3,
                interactive: true,
                title: '<img src="styles/legend/03_3.png" /> 03身心障礙專用-汽車'
            });
var format_02_4 = new ol.format.GeoJSON();
var features_02_4 = format_02_4.readFeatures(json_02_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_02_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_4.addFeatures(features_02_4);
var lyr_02_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_02_4, 
                style: style_02_4,
                interactive: true,
                title: '<img src="styles/legend/02_4.png" /> 02機車'
            });
var format_01_5 = new ol.format.GeoJSON();
var features_01_5 = format_01_5.readFeatures(json_01_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_01_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_5.addFeatures(features_01_5);
var lyr_01_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_01_5, 
                style: style_01_5,
                interactive: true,
                title: '<img src="styles/legend/01_5.png" /> 01小型車'
            });
var format_park07_6 = new ol.format.GeoJSON();
var features_park07_6 = format_park07_6.readFeatures(json_park07_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_park07_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park07_6.addFeatures(features_park07_6);
var lyr_park07_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_park07_6, 
                style: style_park07_6,
                interactive: true,
                title: '<img src="styles/legend/park07_6.png" /> park07 機車灣停車格'
            });
var format_park09_7 = new ol.format.GeoJSON();
var features_park09_7 = format_park09_7.readFeatures(json_park09_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_park09_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park09_7.addFeatures(features_park09_7);
var lyr_park09_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_park09_7, 
                style: style_park09_7,
                interactive: true,
                title: '<img src="styles/legend/park09_7.png" /> park09 自行車停車格'
            });

lyr_OSMStandard_0.setVisible(true);lyr_1994_1.setVisible(true);lyr_04_2.setVisible(true);lyr_03_3.setVisible(true);lyr_02_4.setVisible(true);lyr_01_5.setVisible(true);lyr_park07_6.setVisible(true);lyr_park09_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_1994_1,lyr_04_2,lyr_03_3,lyr_02_4,lyr_01_5,lyr_park07_6,lyr_park09_7];
lyr_04_2.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_03_3.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_02_4.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_01_5.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_park07_6.set('fieldAliases', {'KEYID': 'KEYID', 'ROAD': 'ROAD', });
lyr_park09_7.set('fieldAliases', {'ID': 'ID', 'Road': 'Road', });
lyr_04_2.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_03_3.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_02_4.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_01_5.set('fieldImages', {'KEYID': '', 'ROAD': '', });
lyr_park07_6.set('fieldImages', {'KEYID': 'TextEdit', 'ROAD': 'TextEdit', });
lyr_park09_7.set('fieldImages', {'ID': 'TextEdit', 'Road': 'TextEdit', });
lyr_04_2.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_03_3.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_02_4.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_01_5.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_park07_6.set('fieldLabels', {'KEYID': 'header label', 'ROAD': 'header label', });
lyr_park09_7.set('fieldLabels', {'ID': 'header label', 'Road': 'header label', });
lyr_park09_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});