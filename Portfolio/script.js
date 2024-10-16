const showMoreSkillsButton = document.querySelector('.show-more-skills');
const moreSkillsContainer = document.querySelector('.more-skills-container');

showMoreSkillsButton.addEventListener('click', () => {
    moreSkillsContainer.classList.toggle('show');
});