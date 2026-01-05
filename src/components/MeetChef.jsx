import "./MeetChef.css";

function MeetChef() {
  return (
    <section className="chef">
      <div className="chef-container">
        <img src="/chef.jpg" alt="Pastry Chef" />

        <div className="chef-text">
          <h2>Meet the Pastry Chef </h2>
          <p>
            Hi, I’m the Ishitha behind <strong>Cocoa Pan</strong>.
          </p>
          <p>
            What started as a small home-baking passion slowly turned
            into a dream of creating desserts that make people smile.
          </p>
          <p>
            Every loaf and brownie is baked with patience, care,
            and the same love I’d bake for my own family.
            Your order just made our day a little sweeter, and we hope opening it does the same for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MeetChef;
