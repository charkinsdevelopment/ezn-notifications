# ezn-notifications
Easiest vanilla javascript notifications widget

# Usage

Ezn Notifications is a self contained notifications suite. 
Simply call:

<params>type, show, title, body, timeout</params>
type: 'success', 'failure'
show: true, false 
title: string
body: string
timeout: time in ms before the message dissapears.
showNotifications('success', true, 'Success', 'Added a thing', 3000); 
