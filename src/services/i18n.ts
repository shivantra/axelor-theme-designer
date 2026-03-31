import EN from '../resources/en.json';
import FR from '../resources/fr.json';
import ES from '../resources/es.json';
import DE from '../resources/de.json';
import JA from '../resources/ja.json';
import ZH from '../resources/zh.json';
import HI from '../resources/hi.json';
import TH from '../resources/th.json';

type Messages = Record<string, string>;

export type Lang = 'en' | 'fr' | 'es' | 'de' | 'ja' | 'zh' | 'hi' | 'th';

const getCurrentLang = () => (localStorage.getItem('app.lang') || 'en') as Lang;

const saveCurrentLang = (lang: string) => localStorage.setItem('app.lang', lang);

const bundles: Record<Lang, Messages> = {
  en: EN as Messages,
  fr: FR as Messages,
  es: ES as Messages,
  de: DE as Messages,
  ja: JA as Messages,
  zh: ZH as Messages,
  hi: HI as Messages,
  th: TH as Messages,
};

let bundle: Messages | null = null;

const load = () => {
  if (!bundle) {
    bundle = bundles[getCurrentLang()] || bundles.en;
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
