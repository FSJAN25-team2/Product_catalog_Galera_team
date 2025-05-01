import { P_Small } from "../../atoms/Typography/P_Small/P_Small";

export const BackToTop = ({ handleScrollToTop }: { handleScrollToTop: () => void}) => {
  return (
    <div className='footer__back-to-top' onClick={handleScrollToTop}>
      <P_Small>Back to top</P_Small>
      <img 
        src="/icons/arrow-up.svg" 
        alt="Back to top"
        className="footer__back-to-top--icon"
      />
    </div>
  );
}; 