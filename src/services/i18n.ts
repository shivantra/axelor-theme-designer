import EN from '../resources/en.json';
import FR from '../resources/fr.json';

export type Lang = 'en' | 'fr';

const getCurrentLang = () => (localStorage.getItem('app.lang') || 'en') as Lang;

const saveCurrentLang = (lang: string) => localStorage.setItem('app.lang', lang);

const bundles = { en: EN, fr: FR };

let bundle: Record<string, string> | null = null;

const load = () => {
  if (!bundle) {
    bundle = bundles[getCurrentLang()] ?? {};
  }
};

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace i18n {
  export function get(text: string, ...args: any[]): string {
    load();
    let message = bundle![text] || bundle![(text || '').trim()] || text;
    if (message && args.length) {
      for (let i = 0; i < args.length; i++) {
        const placeholder = new RegExp(`\\{${i}\\}`, 'g');
        const value = args[i];
        message = message.replace(placeholder, value);
      }
    }
    return message;
  }

  export function change(lang: Lang) {
    saveCurrentLang(lang);
    window.location.reload();
  }
}
