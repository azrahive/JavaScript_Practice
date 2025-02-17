function validProposal(person1, person2) {
    // যদি ইনপুট দুইটি অবজেক্ট না হয়, তাহলে "Invalid" রিটার্ন করবো
    if (typeof person1 !== "object" || typeof person2 !== "object") {
        return "Invalid";
    }

    // যদি জেন্ডার একই হয়, তাহলে false রিটার্ন করবো
    if (person1.gender === person2.gender) {
        return false;
    }

    // যদি বয়সের পার্থক্য ৭ বছরের বেশি হয়, তাহলে false রিটার্ন করবো
    if (Math.abs(person1.age - person2.age) > 7) {
        return false;
    }

    // সব শর্ত পূরণ হলে true রিটার্ন করবো
    return true;
}

console.log(validProposal(
    { name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }
)); // ✅ true

console.log(validProposal(
    { name: "milon", gender: "male", age: 20 },
    { name: "sumi", gender: "female", age: 25 }
)); // ✅ true

console.log(validProposal(
    { name: "shuvo", gender: "male", age: 20 },
    { name: "joy", gender: "male", age: 25 }
)); // ❌ false (same gender)

console.log(validProposal(
    { name: "toya", gender: "female", age: 20 },
    { name: "kader", gender: "male", age: 25 }
)); // ✅ true

console.log(validProposal(
    { name: "toya", gender: "female", age: 24 },
    { name: "bjoy", gender: "male", age: 32 }
)); // ❌ false (age difference > 7)

console.log(validProposal(
    "Mizan",
    { name: "mitu", gender: "male", age: 32 }
)); // ❌ "Invalid" (first input is not an object)

console.log(validProposal(
    { name: "mitu", gender: "male", age: 32 },
    "Mizan"
)); // ❌ "Invalid" (second input is not an object)
