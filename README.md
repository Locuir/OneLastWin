## Overview

This bot is made for the [Defector Program](https://defector.hackclub.com/) to be used in the Prisoner's Dilemma to try to get the biggest mean score and lead the leaderboard.

## How the Bot Works

The bot is made to counter some bots which lower the mean score of the positive bots, like always defect or half-defect bots.

## Defence System

To counter them, we have some methods:

* If the bot starts the early round with Defect, it most likely to be a full-defect bot, so we go on the grim switch immediately.
* If the bot starts to defect after the 50th round, it most likely to be a half-defect bot, so we go on the grim switch immediately.
* If the bot starts the game with a C D C pattern, it most likely to be a defect-every-other-round bot, so we go on the grim switch immediately.
* If the bot chooses a D in some round, we count it as a debt and collect it later with a D in a random round.
* If the bot was aggressive and did a 40% D, we go on the grim switch immediately.

## Offense System

* After the 120th round, the bot starts to choose D to win the game after the other bot has trusted ours.

## Performance

Tested in a 750 battle

Average Score: 8.977

Win Rate: 36.1%

Wins : 271

loses : 116

ties : 363

reached #4 on the leaderboard 

Check how our bot performance here : [One Last Win Bot](https://defector.hackclub.com/bot/mfz2qlwvhaivmshil732)
