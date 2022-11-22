# Lab 8 - Starter
Rachel Lin and Thu Mai


"Check Your Understanding" Questions:

1) 2. Manually run them locally before pushing code
This is because we could guarantee the program is running accordingly before 
anyone else could see the code. The code will look cleaner and less likely to
cause errors after pushing.

2) No. We should be using unit testing to check if a function is returning 
   the correct output.

3) No, the unit test would not be the best choice. We think end to end test
   the "message" feature would be better because the feature does more than
   checking if message has sent. The feature is complex, and we should check
   other functions in the feature such as page reloading, saving chat histories,
   etc. 
   
4) Yes because checking for "max message length" feature uses only one 
   if-statemenet to prevents the user from typing more than 80 characters. This
   feature is simple enough to use the unit test. 