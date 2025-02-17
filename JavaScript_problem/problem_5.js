function calculateSleepTime(times) {
    // যদি ইনপুট অ্যারে না হয়, তাহলে "Invalid" রিটার্ন করবো
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    // যদি অ্যারের সব এলিমেন্ট নাম্বার না হয়, তাহলে "Invalid" রিটার্ন করবো
    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }
    }

    // মোট সেকেন্ড বের করা
    let totalSeconds = times.reduce((sum, time) => sum + time, 0);

    // ঘণ্টা, মিনিট এবং সেকেন্ড হিসাব করা
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = totalSeconds % 60;

    // ফলাফল অবজেক্ট আকারে রিটার্ন করা
    return { hour, minute, second };
}

console.log(calculateSleepTime([1000, 499, 519, 300]));  
// ✅ { hour: 0, minute: 38, second: 38 }

console.log(calculateSleepTime([1000, 2000, 725]));  
// ✅ { hour: 1, minute: 2, second: 5 }

console.log(calculateSleepTime([100, 3800]));  
// ✅ { hour: 1, minute: 5, second: 0 }

console.log(calculateSleepTime([]));  
// ✅ { hour: 0, minute: 0, second: 0 }

console.log(calculateSleepTime([5600]));  
// ✅ { hour: 1, minute: 33, second: 20 }

console.log(calculateSleepTime([100, 3800, "90"]));  
// ❌ "Invalid" (কারণ অ্যারেতে একটি স্ট্রিং আছে)
