/* import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extiende las reglas básicas de Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Permite usar <img> en lugar de <Image> de Next.js
      "@next/next/no-img-element": "off",

      // Desactiva el error por usar comillas no escapadas en JSX
      "react/no-unescaped-entities": "off",

      // Desactiva el warning por no usar "alt" en imágenes
      "jsx-a11y/alt-text": "off",
    },
  },
];

export default eslintConfig;
 */