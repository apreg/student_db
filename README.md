student_db
==========

To start use these commands
```bat
bower install
npm install
grunt serve
```
Note that it tries to open the app in Chrome
```javascript
Gruntfile.js
open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>',
				app: 'Chrome'
            }
			
        },
```
<del>
To make the Save button work correctly you need to change the ember-data.js found in app/bower_components/ember-data
to the one can be found in the root folder of the application.</del>My patch is not done yet.
