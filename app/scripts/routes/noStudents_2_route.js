App.SummaryNoStudents2Route = Ember.Route.extend({
    controllerName: 'summary',
    viewName: 'summary',
    templateName: 'summary',
    setupController: function(controller) {
        controller.set('isEditDisabled', true);
        controller.set('isNewDisabled', false);
        controller.set('isDeleteDisabled', true);
        controller.set('isCloseDisabled', false);
    }


});
