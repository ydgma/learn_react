import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {

    return expenses.map(item => {
        return (<div className='Expenses'><ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
        /></div>);
    });
}

export default Expenses;