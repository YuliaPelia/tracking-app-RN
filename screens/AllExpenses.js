import { ExpensesContext } from "@/store/expenses-context";
import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
 const expensesCtx = useContext(ExpensesContext)
  return <ExpensesOutput expenses={expensesCtx.expenses} periodName="Total" />;
}

export default AllExpenses;
