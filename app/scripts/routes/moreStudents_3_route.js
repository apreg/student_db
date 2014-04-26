App.SummaryMoreStudents3Route = Ember.Route.extend({
    controllerName: 'summary',
    viewName: 'summary',
    setupController: function(controller) {
        controller.set('isEditDisabled', false);
        controller.set('isNewDisabled', false);
        controller.set('isDeleteDisabled', false);
        controller.set('isCloseDisabled', false);
    }

        /*
    renderTemplate: function() {
        this.render('summary',
            { controller: 'summary' });
    }
    */
});
