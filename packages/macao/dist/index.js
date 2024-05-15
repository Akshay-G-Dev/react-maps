"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/Macao.tsx
var import_react2 = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = ["Macao", "Taipa, Cotai, and Coloane"];
var drawPath = {
  Macao: "M188.78,0L160.98,45.54L147.09,75.56L74.82,75.56L74.82,85.07L22.94,101.08L57.22,162.62L120.22,142.61L110.95,123.1L129.48,123.1L147.09,162.62L91.5,236.68L86.06,246.01L80.92,286.76L57.08,325.38L19.16,372.19L11.57,401.45L0.3,431.89L8.32,455.28L39.74,505.6L57.4,539.92L74.82,517.34L120.22,517.34L155.43,468.82L186.43,468.82L183.79,455.72L162.12,452.06L151.28,449.87L143.16,425.73L138.42,411.1L143.16,398.67L149.25,389.89L158.73,392.09L177.02,387.7L191.92,390.62L194.63,416.95L195.98,446.94L201,468.22L235.1,449.81L256.24,433.62L256.26,421.64L266.42,413.59L274.54,404.81L286.73,395.31L298.25,387.26L306.01,397.64L332.39,383.77L332.39,364.76L332.39,355.25L332.39,326.73L323.12,306.22L340.72,287.21L358.33,306.22L358.33,296.71L396.31,225.17L323.12,268.2L305.52,258.69L297.18,230.17L323.79,208.24L327.71,205.01L336.17,189.77L344.98,189.77L353.78,184.65L357.17,183.92L365.29,190.5L371.24,207.93L392.61,211.66L378.71,162.62L358.33,114.09L323.12,85.07L252.71,57.05L252.71,38.03L188.78,0L188.78,0z",
  "Taipa, Cotai, and Coloane": "M137.31,1029.98L143.96,1170.02L147.88,1176.85L199.85,1212.54L209.98,1212.29L218.21,1064.7L218.55,1057.43L219.39,1028.47L219.76,1021.86L140.33,1026.42L137.31,1029.98zM323.19,1345.36L328.82,1341.1L331.17,1336.02L328.07,1334.84L328.39,1332.53L329.82,1331.19L333.98,1328.35L336.27,1329.94L339.87,1325.81L341.96,1325.36L343.52,1326.84L345.07,1323.98L346.23,1324.53L348.25,1323.13L349.41,1321.62L349.65,1319.83L348.67,1318.12L349.27,1316.39L350.33,1313.35L352.21,1310.91L356.96,1306.43L362.5,1303.17L368.47,1302.02L374.06,1301.93L378.76,1303.09L377.92,1306.02L379.39,1306.37L378.86,1312.06L379.79,1312.58L379.96,1315.59L382.59,1315.97L385.07,1320.93L389.06,1321.75L394.98,1319.66L397.08,1320L401.34,1319.2L406.72,1315.17L410.83,1316.42L414.09,1318.27L418.28,1318.22L420.45,1316.68L421.68,1314.72L423.02,1314.69L424.03,1313.17L426.86,1313.49L428.31,1314.16L432.26,1314.03L433.32,1315.13L433.3,1316.77L424.33,1316.96L424.8,1318.55L446.81,1318.12L447.8,1315.12L449.81,1314.82L452.67,1316.06L463.57,1320.78L470.81,1322.09L476.69,1322.07L483.35,1320.07L485.43,1321.15L489.86,1317.25L492.21,1317.78L497,1314.93L498.63,1312.47L500.71,1312.79L501.9,1311.4L513.89,1310.58L513.92,1303.36L515.59,1301.37L518.81,1300.9L518.81,1298.27L522.41,1297.16L525.16,1294.98L525.43,1292.72L523.51,1291.36L521.65,1292.48L522.64,1286.88L522.65,1282.69L521.65,1281.65L522.23,1279.78L524.01,1275.23L522.78,1274.27L522.44,1272.69L520.19,1272.69L516.08,1265.58L513.63,1264.44L512.17,1265.49L511.18,1266.94L500.61,1265.41L494.27,1265.11L485.88,1266.72L489.24,1264L488.23,1262.65L484.17,1265.51L481.26,1264.14L480.12,1262.68L479.12,1261.6L478.63,1261.08L477.38,1255.63L476.99,1246.83L477.58,1239.24L479.64,1233.16L483.86,1218.02L486.34,1211.83L488.32,1206.12L491.31,1200.06L494.58,1195.86L497.97,1191.14L501.2,1186.01L504.26,1181.8L507.16,1177.54L510.08,1174.14L514.01,1170.61L520.75,1165.55L525.24,1161.81L531.21,1156.68L539.45,1154.04L539.82,1156.05L542.35,1158.18L544.28,1161.07L561.21,1169.69L564.01,1173L566.78,1174.16L574.6,1173.42L580.53,1172.87L590.1,1177.69L594.29,1178.53L596.69,1176.46L599.63,1174.46L603.98,1171.22L607.83,1168.41L611.24,1165.9L614.22,1164.19L620.28,1161.27L624.92,1159.37L628.4,1157.78L630.66,1155.16L631.75,1150.57L637.62,1138.05L642.78,1134.94L645.86,1131.27L651.31,1129.15L653.17,1125.89L658.7,1122.42L662.73,1122.92L663.03,1123.94L668.33,1126.57L675.91,1124.99L678.17,1126.49L679.27,1126.49L681.21,1125.8L682.6,1124.44L682.13,1125.68L681.69,1126.78L681.5,1128.29L683.67,1130.15L686.08,1131.51L687.55,1131.18L689.42,1131.29L692.75,1131.84L694.95,1132.42L697.62,1132.46L703.33,1131.51L705.31,1129.82L707.32,1127L709.6,1123.78L711.02,1121.51L711.06,1120.12L710.8,1118.69L709.12,1118.58L708.02,1118.51L708.13,1117.63L709.08,1116.75L713.37,1114L715.6,1112.79L718.4,1111.31L719.07,1111.51L720.36,1110.96L723.15,1108.25L724.16,1107.3L724.76,1106.97L725.64,1107.37L724.26,1108.93L724.67,1109.62L726.04,1109.83L728.35,1109.83L730.22,1109.41L730.76,1109.91L731.84,1109.03L731.62,1108.54L731.98,1107.92L731.74,1107.32L732.17,1106.92L732.6,1107.33L733.32,1106.47L733.51,1104.41L733.88,1102.72L733.92,1102.21L733.33,1101.59L734.06,1099.75L732.93,1096.86L731.9,1095.73L731.75,1094.37L733.15,1090.71L733.44,1088.91L733.59,1086.09L732.74,1082.06L731.79,1080.64L731.06,1080.05L727.81,1081.18L727.69,1081.22L726.03,1081.77L719.23,1067.7L710.98,1049.84L710.99,1048.77L712.89,1044.85L712.93,1042.58L711.76,1039.58L709.49,1038.66L708.83,1039.21L703.37,1035.51L704.32,1034.19L700.37,1031.44L697.66,1029.54L681.61,1051.63L676.38,1047.71L681.36,1040.68L681.25,1039.98L680.51,1039.44L669.16,1031.12L668.35,1031.15L667.44,1032.25L663.13,1029.26L654.43,1041.04L654.12,1041.45L638.56,1029.88L635.41,1034.24L626.69,1035.74L626.31,1032.96L626.86,1031.09L625.2,1030.23L623.98,1029.32L623.93,1028.46L625.15,1024.77L625.47,1023.19L623.95,1022.11L623.95,1020.28L624.58,1018.7L623.76,1016.24L623.63,1015.38L623.18,1014.35L622.86,1012.6L621.4,1012.83L620.79,1013.96L619.78,1015.09L618.46,1016.55L618.88,1018.23L619.52,1019.49L620.24,1020.53L619.3,1021.43L618.29,1022.89L617.75,1024.35L617.26,1025.41L617.07,1026.16L618.17,1027.16L617.29,1027.91L615.97,1028.52L614.74,1030.11L614.61,1030.98L613.93,1032.08L612.89,1032.34L609.59,1033.57L606.78,1034.56L605.5,1035.2L603.77,1034.72L599.71,1032.74L599.09,1031.44L599.23,1030.23L599.93,1029.14L599.6,1028.18L598.71,1027.83L597.97,1028.55L596.63,1029.65L594.92,1029.11L596.68,1018.28L597.59,1008.52L597.21,1001.87L591.52,993.39L591.51,992.33L592.01,991.77L592.52,992.34L603.96,979.98L613.12,970.69L618.59,965.06L622.21,961.57L624.41,958.36L626.51,952.86L627.49,949.91L627.77,949.06L630.38,942.52L632.66,938.52L632.7,937.8L631.85,937.12L629.25,936.15L626.42,935.63L623.37,935.9L620,936.76L608.47,944.85L596.79,953.19L575.2,967.75L571.56,970.89L570.49,971.86L570.45,973.92L570.68,975.06L571.25,975.73L572.34,977.01L577.74,984.97L575.22,987.54L574.72,986.32L573.08,987.45L572.36,986.61L571.01,986.65L569.96,986.94L568.98,987.95L567.45,988.93L566.46,989.96L565.69,990.98L561.82,993.5L556.93,996.69L555.23,994.5L555.13,993.05L551.5,988.82L553.1,984.89L554.48,981.41L555.41,978.62L560.54,971.18L563.21,965.84L564.99,957.59L566.13,951.52L566.02,950.06L562.4,946.21L562.34,942L564.5,940.56L565.96,937.36L564.95,935.3L563.82,934.81L563.13,933.28L560.06,930.53L557.63,927.57L556.5,923.53L560.84,919.69L563.23,915.76L565.66,916.71L568.66,917L574.12,914.83L582.59,914.05L583.6,917.68L587.07,921.94L593.14,922.87L605.09,922.92L611.76,919.07L616.48,915.84L620.83,915.73L627.91,915.73L626.25,919.48L625.93,923.13L632.5,925.42L635.52,924.8L638.65,926.78L642.92,930.32L645.63,927.93L647.2,921.78L654.6,925.22L658.66,929.28L661.06,937.2L664.39,940.12L668.67,936.37L671.06,936.37L675.65,938.45L680.76,937.2L681.9,931.99L671.38,920.74L668.14,913.54L667.83,907.92L671.72,904.09L680.85,899.16L678.47,879.96L665.89,871.61L561.24,802.14L547.62,799.14L536.57,807.49L528.96,813.42L526.38,815.48L524.32,818.5L522.99,817.77L523,814.52L527.93,811.65L541.75,801.27L544.96,797.87L549.4,791.7L553.24,787.77L553.32,785.35L553.85,784.17L554.08,784.17L681.31,869.15L699.81,881.51L697.95,884.06L697.39,885.58L700.54,896.53L701.96,897.92L703.2,899.76L704,899.26L703.94,898.77L705.57,898.89L707.31,899.37L709.84,905.39L714.08,918.3L754.31,1036.17L755.63,1041.06L759.02,1044.4L763.9,1047.48L767.48,1047.49L771.17,1046.81L794.27,1038.55L796.83,1035.76L798.55,1032.38L799.7,1028.78L798.55,1023.56L745.24,869.15L726.45,814.74L681.39,681.57L676.33,666.57L674.99,662.92L672.65,660.85L667.42,657.98L663.44,657.81L656.89,660.02L649.87,662.6L647.65,664.68L645.73,667.77L644.25,672.6L646.08,680.17L647.9,685.17L578.05,709.28L577.05,705.43L578.34,704.1L580.2,702.81L595.24,697.64L596.39,698.22L622.11,688.88L622.14,687.89L631.54,683.75L632.43,682.89L632.74,681.62L623.78,655.18L622.19,654.35L620.43,654.47L610.79,657.76L609.25,657.74L608.24,656.06L604.81,646.03L603.36,646.38L601.85,642.7L602.34,640.31L602.03,639.3L601.56,638.84L588.33,600.74L588.07,600.13L587.67,600.09L587.3,600.41L587.32,601.12L599.83,638.38L599.04,640.36L596.83,648.3L592.14,667.23L590.79,668.97L587.06,673.27L585.15,674.83L584.58,676L584.76,677.09L589.47,689.41L573.7,694.88L574.08,690.52L574.53,687.22L574.2,685.64L577.3,672.92L575.58,672.45L576.22,669.98L578.43,661.49L578.96,659.47L578.27,659.26L576.96,658.92L576.47,660.94L576.02,662.81L574.4,669.5L573.8,671.99L573.52,673.13L573.15,674.65L572.19,674.38L562.26,671.93L563.76,665.94L565.86,665.43L565.62,664.59L566.94,664.21L566.59,662.74L565.22,663.14L564.83,661.76L565.72,658.22L567.84,657.69L567.63,656.85L568.93,656.51L568.53,655.03L567.2,655.4L566.82,653.93L567.73,650.48L569.82,649.92L569.62,649.1L570.96,648.68L570.54,647.31L569.2,647.69L568.79,646.17L569.69,642.79L571.76,642.23L571.58,641.38L572.97,641.01L572.56,639.56L571.23,639.96L570.77,638.54L571.71,634.93L557.75,631.12L556.81,634.91L555.72,636.04L554.72,635.02L553.64,636.13L554.66,637.06L554.14,637.66L555.7,639.15L554.84,642.6L553.81,643.69L552.78,642.74L551.74,643.79L552.73,644.78L552.14,645.39L553.7,646.85L552.83,650.36L551.79,651.44L550.75,650.5L549.75,651.55L550.74,652.48L550.15,653.12L551.73,654.63L550.84,658.11L549.83,659.14L548.79,658.18L547.74,659.31L548.74,660.21L548.17,660.85L549.71,662.3L548.06,669.16L547.37,668.99L547.41,668.83L546.48,668.59L546.43,668.75L539.65,667.01L539.67,666.84L538.7,666.59L538.64,666.75L531.98,665.05L532.02,664.86L530.98,664.6L530.92,664.78L527.93,664.01L530.85,652.83L527.45,651.95L524.63,663.17L524.17,663.03L524.2,662.87L523.27,662.6L523.22,662.79L518.24,661.51L518.29,661.31L517.3,661.07L517.25,661.24L516.66,661.1L520.96,644.27L518.87,643.72L519.16,642.51L519.08,642.5L519.52,641.03L543.19,603.43L544.37,600.16L543.88,596.92L542.22,593.92L540.01,592.32L526.98,611.02L509.86,606.62L507.79,607.31L506.63,608.71L499.35,637.65L489.68,676.13L451.42,666.46L428.85,667.14L426.64,667.2L419.65,665.17L412.92,663.18L408.81,661.64L405.4,661.96L403.28,662.81L400.4,663.39L396.78,663.89L391.24,664.24L380.91,663.84L369.38,662.4L364.38,660.91L363.14,659.33L360.51,659.53L346.72,655.49L345.85,654.74L341.55,653.89L338.04,654.02L332.82,653.37L330.03,651.3L328.5,650.27L328,647.7L326.89,647.3L325.79,648.35L325.48,650.42L324.72,651.77L322.81,651.98L320.44,652.69L318.71,654.54L315.82,657.14L313.25,658.39L308.84,658.34L305.34,658.98L303.7,658.94L301.02,658.88L293.3,655.86L287.24,654.58L279.98,654.31L270.26,654.69L266.96,655.33L255.4,659.58L245.06,664.93L236.1,662.78L233.46,662.86L232.55,665.71L232.15,667.65L230.11,669.24L224.38,670.11L211.79,671.95L197.33,675.51L189.43,675.41L181.09,675.62L175.12,676.03L169.34,677.29L163.21,681.21L160.92,682.86L159.24,684.55L157.57,684.77L155.75,684.63L152.53,683.91L149.58,682.67L146.27,680.68L144.65,679.44L143.81,678.49L142.56,673.17L139.73,665.95L133.47,653.21L131.39,651.13L128.65,651.01L123.37,653.79L122.26,657.29L123.55,660.15L127.75,679.1L129.26,688.01L130.21,697.86L131.35,707.42L133.63,718.65L135.59,726.36L153.17,781.64L155.09,786.56L158.57,791.26L163.3,796.21L191.04,817.97L199.34,824.79L200.32,825.7L202.38,825.77L204.76,829.57L219.01,845.84L235.53,867.51L237.35,868.24L239.11,867.98L240.48,866.92L241.01,866.02L241.27,864.59L240.98,863.32L239.08,861.11L231.93,850.9L222.81,840.35L222.9,839.17L225.91,836.82L226.94,836.62L249.75,836.75L249.8,874.12L243.76,874.02L243.4,874.02L241.52,871.4L240.34,871.89L268.57,914.7L270.76,918.03L269.27,1033.12L269.54,1089.84L269.18,1092.67L266.63,1095.62L264.76,1102.08L262.79,1105.42L263.11,1108.74L262.88,1111.7L264.39,1115.42L265.63,1117.33L266.64,1117.32L266.7,1118.9L266.63,1122.9L265.93,1126.33L265.93,1128.04L265.82,1152.85L266.62,1152.83L266.76,1155.58L265.94,1155.66L266.02,1169.93L266.27,1176.75L266.53,1186.97L269.57,1192.13L269.13,1200.03L265.82,1202.2L264.23,1203.67L262.63,1205.15L259.24,1206.95L259.51,1207.64L257.71,1208.7L257.9,1209.08L255.86,1210.35L253.73,1208.45L252.24,1209.97L253.55,1210.97L253.15,1211.48L249.82,1211.08L249.46,1213.91L251.49,1214.32L251.26,1214.88L247.58,1213.74L246.65,1216.48L249.07,1217.59L247.36,1223.4L246.24,1223.06L245.66,1224.84L246.84,1225.63L247.14,1229.45L247.06,1229.46L247.13,1230.68L246.6,1230.81L246.21,1230.92L242.72,1231.82L242.74,1231.98L242.02,1232.13L242,1232.01L241.36,1232.17L241.38,1232.77L241.57,1232.73L241.61,1233.5L241.42,1233.51L241.47,1234.64L242.07,1234.57L242.07,1234L242.05,1234L242,1233.22L242.07,1233.19L242.07,1232.65L245.75,1231.65L245.65,1231.74L247.58,1231.25L247.51,1233.4L248.11,1233.21L247.44,1235.64L247.42,1236.2L250.45,1237.06L251.7,1235.97L254.83,1239.56L253.67,1241L253.13,1245.3L253.41,1246.33L259.56,1244.6L246.11,1249.09L246.53,1249.18L259.79,1244.82L259.95,1251.34L256.03,1271.16L250.22,1285.64L248.63,1287.11L246.4,1289.32L242.02,1291.35L242.81,1292.82L240.13,1295.21L239.24,1296.27L240.1,1298.01L240.91,1297.88L242.81,1299.5L246.02,1302.55L246.7,1306.41L248,1312.29L249.19,1316.17L250.7,1316.26L252.37,1317.76L254.43,1320.02L256.12,1321.7L257.47,1320.6L259.87,1320.17L261.49,1320.15L262.69,1321.66L263.2,1323.65L264.84,1325.02L267.82,1323.09L271.25,1324.53L271.42,1326.15L273.19,1328.82L274.84,1329.58L275.62,1330.82L280.02,1332.82L280.89,1331.41L282.53,1333.99L283.65,1333.24L291.49,1336.79L291.82,1339.84L293.45,1341.82L296.55,1343.31L301.43,1344.09L306.28,1344.86L310.89,1342.85L318.84,1344.39L319.86,1344.03L323.19,1345.36z"
};

