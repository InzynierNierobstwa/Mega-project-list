const whenChristmass = {
    name: "Christmass",
    day: 24,
    month: 12,
    when: function() {
        const today = new Date();
        const cmas = new Date(today.getFullYear(), (this.month - 1), this.day);
        console.log(cmas, today);

        const oneDay = 1000 * 60 * 60 *24;
        const howMany = Math.ceil((cmas - today)/oneDay);
        console.log(`Do swiat zostalo ${howMany} dni`);
    }
}

whenChristmass.when();