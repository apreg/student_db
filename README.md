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
