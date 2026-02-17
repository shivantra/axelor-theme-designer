import { MaterialIcon } from '@axelor/ui/icons/material-icon';
import { Link } from 'react-router-dom';

import { i18n } from '@/services/i18n';

const FeedbackButton = () => {
  return (
    <Link
      to="https://forms.gle/iuKfJtC9XVpPy7wi8"
      target="_blank"
      rel="noopener noreferrer"
      className="feedback-wrapper menu-item fixed bottom-[calc(20px+env(safe-area-inset-bottom))] right-[calc(20px+env(safe-area-inset-right))] w-[50px] h-[50px] md:w-[52px] md:h-[52px] max-md:w-[48px] max-md:h-[48px] max-md:bottom-[calc(16px+env(safe-area-inset-bottom))] max-md:right-[calc(16px+env(safe-area-inset-right))] max-[480px]:w-[44px] max-[480px]:h-[44px] rounded-full bg-[#fff]! text-[#121212]! flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out hover:scale-110 z-[9999]"
      title={i18n.get('Submit Feedback')}
    >
      <MaterialIcon icon="feedback" />
    </Link>
  );
};

export default FeedbackButton;
