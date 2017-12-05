# Android-Club-Server

HTTPS based connection

# Server link
https://android-club-project.herokuapp.com

## Commands
"/upload_details"

## Parameters
reg_no
mac

## Return type
String

## Example Code
https://android-club-project.herokuapp.com/upload_details?reg_no=1067&mac=17:2s:3r:54:55

This returns an unique message which you have to display in your app.

reg_no: should contain the last 4 digits of your registration number

mac: should contain the mac address of your phone

## The execution flow:
1>. Derive your device's mac address 

2>. Enter your registration number using an EditText

3>. Send the appropriate HTTPS request to the server link and listen for the reply..

4>. Display the replied string on a Text View.
