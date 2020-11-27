export default function Comp(props) {
  let value = { backgroundColor: props.color };
  return (
    <div className="colorfull-div" style={value}>
      <h2>DIV + inline-style (props)</h2>
    </div>
  );
}
