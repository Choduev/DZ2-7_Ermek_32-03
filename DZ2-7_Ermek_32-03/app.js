document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
            this.textContent = answer.style.display === 'none' ? 'Показать ответ' : 'Скрыть ответ';
        })
        const answer = button.nextElementSibling;
        answer.style.display = 'none';
        button.textContent = 'Показать ответ';
    })
})