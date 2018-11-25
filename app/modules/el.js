export default function El(className, parent=window.document.body, tag='div') {

    // Create the element
    var init = function() {
        if (!this.$el) {
            this.$el = window.document.createElement(tag);
            this.$el.className = className;
        }
        return this;
    }

    // Add the element to the DOM
    var render = function(target=parent) {
        if (!this.$el) {
            this.init();
        }
        if (!this.$el.parentNode) {
            target.appendChild(this.$el);
        }
        return this
    }

    // Remove the element from the DOM
    var destroy = function() {
        if (this.$el) {
            this.$el.remove();
        }
        this.$el = null;
    }

    // Public API
    return {
        init,
        render,
        destroy
    }
}