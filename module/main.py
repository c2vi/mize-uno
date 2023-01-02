from pymize.module import Module

module = Module("UNO")

@module.msg_update() #"UNO-game")
def test(x):
    print("test has been called with: ", x)

if __name__ == "__main__":
    module.run("./unix/socket")

