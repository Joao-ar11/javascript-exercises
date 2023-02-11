const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    let oldest = {yearOfBirth: currentYear, yearofDeath: currentYear};
    people.forEach(person => {
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = currentYear;
        }
        if ((person.yearOfDeath - person.yearOfBirth) - (oldest.yearofDeath - oldest.yearOfBirth) > 0) {
            oldest.name = person.name;
            oldest.yearOfBirth = person.yearOfBirth;
            oldest.yearofDeath = person.yearOfDeath;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
