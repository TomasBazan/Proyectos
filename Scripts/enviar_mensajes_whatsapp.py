import pywhatkit
import flask
import pyautogui as pg
import time

pywhatkit.sendwhatmsg('+54xxxxxxx',"hola amorcito te amo desde python",20,59)
# is done this way because a bug in the pywhatkit library.
time.sleep(30)
for i in range(19):
    pg.press("tab")
pg.press("enter")
