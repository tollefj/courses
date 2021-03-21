import sys
import keyboard

def print_pressed_keys(e):
    print(keyboard.read_key())


keyboard.hook(print_pressed_keys)
keyboard.wait()
