import React from "react";

const divStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  border: "5px solid blue",
  padding: "10px",
};
const divStyle1 = {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  };

  const itemStyle = {
    display: "flex",
    marginTop: "20px",
    height: "100px",
    backgroundColor: "red"
  };

function Dashboard(props) {
  // handle click event of logout button
  const handleLogout = () => {
    props.history.push("/login");
  };
  const items = [
    {
      title: "Title1",
      subTitle: "Subtitle1",
    },
    {
      title: "Title2",
      subTitle: "Subtitle2",
    },
    {
      title: "Title3",
      subTitle: "Subtitle3",
    },
  ];

  const listItems = items.map((item) => (
    <div style={itemStyle}>
      {item.title}
    </div>
  ));

  return (
    <div>
      Site Management
      <br />
      <br />
      <input
        class="Logout"
        type="button"
        onClick={handleLogout}
        value="Logout"
        style={divStyle}
      />
      <div style={divStyle1}>
        {listItems}
      </div>
    </div>
  );
}

export default Dashboard;
