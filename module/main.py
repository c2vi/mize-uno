
from pymize.module import *
from pymize.proto import *

module = Module("UNO")

cards = ["blue_0", "blue_0", "blue_1", "blue_1", "blue_2", "blue_2", "blue_3", "blue_3", "blue_4", "blue_4", "blue_5", "blue_5", "blue_6", "blue_6", "blue_7", "blue_7", "blue_8", "blue_8", "blue_9", "blue_9", "yellow_0", "yellow_0", "yellow_1", "yellow_1", "yellow_2", "yellow_2", "yellow_3", "yellow_3", "yellow_4", "yellow_4", "yellow_5", "yellow_5", "yellow_6", "yellow_6", "yellow_7", "yellow_7", "yellow_8", "yellow_8", "yellow_9", "yellow_9", "red_0", "red_0", "red_1", "red_1", "red_2", "red_2", "red_3", "red_3", "red_4", "red_4", "red_5", "red_5", "red_6", "red_6", "red_7", "red_7", "red_8", "red_8", "red_9", "red_9", "green_0", "green_0", "green_1", "green_1", "green_2", "green_2", "green_3", "green_3", "green_4", "green_4", "green_5", "green_5", "green_6", "green_6", "green_7", "green_7", "green_8", "green_8", "green_9", "green_9", "blue_taketwo", "blue_taketwo", "yellow_taketwo", "yellow_taketwo", "red_taketwo", "red_taketwo", "green_taketwo", "green_taketwo", "blue_changedir", "blue_changedir", "yellow_changedir", "yellow_changedir", "red_changedir", "red_changedir", "green_changedir", "green_changedir", "blue_suspend", "blue_suspend", "yellow_suspend", "yellow_suspend", "red_suspend", "red_suspend", "green_suspend", "green_suspend", "blue_takefour", "blue_takefour", "yellow_takefour", "yellow_takefour", "red_takefour", "red_takefour", "green_takefour", "green_takefour", "blue_wish", "blue_wish", "yellow_wish", "yellow_wish", "red_wish", "red_wish", "green_wish", "green_wish"]


player_0 = {
        "_type": "!UNO!Player",
        "_render": "uno-player",
        "name": "Tobi",
        "cards_of_player": ["blue_4", "red_2", "blue_0"],
        "cards_to_take": 0,
        }

player_1 = {
        "_type": "!UNO!Player",
        "_render": "uno-player",
        "name": "Toml",
        "cards_of_player": ["blue_0", "red_7", "blue_9"],
        "cards_to_take": 0,
        }

game_0 = {
        "_type": "!UNO!Game",
        "_render": "uno-game",
        "name": "test-game",
        "players": ["!UNO!player_0", "!UNO!player_1"],
        "card_in_middle": "green_0",
        }

cards_of_game0 = cards.copy()
cards_to_pop = [game_0["card_in_middle"]] + player_0["cards_of_player"] + player_1["cards_of_player"]

for card in cards_to_pop:
    index = cards_of_game0.index(card)
    cards_of_game0.pop(index)

cards_of_games = {
        "!UNO!game_0": cards_of_game0,
        }

games = {
        "!UNO!game_0": game_0,
        }

players = {
        "!UNO!player_0": player_0,
        "!UNO!player_1": player_1,
        }

main = {
        "_type": "!UNO!Main",
        "_render": "uno-home",
        "games": ["!UNO!game_0"],
        }

@module.msg_get
def get(message):
    ID = message.get_id()

    item = {} # should be assigned data to by Emanuel

    # here goes the code of Emanuel


    item = Item.from_dict(item, ID)

    module.respond(message, Message.give(item))

#@module.msg_update
#def test(message, old_item, new_item):
    #print("test has been called with: ")

if __name__ == "__main__":
    module.run("localhost:3000/==api==/socket")
