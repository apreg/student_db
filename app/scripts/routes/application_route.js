App.ApplicationRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('summary');
    }
});
