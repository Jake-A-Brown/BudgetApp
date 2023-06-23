import React from 'react';
import { UNCATERGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetContext';
import BudgetCard from './BudgetCard';

const UncatergorizedBudgetCard=(props)=> {

    const {getBudgetExpenses}=useBudgets()

    const amount =getBudgetExpenses(UNCATERGORIZED_BUDGET_ID).reduce
        ((total, expense)=>total+expense.amount,0)

    if(amount===0) return null;

  return (
    <BudgetCard amount={amount} name='Uncategorized' gray {...props} />
  );
}

export default UncatergorizedBudgetCard;