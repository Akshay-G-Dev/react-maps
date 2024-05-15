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

// src/Lesotho.tsx
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
  "Mafeteng",
  "Thaba-Tseka",
  "Qacha's Nek",
  "Mokhotlong",
  "Leribe",
  "Butha-Buthe",
  "Quthing",
  "Mohale's Hoek",
  "Maseru",
  "Berea"
];
var drawPath = {
  Mafeteng: "M357.57,425.27L349.55,427.75L346.88,431.45L353.3,435.14L358.1,443.75L359.71,451.14L361.32,457.92L361.32,461.62L370.4,462.22L377.35,460.39L381.08,461.62L377.88,469.01L379.49,475.17L382.15,481.94L382.15,484.42L375.21,484.42L369.33,487.49L370.4,493.05L370.4,501.68L383.76,502.29L391.25,502.91L400.34,504.14L408.89,509.08L413.71,515.24L418.51,519.57L423.33,523.27L426.53,518.94L429.74,515.24L427.06,507.84L420.65,497.98L417.44,491.82L414.78,486.89L409.96,485.03L405.68,482.56L405.09,479.82L400.2,456.69L395.27,447.7L403.55,437.6L395.52,428.98L388.53,428.03L375.21,425.9L367.73,425.9L357.57,425.27zM99.19,356.7L98.39,356.51L96.87,358.13L86.18,364.44L79.19,367.41L69.96,369.32L64.09,372.56L60.77,373.8L51.13,374.82L41.87,378.56L40.1,379.77L29.48,391.05L27.99,392.1L25.31,390.93L24.46,388.59L23.44,386.64L20.22,386.72L18.46,388.32L15.94,394.41L13.71,397.26L10.62,392.77L7.16,392.77L4.68,396.32L4.54,402.41L0.51,411.78L3.15,413.07L7.85,416.9L12.16,419.32L16.54,423.22L26.11,437.72L28.91,443.34L28.91,443.38L28.94,443.38L56.05,508.24L61.43,506.16L84.06,495.24L93.37,488.02L95.71,487.2L97.29,487.55L99.23,488.74L101.84,489.61L108.51,489.1L111.41,488.08L113.65,486.26L115.43,484.3L118.55,481.88L123.49,480.94L126.44,481.76L127.97,483.83L127.86,486.26L122.21,501.93L121.3,505.32L120.38,512.29L120.38,518.81L121.09,524.15L122.01,528.38L123.18,532.1L125.73,537.94L126.18,538.82L127.3,540.02L135.7,546.13L142.74,552.87L145.13,553.46L146.97,553.24L149.97,551.58L152.21,550.75L153.74,549.54L154.7,548.25L156.04,545.21L156.76,543.97L157.57,542.9L171.26,529.13L172.18,527.72L173.06,525.74L173.57,523.74L174.13,522.55L175.45,521.43L177.13,520.28L178.91,518.75L180.29,517.22L181.2,515.58L181.86,513.83L183.44,507.77L184.1,507.59L185.12,508.47L186.6,510.53L189.7,512.25L193.94,512.64L200.97,511.88L205.09,512.4L207.99,514.11L212.69,521.57L214.67,524.19L216.86,526.48L220.17,528.62L223.28,528.62L226.94,527.09L230.16,524.74L235.69,524.5L240.49,523.27L243.18,517.1L249.59,513.4L254.93,518.34L262.41,522.64L269.37,520.8L274.71,514.64L275.78,509.68L274.17,501.68L280.06,502.29L285.94,509.68L289.68,515.24L291.81,509.68L292.88,500.45L296.63,495.51L302.5,499.21L307.85,505.38L316.41,505.38L324.42,505.38L332.97,510.92L341.54,513.4L346.34,514.64L346.88,505.98L353.74,501.93L350.48,499.15L349.41,496.63L346.92,493.6L342.84,491.44L328.02,489.39L322.83,487.84L315.63,482.35L308.3,478.85L265.98,470.63L258.94,468.23L246.04,468.13L218.59,472.12L214.88,470.22L214.37,467.58L216.91,464.43L220.12,461.23L221.8,456.81L221.54,451.43L205.6,425.18L202.19,422.54L198.78,421.8L188.38,422.15L180.64,420.16L176.93,416.76L175.55,412.78L175.76,404.17L174.89,401.08L173.3,400.63L171.36,401.9L165.71,409.09L164.29,410.32L162.4,411.39L153.74,413.93L150.58,413.95L148.04,413.58L143.1,412.13L140.76,410.49L139.28,408.11L139.18,405.42L138.52,402.02L136.89,397.74L128.53,388.22L126.18,384.24L124.91,380.57L120.84,373.34L119.82,370.18L118.8,363.62L117.38,360.48L115.68,358.91L113.7,357.93L111.46,357.5L109.78,357.58L106.17,358.34L99.19,356.7z",
  "Thaba-Tseka": "M516.65,290.9L513.04,290.61L508.31,288.86L492.05,279.83L481.3,275.78L472.08,273.7L468.83,273.47L465.15,272.03L461.94,268.99L453.8,252.38L444.87,226.79L441,219.11L439.89,215.36L439.73,211.65L439.94,208.29L439.68,205.67L438.36,203.63L436.22,202.35L433.83,201.59L428.62,200.66L425.41,200.53L422.11,201.05L418.39,202.12L414.93,205.56L409.72,218.35L410.79,223.93L413.4,227.66L414.57,229.76L415.59,232.09L417.32,237.73L421.85,248.83L421.9,254.72L420.38,258.55L417.78,261.66L403.46,272.49L401.88,274.21L399.14,278.6L398.12,280.53L394.86,285.69L377.08,302.31L373.86,304.08L369.68,305.75L367.14,306.1L365.31,308.07L363.78,311.25L362.56,314.85L361.79,318.06L361.44,321.61L361.79,325.31L360.93,330.88L361.54,334.11L362.61,336.51L364.49,338.69L365.46,340.29L366.32,341.26L368.41,342.16L369.07,343.72L369.63,345.67L370.4,347.11L373.04,348.28L374.21,349.92L375.08,352.78L383.54,401.65L383.14,405.57L383.6,408.87L388.53,428.03L395.52,428.98L403.55,437.6L395.27,447.7L400.2,456.69L405.09,479.82L405.68,482.56L409.96,485.03L414.78,486.89L417.44,491.82L420.65,497.98L427.06,494.28L433.47,493.66L438.29,492.42L438.29,486.89L439.9,480.7L447.91,477.63L454.32,480.7L460.21,478.87L468.23,473.94L476.78,468.38L484.27,465.92L492.82,464.69L496.02,460.39L505.35,453.25L510.9,451.16L514.11,450.97L518.43,451.14L525.12,452.69L534.28,456.3L540.59,459.94L546.66,464.51L549,466.82L550.73,469.28L551.7,472.12L551.96,475.44L551.35,482.66L551.5,485.75L552.26,488.14L553.79,490.15L555.62,491.62L557.05,492.29L561.2,490.39L563.63,487.86L565.72,485.16L568.06,482.82L571.19,481.35L574.32,481.53L577.4,482.52L580.54,482.88L583.85,481.13L586.41,476.42L585.53,471.65L583.44,467L583.95,466.88L587.01,466.17L593.78,466.12L598.58,467.07L603,468.99L620.68,483.52L625.52,485.65L630.81,486.26L637.55,485.36L642.79,483.7L647.67,481.13L652.78,475.42L655.12,471.22L656.44,467.01L659.04,443.81L660.87,440.86L664.03,439.1L670.81,440.75L681.86,445L688.59,445.71L693.51,444.46L693.68,444.41L693.73,443.38L699.86,432.09L704.01,421.39L709.34,411.94L718.88,404.36L744.15,396.51L747.85,391.79L747.78,385.55L748.29,379.66L753.65,375.95L748.97,370.1L746.72,361.09L746.73,359.6L746.58,359.57L741.15,358.61L739.73,358.89L738.3,359.59L730.51,365.55L728.48,366.78L719.3,369.57L716.09,371.17L709.99,377L708.36,377.61L705.29,376.91L702.84,375.25L698.36,370.76L695.77,366.8L692.1,359L688.53,355.75L683.28,352.65L673.51,348.63L663.16,345.59L660.16,345.55L657.56,346.18L652.66,348.73L649.71,349.51L646.45,349.66L642.69,349.37L626.53,350.21L622.11,349.9L607.18,345.14L601.94,344.42L587.31,345.47L585.02,344.89L583.75,342.39L583.55,341.11L583.7,339.74L582.97,338.59L587.26,334.44L589.96,330.14L591.69,324.53L592.3,316.81L591.54,301.2L592.04,293.45L592.06,293.41L590.26,292.89L588.89,291.52L586.45,290.3L581.1,289.13L577.17,288.68L573.76,288.74L571.77,289.5L570.65,290.82L569.58,292.54L567.85,293.53L565.66,292.52L560.83,285.92L558.17,283.9L553.48,282.2L550.58,280.45L549.41,277.67L550.18,275.28L553.48,269.26L562.92,247.49L564.09,242.39L563.98,238.52L562.51,234.79L560.88,232.23L559.08,230.73L556.74,231.49L553.18,233.94L534.28,250.25L525.73,255.07L512.63,258.08L512.89,262.13L513.45,263.51L514.87,266.02L524.15,278.37L526.39,280.45L530.11,283.27L531.43,285.1L531.78,286.44L530.77,287.81L528.88,289.19L526.44,290.06L516.65,290.9z",
  "Qacha's Nek": "M688.59,445.71L681.86,445L670.81,440.75L664.03,439.1L660.87,440.86L659.04,443.81L656.44,467.01L655.12,471.22L652.78,475.42L647.67,481.13L642.79,483.7L637.55,485.36L630.81,486.26L625.52,485.65L620.68,483.52L603,468.99L598.58,467.07L593.78,466.12L587.01,466.17L583.95,466.88L583.44,467L585.53,471.65L586.41,476.42L583.85,481.13L580.54,482.88L577.4,482.52L574.32,481.53L571.19,481.35L568.06,482.82L565.72,485.16L563.63,487.86L561.2,490.39L557.05,492.29L555.62,491.62L553.79,490.15L552.26,488.14L551.5,485.75L551.35,482.66L551.96,475.44L551.7,472.12L550.73,469.28L549,466.82L546.66,464.51L540.59,459.94L534.28,456.3L525.12,452.69L518.43,451.14L514.11,450.97L510.9,451.16L505.35,453.25L510.19,462.21L510.09,470.28L508.1,479.61L507.44,486.69L509.37,498.18L509.42,502.87L508,507.26L505.61,509.66L501.77,511.66L490.53,516.22L487.06,518.67L483.79,521.72L479.67,527.83L477.02,530.4L474.99,532.04L473.15,532.75L471.63,533.57L469.9,534.71L462.65,540.74L451.2,548.44L449.76,548.83L448.89,549.4L447.67,547.95L442.31,538.39L438.66,534.77L426.79,532.22L416.66,537.27L415,538.47L417.53,547.09L419.71,553.58L418.75,556.52L417.22,557.95L410.94,558.4L400.92,563.67L398.32,566.38L396.79,569.26L395.27,575.73L394.86,578.85L394.86,581.69L395.32,584.18L396.54,586.65L398.98,589.1L402.6,590.71L431.06,594.22L433.52,594.11L435.51,593.73L437.49,594.7L439.07,595.68L444.74,603.58L444.83,603.72L447.62,598.42L454.12,592.69L462.02,591.44L477.87,593.75L485.98,590.85L500.23,582.26L505.56,580.96L511.05,581.59L527,587.79L538.1,587.87L567.58,576.61L589.3,571.9L610.43,563.16L648.61,537.96L661.57,529.87L687.29,513.83L691.29,512.03L699.98,509.45L703.74,507.57L705.85,504.32L705.07,500.6L701.47,493.32L700.76,488L700.96,484.64L700.04,481.94L695.9,478.69L691.12,471.92L691.29,462.85L693.26,452.84L693.68,444.41L693.51,444.46L688.59,445.71z",
  Mokhotlong: "M610.1,75.67L610.03,75.6L605.07,72.58L599.9,70.63L599.9,70.63L599.59,71.5L596.64,93.61L596.95,101.7L597.61,103.79L598.37,105.03L599.14,106.04L599.95,106.86L600.66,107.84L600.87,109.14L600.56,110.86L598.47,113.65L596.85,115.19L587.87,119.23L586.29,126.75L583.55,132.35L582.43,137.49L579.88,174.22L577.57,182.01L575.13,187.54L570.24,193.11L543.05,218.22L539.57,220.8L536.42,222.12L530.05,223.64L526.39,225.8L522.67,229.16L517.67,235.03L515.13,239.83L513.9,244.51L513.65,251.47L512.63,258.08L525.73,255.07L534.28,250.25L553.18,233.94L556.74,231.49L559.08,230.73L560.88,232.23L562.51,234.79L563.98,238.52L564.09,242.39L562.92,247.49L553.48,269.26L550.18,275.28L549.41,277.67L550.58,280.45L553.48,282.2L558.17,283.9L560.83,285.92L565.66,292.52L567.85,293.53L569.58,292.54L570.65,290.82L571.77,289.5L573.76,288.74L577.17,288.68L581.1,289.13L586.45,290.3L588.89,291.52L590.26,292.89L592.06,293.41L592.04,293.45L591.54,301.2L592.3,316.81L591.69,324.53L589.96,330.14L587.26,334.44L582.97,338.59L583.7,339.74L583.55,341.11L583.75,342.39L585.02,344.89L587.31,345.47L601.94,344.42L607.18,345.14L622.11,349.9L626.53,350.21L642.69,349.37L646.45,349.66L649.71,349.51L652.66,348.73L657.56,346.18L660.16,345.55L663.16,345.59L673.51,348.63L683.28,352.65L688.53,355.75L692.1,359L695.77,366.8L698.36,370.76L702.84,375.25L705.29,376.91L708.36,377.61L709.99,377L716.09,371.17L719.3,369.57L728.48,366.78L730.51,365.55L738.3,359.59L739.73,358.89L741.15,358.61L746.58,359.57L746.73,359.6L746.83,351.42L749.21,343.51L756.13,336.41L765.39,332.32L775.17,329.28L783.82,325.46L787.55,322.66L790.3,319.31L791.83,315.1L791.6,309.65L792.22,303.73L798.29,295.01L799.49,289.52L798.48,287.34L794.1,282.98L792.64,280.68L792.3,277.96L792.61,272.2L792.3,269.91L788.98,261.78L779.81,249.29L776.22,236.04L773.74,229.66L769.23,224.57L764.09,220.65L760.41,216.14L758.74,194.51L748.77,190.31L735.64,189.96L724.81,186.66L697.74,157.95L686.44,152.75L679.04,150.77L674.7,147.79L672.8,143.02L672.7,135.65L669.69,131.89L662.62,128.52L654.88,126.38L650.1,126.66L632.05,108.09L618.85,84.74L614.64,79.63L610.1,75.67z",
  Leribe: "M423.84,88.07L415.49,86.33L413.5,84.64L412.01,81.35L410.59,73.13L410.48,60.05L408.96,54.82L402.19,50.49L399.7,48.59L381.95,50.37L378.96,49.21L375.71,53.86L371.33,59.31L362.27,72.7L361.22,74.87L346.66,90.47L334.24,107.09L332.85,110.07L332.95,112.98L332.55,115.18L329.63,116.04L320.71,116.04L317.01,114.14L313.95,110.19L310.05,106.58L303.88,105.81L299.09,108.56L296.45,113.52L294.38,119.45L291.32,125.11L282.57,129.06L245.18,126.5L247.59,132.82L244.07,135.73L238.9,137.51L236.22,140.5L236.19,145.69L235.85,148.72L235.08,150.73L234.35,151.94L234,153.1L233.98,155.85L233.44,157.41L232.11,157.29L230.55,156.78L229.3,157.25L222.95,166.44L218.93,170.79L214.84,172.61L209.63,174.05L211.14,177.5L215.25,181.73L218.1,185.46L216.01,185.85L212.98,187.4L211.35,188.02L209.09,185.46L206.87,188.02L208.09,194.97L210.91,194.97L219.61,190.99L225.06,190.94L229.15,191.69L233.27,193.46L237.03,192.45L249.42,184.04L253.24,183.09L256.09,181.93L258.48,180.67L270.66,172.58L273.36,172.46L276.16,173.93L281.24,177.72L284.11,179.21L287.52,180.01L293.07,180.36L296.99,177.72L300.04,174.98L309.37,160.57L312.43,157.33L316.65,154.57L319.3,150.11L321.4,143.68L325.07,138.85L328.17,137.28L331.48,137.69L335.24,139.26L339.32,141.99L343.46,145.54L347.58,150.23L355.01,156.51L357.77,159.73L360.06,163.71L362.1,168.19L364.75,172.23L367.75,174.4L371.16,175.49L378.2,176.73L381.41,177.7L384.66,179.35L388.43,182.22L391.79,185.48L397.46,192.51L399.29,195.5L400.81,198.51L403.97,202.53L414.93,205.56L418.39,202.12L422.11,201.05L425.41,200.53L428.62,200.66L433.83,201.59L436.22,202.35L438.36,203.63L439.68,205.67L439.94,208.29L439.73,211.65L439.89,215.36L441,219.11L444.87,226.79L453.8,252.38L461.94,268.99L465.15,272.03L468.83,273.47L472.08,273.7L481.3,275.78L492.05,279.83L508.31,288.86L513.04,290.61L516.65,290.9L526.44,290.06L528.88,289.19L530.77,287.81L531.78,286.44L531.43,285.1L530.11,283.27L526.39,280.45L524.15,278.37L514.87,266.02L513.45,263.51L512.89,262.13L512.63,258.08L513.65,251.47L513.9,244.51L515.13,239.83L517.67,235.03L522.67,229.16L526.39,225.8L530.05,223.64L536.42,222.12L539.57,220.8L543.05,218.22L570.24,193.11L575.13,187.54L577.57,182.01L579.88,174.22L582.43,137.49L583.55,132.35L586.29,126.75L587.87,119.23L579.12,121.54L576.96,122.66L575.28,124.18L571.42,129.08L562.56,142.86L560.78,146.68L559.56,150.7L557.71,162.72L556.79,165.75L555.11,168.71L553.03,171.29L550.23,173.76L547.27,175.72L543.61,177.47L539.67,178.8L535.6,179.68L532.04,180.07L528.32,179.85L524.91,179.27L510.29,173.62L507.59,173.33L505.23,173.68L503.61,174.85L502.28,176.9L498.16,185.33L497.14,186.96L495.62,188.06L493.02,187.64L490.42,185.36L487.47,179.11L486.54,174.4L486.61,170.07L493.58,145.63L493.88,142.05L493.33,137.98L491.75,132.8L490.98,128.61L490.73,124.23L490.12,120.28L488.59,116.21L484.2,113.89L481.55,113.31L476.16,113.19L472.7,112.67L469.85,111.52L467.23,109.47L464.13,105.52L461.13,102.59L456.39,100.19L452.88,99.05L449.11,97.06L437.54,88.84L433.17,87.32L429.28,87.1L426.48,87.86L423.84,88.07z",
  "Butha-Buthe": "M536.33,0L531.45,0.62L512.75,13.37L506.24,14.95L460.53,18.01L453.81,20.83L447.43,27.25L438.54,42.6L432.23,48.36L425.62,50.92L418.02,51.92L410.45,51.11L403.83,48.17L399.7,48.59L402.19,50.49L408.96,54.82L410.48,60.05L410.59,73.13L412.01,81.35L413.5,84.64L415.49,86.33L423.84,88.07L426.48,87.86L429.28,87.1L433.17,87.32L437.54,88.84L449.11,97.06L452.88,99.05L456.39,100.19L461.13,102.59L464.13,105.52L467.23,109.47L469.85,111.52L472.7,112.67L476.16,113.19L481.55,113.31L484.2,113.89L488.59,116.21L490.12,120.28L490.73,124.23L490.98,128.61L491.75,132.8L493.33,137.98L493.88,142.05L493.58,145.63L486.61,170.07L486.54,174.4L487.47,179.11L490.42,185.36L493.02,187.64L495.62,188.06L497.14,186.96L498.16,185.33L502.28,176.9L503.61,174.85L505.23,173.68L507.59,173.33L510.29,173.62L524.91,179.27L528.32,179.85L532.04,180.07L535.6,179.68L539.67,178.8L543.61,177.47L547.27,175.72L550.23,173.76L553.03,171.29L555.11,168.71L556.79,165.75L557.71,162.72L559.56,150.7L560.78,146.68L562.56,142.86L571.42,129.08L575.28,124.18L576.96,122.66L579.12,121.54L587.87,119.23L596.85,115.19L598.47,113.65L600.56,110.86L600.87,109.14L600.66,107.84L599.95,106.86L599.14,106.04L598.37,105.03L597.61,103.79L596.95,101.7L596.64,93.61L599.59,71.5L599.9,70.63L599.9,70.63L599.64,70.53L589.4,68.68L586.68,66.59L577.15,48.52L572.3,44.42L557.74,44.03L554.28,38.77L551.91,23.42L549.9,16.08L546.92,9.89L542.54,4.6L536.33,0z",
  Quthing: "M353.96,788.57L354.02,781.11L353.21,775L352.99,768.81L354.87,761.12L356.99,757.58L359.72,755.61L362.52,754.07L365.14,751.82L367.77,748.35L368.89,746.03L374.45,728.31L374.86,725.19L373.81,721.41L369.97,714.72L369.26,711.73L371.84,707.2L399.73,685.13L404.07,679.98L406.38,671.76L405.5,663.07L401.66,659.69L396.84,657.45L393.25,652.3L393.96,645.23L399.02,639.49L405.9,635.29L411.91,632.85L421.56,631.44L424.74,630.03L427.01,627.75L431.08,621.78L434.13,619.46L439.27,614.28L444.83,603.72L444.74,603.58L439.07,595.68L437.49,594.7L435.51,593.73L433.52,594.11L431.06,594.22L402.6,590.71L398.98,589.1L396.54,586.65L395.32,584.18L394.86,581.69L394.86,578.85L395.27,575.73L396.79,569.26L398.32,566.38L400.92,563.67L410.94,558.4L417.22,557.95L418.75,556.52L419.71,553.58L417.53,547.09L415,538.47L406.82,544.37L395.83,548.01L381.61,546.74L374.11,547.95L370.85,552.87L368.85,558.1L364,561.22L352.75,564.69L346.88,565.49L329.85,561.14L327,561.34L318.67,563.2L309.78,563.16L306.34,564.55L303.59,566.81L301.26,569.85L294.32,582.89L293.07,587.77L293.02,593.34L295.67,602.76L296.12,607.31L294.27,611.92L292.66,613.46L288.76,616.15L287.06,618.01L285.94,620.09L284.18,624.78L283.03,626.96L274.07,631.91L268.83,638.29L267.35,639.71L261.72,641.83L255.88,642.13L244.75,639.71L243.48,638.59L241.24,634.74L239.63,633.68L236.52,634.03L235.3,636.29L235.35,639.55L235.97,643.07L240.83,657.96L241.21,665.14L237.39,672.51L226.28,677.62L203.95,668.6L192.26,671.78L190.06,675.2L187.87,683.5L185.58,686.35L182.86,686.7L179.37,685.82L174.9,687.43L175.96,691.15L184.54,699.65L192.45,710.86L193.54,714.25L193.7,717.67L194.25,721.1L196.32,724.33L216.32,739.65L234.05,759.94L243.92,766.25L255.36,769.83L269.13,771.69L272.42,771.14L278.7,768.02L281.55,767.55L285.35,768.85L288.13,771.06L290.71,773.66L293.83,776.14L300.38,779.45L307.27,781.7L346.05,785.09L353.96,788.57z",
  "Mohale's Hoek": "M448.89,549.4L449.76,548.83L451.2,548.44L462.65,540.74L469.9,534.71L471.63,533.57L473.15,532.75L474.99,532.04L477.02,530.4L479.67,527.83L483.79,521.72L487.06,518.67L490.53,516.22L501.77,511.66L505.61,509.66L508,507.26L509.42,502.87L509.37,498.18L507.44,486.69L508.1,479.61L510.09,470.28L510.19,462.21L505.35,453.25L496.02,460.39L492.82,464.69L484.27,465.92L476.78,468.38L468.23,473.94L460.21,478.87L454.32,480.7L447.91,477.63L439.9,480.7L438.29,486.89L438.29,492.42L433.47,493.66L427.06,494.28L420.65,497.98L427.06,507.84L429.74,515.24L426.53,518.94L423.33,523.27L418.51,519.57L413.71,515.24L408.89,509.08L400.34,504.14L391.25,502.91L383.76,502.29L370.4,501.68L365.05,507.84L356.5,510.31L353.74,501.93L346.88,505.98L346.34,514.64L341.54,513.4L332.97,510.92L324.42,505.38L316.41,505.38L307.85,505.38L302.5,499.21L296.63,495.51L292.88,500.45L291.81,509.68L289.68,515.24L285.94,509.68L280.06,502.29L274.17,501.68L275.78,509.68L274.71,514.64L269.37,520.8L262.41,522.64L254.93,518.34L249.59,513.4L243.18,517.1L240.49,523.27L235.69,524.5L230.16,524.74L226.94,527.09L223.28,528.62L220.17,528.62L216.86,526.48L214.67,524.19L212.69,521.57L207.99,514.11L205.09,512.4L200.97,511.88L193.94,512.64L189.7,512.25L186.6,510.53L185.12,508.47L184.1,507.59L183.44,507.77L181.86,513.83L181.2,515.58L180.29,517.22L178.91,518.75L177.13,520.28L175.45,521.43L174.13,522.55L173.57,523.74L173.06,525.74L172.18,527.72L171.26,529.13L157.57,542.9L156.76,543.97L156.04,545.21L154.7,548.25L153.74,549.54L152.21,550.75L149.97,551.58L146.97,553.24L145.13,553.46L142.74,552.87L135.7,546.13L127.3,540.02L126.18,538.82L125.73,537.94L123.18,532.1L122.01,528.38L121.09,524.15L120.38,518.81L120.38,512.29L121.3,505.32L122.21,501.93L127.86,486.26L127.97,483.83L126.44,481.76L123.49,480.94L118.55,481.88L115.43,484.3L113.65,486.26L111.41,488.08L108.51,489.1L101.84,489.61L99.23,488.74L97.29,487.55L95.71,487.2L93.37,488.02L84.06,495.24L61.43,506.16L56.05,508.24L65.08,529.85L71.35,537.25L87.1,550.62L91.78,558.26L96.22,576.26L98.43,581.59L102.48,587.91L105.52,589.12L109.59,588.14L116.89,588.14L121.91,589.56L125,592.11L124.72,595.87L119.8,600.9L112.63,618.8L113.24,629.67L120.55,650.14L120.01,656.07L123.57,656.51L123.8,656.57L130.34,658.43L133.68,658.94L135.99,658.55L142.95,655.64L148.22,655.72L150.61,658.2L153.02,667.51L156.55,673.29L161.71,677.62L173.69,683.16L174.9,687.43L179.37,685.82L182.86,686.7L185.58,686.35L187.87,683.5L190.06,675.2L192.26,671.78L203.95,668.6L226.28,677.62L237.39,672.51L241.21,665.14L240.83,657.96L235.97,643.07L235.35,639.55L235.3,636.29L236.52,634.03L239.63,633.68L241.24,634.74L243.48,638.59L244.75,639.71L255.88,642.13L261.72,641.83L267.35,639.71L268.83,638.29L274.07,631.91L283.03,626.96L284.18,624.78L285.94,620.09L287.06,618.01L288.76,616.15L292.66,613.46L294.27,611.92L296.12,607.31L295.67,602.76L293.02,593.34L293.07,587.77L294.32,582.89L301.26,569.85L303.59,566.81L306.34,564.55L309.78,563.16L318.67,563.2L327,561.34L329.85,561.14L346.88,565.49L352.75,564.69L364,561.22L368.85,558.1L370.85,552.87L374.11,547.95L381.61,546.74L395.83,548.01L406.82,544.37L415,538.47L416.66,537.27L426.79,532.22L438.66,534.77L442.31,538.39L447.67,547.95L448.89,549.4z",
  Maseru: "M341.83,301.2L339.32,300.58L337.28,298.36L336.26,295.55L336.01,292.11L336.72,283.8L336.72,279.95L336.42,276.42L334.02,265.71L332.95,262.59L331.48,260.32L329.75,260.24L327.71,262.28L321.6,271.48L318.74,274.81L311.92,280.24L305.71,283.66L302.13,285L292.41,286.97L288.49,286.41L285.49,285.3L265.62,273.43L260.31,271.6L256.65,271.15L253.29,271.25L247.26,272.67L244.82,273.84L243.04,275.31L241.92,277.42L241.36,279.71L240.55,282.2L238.87,283.95L233.98,284.87L228.64,282.86L218.9,280.88L213.86,278.47L205.65,272.49L203.05,271.85L200.76,272.96L196.95,278.25L193.69,281.11L189.7,282.86L182.32,284.03L178.61,283.68L175.55,282.2L174.08,279.98L173.19,277.77L173.16,276.03L173.36,274.85L174.94,270.67L174.84,269.63L174.28,268.8L172.99,268.06L171.36,267.57L170.09,266.83L169.17,266.02L167.7,263.16L167.45,262.55L154.06,266.95L148.61,270.41L147.63,273.45L146.98,282.2L146.17,285.59L142.98,289.95L139.93,291.62L136.91,292.63L133.95,295.05L133.17,297.66L134.5,299.84L136.43,302.17L137.38,305.13L136.91,309.92L135.62,312.18L133.44,313.82L119.8,328.81L116.17,334.7L114.78,341.48L113.02,343.08L105.32,342.73L103.55,344.09L102.91,348.42L101.28,352.39L99.11,355.75L98.39,356.51L99.19,356.7L106.17,358.34L109.78,357.58L111.46,357.5L113.7,357.93L115.68,358.91L117.38,360.48L118.8,363.62L119.82,370.18L120.84,373.34L124.91,380.57L126.18,384.24L128.53,388.22L136.89,397.74L138.52,402.02L139.18,405.42L139.28,408.11L140.76,410.49L143.1,412.13L148.04,413.58L150.58,413.95L153.74,413.93L162.4,411.39L164.29,410.32L165.71,409.09L171.36,401.9L173.3,400.63L174.89,401.08L175.76,404.17L175.55,412.78L176.93,416.76L180.64,420.16L188.38,422.15L198.78,421.8L202.19,422.54L205.6,425.18L221.54,451.43L221.8,456.81L220.12,461.23L216.91,464.43L214.37,467.58L214.88,470.22L218.59,472.12L246.04,468.13L258.94,468.23L265.98,470.63L308.3,478.85L315.63,482.35L322.83,487.84L328.02,489.39L342.84,491.44L346.92,493.6L349.41,496.63L350.48,499.15L353.74,501.93L356.5,510.31L365.05,507.84L370.4,501.68L370.4,493.05L369.33,487.49L375.21,484.42L382.15,484.42L382.15,481.94L379.49,475.17L377.88,469.01L381.08,461.62L377.35,460.39L370.4,462.22L361.32,461.62L361.32,457.92L359.71,451.14L358.1,443.75L353.3,435.14L346.88,431.45L349.55,427.75L357.57,425.27L367.73,425.9L375.21,425.9L388.53,428.03L383.6,408.87L383.14,405.57L383.54,401.65L375.08,352.78L374.21,349.92L373.04,348.28L370.4,347.11L369.63,345.67L369.07,343.72L368.41,342.16L366.32,341.26L365.46,340.29L364.49,338.69L362.61,336.51L361.54,334.11L360.93,330.88L361.79,325.31L361.44,321.61L361.79,318.06L362.56,314.85L363.78,311.25L365.31,308.07L367.14,306.1L369.68,305.75L373.86,304.08L377.08,302.31L394.86,285.69L385.27,270.43L383.85,269.91L382.07,269.46L381.3,270.78L380.19,271.95L378.91,272.82L371.82,275.31L369.28,276.6L367.09,278.37L363.32,283.1L352.72,291.47L345.14,299.15L341.83,301.2z",
  Berea: "M414.93,205.56L403.97,202.53L400.81,198.51L399.29,195.5L397.46,192.51L391.79,185.48L388.43,182.22L384.66,179.35L381.41,177.7L378.2,176.73L371.16,175.49L367.75,174.4L364.75,172.23L362.1,168.19L360.06,163.71L357.77,159.73L355.01,156.51L347.58,150.23L343.46,145.54L339.32,141.99L335.24,139.26L331.48,137.69L328.17,137.28L325.07,138.85L321.4,143.68L319.3,150.11L316.65,154.57L312.43,157.33L309.37,160.57L300.04,174.98L296.99,177.72L293.07,180.36L287.52,180.01L284.11,179.21L281.24,177.72L276.16,173.93L273.36,172.46L270.66,172.58L258.48,180.67L256.09,181.93L253.24,183.09L249.42,184.04L237.03,192.45L233.27,193.46L229.15,191.69L225.06,190.94L219.61,190.99L210.91,194.97L208.09,194.97L208.46,197.07L201.03,211.05L182.24,234.21L179.86,235.53L176.5,236.81L173.19,238.8L171.01,242.14L170.84,245.75L172.89,254.5L173.43,258.86L170.16,261.66L167.45,262.55L167.7,263.16L169.17,266.02L170.09,266.83L171.36,267.57L172.99,268.06L174.28,268.8L174.84,269.63L174.94,270.67L173.36,274.85L173.16,276.03L173.19,277.77L174.08,279.98L175.55,282.2L178.61,283.68L182.32,284.03L189.7,282.86L193.69,281.11L196.95,278.25L200.76,272.96L203.05,271.85L205.65,272.49L213.86,278.47L218.9,280.88L228.64,282.86L233.98,284.87L238.87,283.95L240.55,282.2L241.36,279.71L241.92,277.42L243.04,275.31L244.82,273.84L247.26,272.67L253.29,271.25L256.65,271.15L260.31,271.6L265.62,273.43L285.49,285.3L288.49,286.41L292.41,286.97L302.13,285L305.71,283.66L311.92,280.24L318.74,274.81L321.6,271.48L327.71,262.28L329.75,260.24L331.48,260.32L332.95,262.59L334.02,265.71L336.42,276.42L336.72,279.95L336.72,283.8L336.01,292.11L336.26,295.55L337.28,298.36L339.32,300.58L341.83,301.2L345.14,299.15L352.72,291.47L363.32,283.1L367.09,278.37L369.28,276.6L371.82,275.31L378.91,272.82L380.19,271.95L381.3,270.78L382.07,269.46L383.85,269.91L385.27,270.43L394.86,285.69L398.12,280.53L399.14,278.6L401.88,274.21L403.46,272.49L417.78,261.66L420.38,258.55L421.9,254.72L421.85,248.83L417.32,237.73L415.59,232.09L414.57,229.76L413.4,227.66L410.79,223.93L409.72,218.35L414.93,205.56z"
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

// src/Lesotho.tsx
var import_react3 = require("react");
var Lesotho = ({
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
      LesothoSingle,
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
      LesothoMultiple,
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
var LesothoSingle = ({
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
var LesothoMultiple = ({
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
var Lesotho_default = Lesotho;

// src/index.ts
var src_default = Lesotho_default;
