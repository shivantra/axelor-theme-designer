export function generateShades(
  hex: string
): Record<
  | 50
  | 100
  | 150
  | 200
  | 250
  | 300
  | 350
  | 400
  | 450
  | 500
  | 600
  | 650
  | 700
  | 750
  | 800
  | 850
  | 900
  | 925
  | 950
  | 975,
  string
> {
  const KEYS = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 650, 700, 750, 800, 850, 900, 925, 950,
    975,
  ] as const;
  type ShadeKey = (typeof KEYS)[number];

  // Lightness targets (tuned for extra in-between values)
  const L_TARGET = [97, 92, 88, 83, 78, 72, 66, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 7, 4];

  // Saturation factors (slight curve to keep things vivid)
  const S_FACT = [
    0.3, 0.45, 0.55, 0.7, 0.85, 0.9, 0.95, 1, 1.02, 1, 1.05, 1.08, 1.1, 1.12, 1.15, 1.18, 1.2, 1.25,
    1.3, 1.35,
  ];

  const clamp = (v: number, min: number, max: number): number => Math.min(max, Math.max(min, v));

  // --- Color helpers -------------------------------------------------
  const hexToRgb = (h: string): { r: number; g: number; b: number } => {
    let s = h.replace('#', '').trim();
    if (s.length === 3)
      s = s
        .split('')
        .map((c) => c + c)
        .join('');
    const num = parseInt(s, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  };

  const rgbToHex = (r: number, g: number, b: number): string =>
    '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  const hslToRgb = (h: number, s: number, l: number): { r: number; g: number; b: number } => {
    h /= 360;
    s /= 100;
    l /= 100;
    if (s === 0) {
      const v = Math.round(l * 255);
      return { r: v, g: v, b: v };
    }
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
  };
  // ------------------------------------------------------------------

  const { r, g, b } = hexToRgb(hex);
  const base = rgbToHsl(r, g, b); // base = 500 shade
  const deltaL = base.l - 50;

  const out = {} as Record<ShadeKey, string>;

  KEYS.forEach((k, i) => {
    const L = clamp(L_TARGET[i] + deltaL, 4, 96);
    const S = clamp(base.s * S_FACT[i], 4, 100);
    const rgb = hslToRgb(base.h, S, L);
    out[k] = rgbToHex(rgb.r, rgb.g, rgb.b);
  });

  // force 500 shade to match input exactly
  out[500] = hex.toLowerCase();

  return out;
}
