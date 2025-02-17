function calculateVAT(price) {
    // Check if input is a positive number
    if (typeof price !== "number" || price <= 0) {
        return "Invalid";
    }
    
    // VAT Rate
    let vatRate = 7.5;

    // Calculate VAT
    let vatAmount = (price * vatRate) / 100;

    // Return the calculated VAT amount
    return vatAmount;
}

// Test Cases
console.log(calculateVAT(1500));   
console.log(calculateVAT(200));    
console.log(calculateVAT(999));    
console.log(calculateVAT(-500));   
console.log(calculateVAT("101"));  
console.log(calculateVAT("foo"));  
