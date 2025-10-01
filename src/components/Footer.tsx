const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Maredi Mapheto Tours & Projects</p>
            <p className="text-sm text-primary-foreground/80">Your Trusted Transport Partner Since 2022</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Maredi Mapheto Tours & Projects. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Committed to BBBEE Principles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
