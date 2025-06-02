var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
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
var format_PhiladelphiaCouncilDistrict_2 = new ol.format.GeoJSON();
var features_PhiladelphiaCouncilDistrict_2 = format_PhiladelphiaCouncilDistrict_2.readFeatures(json_PhiladelphiaCouncilDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhiladelphiaCouncilDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhiladelphiaCouncilDistrict_2.addFeatures(features_PhiladelphiaCouncilDistrict_2);
var lyr_PhiladelphiaCouncilDistrict_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhiladelphiaCouncilDistrict_2,
maxResolution:205.50405378649788,
 
                style: style_PhiladelphiaCouncilDistrict_2,
                popuplayertitle: 'Philadelphia Council District',
                interactive: true,
                title: '<img src="styles/legend/PhiladelphiaCouncilDistrict_2.png" /> Philadelphia Council District'
            });
var format_PhiladelphiaHighSchool_3 = new ol.format.GeoJSON();
var features_PhiladelphiaHighSchool_3 = format_PhiladelphiaHighSchool_3.readFeatures(json_PhiladelphiaHighSchool_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhiladelphiaHighSchool_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhiladelphiaHighSchool_3.addFeatures(features_PhiladelphiaHighSchool_3);
var lyr_PhiladelphiaHighSchool_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhiladelphiaHighSchool_3,
maxResolution:205.50405378649788,
 
                style: style_PhiladelphiaHighSchool_3,
                popuplayertitle: 'Philadelphia High School',
                interactive: true,
                title: '<img src="styles/legend/PhiladelphiaHighSchool_3.png" /> Philadelphia High School'
            });
var format_AlleghenyCouncilDistrict_4 = new ol.format.GeoJSON();
var features_AlleghenyCouncilDistrict_4 = format_AlleghenyCouncilDistrict_4.readFeatures(json_AlleghenyCouncilDistrict_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlleghenyCouncilDistrict_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlleghenyCouncilDistrict_4.addFeatures(features_AlleghenyCouncilDistrict_4);
var lyr_AlleghenyCouncilDistrict_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlleghenyCouncilDistrict_4,
maxResolution:205.50405378649788,
 
                style: style_AlleghenyCouncilDistrict_4,
                popuplayertitle: 'Allegheny Council District',
                interactive: true,
                title: '<img src="styles/legend/AlleghenyCouncilDistrict_4.png" /> Allegheny Council District'
            });
var format_PittsburghHighSchool_5 = new ol.format.GeoJSON();
var features_PittsburghHighSchool_5 = format_PittsburghHighSchool_5.readFeatures(json_PittsburghHighSchool_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PittsburghHighSchool_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PittsburghHighSchool_5.addFeatures(features_PittsburghHighSchool_5);
var lyr_PittsburghHighSchool_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PittsburghHighSchool_5,
maxResolution:205.50405378649788,
 
                style: style_PittsburghHighSchool_5,
                popuplayertitle: 'Pittsburgh High School',
                interactive: true,
                title: '<img src="styles/legend/PittsburghHighSchool_5.png" /> Pittsburgh High School'
            });
var format_IntermediateUnit_6 = new ol.format.GeoJSON();
var features_IntermediateUnit_6 = format_IntermediateUnit_6.readFeatures(json_IntermediateUnit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntermediateUnit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntermediateUnit_6.addFeatures(features_IntermediateUnit_6);
var lyr_IntermediateUnit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntermediateUnit_6, 
                style: style_IntermediateUnit_6,
                popuplayertitle: 'Intermediate Unit',
                interactive: true,
                title: '<img src="styles/legend/IntermediateUnit_6.png" /> Intermediate Unit'
            });
var format_Municipality_7 = new ol.format.GeoJSON();
var features_Municipality_7 = format_Municipality_7.readFeatures(json_Municipality_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipality_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipality_7.addFeatures(features_Municipality_7);
var lyr_Municipality_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipality_7, 
                style: style_Municipality_7,
                popuplayertitle: 'Municipality',
                interactive: true,
                title: '<img src="styles/legend/Municipality_7.png" /> Municipality'
            });
