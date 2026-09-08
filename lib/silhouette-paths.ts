import { Silhouette } from "./types";

/**
 * Simplified garment glyphs drawn in a 200 x 260 local coordinate space,
 * centred and scaled by the caller. These are deliberately abstract
 * editorial icons (not literal renders) used to keep placeholder art
 * direction consistent per garment across every shot of a product.
 */
export function silhouettePaths(type: Silhouette): string[] {
  switch (type) {
    case "coat":
    case "shearling-coat":
      return [
        // body (long A-line coat)
        "M70,40 L60,55 L45,235 L155,235 L140,55 L130,40 Q100,55 70,40 Z",
        // left sleeve
        "M60,55 L30,60 L18,170 L45,175 L58,80 Z",
        // right sleeve
        "M140,55 L170,60 L182,170 L155,175 L142,80 Z",
        // lapel left
        "M70,40 L88,80 L100,60 Z",
        // lapel right
        "M130,40 L112,80 L100,60 Z",
      ];
    case "blazer":
      return [
        "M72,42 L62,58 L50,220 L150,220 L138,58 L128,42 Q100,56 72,42 Z",
        "M62,58 L34,64 L24,160 L50,164 L60,84 Z",
        "M138,58 L166,64 L176,160 L150,164 L140,84 Z",
        "M72,42 L90,84 L100,60 Z",
        "M128,42 L110,84 L100,60 Z",
      ];
    case "gilet":
      return [
        "M74,44 L64,60 L52,220 L148,220 L136,60 L126,44 Q100,58 74,44 Z",
        "M74,44 L92,86 L100,62 Z",
        "M126,44 L108,86 L100,62 Z",
      ];
    case "jacket":
    case "overshirt":
      return [
        "M68,46 L58,60 L48,210 L152,210 L142,60 L132,46 Q100,60 68,46 Z",
        "M58,60 L30,66 L20,165 L46,170 L56,84 Z",
        "M142,60 L170,66 L180,165 L154,170 L144,84 Z",
        "M100,60 L100,208",
      ];
    case "ski-jacket":
      return [
        "M66,44 L54,60 L44,214 L156,214 L146,60 L134,44 Q100,58 66,44 Z",
        "M54,60 L24,66 L12,168 L42,174 L52,84 Z",
        "M146,60 L176,66 L188,168 L158,174 L148,84 Z",
        "M100,58 L100,212",
        "M60,120 L88,120 M112,120 L140,120",
      ];
    case "down-jacket":
      return [
        "M66,44 L54,60 L44,214 L156,214 L146,60 L134,44 Q100,58 66,44 Z",
        "M54,60 L24,66 L12,168 L42,174 L52,84 Z",
        "M146,60 L176,66 L188,168 L158,174 L148,84 Z",
        "M100,58 L100,212",
        "M50,90 L150,90 M46,120 L154,120 M44,150 L156,150 M44,180 L156,180",
      ];
    case "knit":
      return [
        "M72,50 Q100,36 128,50 L146,66 L138,90 L130,80 L130,225 L70,225 L70,80 L62,90 L54,66 Z",
        "M40,74 L62,86 L54,150 L34,146 Z",
        "M160,74 L138,86 L146,150 L166,146 Z",
      ];
    case "rollneck":
      return [
        "M72,54 Q100,44 128,54 L146,66 L138,90 L130,80 L130,225 L70,225 L70,80 L62,90 L54,66 Z",
        "M40,74 L62,86 L54,150 L34,146 Z",
        "M160,74 L138,86 L146,150 L166,146 Z",
        "M78,50 Q100,40 122,50 Q100,62 78,50 Z",
      ];
    case "cardigan":
      return [
        "M72,50 L100,64 L128,50 L146,66 L138,90 L130,80 L130,225 L102,225 L102,66 L98,66 L98,225 L70,225 L70,80 L62,90 L54,66 Z",
        "M40,74 L62,86 L54,150 L34,146 Z",
        "M160,74 L138,86 L146,150 L166,146 Z",
      ];
    case "hoodie":
      return [
        "M72,52 Q100,66 128,52 L146,68 L138,92 L130,82 L130,225 L70,225 L70,82 L62,92 L54,68 Z",
        "M40,76 L62,88 L54,150 L34,146 Z",
        "M160,76 L138,88 L146,150 L166,146 Z",
        "M78,52 Q100,26 122,52 Q112,44 100,46 Q88,44 78,52 Z",
      ];
    case "trouser":
      return [
        "M64,40 L136,40 L140,60 L100,60 L100,64 L138,64 L150,230 L114,230 L102,90 L98,90 L86,230 L50,230 L62,64 L100,64 L100,60 L60,60 Z",
      ];
    case "scarf":
      return [
        "M20,120 Q100,90 180,150 L176,168 Q100,110 24,138 Z",
        "M20,120 L8,118 L10,132 L22,132 Z",
        "M14,116 L2,114 L4,128 L16,128 Z",
        "M176,150 L188,152 L186,166 L174,164 Z",
        "M182,156 L194,158 L192,172 L180,170 Z",
      ];
    case "beanie":
      return [
        "M60,140 Q60,60 100,50 Q140,60 140,140 L140,158 L60,158 Z",
        "M60,158 L140,158 L140,182 L60,182 Z",
      ];
    case "cap":
      return [
        "M62,150 Q62,72 100,64 Q138,72 138,150 L138,168 L62,168 Z",
        "M62,168 L138,168 L138,188 L62,188 Z",
        "M50,182 Q62,176 100,176 L100,192 L52,196 Z",
      ];
    case "glove":
      return [
        "M78,230 L74,120 Q74,100 88,98 L88,150 L94,150 L94,90 Q94,78 104,78 Q112,78 112,90 L112,150 L118,150 L118,86 Q118,74 128,74 Q136,74 136,86 L136,150 L142,150 L142,100 Q142,90 150,92 Q158,96 156,112 L150,180 Q148,210 140,230 Z",
        "M78,230 L60,205 Q52,190 60,168 Q70,150 84,158 L88,150 L94,150 L94,205 L78,230 Z",
      ];
    case "boot":
      return [
        "M74,40 L134,40 L134,150 Q160,158 172,178 Q180,194 168,206 L60,206 Q48,206 48,190 L48,60 Q48,40 74,40 Z",
        "M48,190 L172,190 L172,206 L60,206 Q48,206 48,190 Z",
      ];
    case "bag":
      return [
        "M50,110 Q50,90 70,90 L130,90 Q150,90 150,110 L150,190 Q150,206 134,206 L66,206 Q50,206 50,190 Z",
        "M76,90 L76,64 Q76,46 100,46 Q124,46 124,64 L124,90",
        "M50,140 L150,140",
      ];
    default:
      return ["M60,60 L140,60 L140,200 L60,200 Z"];
  }
}

export function hardwareGlyph(type: Silhouette): "button" | "zip" | "hook" | "stitch" | "lace" | "buckle" {
  switch (type) {
    case "coat":
    case "shearling-coat":
    case "blazer":
    case "cardigan":
      return "button";
    case "gilet":
    case "jacket":
    case "ski-jacket":
    case "down-jacket":
    case "overshirt":
    case "hoodie":
      return "zip";
    case "trouser":
      return "hook";
    case "boot":
      return "lace";
    case "bag":
      return "buckle";
    default:
      return "stitch";
  }
}
