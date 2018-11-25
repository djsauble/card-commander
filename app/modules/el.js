export default function El(className, parent=window.document.body, tag='div') {

    // Add the element to the DOM
    var render = function(target=parent) {
        if (!this.$el) {
            this.$el = document.createElement(tag);
            this.$el.className = className;
            target.appendChild(this.$el);
        }
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
        render,
        destroy
    }
}