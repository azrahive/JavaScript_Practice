function calculateWatchTime(times) {

    if (!Array.isArray(times) || times.some(time => typeof time !== "number")) {
    
    return "Invalid";
    
    }
    
    let totalSeconds = times.reduce((sum, time) => sum + time, 0);
    
    let hour = Math.floor(totalSeconds / 3600);
    
    let minute = Math.floor((totalSeconds % 3600) / 60);
    
    let second = totalSeconds % 60;
    
    return { hour, minute, second };
    
    }
    
    






function validEmail(email) {

    // Check if the input is not a string
    if (typeof email !== "string") {
        return "Invalid";
    }

    // Check if email contains spaces
    if (email.includes(" ")) {
        return false;
    }

    // Check if email starts with a special character (.-_+@)
    if (/^[\.\-\_\+\@]/.test(email)) {
        return false;
    }

    // Check if email contains exactly one '@'
    let atCount = (email.match(/@/g) || []).length;
    if (atCount !== 1) {
        return false;
    }

    // Check if email ends with ".com"
    if (!email.endsWith(".com")) {
        return false;
    }

    return true;
}



function electionResult(votes) {
    if (!Array.isArray(votes)) return "Invalid"; // Must be an array

    let mangoCount = 0;
    let bananaCount = 0;

    for (let vote of votes) {
        if (typeof vote !== "string") continue; // Ignore non-string values
        let normalizedVote = vote.toLowerCase(); // Convert to lowercase
        if (normalizedVote === "mango") mangoCount++;
        if (normalizedVote === "banana") bananaCount++;
    }

    if (mangoCount > bananaCount) return "Mango";
    if (bananaCount > mangoCount) return "Banana";
    return "Draw"; // If equal or no valid votes
}



function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || typeof f2 !== "object" || Array.isArray(f1) || Array.isArray(f2)) {
        return "Invalid"; // Input must be objects
    }

    if (!f1 || !f2 || !("name" in f1) || !("roll" in f1) || !("bestFriend" in f1) || 
        !("name" in f2) || !("roll" in f2) || !("bestFriend" in f2)) {
        return "Invalid"; // Must have all required properties
    }

    return f1.bestFriend === f2.roll && f2.bestFriend === f1.roll;
}



function calculateWatchTime(times) {

    if (!Array.isArray(times) || times.some(time => typeof time !== "number")) {
    
    return "Invalid";
    
    }
    
    
    let totalSeconds = times.reduce((sum, time) => sum + time, 0);
    
    let hours = Math.floor(totalSeconds / 3600);
    
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    
    let seconds = totalSeconds % 60;
    
    return { hour: hours, minute: minutes, second: seconds };
    
    }