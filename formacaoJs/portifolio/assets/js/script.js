document.addEventListener("DOMContentLoaded", function() {
    const principalElements = document.querySelectorAll('.principal');
    const dropdownElements = document.querySelectorAll('.dropdown');

    principalElements.forEach((principal, index) => {
        principal.addEventListener('click', function() {
            const dropdown = dropdownElements[index];
            principal.classList.toggle('active');
            dropdown.classList.toggle('show');
        });
    });
});