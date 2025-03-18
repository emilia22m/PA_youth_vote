var wms_layers = [];

var format_SchoolDistricts_0 = new ol.format.GeoJSON();
var features_SchoolDistricts_0 = format_SchoolDistricts_0.readFeatures(json_SchoolDistricts_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchoolDistricts_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolDistricts_0.addFeatures(features_SchoolDistricts_0);
var lyr_SchoolDistricts_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchoolDistricts_0, 
                style: style_SchoolDistricts_0,
                popuplayertitle: 'School Districts',
                interactive: true,
                title: '<img src="styles/legend/SchoolDistricts_0.png" /> School Districts'
            });
var format_PAHouse_1 = new ol.format.GeoJSON();
var features_PAHouse_1 = format_PAHouse_1.readFeatures(json_PAHouse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAHouse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAHouse_1.addFeatures(features_PAHouse_1);
var lyr_PAHouse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAHouse_1, 
                style: style_PAHouse_1,
                popuplayertitle: 'PA House',
                interactive: true,
                title: '<img src="styles/legend/PAHouse_1.png" /> PA House'
            });
var format_PASenate_2 = new ol.format.GeoJSON();
var features_PASenate_2 = format_PASenate_2.readFeatures(json_PASenate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASenate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASenate_2.addFeatures(features_PASenate_2);
var lyr_PASenate_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASenate_2, 
                style: style_PASenate_2,
                popuplayertitle: 'PA Senate',
                interactive: false,
                title: '<img src="styles/legend/PASenate_2.png" /> PA Senate'
            });
var format_USCongress_3 = new ol.format.GeoJSON();
var features_USCongress_3 = format_USCongress_3.readFeatures(json_USCongress_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USCongress_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USCongress_3.addFeatures(features_USCongress_3);
var lyr_USCongress_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USCongress_3, 
                style: style_USCongress_3,
                popuplayertitle: 'US Congress',
                interactive: false,
                title: '<img src="styles/legend/USCongress_3.png" /> US Congress'
            });

lyr_SchoolDistricts_0.setVisible(true);lyr_PAHouse_1.setVisible(true);lyr_PASenate_2.setVisible(true);lyr_USCongress_3.setVisible(true);
var layersList = [lyr_SchoolDistricts_0,lyr_PAHouse_1,lyr_PASenate_2,lyr_USCongress_3];
lyr_SchoolDistricts_0.set('fieldAliases', {'MSLINK': 'MSLINK', 'SCHOOL_DIS': 'SCHOOL_DIS', 'AREA': 'AREA', 'SCHOOL_NAM': 'SCHOOL_NAM', 'GPID': 'GPID', 'AVTS_SENDI': 'AVTS_SENDI', 'AUN_NUM': 'AUN_NUM', 'IU_NAME': 'IU_NAME', 'LEN': 'LEN', 'AVTS': 'AVTS', 'AUN_SCHDIS': 'AUN_SCHDIS', 'Shape_Leng': 'Shape_Leng', 'IU_NUM': 'IU_NUM', 'PA_CTY_COD': 'PA_CTY_COD', 'CTY_NAME': 'CTY_NAME', 'ID': 'ID', });
lyr_PAHouse_1.set('fieldAliases', {'MSLINK': 'MSLINK', 'H_FIRSTNAM': 'H_FIRSTNAM', 'AREA': 'AREA', 'URL': 'URL', 'H_LASTNAME': 'H_LASTNAME', 'LEN': 'LEN', 'GPID': 'GPID', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'LEG_DISTRI': 'LEG_DISTRI', });
lyr_PASenate_2.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA': 'AREA', 'URL': 'URL', 'S_LASTNAME': 'S_LASTNAME', 'LEN': 'LEN', 'GPID': 'GPID', 'S_FIRSTNAM': 'S_FIRSTNAM', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'LEG_DISTRI': 'LEG_DISTRI', });
lyr_USCongress_3.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA': 'AREA', 'URL': 'URL', 'LEN': 'LEN', 'GPID': 'GPID', 'C_FIRSTNAM': 'C_FIRSTNAM', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'C_LASTNAME': 'C_LASTNAME', 'LEG_DISTRI': 'LEG_DISTRI', });
lyr_SchoolDistricts_0.set('fieldImages', {'MSLINK': 'Hidden', 'SCHOOL_DIS': 'TextEdit', 'AREA': 'Hidden', 'SCHOOL_NAM': 'Hidden', 'GPID': 'Hidden', 'AVTS_SENDI': 'Hidden', 'AUN_NUM': 'Hidden', 'IU_NAME': 'Hidden', 'LEN': 'Hidden', 'AVTS': 'Hidden', 'AUN_SCHDIS': 'Hidden', 'Shape_Leng': 'Hidden', 'IU_NUM': 'Hidden', 'PA_CTY_COD': 'Hidden', 'CTY_NAME': 'Hidden', 'ID': 'Range', });
lyr_PAHouse_1.set('fieldImages', {'MSLINK': 'Range', 'H_FIRSTNAM': 'TextEdit', 'AREA': 'TextEdit', 'URL': 'TextEdit', 'H_LASTNAME': 'TextEdit', 'LEN': 'TextEdit', 'GPID': 'Range', 'HOME_COUNT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'PARTY': 'TextEdit', 'LEG_DISTRI': 'Range', });
lyr_PASenate_2.set('fieldImages', {'MSLINK': 'Range', 'AREA': 'TextEdit', 'URL': 'TextEdit', 'S_LASTNAME': 'TextEdit', 'LEN': 'TextEdit', 'GPID': 'Range', 'S_FIRSTNAM': 'TextEdit', 'HOME_COUNT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'PARTY': 'TextEdit', 'LEG_DISTRI': 'Range', });
lyr_USCongress_3.set('fieldImages', {'MSLINK': 'Range', 'AREA': 'TextEdit', 'URL': 'TextEdit', 'LEN': 'TextEdit', 'GPID': 'Range', 'C_FIRSTNAM': 'TextEdit', 'HOME_COUNT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'PARTY': 'TextEdit', 'C_LASTNAME': 'TextEdit', 'LEG_DISTRI': 'Range', });
lyr_SchoolDistricts_0.set('fieldLabels', {'SCHOOL_DIS': 'header label - always visible', 'ID': 'no label', });
lyr_PAHouse_1.set('fieldLabels', {'MSLINK': 'no label', 'H_FIRSTNAM': 'no label', 'AREA': 'no label', 'URL': 'no label', 'H_LASTNAME': 'no label', 'LEN': 'no label', 'GPID': 'no label', 'HOME_COUNT': 'no label', 'Shape_Leng': 'no label', 'PARTY': 'no label', 'LEG_DISTRI': 'no label', });
lyr_PASenate_2.set('fieldLabels', {'MSLINK': 'no label', 'AREA': 'no label', 'URL': 'no label', 'S_LASTNAME': 'no label', 'LEN': 'no label', 'GPID': 'no label', 'S_FIRSTNAM': 'no label', 'HOME_COUNT': 'no label', 'Shape_Leng': 'no label', 'PARTY': 'no label', 'LEG_DISTRI': 'no label', });
lyr_USCongress_3.set('fieldLabels', {'MSLINK': 'no label', 'AREA': 'no label', 'URL': 'no label', 'LEN': 'no label', 'GPID': 'no label', 'C_FIRSTNAM': 'no label', 'HOME_COUNT': 'no label', 'Shape_Leng': 'no label', 'PARTY': 'no label', 'C_LASTNAME': 'no label', 'LEG_DISTRI': 'no label', });
lyr_USCongress_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});