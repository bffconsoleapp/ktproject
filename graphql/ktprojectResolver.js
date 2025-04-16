const resolvers = {
    Query: {
        searchCreditUnionByContractNumber: (parent, args, context, info) => {
            const { contractNumber } = args;
            // Placeholder data
            const creditUnions = [
                { id: "1", Contract_Number: "123ABC", Credit_Union_Name: "Sample Credit Union" }
            ];
            return creditUnions.filter(cu => cu.Contract_Number === contractNumber);
        },
        searchCreditUnionByName: (parent, args, context, info) => {
            const { name } = args;
            // Placeholder data
            const creditUnions = [
                { id: "1", Contract_Number: "123ABC", Credit_Union_Name: "Sample Credit Union" }
            ];
            return creditUnions.filter(cu => cu.Credit_Union_Name === name);
        },
        searchCreditUnionByState: (parent, args, context, info) => {
            const { state } = args;
            // Placeholder data
            const creditUnions = [
                { id: "1", Contract_Number: "123ABC", Credit_Union_Name: "Sample Credit Union" }
            ];
            // Normally, there would be a state field to filter on
            return creditUnions;
        },
        searchCreditUnionByNameAndState: (parent, args, context, info) => {
            const { name, state } = args;
            // Placeholder data
            const creditUnions = [
                { id: "1", Contract_Number: "123ABC", Credit_Union_Name: "Sample Credit Union" }
            ];
            // Normally, there would be a state field to filter on
            return creditUnions.filter(cu => cu.Credit_Union_Name === name);
        },
    },
    Mutation: {
        editPremiumAdjustment: (parent, args, context, info) => {
            const { id, Total_Borrower_Fees, CU_Retail_Rate, Protected_Loan_Amount, Pay_Rate, Premium_Due, Total_Amount } = args.input;
            // Placeholder data update simulation
            let premiumAdjustment = {
                id,
                Product_Name: "Sample Product",
                Report_Period: "2023-Q1",
                Status: "Draft",
                Last_Update: "2023-01-01",
                Period_Ending: "2023-03-31",
                Adjustment_Type_to_the_Credit_Union: "Type A",
                Comment: "No comment",
                Total_Borrower_Fees_: parseFloat(Total_Borrower_Fees),
                CU_Retail_Rate: parseFloat(CU_Retail_Rate),
                Protected_Loan_Amount: parseFloat(Protected_Loan_Amount),
                Pay_Rate: parseFloat(Pay_Rate),
                Premium_Due: parseFloat(Premium_Due),
                Total_Amount: parseFloat(Total_Amount)
            };
            return premiumAdjustment;
        }
    }
};

export default resolvers;