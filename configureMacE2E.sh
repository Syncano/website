#!/bin/bash

# Download safari extension for selenium automation
curl -o SafariDriver.safariextz http://selenium-release.storage.googleapis.com/2.48/SafariDriver.safariextz \
 && mv SafariDriver.safariextz ~/Downloads/

# Edit Accessibility on MAC OS X
curl -o tccutil.py https://raw.githubusercontent.com/jacobsalmela/tccutil/master/tccutil.py \
  && sudo python tccutil.py -i /usr/bin/osascript \
  && sudo python tccutil.py -i com.apple.systemevents \
  && sudo python tccutil.py -i /usr/bin/say \
  && sudo python tccutil.py -i com.apple.Terminal \
  && sudo python tccutil.py -i com.googlecode.iterm2

# AppleScript to install extenstion in browser
osascript -e "tell application \"Safari\" to activate
delay 2
tell application \"System Events\"
	tell application process \"Safari\"
		set frontmost to true
		tell application \"Safari\" to open (POSIX path of (path to home folder)) & \"Downloads/SafariDriver.safariextz\" as POSIX file
		delay 3
		click button 1 of sheet 1 of window 1
	end tell
end tell
tell application \"Safari\" to quit"

# Disable Accessibility on MAC OS X
sudo python tccutil.py -i /usr/bin/osascript \
  && sudo python tccutil.py -i com.apple.systemevents \
  && sudo python tccutil.py -i /usr/bin/say \
  && sudo python tccutil.py -i com.apple.Terminal \
  && sudo python tccutil.py -i com.googlecode.iterm2

# Delete tools after installtion
rm tccutil.py
