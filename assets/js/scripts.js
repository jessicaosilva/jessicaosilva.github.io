function yearsOfExperience(startYear, startMonth = 1) {
    const now = new Date();
    let years = now.getFullYear() - startYear;
    if (now.getMonth() + 1 < startMonth) {
        years--;
    }
    return years;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('years-experience').textContent = yearsOfExperience(2018, 1);
});
