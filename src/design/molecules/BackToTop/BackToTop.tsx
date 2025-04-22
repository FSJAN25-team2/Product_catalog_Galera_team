export const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='footer__back-to-top' onClick={handleScrollToTop}>
      <p className="footer__back-to-top--text">Back to top</p>
      <img 
        src="/public/icons/arrow-up.svg" 
        alt="Back to top"
        className="footer__back-to-top--icon"
      />
    </div>
  );
}; 