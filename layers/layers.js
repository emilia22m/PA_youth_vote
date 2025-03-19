var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SchoolDistrict_1 = new ol.format.GeoJSON();
var features_SchoolDistrict_1 = format_SchoolDistrict_1.readFeatures(json_SchoolDistrict_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchoolDistrict_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolDistrict_1.addFeatures(features_SchoolDistrict_1);
var lyr_SchoolDistrict_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchoolDistrict_1, 
                style: style_SchoolDistrict_1,
                popuplayertitle: 'School District',
                interactive: true,
                title: '<img src="styles/legend/SchoolDistrict_1.png" /> School District'
            });
var format_PAHouse_2 = new ol.format.GeoJSON();
var features_PAHouse_2 = format_PAHouse_2.readFeatures(json_PAHouse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAHouse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAHouse_2.addFeatures(features_PAHouse_2);
var lyr_PAHouse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAHouse_2, 
                style: style_PAHouse_2,
                popuplayertitle: 'PA House',
                interactive: true,
                title: '<img src="styles/legend/PAHouse_2.png" /> PA House'
            });
var format_PASenate_3 = new ol.format.GeoJSON();
var features_PASenate_3 = format_PASenate_3.readFeatures(json_PASenate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASenate_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASenate_3.addFeatures(features_PASenate_3);
var lyr_PASenate_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASenate_3, 
                style: style_PASenate_3,
                popuplayertitle: 'PA Senate',
                interactive: true,
                title: '<img src="styles/legend/PASenate_3.png" /> PA Senate'
            });
var format_USHouse_4 = new ol.format.GeoJSON();
var features_USHouse_4 = format_USHouse_4.readFeatures(json_USHouse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USHouse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USHouse_4.addFeatures(features_USHouse_4);
var lyr_USHouse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USHouse_4, 
                style: style_USHouse_4,
                popuplayertitle: 'US House',
                interactive: true,
                title: '<img src="styles/legend/USHouse_4.png" /> US House'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SchoolDistrict_1.setVisible(true);lyr_PAHouse_2.setVisible(true);lyr_PASenate_3.setVisible(true);lyr_USHouse_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SchoolDistrict_1,lyr_PAHouse_2,lyr_PASenate_3,lyr_USHouse_4];
lyr_SchoolDistrict_1.set('fieldAliases', {'MSLINK': 'MSLINK', 'SCHOOL_DIS': 'SCHOOL_DIS', 'AREA': 'AREA', 'SCHOOL_NAM': 'SCHOOL_NAM', 'GPID': 'GPID', 'AVTS_SENDI': 'AVTS_SENDI', 'AUN_NUM': 'AUN_NUM', 'IU_NAME': 'IU_NAME', 'LEN': 'LEN', 'AVTS': 'AVTS', 'AUN_SCHDIS': 'AUN_SCHDIS', 'Shape_Leng': 'Shape_Leng', 'IU_NUM': 'IU_NUM', 'PA_CTY_COD': 'PA_CTY_COD', 'CTY_NAME': 'CTY_NAME', 'ID': 'ID', });
lyr_PAHouse_2.set('fieldAliases', {'MSLINK': 'MSLINK', 'H_FIRSTNAM': 'H_FIRSTNAM', 'AREA': 'AREA', 'URL': 'URL', 'H_LASTNAME': 'H_LASTNAME', 'LEN': 'LEN', 'GPID': 'GPID', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'LEG_DISTRI': 'District', 'Rep Last Name': 'Rep Last Name', 'Web page': 'Web page', });
lyr_PASenate_3.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA': 'AREA', 'URL': 'URL', 'S_LASTNAME': 'S_LASTNAME', 'LEN': 'LEN', 'GPID': 'GPID', 'S_FIRSTNAM': 'S_FIRSTNAM', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'LEG_DISTRI': 'District', 'Sen Last Name': 'Sen Last Name', 'Web page': 'Web page', });
lyr_USHouse_4.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA': 'AREA', 'URL': 'URL', 'LEN': 'LEN', 'GPID': 'GPID', 'C_FIRSTNAM': 'C_FIRSTNAM', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'C_LASTNAME': 'C_LASTNAME', 'LEG_DISTRI': 'District', 'Rep Last Name': 'Rep Last Name', 'Webpage': 'Webpage', 'Web page': 'Web page', });
lyr_SchoolDistrict_1.set('fieldImages', {'MSLINK': 'Hidden', 'SCHOOL_DIS': 'TextEdit', 'AREA': 'Hidden', 'SCHOOL_NAM': 'Hidden', 'GPID': 'Hidden', 'AVTS_SENDI': 'Hidden', 'AUN_NUM': 'Hidden', 'IU_NAME': 'Hidden', 'LEN': 'Hidden', 'AVTS': 'Hidden', 'AUN_SCHDIS': 'Hidden', 'Shape_Leng': 'Hidden', 'IU_NUM': 'Hidden', 'PA_CTY_COD': 'Hidden', 'CTY_NAME': 'Hidden', 'ID': 'Hidden', });
lyr_PAHouse_2.set('fieldImages', {'MSLINK': 'Hidden', 'H_FIRSTNAM': 'Hidden', 'AREA': 'Hidden', 'URL': 'Hidden', 'H_LASTNAME': 'Hidden', 'LEN': 'Hidden', 'GPID': 'Hidden', 'HOME_COUNT': 'Hidden', 'Shape_Leng': 'Hidden', 'PARTY': 'Hidden', 'LEG_DISTRI': 'Range', 'Rep Last Name': 'TextEdit', 'Web page': 'TextEdit', });
lyr_PASenate_3.set('fieldImages', {'MSLINK': 'Hidden', 'AREA': 'Hidden', 'URL': 'Hidden', 'S_LASTNAME': 'Hidden', 'LEN': 'Hidden', 'GPID': 'Hidden', 'S_FIRSTNAM': 'Hidden', 'HOME_COUNT': 'Hidden', 'Shape_Leng': 'Hidden', 'PARTY': 'Hidden', 'LEG_DISTRI': 'Range', 'Sen Last Name': 'TextEdit', 'Web page': 'TextEdit', });
lyr_USHouse_4.set('fieldImages', {'MSLINK': 'Hidden', 'AREA': 'Hidden', 'URL': 'Hidden', 'LEN': 'Hidden', 'GPID': 'Hidden', 'C_FIRSTNAM': 'Hidden', 'HOME_COUNT': 'Hidden', 'Shape_Leng': 'Hidden', 'PARTY': 'Hidden', 'C_LASTNAME': 'Hidden', 'LEG_DISTRI': 'Range', 'Rep Last Name': 'TextEdit', 'Webpage': 'TextEdit', 'Web page': 'TextEdit', });
lyr_SchoolDistrict_1.set('fieldLabels', {'SCHOOL_DIS': 'header label - always visible', });
lyr_PAHouse_2.set('fieldLabels', {'LEG_DISTRI': 'inline label - visible with data', 'Rep Last Name': 'no label', 'Web page': 'no label', });
lyr_PASenate_3.set('fieldLabels', {'LEG_DISTRI': 'inline label - visible with data', 'Sen Last Name': 'no label', 'Web page': 'no label', });
lyr_USHouse_4.set('fieldLabels', {'LEG_DISTRI': 'inline label - visible with data', 'Rep Last Name': 'no label', 'Webpage': 'hidden field', 'Web page': 'no label', });
lyr_USHouse_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});