var format_PAHouse_8 = new ol.format.GeoJSON();
var features_PAHouse_8 = format_PAHouse_8.readFeatures(json_PAHouse_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAHouse_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAHouse_8.addFeatures(features_PAHouse_8);
var lyr_PAHouse_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAHouse_8, 
                style: style_PAHouse_8,
                popuplayertitle: 'PA House',
                interactive: true,
                title: '<img src="styles/legend/PAHouse_8.png" /> PA House'
            });
var format_PASenate_9 = new ol.format.GeoJSON();
var features_PASenate_9 = format_PASenate_9.readFeatures(json_PASenate_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASenate_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASenate_9.addFeatures(features_PASenate_9);
var lyr_PASenate_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASenate_9, 
                style: style_PASenate_9,
                popuplayertitle: 'PA Senate',
                interactive: true,
                title: '<img src="styles/legend/PASenate_9.png" /> PA Senate'
            });
var format_USHouse_10 = new ol.format.GeoJSON();
var features_USHouse_10 = format_USHouse_10.readFeatures(json_USHouse_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USHouse_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USHouse_10.addFeatures(features_USHouse_10);
var lyr_USHouse_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USHouse_10, 
                style: style_USHouse_10,
                popuplayertitle: 'US House',
                interactive: true,
                title: '<img src="styles/legend/USHouse_10.png" /> US House'
            });
var format_County_11 = new ol.format.GeoJSON();
var features_County_11 = format_County_11.readFeatures(json_County_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_11.addFeatures(features_County_11);
var lyr_County_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_11, 
                style: style_County_11,
                popuplayertitle: 'County',
                interactive: true,
                title: '<img src="styles/legend/County_11.png" /> County'
            });
var group_AlleghenyCounty = new ol.layer.Group({
                                layers: [lyr_AlleghenyCouncilDistrict_4,lyr_PittsburghHighSchool_5,],
                                fold: 'close',
                                title: 'Allegheny County'});
var group_Philadelphia = new ol.layer.Group({
                                layers: [lyr_PhiladelphiaCouncilDistrict_2,lyr_PhiladelphiaHighSchool_3,],
                                fold: 'close',
                                title: 'Philadelphia'});

