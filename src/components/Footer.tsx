export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-row justify-center items-center text-center">
        <p>
          <small>
            © {new Date().getFullYear()} All Rights Reserved | Damien Sedgwick
          </small>
        </p>
      </div>
    </footer>
  );
};
