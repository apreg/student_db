App.Student = DS.Model.extend({
    surname: DS.attr('string'),
    forename: DS.attr('string'),
    offer: DS.attr('string'),
    accept: DS.attr('boolean'),
    enrol: DS.attr(),
    subject1: DS.attr(),
    subject2: DS.attr(),
    subject3: DS.attr(),
    subject4: DS.attr()
});

App.Student.FIXTURES = [
    {id: 1, surname: 'Bell', forename: 'John', offer: 'Reject', accept: true, enrol:'Withdraw', subject1:'Psychology', subject2:'', subject3:'', subject4:'Sociology' },
    {id: 2, surname: 'Well', forename: 'John', offer: 'Reject', accept: true, enrol:'Withdraw', subject1:'Psychology', subject2:'', subject3:'', subject4:'Sociology' }
];