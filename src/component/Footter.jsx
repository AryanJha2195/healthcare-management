import React from "react";

const Footter = () => {
  return (
    <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4>Contact Us</h4>
          <address>
            123 Main Street<br />
            Anytown, CA 12345<br />
            (123) 456-7890
          </address>
        </div>
        <div className="col-md-6">
          <h4>Social Media</h4>
          <a href="https://www.facebook.com/example">Facebook</a>
          <a href="https://www.instagram.com/example">Instagram</a>
          <a href="https://twitter.com/example">Twitter</a>
          <a href="https://www.youtube.com/example">YouTube</a>
          <a href="https://www.linkedin.com/company/example">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footter;
