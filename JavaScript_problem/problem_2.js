function validContact(contact) {
    // যদি ইনপুট স্ট্রিং না হয়, "Invalid" রিটার্ন করবো
    if (typeof contact !== "string") {
        return "Invalid";
    }
    
    // ভ্যালিড কন্ডিশন চেক করা: ১১ ডিজিট, "01" দিয়ে শুরু এবং স্পেস ছাড়া
    if (contact.length === 11 && contact.startsWith("01") && !contact.includes(" ")) {
        return true; // সব শর্ত পূরণ হলে true রিটার্ন
    }

    return false; // শর্ত না মানলে false রিটার্ন
}

console.log(validContact("01819234567"));   // true
console.log(validContact("0181923 4567"));  // false
console.log(validContact("018192345679"));  // false
console.log(validContact(["01987654321"])); // "Invalid"
console.log(validContact("01345678900"));   // true
console.log(validContact("02145678900"));   // false
console.log(validContact(true));            // "Invalid"
