function willSuccess(marks) {
    // ইনপুট যদি Array না হয়, তাহলে "Invalid" রিটার্ন করবো
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    // যদি Array খালি থাকে, তাহলে false রিটার্ন করবো
    if (marks.length === 0) {
        return false;
    }

    // পাস এবং ফেল কাউন্ট করার জন্য ভেরিয়েবল
    let passCount = 0;
    let failCount = 0;

    // প্রতিটি মার্ক যাচাই করা
    for (let mark of marks) {
        if (mark >= 50) {
            passCount++; // 50 বা তার বেশি হলে Pass
        } else {
            failCount++; // 50 এর নিচে হলে Fail
        }
    }

    // যদি Pass সংখ্যা Fail সংখ্যার চেয়ে বেশি হয়, তাহলে true রিটার্ন করবো, নাহলে false
    return passCount > failCount;
}

console.log(willSuccess([60, 70, 80, 40, 30]));     // true
console.log(willSuccess([48 , 48 , 92 , 100 ]));    // false
console.log(willSuccess([48, 48, 50, 50, 100]));    // true
console.log(willSuccess([]));                        // false
console.log(willSuccess([90]));                      // true
console.log(willSuccess([90 , 99 , 87 , 48 , 34 , 49])); // false
console.log(willSuccess("100 , 100"));               // "Invalid"
console.log(willSuccess(90));                        // "Invalid"


