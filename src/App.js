import "./App.css";
import Budget from "./Components/Budget_planner/Budget";
import { Remaining } from "./Components/Budget_planner/Remaining";
import { SpentSoFar } from "./Components/Budget_planner/SpentSoFar";
import ExpenseList from "./Components/Budget_planner/ExpenseList";
import AddExpenseForm from "./Components/Budget_planner/AddExpenseForm";
import { AppProvider } from "./Components/Budget_planner/context/AppContext";

import Weather from "./Components/Weather App/Weather";
import State from "./Components/State";

function App() {
  // return (
  //   <AppProvider>
  //     <div className="container">
  //       <h1 className="mt-3"> My Budget Planner:</h1>
  //       <div className="row mt-3">
  //         <div className="col mt-3">
  //           <Budget></Budget>
  //         </div>
  //         <div className="col mt-3">
  //           <Remaining></Remaining>
  //         </div>
  //         <div className="col mt-3">
  //           <SpentSoFar></SpentSoFar>
  //         </div>
  //       </div>
  //       <div>
  //         <ExpenseList></ExpenseList>
  //       </div>
  //       <div className="mt-3">
  //         <AddExpenseForm></AddExpenseForm>
  //       </div>
  //     </div>
  //   </AppProvider>
  // );

  return (
    <div>
      <Weather></Weather>
    </div>
  );
}

export default App;
