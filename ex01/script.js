function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid input";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }

    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

// Test calculateGrade()
console.log("Grade 90:", calculateGrade(90));
console.log("Grade 89:", calculateGrade(89));
console.log("Grade 100:", calculateGrade(100));
console.log("Grade 0:", calculateGrade(0));
console.log("Grade 59:", calculateGrade(59));
console.log("Invalid score:", calculateGrade(-1));
console.log("Invalid type:", calculateGrade("90"));

// Test checkAccess()
console.log("Adult with ticket:", checkAccess(20, true));
console.log("Adult without ticket:", checkAccess(20, false));
console.log("Minor with ticket:", checkAccess(16, true));
console.log("Invalid age:", checkAccess("20", true));