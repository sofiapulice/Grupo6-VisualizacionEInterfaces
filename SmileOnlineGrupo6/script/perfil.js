document.addEventListener("DOMContentLoaded", () => {
    const currentMonth = document.querySelector(".current-month");
    const prevMonth = document.querySelector(".prev-month");
    const nextMonth = document.querySelector(".next-month");

    let monthIndex = new Date().getMonth();
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const updateMonth = () => {
        currentMonth.textContent = `${months[monthIndex]} ${new Date().getFullYear()}`;
    };

    prevMonth.addEventListener("click", () => {
        monthIndex = (monthIndex - 1 + 12) % 12;
        updateMonth();
    });

    nextMonth.addEventListener("click", () => {
        monthIndex = (monthIndex + 1) % 12;
        updateMonth();
    });

    updateMonth();
});
