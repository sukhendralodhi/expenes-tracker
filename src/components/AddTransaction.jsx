import { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new AddTransaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction