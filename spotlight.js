// Refresh the search result attributes and set up the handlers for
// mouse events.
function refresh() {
    var _this = this;
    
    // don't refresh list items that are already adapted
    var items = $('.n-spotlight-list')
        .children('li:not(.n-menu-item):has(a)')
        .addClass('n-menu-item')
        .attr('role', 'menuitem');
    
    items.children('a')
        .attr('tabindex', -1)
        // mouseenter doesn't work with event delegation
        .mouseenter(function( event ) {
            _this.activate( event, $(this).parent() );
        })
    .mouseleave(function() {
        _this.deactivate();
    });
}
