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

// src/Lebanon.tsx
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
var stateCode = [
  "South Lebanon",
  "An Nabatiyah",
  "Mount Lebanon",
  "Beirut",
  "North Lebanon",
  "Beqaa"
];
var drawPath = {
  "South Lebanon": "M273.41,755.63L276.57,737.58L276.07,735.9L275.58,733.53L273.58,732.58L270.88,731.65L269.21,730.62L266.74,728.26L266,726.15L266.16,724.34L267.23,720.45L267.73,715.08L267.97,702.23L266.41,697.27L264.27,694.12L261.88,693.68L260.15,694.16L258.5,695.11L257.19,696.28L255.95,696.89L254.63,697.12L253.32,697.16L248.54,698.11L245.99,698.21L244.91,698.46L243.93,699L243.27,699.83L242.77,700.78L242.11,701.57L241.13,702.02L238.79,702.66L238.13,703.4L237.06,705.31L236.32,706.02L233.77,707.8L232.7,708.16L230.31,708.39L226.77,709.28L223.89,709.12L222.57,709.25L220.59,710.04L219.6,710.57L213.4,712.86L209.61,713.73L204.34,713.45L202.94,713.67L202.12,714.34L201.54,715.28L200.72,716.14L198.66,715.94L192.81,716.12L179.77,713.7L166.1,706.58L150.42,705.91L147.79,704.8L147.77,704.79L140.02,725.93L138.9,734.15L132.93,753L119.05,767.62L91.43,788.9L93.59,796.88L90.22,804.75L80.54,819.31L78.55,828.16L78.2,845.3L76.9,853.68L66.87,881.47L58.88,893.29L47.51,901.8L58.57,917.93L56.24,936.88L40.24,971.57L38.34,967.49L36.61,966.66L33.41,967.25L36.61,971.57L32.98,976.94L29.69,984.17L25.89,990.49L14.13,995.45L8.42,1001.03L3.67,1008.17L0.38,1015.27L0.82,1017.21L0.82,1018.81L1.59,1019.58L4.01,1019.22L3.37,1022.01L3.37,1023.04L45.88,1026.23L48.19,1025.25L54.07,1020.68L57.52,1019.37L60.71,1019.6L68.23,1021.55L72.02,1021.83L91.68,1015.32L98.15,1015.32L100.9,1016.58L100.9,1016.55L101.64,1012.01L102.05,1004.77L101.81,1003.13L101.56,999.74L101.72,998.33L102.46,995.36L102.63,992.44L102.79,991.02L109.3,973.67L110.78,971.36L113.67,971.03L117.7,971.92L119.02,971.92L120.09,971.42L120.99,970.82L123.47,968.42L124.78,966.36L125.72,963.91L126.13,957.47L126.62,955.84L128.85,955.3L133.79,955.27L135.27,954.96L136.92,954.22L142.11,950.99L142.85,950.05L142.11,947.79L140.95,946.71L139.55,945.84L138.15,945.3L136.83,944.59L135.85,943.51L136.01,942.08L137,940.52L139.96,938.67L142.11,937.72L145.56,936.5L148.12,934.53L151.08,931.38L165.77,912.72L168.24,910.29L169.97,907.19L170.96,903.85L170.88,893.51L170.46,890.95L170.88,887.4L175.98,880.26L167.75,881.83L165.36,883.62L163.22,883.98L159.76,883.82L145.73,881.19L135.43,877.84L127.12,868.97L129.51,858.92L128.19,854.84L126.87,853.56L125.47,852.56L119.76,849.32L118.36,849.09L116.96,849.29L111.03,849.02L109.55,848.76L108.06,848.14L106.66,847.31L105.51,846.41L105.02,845.77L106.09,845.11L111.11,844.88L113.09,843.94L114.65,842.09L116.38,838.13L117.04,835.87L117.29,834.05L117.21,833.21L117.37,830.51L117.7,829.04L119.1,827.46L121.65,825.98L127.03,824.46L129.75,824.74L131.65,825.68L132.47,827.1L133.46,829.91L134.12,831.21L135.27,832.37L137.74,834.33L138.65,835.41L139.22,836.53L140.46,838.41L141.61,839.11L142.76,838.77L143.67,837.12L143.01,831.7L143.84,828.61L153.39,811.14L153.83,809.68L153.99,808.1L153.88,806.77L153.06,805.73L151.91,805.59L149.11,806.38L148.04,806.05L147.79,805.04L148.53,803.02L152.84,796.01L154.05,793.45L155.39,791.51L156.88,790.42L162.89,789.89L166.26,789.27L167.66,788.54L168.9,787.26L169.39,784.2L168.82,782.42L167.58,781.24L166.26,780.58L165.44,779.76L170.55,776.7L193.55,771.4L197.59,772.29L200.96,772.24L202.61,771.89L205.66,770.87L211.59,767.5L213.07,766.92L214.74,766.56L217.79,766.51L219.19,766.26L220.67,765.67L221.99,764.58L222.98,763.4L224.13,761.82L224.22,761.69L225.62,761.03L226.77,761.03L227.76,761.42L228.17,761.65L228.33,761.79L228.33,761.82L228.42,761.92L228,767.32L225.45,783.08L225.37,784.79L227.1,826.08L226.03,834.62L227.67,839.8L235.91,858.19L241.84,841.23L244.5,836.96L246.73,836.32L247.8,835.84L249.61,834.76L250.6,834.39L251.75,834.35L252.9,834.62L253.89,835.12L255.21,835.61L256.86,835.81L259.9,835.35L261.63,834.33L262.95,832.68L263.53,831.4L265.83,824.6L275,815.83L278.13,814.57L280.27,812.59L284.72,804.3L282.91,790.65L280.52,787.26L277.89,781.45L276.98,779.03L274.84,770.76L273.41,755.63z",
  "An Nabatiyah": "M130.82,1044.23L160.8,1036.4L186.22,1025.45L202.53,1024.07L205.16,1014.42L215.05,996.65L219.6,986L222.46,969.83L223.72,938.53L227.84,924.52L232.67,915.87L235.8,907.19L239.37,901.16L245.57,900.46L248.65,904.23L258.26,919.47L265.01,924.46L265.06,924.44L265.17,924.52L268.25,927.16L268.27,927.02L268.63,924.52L268.63,924.49L268.63,924.46L266.99,912.78L271.71,907.99L279.33,906.3L287.74,904.45L298.34,895.92L318.54,874.69L327.93,872.11L334.96,871.42L342.54,869.28L349.89,866.01L356.21,861.99L364.88,852.29L375.48,831.01L383.66,821.22L396.42,813.57L396.07,813.48L387.42,811.14L363.02,807.99L361.15,806.47L358.9,803.71L353.71,792.59L352.14,788L349.1,784.05L338.31,777.59L327.9,774.11L325.27,775.23L321.64,777.75L314.31,785.24L308.63,792.25L304.18,799.47L298.97,806.18L294.85,807.82L284.72,804.3L280.27,812.59L278.13,814.57L275,815.83L265.83,824.6L263.53,831.4L262.95,832.68L261.63,834.33L259.9,835.35L256.86,835.81L255.21,835.61L253.89,835.12L252.9,834.62L251.75,834.35L250.6,834.39L249.61,834.76L247.8,835.84L246.73,836.32L244.5,836.96L241.84,841.23L235.91,858.19L227.67,839.8L226.03,834.62L227.1,826.08L225.37,784.79L225.45,783.08L228,767.32L228.42,761.92L228.33,761.82L228.33,761.79L228.17,761.65L227.76,761.42L226.77,761.03L225.62,761.03L224.22,761.69L224.13,761.82L222.98,763.4L221.99,764.58L220.67,765.67L219.19,766.26L217.79,766.51L214.74,766.56L213.07,766.92L211.59,767.5L205.66,770.87L202.61,771.89L200.96,772.24L197.59,772.29L193.55,771.4L170.55,776.7L165.44,779.76L166.26,780.58L167.58,781.24L168.82,782.42L169.39,784.2L168.9,787.26L167.66,788.54L166.26,789.27L162.89,789.89L156.88,790.42L155.39,791.51L154.05,793.45L152.84,796.01L148.53,803.02L147.79,805.04L148.04,806.05L149.11,806.38L151.91,805.59L153.06,805.73L153.88,806.77L153.99,808.1L153.83,809.68L153.39,811.14L143.84,828.61L143.01,831.7L143.67,837.12L142.76,838.77L141.61,839.11L140.46,838.41L139.22,836.53L138.65,835.41L137.74,834.33L135.27,832.37L134.12,831.21L133.46,829.91L132.47,827.1L131.65,825.68L129.75,824.74L127.03,824.46L121.65,825.98L119.1,827.46L117.7,829.04L117.37,830.51L117.21,833.21L117.29,834.05L117.04,835.87L116.38,838.13L114.65,842.09L113.09,843.94L111.11,844.88L106.09,845.11L105.02,845.77L105.51,846.41L106.66,847.31L108.06,848.14L109.55,848.76L111.03,849.02L116.96,849.29L118.36,849.09L119.76,849.32L125.47,852.56L126.87,853.56L128.19,854.84L129.51,858.92L127.12,868.97L135.43,877.84L145.73,881.19L159.76,883.82L163.22,883.98L165.36,883.62L167.75,881.83L175.98,880.26L170.88,887.4L170.46,890.95L170.88,893.51L170.96,903.85L169.97,907.19L168.24,910.29L165.77,912.72L151.08,931.38L148.12,934.53L145.56,936.5L142.11,937.72L139.96,938.67L137,940.52L136.01,942.08L135.85,943.51L136.83,944.59L138.15,945.3L139.55,945.84L140.95,946.71L142.11,947.79L142.85,950.05L142.11,950.99L136.92,954.22L135.27,954.96L133.79,955.27L128.85,955.3L126.62,955.84L126.13,957.47L125.72,963.91L124.78,966.36L123.47,968.42L120.99,970.82L120.09,971.42L119.02,971.92L117.7,971.92L113.67,971.03L110.78,971.36L109.3,973.67L102.79,991.02L102.63,992.44L102.46,995.36L101.72,998.33L101.56,999.74L101.81,1003.13L102.05,1004.77L101.64,1012.01L100.9,1016.55L100.9,1016.58L103.97,1017.99L109.9,1022.81L115.17,1029.25L118.85,1036.77L123.79,1043.23L130.82,1044.23z",
  "Mount Lebanon": "M349.34,323.67L339.71,322.28L304.43,304.35L290.73,302.99L290.1,302.73L290.09,302.72L289.86,303.15L282.34,308.64L280.66,313.35L280.66,335.3L282.34,344.36L289.86,358.47L291.55,365.99L289.22,385.9L280.53,414.01L280.66,429.66L282.34,432.06L285.2,433.88L287.66,436.91L287.92,442.75L285.71,445.38L276.9,445.51L273.39,446.76L269.55,453.12L263.15,468.45L258.61,473.82L261.94,474.13L262.72,475.1L262.54,477.75L259.78,482.99L254.72,495.73L251.35,500.03L243.61,502.79L238.63,502.45L238.63,502.45L238.55,505.36L232.37,524.34L226.52,524.87L225.12,526.46L223.15,529.4L221.25,530.59L214.17,530.85L204.05,528.71L203.14,555.24L201.02,567.89L180.06,619.35L180.4,627.01L171.45,632.78L165.23,658.99L156.97,666.21L160.3,670.57L147.77,704.79L147.79,704.8L150.42,705.91L166.1,706.58L179.77,713.7L192.81,716.12L198.66,715.94L200.72,716.14L201.54,715.28L202.12,714.34L202.94,713.67L204.34,713.45L209.61,713.73L213.4,712.86L219.6,710.57L220.59,710.04L222.57,709.25L223.89,709.12L226.77,709.28L230.31,708.39L232.7,708.16L233.77,707.8L236.32,706.02L237.06,705.31L238.13,703.4L238.79,702.66L241.13,702.02L242.11,701.57L242.77,700.78L243.27,699.83L243.93,699L244.91,698.46L245.99,698.21L248.54,698.11L253.32,697.16L254.63,697.12L255.95,696.89L257.19,696.28L258.5,695.11L260.15,694.16L261.88,693.68L264.27,694.12L266.41,697.27L267.97,702.23L267.73,715.08L267.23,720.45L266.16,724.34L266,726.15L266.74,728.26L269.21,730.62L270.88,731.65L273.58,732.58L275.58,733.53L276.07,735.9L276.57,737.58L273.41,755.63L278.05,751.73L280.27,749.36L284.23,743.77L285.63,740.93L287.03,736.94L294.36,706.3L300.48,689.9L304.02,683.16L334.68,636.67L339.87,633.9L341.93,632.29L344.65,628.49L349.01,623.64L349.43,621.86L349.34,620.49L341.11,612.09L355.69,590.79L359.64,590.77L365.68,591.45L367.24,591.42L368.81,591.22L370.45,590.58L371.85,589.59L373.01,588.3L376.47,582.57L374.16,577.84L356.59,565.23L391.13,523.99L400.13,508.19L402.44,502.94L402.85,501.46L408.78,494.13L432.77,472.24L438.95,469.41L453.8,446.78L477.6,398.92L479.52,359.96L480.4,355.4L484.71,344.74L479.58,342.05L476.28,343.11L472.82,342.9L469.2,342.2L451.47,333.51L448.5,330.72L447.51,330.17L444.8,329.21L443.31,329.05L441.91,329.35L440.68,331.27L439.36,334.42L438.37,335.55L437.14,336.25L435.65,336.53L434.25,336.53L430.3,335.38L427.09,333.82L423.22,334.01L420.17,333.01L409.6,326.33L405.48,324.52L398.81,319.36L395.93,318.53L391.95,318.24L384.87,318.94L378.2,320.53L374.41,322.04L372.02,322.33L358.9,321.88L351.24,323.6L349.34,323.67z",
  Beirut: "M238.63,502.45L231.07,501.9L225.92,504.79L222.29,504.79L219.05,501.9L212.95,499.25L205.95,498.1L200.24,500.03L197.39,505.08L199.16,510.34L202.45,516.49L204.18,524.04L204.05,528.7L204.05,528.71L214.17,530.85L221.25,530.59L223.15,529.4L225.12,526.46L226.52,524.87L232.37,524.34L238.55,505.36L238.63,502.45z",
  "North Lebanon": "M642.81,0L631.77,7.75L630.02,12.69L629.8,25.33L627.82,31.27L622.93,36.55L617.66,38.95L585.6,40.75L582.36,39.61L576.1,34.91L573.41,33.74L570.17,34.54L563.8,38.41L561.5,39.15L538.27,37.47L525.04,36.51L510.98,38.51L498.85,38.18L487.32,34.81L478.04,27.24L474.14,25.4L469.47,24.1L462.71,24.35L462.71,24.35L468.41,31.68L471.7,43.11L473.17,56.74L472.74,87.04L469.75,96.12L464.31,101.84L455.75,108.08L427.34,135.23L385.19,146.27L375.33,143.64L375.33,147.66L384.98,163.23L375.72,175.8L346.28,192.02L339.15,205.27L331.11,225.7L322.42,239.12L313.34,231.59L300.85,242.5L294.36,259.53L291.85,279.62L291.55,299.83L290.09,302.72L290.1,302.73L290.73,302.99L304.43,304.35L339.71,322.28L349.34,323.67L351.24,323.6L358.9,321.88L372.02,322.33L374.41,322.04L378.2,320.53L384.87,318.94L391.95,318.24L395.93,318.53L398.81,319.36L405.48,324.52L409.6,326.33L420.17,333.01L423.22,334.01L427.09,333.82L430.3,335.38L434.25,336.53L435.65,336.53L437.14,336.25L438.37,335.55L439.36,334.42L440.68,331.27L441.91,329.35L443.31,329.05L444.8,329.21L447.51,330.17L448.5,330.72L451.47,333.51L469.2,342.2L472.82,342.9L476.28,343.11L479.58,342.05L484.71,344.74L496.9,343.69L498.38,343.3L499.7,342.58L501.76,340.36L512.82,321.51L514.47,315.84L516.28,299.26L536.05,274.07L552.3,257.12L558.23,236.25L559.3,234.09L561.19,231.42L565.81,226.6L576.62,218.02L580.99,213.65L583.62,210.45L598.2,180.33L598.72,178.72L596.55,170.8L606.71,157.7L607.45,156.15L607.78,154.72L607.86,151.93L608.03,150.66L608.36,149.6L608.93,148.56L610.99,145.8L634.66,127.45L635.89,126.05L642.56,123.35L653.74,121.95L653.93,121.93L648.63,111.93L657.52,102.43L672.07,94.53L682.45,86.33L684.87,76.2L684.21,66.7L685.31,58.96L693.16,54.06L701.01,56.33L706.66,60.93L710.45,57.93L712.54,37.58L699.69,41.75L686.51,42.02L673.94,37.68L663.23,28.04L650.72,5.21L642.81,0z",
  Beqaa: "M745.32,165.94L741.47,163.39L733.79,153.81L724.78,149.88L717.64,143.88L712.37,135.56L708.97,124.79L708.97,124.69L701.67,122.1L687.12,120.94L671.58,121.65L661.26,124.79L659.83,125.24L658.35,125.35L656.86,125.24L655.44,124.79L653.93,121.93L653.74,121.95L642.56,123.35L635.89,126.05L634.66,127.45L610.99,145.8L608.93,148.56L608.36,149.6L608.03,150.66L607.86,151.93L607.78,154.72L607.45,156.15L606.71,157.7L596.55,170.8L598.72,178.72L598.2,180.33L583.62,210.45L580.99,213.65L576.62,218.02L565.81,226.6L561.19,231.42L559.3,234.09L558.23,236.25L552.3,257.12L536.05,274.07L516.28,299.26L514.47,315.84L512.82,321.51L501.76,340.36L499.7,342.58L498.38,343.3L496.9,343.69L484.71,344.74L480.4,355.4L479.52,359.96L477.6,398.92L453.8,446.78L438.95,469.41L432.77,472.24L408.78,494.13L402.85,501.46L402.44,502.94L400.13,508.19L391.13,523.99L356.59,565.23L374.16,577.84L376.47,582.57L373.01,588.3L371.85,589.59L370.45,590.58L368.81,591.22L367.24,591.42L365.68,591.45L359.64,590.77L355.69,590.79L341.11,612.09L349.34,620.49L349.43,621.86L349.01,623.64L344.65,628.49L341.93,632.29L339.87,633.9L334.68,636.67L304.02,683.16L300.48,689.9L294.36,706.3L287.03,736.94L285.63,740.93L284.23,743.77L280.27,749.36L278.05,751.73L273.41,755.63L274.84,770.76L276.98,779.03L277.89,781.45L280.52,787.26L282.91,790.65L284.72,804.3L294.85,807.82L298.97,806.18L304.18,799.47L308.63,792.25L314.31,785.24L321.64,777.75L325.27,775.23L327.9,774.11L338.31,777.59L349.1,784.05L352.14,788L353.71,792.59L358.9,803.71L361.15,806.47L363.02,807.99L387.42,811.14L396.07,813.48L396.42,813.57L409.68,805.62L419.46,799.78L435.93,785.81L444.38,765.49L437.19,752.55L443.23,744.1L455.75,740.04L468.21,740.2L478.31,735.54L489.24,728.29L497.42,718.62L499.12,706.8L494.46,699.59L485.56,692.97L475.79,688.07L468.21,685.96L455.8,678.99L444.05,676.78L437.03,672.38L439.06,658.74L441.2,656.57L448.12,653.93L450.64,651.45L452.07,645.32L450.53,633.74L451.3,628.39L455.25,622.7L464.97,613.74L468.21,606.46L475.51,595.5L493.08,580.42L500.22,566.79L505.49,559.87L514,556.32L523.89,553.73L533.11,549.74L552.16,538.01L555.68,540.06L562.43,548.6L566.71,551.33L577.8,551.07L586.37,545.89L593.78,539.84L601.85,536.79L611.07,538.57L638.36,552.04L658.4,556.83L668.61,555.18L675.04,546.72L674,533.58L664.83,527.91L643.96,524.34L628.31,512.1L624.97,508.2L621.56,502.08L620.63,499.77L631.99,476.64L639.3,465.19L647.64,454.86L668.78,436.25L686.46,413.71L697.66,408L703.75,408.53L715.17,412.8L722.48,412.44L731.15,408.08L734.06,402.15L735.1,394.61L738.18,385.54L748.56,372.37L772.33,351.95L784.63,331.24L799.62,314.64L799.33,314L796.49,307.74L783.64,294.96L780.18,285.71L777.66,273.62L781.66,265.31L786.77,258.22L787.87,249.86L785.12,244.86L781.66,244.03L777.77,244.33L773.98,242.67L768.32,236.47L756.85,220.28L754.21,215.29L752.78,210.14L753.22,204.85L754.92,201.51L756.85,198.46L758.27,194.02L760.14,183.46L760.58,176.32L757.67,170.68L749.21,164.57L745.32,165.94z"
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

// src/Lebanon.tsx
var import_react3 = require("react");
var Lebanon = ({
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
      LebanonSingle,
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
      LebanonMultiple,
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
var LebanonSingle = ({
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
var LebanonMultiple = ({
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
var Lebanon_default = Lebanon;

// src/index.ts
var src_default = Lebanon_default;
