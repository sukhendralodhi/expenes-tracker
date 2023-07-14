/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Transaction = ({ id, text, amount }) => {
    const sign = amount < 0 ? '-' : '+';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <div>
            <li key={id} className={amount < 0 ? 'minus' : 'plus'}>
                {text} <span>{sign}${Math.abs(amount)}</span><button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
            </li>
        </div>
    );
}

export default Transaction;