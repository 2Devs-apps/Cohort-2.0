const body = () => {
  //Project Numbers
  let projectComNum = React.createElement("h4", { id: "numData" }, "+200");
  let projectComText = React.createElement(
    "h5",
    { id: "textData" },
    "Project Completed"
  );

  //Startup Numbers
  let startupRaiseNum = React.createElement("h4", { id: "numData" }, "+50");
  let startupRaiseText = React.createElement(
    "h5",
    { id: "textData" },
    "Startup Raised"
  );

  let projectDiv = React.createElement("div", { id: "projectDiv" }, [
    projectComNum,
    projectComText,
  ]);

  let startupDiv = React.createElement("div", { id: "startupDiv" }, [
    startupRaiseNum,
    startupRaiseText,
  ]);

  let dataDiv = React.createElement("div", { id: "dataDiv" }, [
    projectDiv,
    startupDiv,
  ]);

  //Intro Data

  let devGreetings = React.createElement("h3", { id: "devGreetings" }, "Hello");
  let devIntro = React.createElement(
    "h6",
    { id: "devIntro" },
    `- It's D.Nova a Design wizard`
  );
  let introDiv = React.createElement("div", { id: "introDiv" }, [
    devGreetings,
    devIntro,
  ]);

  //Scroll down Section
  let scrollDownText = React.createElement("a", {}, "Scroll Down");
  let scrollDownIcon = React.createElement("i", {
    className: "ri-arrow-down-line",
    id: "downIcon",
  });
  let scrollDown = React.createElement("a", { href: "#", id: "scroll" }, [
    scrollDownText,
    scrollDownIcon,
  ]);

  let scrollDownDiv = React.createElement(
    "div",
    { id: "scrollDownDiv" },
    scrollDown
  );

  let bodyContentDiv = React.createElement("div", { id: "bodyContent" }, [
    dataDiv,
    introDiv,
    scrollDownDiv,
  ]);

  return bodyContentDiv;
};

export default body;
