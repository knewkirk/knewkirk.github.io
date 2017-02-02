var bgImgEl = document.querySelector('.bg-img');
var buttonGroupEl = document.querySelector('.button-group');
var contentEl = document.querySelector('.content');
var contentSectionEls = document.querySelectorAll('.content-section');
var imgLoadingHelperEl = document.querySelector('.bg-img-loading-helper');
var loadingIndicatorEl = document.querySelector('.loading-indicator');

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


imgLoadingHelperEl.addEventListener('load', function(e) {
    loadingIndicatorEl.classList.add('hidden');
    bgImgEl.classList.add('is-showing');
});
