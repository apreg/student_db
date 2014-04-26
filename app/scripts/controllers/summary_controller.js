//App.SummaryTableController = Ember.ArrayProxy.extend({
//
//}),
//
var forEach = Ember.EnumerableUtils.forEach;
App.SummaryController = Ember.Controller.extend({
    selection: null,
    columns: Ember.computed(function () {
        var surnameColumn, forenameColumn, offerColumn, acceptColumn, enrolColumn, subject1Column, subject2Column,
            subject3Column, subject4Column;
        surnameColumn = Ember.Table.ColumnDefinition.create({
            columnWidth: 150,
            textAlign: 'text-align-left',
            headerCellName: 'Surname',
            getCellContent: function (row) {
                return row.get('surname');
            }
        });
        forenameColumn = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Forename',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('forename');
            }
        });
        offerColumn = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Offer',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('offer');
            }
        });
        acceptColumn = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Accept',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('accept');
            }
        });
        enrolColumn = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Enrol',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('enrol');
            }
        });
        subject1Column = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Subject 1',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('subject1');
            }
        });
        subject2Column = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Subject 2',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('subject2');
            }
        });
        subject3Column = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Subject 3',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('subject3');
            }
        });
        subject4Column = Ember.Table.ColumnDefinition.create({
            columnWidth: 100,
            headerCellName: 'Subject 4',
            textAlign: 'text-align-left',
            getCellContent: function (row) {
                return row.get('subject4');
            }
        });
        return [surnameColumn, forenameColumn, offerColumn, acceptColumn, enrolColumn, subject1Column, subject2Column,
            subject3Column, subject4Column];
    }),

    actions: {
        delete: function () {
            this.store.deleteRecord(this.selection);
            //this.selection.rollback();
            //this.selection.deleteRecord();
            //this.selection.unloadRecord();
            //this.selection.save();
            this.transitionToRoute('summary');
        },
        save: function () {
            /*
            var softDeletedRecords = this.store.allSoftDeleted();
            forEach(softDeletedRecords, function(record){
                record.save();
                //record.rollback();
            })
            */
        }
    }

});