// src/hooks/mouseTrack.ts
var import_react = require("react");
var useMousePosition = () => {
  const [position, setPosition] = (0, import_react.useState)({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    console.log("x", event.clientX, "y", event.clientY);
    setPosition({ x: event.clientX, y: event.clientY });
  };
  (0, import_react.useEffect)(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Macao.tsx
var import_react3 = require("react");
var Macao = ({
  type,
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
  hints,
  selectColor,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ import_react2.default.createElement(
      MacaoSingle,
      {
        size,
        selectColor,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        hints,
        onSelect,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ import_react2.default.createElement(
      MacaoMultiple,
      {
        size,
        selectColor,
        mapColor,
        strokeColor,
        strokeWidth,
        onSelect,
        hoverColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius
      }
    );
  } else {
    return null;
  }
};
var MacaoSingle = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  onSelect,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius
}) => {
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react3.useState)(null);
  (0, import_react2.useEffect)(() => {
    if (selectedState) {
      const path = document.getElementById(selectedState);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor]);
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(hoverStateId);
    if (path) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(null);
    if (path) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
  };
  const handleClick = (stateCode2) => {
    if (selectedState) {
      const path = document.getElementById(selectedState);
      if (path) {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
    setSelectedState(stateCode2);
    if (onSelect) {
      onSelect(stateCode2);
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox: "0 0 800 800" }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y + 20,
        left: x + 20,
        backgroundColor: hintBackgroundColor || "white",
        padding: hintPadding || "10px",
        borderRadius: hintBorderRadius || "5px",
        border: "1px solid #ccc",
        color: hintTextColor || "black"
      }
    },
    stateHovered
  )));
};
var MacaoMultiple = ({
  size,
  selectColor,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect
}) => {
  const [selectedStates, setSelectedStates] = (0, import_react3.useState)([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  (0, import_react2.useEffect)(() => {
    selectedStates.forEach((stateCode2) => {
      const path = document.getElementById(stateCode2);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor]);
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleClick = (stateCode2) => {
    if (selectedStates.includes(stateCode2)) {
      const remove_state_code = selectedStates.filter(
        (state) => state !== stateCode2
      );
      setSelectedStates(remove_state_code);
      const path = document.getElementById(stateCode2);
      if (path) {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    } else {
      setSelectedStates([...selectedStates, stateCode2]);
    }
    if (onSelect) {
      onSelect(stateCode2, selectedStates);
    }
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
    setStateHovered(hoverStateId);
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
    setStateHovered(null);
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox: "0 0 800 800" }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y + 20,
        left: x + 20,
        backgroundColor: hintBackgroundColor || "white",
        padding: hintPadding || "10px",
        borderRadius: hintBorderRadius || "5px",
        border: "1px solid #ccc",
        color: hintTextColor || "black"
      }
    },
    stateHovered
  )));
};
var Macao_default = Macao;

// src/index.ts
var src_default = Macao_default;
