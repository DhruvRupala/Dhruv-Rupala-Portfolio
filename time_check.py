import os
import time

for f in os.listdir("public"):
    print(f, time.ctime(os.path.getmtime(os.path.join("public", f))))
