document.addEventListener("DOMContentLoaded", function () {
    const questionElements = document.querySelectorAll('.question');

    questionElements.forEach((question, index) => {
        const iconPlus = document.getElementById(`icon-plus-${index + 1}`);
        const iconMinus = document.getElementById(`icon-minus-${index + 1}`);
        const answer = question.nextElementSibling; // Assuming the answer is the immediate sibling

        question.addEventListener('click', function () {
            if (iconPlus.style.display !== 'none') {
                iconPlus.style.display = 'none';
                iconMinus.style.display = 'inline-block';
                answer.style.display = 'block';
            } else {
                iconPlus.style.display = 'inline-block';
                iconMinus.style.display = 'none';
                answer.style.display = 'none';
            }
        });

        // Hide the minus icon by default
        iconMinus.style.display = 'none';
    });
});
