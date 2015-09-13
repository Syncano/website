/*!
 * Bootstrap without jQuery v0.6.1 for Bootstrap 3
 * By Daniel Davis under MIT License
 * https://github.com/tagawa/bootstrap-without-jquery
 */

(function() {
    'use strict';
    
    /*
     * Utility functions
     */
     

    
    
    /*
     * Dropdown action
     * 1. Get list of all elements that are dropdown triggers
     * 2. Add click and blur event listeners to these elements
     * 3. When clicked, add "open" to the target element's class names, or remove if it exists
     * 4. On blur, remove "open" from the target element's class names
     */
     
    // Show a dropdown menu
    function doDropdown(event) {
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        evTarget.parentElement.classList.toggle('open');
        return false;
    }
    
    // Close a dropdown menu
    function closeDropdown(event) {
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        evTarget.parentElement.classList.remove('open');
        
        // Trigger the click event on the target if it not opening another menu
        if(event.relatedTarget && event.relatedTarget.getAttribute('data-toggle') !== 'dropdown') {
            event.relatedTarget.click();
        }
        return false;
    }
    
    // Set event listeners for dropdown menus
    var dropdownList = document.querySelectorAll('[data-toggle=dropdown]');
    for (var k = 0, dropdown, lenk = dropdownList.length; k < lenk; k++) {
        dropdown = dropdownList[k];
        dropdown.setAttribute('tabindex', '0'); // Fix to make onblur work in Chrome
        dropdown.onclick = doDropdown;
        dropdown.onblur = closeDropdown;
    }
})();
