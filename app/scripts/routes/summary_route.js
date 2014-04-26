App.SummaryRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('student');
    }
});

App.SummaryIndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.all('student');
    },
    afterModel: function (model) {
        if (model.content !== null && model.content.length > 0) this.transitionTo('summary.moreStudents_3');
        else this.transitionTo('summary.noStudents_2');
    }
});