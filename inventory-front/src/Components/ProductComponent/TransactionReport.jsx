import { useEffect, useState , React} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findTransactionsByType } from '../../Services/TransactionService';
import { getRole } from '../../Services/LoginService';
import '../../DisplayView.css';

const TransactionReport = () => {

    const [transactions, setTransactions] = useState([]);
    let navigate = useNavigate();
    const param = useParams();
    const [flag, setFlag] = useState("");
    const [role, setRole] = useState("");

    const setTransactionData = () => {
        findTransactionsByType(param.pid).then(response => {
            setTransactions(response.data);
            setFlag(param.pid);
        });
    }

    useEffect(() => {
        getRole().then(response => {
            setRole(response.data);
        });
        setTransactionData();
    }, []);

    const returnBack = () => {
        if (role === "Admin")
            navigate('/admin-menu');
        else if (role === "Manager")
            navigate('/manager-menu');
    }


    return (

        <div className="product-list-container">
            <h2 className="product-list-title">
                {flag === "IN" ? "Stock Purchase Report" : "Stock Issue Report"}
            </h2>
            <div>
                <table className="custom-table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Transaction Id</th>
                            <th>Product Id</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Transaction Value</th>
                            <th>User Id</th>
                            <th>Transaction Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, index) => (
                                <tr key={transaction.transactionId}>
                                    <td>{transaction.transactionId}</td>
                                    <td>{transaction.productId}</td>
                                    <td>₹{transaction.rate}</td>
                                    <td>{transaction.quantity}</td>
                                    <td>₹{transaction.transactionValue}</td>
                                    <td>{transaction.userId}</td>
                                    <td>{transaction.transactionDate}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button onClick={() => returnBack()} className="return-btn">Return to Dashboard</button>
            </div>
        </div>
    );

}

export default TransactionReport;
