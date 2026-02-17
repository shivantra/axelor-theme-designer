import { clsx } from '@axelor/ui/core';
import styles from '../../App.module.scss';
import { Link } from 'react-router-dom';
import { i18n } from '@/services/i18n';

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 py-4">
        <p className="text-sm text-center sm:text-left !mb-0">
          © {new Date().getFullYear()}{' '}
          <span
            className={clsx(styles.themeOptions, '!text-sm', '!font-bold', 'transition-colors')}
          >
            {i18n.get('Axelor Theme Designer')}
          </span>{' '}
          by{' '}
          <Link
            to="https://shivantra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold transition-colors menu-item"
          >
            Shivantra
          </Link>
          . {i18n.get('All rights reserved.')}
        </p>
        <p className="mb-0! text-sm text-center">
          <strong>{i18n.get('Axelor ERP')}</strong> {i18n.get('is a registered trademark of')}{' '}
          <Link
            to="https://axelor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold transition-colors menu-item"
          >
            {i18n.get('Axelor')}
          </Link>
          . {i18n.get('Used for identification purposes only.')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
