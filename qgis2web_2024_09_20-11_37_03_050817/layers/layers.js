var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1 = new ol.format.GeoJSON();
var features_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1 = format_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1.readFeatures(json_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1.addFeatures(features_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1);
var lyr_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1, 
                style: style_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1,
                popuplayertitle: "data — POINT_5f96784b_905c_4ea2_8a69_566377912531",
                interactive: true,
                title: '<img src="styles/legend/dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1.png" /> data — POINT_5f96784b_905c_4ea2_8a69_566377912531'
            });
var format_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2 = new ol.format.GeoJSON();
var features_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2 = format_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2.readFeatures(json_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2.addFeatures(features_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2);
var lyr_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2, 
                style: style_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2,
                popuplayertitle: "data — LOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db",
                interactive: true,
                title: '<img src="styles/legend/dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2.png" /> data — LOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db'
            });
var format_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3 = new ol.format.GeoJSON();
var features_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3 = format_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3.readFeatures(json_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3.addFeatures(features_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3);
var lyr_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3, 
                style: style_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3,
                popuplayertitle: "data — LOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135",
                interactive: true,
                title: '<img src="styles/legend/dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3.png" /> data — LOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135'
            });
var format_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4 = new ol.format.GeoJSON();
var features_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4 = format_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4.readFeatures(json_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4.addFeatures(features_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4);
var lyr_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4, 
                style: style_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4,
                popuplayertitle: "data — JALAN_1cb88e74_3e57_4421_958e_fe901348a1f2",
                interactive: true,
                title: '<img src="styles/legend/dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4.png" /> data — JALAN_1cb88e74_3e57_4421_958e_fe901348a1f2'
            });
var format_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5 = new ol.format.GeoJSON();
var features_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5 = format_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.readFeatures(json_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.addFeatures(features_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5);
var lyr_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5, 
                style: style_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5,
                popuplayertitle: "data — BANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0",
                interactive: true,
                title: '<img src="styles/legend/dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.png" /> data — BANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0'
            });

lyr_OSMStandard_0.setVisible(true);lyr_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1.setVisible(true);lyr_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2.setVisible(true);lyr_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3.setVisible(true);lyr_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4.setVisible(true);lyr_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1,lyr_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2,lyr_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3,lyr_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4,lyr_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5];
lyr_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1.set('fieldAliases', {'fid_1': 'fid_1', 'fid': 'fid', 'NO LOT': 'NO LOT', 'X': 'X', 'Y': 'Y', });
lyr_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2.set('fieldAliases', {'fid_1': 'fid_1', 'fid': 'fid', 'B.KUBUR': 'B.KUBUR', 'ID': 'ID', });
lyr_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3.set('fieldAliases', {'fid_1': 'fid_1', 'fid': 'fid', 'id': 'id', 'B.KUBUR': 'B.KUBUR', });
lyr_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4.set('fieldAliases', {'fid_1': 'fid_1', 'fid': 'fid', 'ID': 'ID', });
lyr_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.set('fieldAliases', {'fid_1': 'fid_1', 'fid': 'fid', 'ID': 'ID', 'NAME': 'NAME', });
lyr_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1.set('fieldImages', {'fid_1': '', 'fid': '', 'NO LOT': '', 'X': '', 'Y': '', });
lyr_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2.set('fieldImages', {'fid_1': '', 'fid': '', 'B.KUBUR': '', 'ID': '', });
lyr_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3.set('fieldImages', {'fid_1': '', 'fid': '', 'id': '', 'B.KUBUR': '', });
lyr_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4.set('fieldImages', {'fid_1': '', 'fid': '', 'ID': '', });
lyr_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.set('fieldImages', {'fid_1': '', 'fid': '', 'ID': '', 'NAME': '', });
lyr_dataPOINT_5f96784b_905c_4ea2_8a69_566377912531_1.set('fieldLabels', {'fid_1': 'no label', 'fid': 'no label', 'NO LOT': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_dataLOT_KUBUR__KANAK__a965a087_66bb_48fc_bc50_9a5e2dd336db_2.set('fieldLabels', {'fid_1': 'no label', 'fid': 'no label', 'B.KUBUR': 'no label', 'ID': 'no label', });
lyr_dataLOT_KUBUR__9ae91b49_6b44_4946_a66b_2dd4f5481135_3.set('fieldLabels', {'fid_1': 'no label', 'fid': 'no label', 'id': 'no label', 'B.KUBUR': 'no label', });
lyr_dataJALAN_1cb88e74_3e57_4421_958e_fe901348a1f2_4.set('fieldLabels', {'fid_1': 'no label', 'fid': 'no label', 'ID': 'no label', });
lyr_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.set('fieldLabels', {'fid_1': 'no label', 'fid': 'no label', 'ID': 'no label', 'NAME': 'no label', });
lyr_dataBANGUNAN_410ee7d0_7f12_458b_8b4b_578f9db001a0_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});