lyr_BaseMap_0.setVisible(true);lyr_SchoolDistrict_1.setVisible(true);lyr_PhiladelphiaCouncilDistrict_2.setVisible(false);lyr_PhiladelphiaHighSchool_3.setVisible(false);lyr_AlleghenyCouncilDistrict_4.setVisible(false);lyr_PittsburghHighSchool_5.setVisible(false);lyr_IntermediateUnit_6.setVisible(false);lyr_Municipality_7.setVisible(false);lyr_PAHouse_8.setVisible(false);lyr_PASenate_9.setVisible(false);lyr_USHouse_10.setVisible(false);lyr_County_11.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_SchoolDistrict_1,group_Philadelphia,group_AlleghenyCounty,lyr_IntermediateUnit_6,lyr_Municipality_7,lyr_PAHouse_8,lyr_PASenate_9,lyr_USHouse_10,lyr_County_11];
lyr_SchoolDistrict_1.set('fieldAliases', {'MSLINK': 'MSLINK', 'SCHOOL_DIS': 'SCHOOL_DIS', 'AREA': 'AREA', 'SCHOOL_NAM': 'SCHOOL_NAM', 'GPID': 'GPID', 'AVTS_SENDI': 'AVTS_SENDI', 'AUN_NUM': 'AUN_NUM', 'IU_NAME': 'IU_NAME', 'LEN': 'LEN', 'AVTS': 'AVTS', 'AUN_SCHDIS': 'AUN_SCHDIS', 'Shape_Leng': 'Shape_Leng', 'IU_NUM': 'IU_NUM', 'PA_CTY_COD': 'PA_CTY_COD', 'CTY_NAME': 'CTY_NAME', 'ID': 'ID', });
lyr_PhiladelphiaCouncilDistrict_2.set('fieldAliases', {'SHAPE_LENG': 'SHAPE_LENG', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'Philadelphia Council District', });
lyr_PhiladelphiaHighSchool_3.set('fieldAliases', {'HS_ID': 'HS_ID', 'HS_Name': 'High School', 'HS_Grade': 'HS_Grade', });
lyr_AlleghenyCouncilDistrict_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LABEL': 'LABEL', 'SHAPE_area': 'SHAPE_area', 'SHAPE_len': 'SHAPE_len', 'District': 'Allegheny Council District', });
lyr_PittsburghHighSchool_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'School_ID': 'School_ID', 'SchoolName': 'High School', 'HighSchool': 'HighSchool', 'PPS_Count': 'PPS_Count', 'Labels': 'Labels', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_IntermediateUnit_6.set('fieldAliases', {'MSLINK': 'MSLINK', 'SCHOOL_DIS': 'SCHOOL_DIS', 'AREA': 'AREA', 'SCHOOL_NAM': 'SCHOOL_NAM', 'GPID': 'GPID', 'AVTS_SENDI': 'AVTS_SENDI', 'AUN_NUM': 'AUN_NUM', 'IU_NAME': 'Intermediate Unit', 'LEN': 'LEN', 'AVTS': 'AVTS', 'AUN_SCHDIS': 'AUN_SCHDIS', 'Shape_Leng': 'Shape_Leng', 'IU_NUM': 'IU_NUM', 'PA_CTY_COD': 'PA_CTY_COD', 'CTY_NAME': 'CTY_NAME', 'ID': 'ID', });
lyr_Municipality_7.set('fieldAliases', {'FIPS_AREA_': 'FIPS_AREA_', 'MUNICIPAL_': 'MUNICIPAL_', 'GPID': 'GPID', 'FED_AID_UR': 'FED_AID_UR', 'COUNTY_NAM': 'COUNTY_NAM', 'DCED_ID': 'DCED_ID', 'FIPS_STATE': 'FIPS_STATE', 'MSLINK': 'MSLINK', 'FED_ID_NUM': 'FED_ID_NUM', 'AREA': 'AREA', 'FIPS_MUN_C': 'FIPS_MUN_C', 'ANSI_CODE': 'ANSI_CODE', 'CTY_MUN_CO': 'CTY_MUN_CO', 'DISTRICT_N': 'DISTRICT_N', 'GNIS_PPL': 'GNIS_PPL', 'CLASS_OF_M': 'CLASS_OF_M', 'PSD_CODE_2': 'PSD_CODE_2', 'PSD_CODE_3': 'PSD_CODE_3', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'GEOID': 'GEOID', 'FIPS_MUN_1': 'FIPS_MUN_1', 'FIPS_SQ_MI': 'FIPS_SQ_MI', 'FIPS_AREA1': 'FIPS_AREA1', 'PSD_CODE': 'PSD_CODE', 'LEN': 'LEN', 'PLANNING_P': 'PLANNING_P', 'FIPS_MUN_P': 'FIPS_MUN_P', 'FIPS_COUNT': 'FIPS_COUNT', 'MUNICIPAL1': 'Municipality', });
lyr_PAHouse_8.set('fieldAliases', {'MSLINK': 'MSLINK', 'H_FIRSTNAM': 'H_FIRSTNAM', 'AREA': 'AREA', 'URL': 'URL', 'H_LASTNAME': 'H_LASTNAME', 'LEN': 'LEN', 'GPID': 'GPID', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'LEG_DISTRI': 'District', 'Rep Last Name': 'Rep Last Name', 'Web page': 'Web page', });
lyr_PASenate_9.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA': 'AREA', 'URL': 'URL', 'S_LASTNAME': 'S_LASTNAME', 'LEN': 'LEN', 'GPID': 'GPID', 'S_FIRSTNAM': 'S_FIRSTNAM', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'LEG_DISTRI': 'District', 'Sen Last Name': 'Sen Last Name', 'Web page': 'Web page', });
lyr_USHouse_10.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA': 'AREA', 'URL': 'URL', 'LEN': 'LEN', 'GPID': 'GPID', 'C_FIRSTNAM': 'C_FIRSTNAM', 'HOME_COUNT': 'HOME_COUNT', 'Shape_Leng': 'Shape_Leng', 'PARTY': 'PARTY', 'C_LASTNAME': 'C_LASTNAME', 'LEG_DISTRI': 'District', 'Rep Last Name': 'Rep Last Name', 'Webpage': 'Webpage', 'Web page': 'Web page', });
lyr_County_11.set('fieldAliases', {'SOUND': 'SOUND', 'MSLINK': 'MSLINK', 'MAINT_CTY_': 'MAINT_CTY_', 'AREA': 'AREA', 'COUNTY_PER': 'COUNTY_PER', 'COUNTY_N_1': 'COUNTY_N_1', 'NOTE_FILE': 'NOTE_FILE', 'IMAGE_NAME': 'IMAGE_NAME', 'LEN': 'LEN', 'NUMERIC_LA': 'NUMERIC_LA', 'AREA_SQ_MI': 'AREA_SQ_MI', 'GPID': 'GPID', 'PA_CTY_COD': 'PA_CTY_COD', 'Shape_Leng': 'Shape_Leng', 'COUNTY_NAM': 'County', 'DISTRICT_O': 'DISTRICT_O', 'DISTRICT_N': 'DISTRICT_N', 'SPREAD_SHE': 'SPREAD_SHE', 'COUNTY_NUM': 'COUNTY_NUM', 'FIPS_COUNT': 'FIPS_COUNT', 'COUNTY_ARE': 'COUNTY_ARE', });
lyr_SchoolDistrict_1.set('fieldImages', {'MSLINK': 'Hidden', 'SCHOOL_DIS': 'TextEdit', 'AREA': 'Hidden', 'SCHOOL_NAM': 'Hidden', 'GPID': 'Hidden', 'AVTS_SENDI': 'Hidden', 'AUN_NUM': 'Hidden', 'IU_NAME': 'Hidden', 'LEN': 'Hidden', 'AVTS': 'Hidden', 'AUN_SCHDIS': 'Hidden', 'Shape_Leng': 'Hidden', 'IU_NUM': 'Hidden', 'PA_CTY_COD': 'Hidden', 'CTY_NAME': 'Hidden', 'ID': 'Hidden', });
lyr_PhiladelphiaCouncilDistrict_2.set('fieldImages', {'SHAPE_LENG': 'Hidden', 'OBJECTID': 'Hidden', 'DISTRICT': 'TextEdit', });
lyr_PhiladelphiaHighSchool_3.set('fieldImages', {'HS_ID': 'Hidden', 'HS_Name': 'TextEdit', 'HS_Grade': 'Hidden', });
lyr_AlleghenyCouncilDistrict_4.set('fieldImages', {'OBJECTID': 'Hidden', 'LABEL': 'Hidden', 'SHAPE_area': 'Hidden', 'SHAPE_len': 'Hidden', 'District': 'Range', });
lyr_PittsburghHighSchool_5.set('fieldImages', {'OBJECTID': 'Hidden', 'School_ID': 'Hidden', 'SchoolName': 'TextEdit', 'HighSchool': 'Hidden', 'PPS_Count': 'Hidden', 'Labels': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_IntermediateUnit_6.set('fieldImages', {'MSLINK': 'Hidden', 'SCHOOL_DIS': 'Hidden', 'AREA': 'Hidden', 'SCHOOL_NAM': 'Hidden', 'GPID': 'Hidden', 'AVTS_SENDI': 'Hidden', 'AUN_NUM': 'Hidden', 'IU_NAME': 'TextEdit', 'LEN': 'Hidden', 'AVTS': 'Hidden', 'AUN_SCHDIS': 'Hidden', 'Shape_Leng': 'Hidden', 'IU_NUM': 'Hidden', 'PA_CTY_COD': 'Hidden', 'CTY_NAME': 'Hidden', 'ID': 'Hidden', });
lyr_Municipality_7.set('fieldImages', {'FIPS_AREA_': 'Hidden', 'MUNICIPAL_': 'Hidden', 'GPID': 'Hidden', 'FED_AID_UR': 'Hidden', 'COUNTY_NAM': 'Hidden', 'DCED_ID': 'Hidden', 'FIPS_STATE': 'Hidden', 'MSLINK': 'Hidden', 'FED_ID_NUM': 'Hidden', 'AREA': 'Hidden', 'FIPS_MUN_C': 'Hidden', 'ANSI_CODE': 'Hidden', 'CTY_MUN_CO': 'Hidden', 'DISTRICT_N': 'Hidden', 'GNIS_PPL': 'Hidden', 'CLASS_OF_M': 'Hidden', 'PSD_CODE_2': 'Hidden', 'PSD_CODE_3': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'GEOID': 'Hidden', 'FIPS_MUN_1': 'Hidden', 'FIPS_SQ_MI': 'Hidden', 'FIPS_AREA1': 'Hidden', 'PSD_CODE': 'Hidden', 'LEN': 'Hidden', 'PLANNING_P': 'Hidden', 'FIPS_MUN_P': 'Hidden', 'FIPS_COUNT': 'Hidden', 'MUNICIPAL1': 'TextEdit', });
lyr_PAHouse_8.set('fieldImages', {'MSLINK': 'Hidden', 'H_FIRSTNAM': 'Hidden', 'AREA': 'Hidden', 'URL': 'Hidden', 'H_LASTNAME': 'Hidden', 'LEN': 'Hidden', 'GPID': 'Hidden', 'HOME_COUNT': 'Hidden', 'Shape_Leng': 'Hidden', 'PARTY': 'Hidden', 'LEG_DISTRI': 'Range', 'Rep Last Name': 'TextEdit', 'Web page': 'TextEdit', });
lyr_PASenate_9.set('fieldImages', {'MSLINK': 'Hidden', 'AREA': 'Hidden', 'URL': 'Hidden', 'S_LASTNAME': 'Hidden', 'LEN': 'Hidden', 'GPID': 'Hidden', 'S_FIRSTNAM': 'Hidden', 'HOME_COUNT': 'Hidden', 'Shape_Leng': 'Hidden', 'PARTY': 'Hidden', 'LEG_DISTRI': 'Range', 'Sen Last Name': 'TextEdit', 'Web page': 'TextEdit', });
lyr_USHouse_10.set('fieldImages', {'MSLINK': 'Hidden', 'AREA': 'Hidden', 'URL': 'Hidden', 'LEN': 'Hidden', 'GPID': 'Hidden', 'C_FIRSTNAM': 'Hidden', 'HOME_COUNT': 'Hidden', 'Shape_Leng': 'Hidden', 'PARTY': 'Hidden', 'C_LASTNAME': 'Hidden', 'LEG_DISTRI': 'Range', 'Rep Last Name': 'TextEdit', 'Webpage': 'TextEdit', 'Web page': 'TextEdit', });
lyr_County_11.set('fieldImages', {'SOUND': 'Hidden', 'MSLINK': 'Hidden', 'MAINT_CTY_': 'Hidden', 'AREA': 'Hidden', 'COUNTY_PER': 'Hidden', 'COUNTY_N_1': 'Hidden', 'NOTE_FILE': 'Hidden', 'IMAGE_NAME': 'Hidden', 'LEN': 'Hidden', 'NUMERIC_LA': 'Hidden', 'AREA_SQ_MI': 'Hidden', 'GPID': 'Hidden', 'PA_CTY_COD': 'Hidden', 'Shape_Leng': 'Hidden', 'COUNTY_NAM': 'TextEdit', 'DISTRICT_O': 'Hidden', 'DISTRICT_N': 'Hidden', 'SPREAD_SHE': 'Hidden', 'COUNTY_NUM': 'Hidden', 'FIPS_COUNT': 'Hidden', 'COUNTY_ARE': 'Hidden', });
lyr_SchoolDistrict_1.set('fieldLabels', {'SCHOOL_DIS': 'no label', });
lyr_PhiladelphiaCouncilDistrict_2.set('fieldLabels', {'DISTRICT': 'no label', });
lyr_PhiladelphiaHighSchool_3.set('fieldLabels', {'HS_Name': 'no label', });
lyr_AlleghenyCouncilDistrict_4.set('fieldLabels', {'District': 'no label', });
lyr_PittsburghHighSchool_5.set('fieldLabels', {'SchoolName': 'inline label - always visible', });
lyr_IntermediateUnit_6.set('fieldLabels', {'IU_NAME': 'no label', });
lyr_Municipality_7.set('fieldLabels', {'MUNICIPAL1': 'no label', });
lyr_PAHouse_8.set('fieldLabels', {'LEG_DISTRI': 'inline label - visible with data', 'Rep Last Name': 'no label', 'Web page': 'no label', });
lyr_PASenate_9.set('fieldLabels', {'LEG_DISTRI': 'inline label - visible with data', 'Sen Last Name': 'no label', 'Web page': 'no label', });
lyr_USHouse_10.set('fieldLabels', {'LEG_DISTRI': 'inline label - visible with data', 'Rep Last Name': 'no label', 'Webpage': 'hidden field', 'Web page': 'no label', });
lyr_County_11.set('fieldLabels', {'COUNTY_NAM': 'inline label - visible with data', });
lyr_County_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});