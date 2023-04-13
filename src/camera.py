from picamera import PiCamera
from time import sleep
import curses

camera = PiCamera()

try:
    screen = curses.initscr()
    curses.cbreak()
    screen.keypad(True)
    
    while True:
        camera.start_preview()
        char = screen.getch()
        if char == ord('q'):
            break
        
except KeyboardInterrupt:
    pass

finally:
    curses.nobreak()
    screen.keypad(False)
    curses.echo()
    curses.endwin()
    camera.stop_preview()
    
