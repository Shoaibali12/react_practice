function Price({ oldP, NewP }) {
  let style = {
    backgroundColor: "#e0c367",
    marginTop: "58px",
    height: "30px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };

  let old = {
    textDecoration: "line-through",
  };
  let newP = {
    fontWeight: "bold",
  };
  return (
    <div style={style}>
      <span style={old}>{oldP}</span>
      <span style={newP}> {NewP}</span>
    </div>
  );
}

export default Price;
