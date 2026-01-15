const topNav = () => {
  let logoImage = React.createElement(
    "img",
    { src: "./assets/cyborg.png", alt: "", srcset: "" },
    null
  );

  let aboutMe = React.createElement("a", { href: "#" }, "About Me");
  let portfolio = React.createElement("a", { href: "#" }, "Portfolio");
  let services = React.createElement("a", { href: "#" }, "Services");
  let blog = React.createElement("a", { href: "#" }, "Blog");

  let navLogoDiv = React.createElement("div", { id: "navLogo" }, logoImage);
  let leftNavDiv = React.createElement("div", { id: "leftNav" }, [
    aboutMe,
    portfolio,
    services,
    blog,
  ]);

  let underLine = React.createElement("u", {}, "Book A Call");
  let bookACallIcon = React.createElement("i", {
    className: "ri-arrow-right-up-line",
  });
  let bookACall = React.createElement("a", { href: "#" }, [
    underLine,
    bookACallIcon,
  ]);
  let rightNav = React.createElement("div", { id: "rightNav" }, bookACall);

  let nav = React.createElement("div", { id: "nav" }, [
    navLogoDiv,
    leftNavDiv,
    rightNav,
  ]);

  return nav;
};

export default topNav;
