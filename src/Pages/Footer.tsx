const Footer: React.FC = () => {
  return (
    <>
    <footer style={{ marginTop: '100px' }} className="w-100 text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Stereo Image AV</h4>
      </div>
    </footer>
    </>
  );
};

export default Footer;
