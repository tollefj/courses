from pynput.keyboard import Key, Listener

init_keys = [Key.tab, Key.ctrl_l, Key.shift, Key.space, Key.enter, Key.esc, Key.backspace, Key.alt_gr]

def on_press(key):
    if key in init_keys:
        print(str(key).split('.')[1].upper().split('_')[0])

no_quotes = {39: None}

def on_release(key):
    if key not in init_keys:
        print(str(key).translate(no_quotes))
    if key == Key.page_down:
        return False

with Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()
