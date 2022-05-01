const Dropdown = (props) => (
  <select onChange={props.action}>
    <option value={props.op1} defaultValue>{props.op1}</option>
    <option value={props.op2}>{props.op2}</option>
    <option value={props.op3}>{props.op3}</option>
    <option value={props.op4}>{props.op4}</option>
    <option value={props.op5}>{props.op5}</option>
    <option value={props.op6}>{props.op6}</option>
  </select>
);

export default Dropdown;
