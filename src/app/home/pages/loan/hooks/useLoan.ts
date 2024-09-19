import { useContext } from "react"
import { LoanContext } from "../context/loan"

export const useLoan = () =>  {
    const {
        loans,
        createLoan,
        updateLoan,
        deleteLoan,
        getClientLoans,
    } = useContext(LoanContext);

    return {
        loans,
        createLoan,
        updateLoan,
        deleteLoan,
        getClientLoans,
    }
}