import Button from "../shared/Button";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label htmlFor="bill-value">💰 Bill value</label>
      <input id="bill-value" type="text" />

      <label htmlFor="your-expense">🧍 Your expense</label>
      <input id="your-expense" type="text" />

      <label htmlFor="friend-expense">👬 X's expense</label>
      <input id="friend-expense" type="text" disabled />

      <label htmlFor="person-bill">🤑 Who is paying the bill?</label>
      <select name="bill" id="person-bill">
        <option value="user">You</option>
        <option value="X">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
