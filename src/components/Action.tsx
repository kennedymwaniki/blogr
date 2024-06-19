import phones from "../assets/images/illustration-phones.svg";

const Action = () => {
  return (
    <div className="action">
      <div className="phones">
        <img src={phones} alt="" className="phone"/>
      </div>
      <div className="state">
        <h2>State of the Art Infrastructure</h2>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
};

export default Action;
