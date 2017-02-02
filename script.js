var buttonGroupEl = document.querySelector('.button-group');
var contentEl = document.querySelector('.content');
var contentSectionEls = document.querySelectorAll('.content-section');

buttonGroupEl.addEventListener('click', function(e) {
    var chosenContentName = e.target.getAttribute('data-content-name');
    var target = e.target;
    var chosenContentSectionEl;

    contentSectionEls.forEach(function(el) {
        if (el.getAttribute('data-content-name') === chosenContentName) {
            chosenContentSectionEl = el;
            chosenContentSectionEl.classList.remove('hidden');
            window.setTimeout(function() {
                chosenContentSectionEl.classList.add('is-showing');
            }, 300);
        } else {
            el.classList.remove('is-showing');
            window.setTimeout(function() {
                el.classList.add('hidden');
            }, 300);
        }
    });

    [].slice.call(target.parentNode.children).forEach(function(child) {
        child.classList.remove('is-selected');
    });
    target.classList.add('is-selected');

    contentEl.style.height = chosenContentSectionEl.getBoundingClientRect().height;
});
