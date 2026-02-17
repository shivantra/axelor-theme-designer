<h1 align="center">Shivantra Axelor Theme Designer</h1>

<p align="center">
  <a href="https://shivantra.com/axelor-theme-designer/">
    <img src="https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/shivantra/axelor-theme-designer/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  </a>
  <img src="https://img.shields.io/badge/Tech-React%20|%20Tailwind%20CSS%20|%20TypeScript-blueviolet?style=for-the-badge" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge" alt="Version">
</p>

---

## About Project

**Shivantra Axelor Theme Designer** is a modern tool for **customizing Axelor ERP themes**.  
A free visual Theme Designer built to help partners and teams quickly design professional, client-ready ERP interfaces. Perfect for demos, proofs of concept, and real-world implementations. 

---

## Features

- Pre-defined color themes  
- Custom theme creation with **live preview**  
- Multi-language support  
- Export theme JSON for Axelor ERP integration  
- Fully responsive design  
- Dark and Light mode support  
- Easily edit pre-defined colors  
- Copy theme to clipboard for configuration  

---

## Designer Page Steps

Follow these steps to use the designer page:

1. **Open Designer Page**  
   - Navigate to `/designer` or click **Designer** from the main menu.

   ![Open Designer](./public/designer.png)

2. **Select a Pre-defined Theme**  
   - Click the **Theme Pre-defined Color**  
   - Choose any theme from the list  
   - Preview updates in real-time

   ![Select Theme](./public/pre-defined.png)

3. **Add Custom Theme**  
   - Click **+**  
   - Pick primary, secondary, success, warning, danger, info, light, and dark colors  
   - Preview instantly

   ![Custom Colors](./public/customize-color.png)

4. **Export Theme**  
   - Export the theme JSON for integration with Axelor ERP

5. **Switch Languages**  
   - Use **Language Dropdown** on the top-right  
   - Test multi-language support

   ![Switch Language](./public/languages.png)

6. **Dark and Light Mode**  
   - Toggle between dark and light mode easily

   ![Dark Light Mode](./public/dark-light.png)

7. **Edit Pre-defined Colors**  
   - Modify any pre-defined theme colors directly

   ![Edit Colors](./public/edit-pre-defined-colors.png)

8. **Customize Theme Options**  
   - Go to **Designer > Customize**  
   - Adjust theme options as needed

   ![Customize Options](./public/customize-option.png)

9. **Copy Theme**  
    - Copy theme configuration to clipboard  
    - Paste into theme editor or configuration file

    ![Copy Theme](./public/copy-theme.png)

---

## Tech Stack

| Category      | Technology |
|--------------|------------|
| Frontend     | React |
| Build Tool   | Vite |
| Language     | TypeScript |
| Styling      | Tailwind CSS |
| Routing      | React Router |
| State        | React Context / Hooks |

---

## Development

This application is scaffolded using **Vite** with the **TypeScript** template. You can clone the repository for custom development.

To run the application locally on your machine, follow the steps below:

## Using npm

```bash
git clone https://github.com/shivantra/axelor-theme-designer.git
cd shivantra-axelor-theme-designer
npm install
npm run dev
```

## Using yarn

```bash
git clone https://github.com/shivantra/axelor-theme-designer.git
cd shivantra-axelor-theme-designer
yarn install
yarn dev
```

## Using pnpm

```bash
git clone https://github.com/shivantra/axelor-theme-designer.git
cd shivantra-axelor-theme-designer
pnpm install
pnpm dev
```

## Privacy

This application uses **local storage** to persist your theme configurations directly in your browser.

The application uses **Google Analytics** to collect anonymous usage statistics in order to understand application usage and improve the overall user experience.