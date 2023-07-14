import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    // console.log(transactions);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => {
                    const { id, text, amount } = transaction;
                    return (
                        <Transaction key={id} id={id} text={text} amount={amount} />
                    );
                })}
            </ul>
        </>
    );
}

export default TransactionList;