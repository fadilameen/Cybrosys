import random
from math import trunc

number = random.randint(1000, 9999)
while True:
    print('\nSystem generated 4 digit number: ', number)

    rabbit = 0
    tortoise = 0

    guess = input("Enter your guess: ")
    guess_length = int(len(guess))
    try:
        # check if the length more than 4 or not
        if (guess_length == 4):
            guess=int(guess)

            if number == guess:
                print('WINNER')
                number=random.randint(1111, 9999)
                while number:
                    pro = input('do you want to continue? (y/n) ')
                    try:
                        if (pro == "y" or pro == "Y"):
                            break
                        else:
                            print("invalid input")
                            continue
                    except ValueError:
                        print("invalid input")
                        continue
            else:
                digit4 = number % 10
                digit3 = int(number / 10) % 10
                digit2 = int(number / 100) % 10
                digit1 = int(number / 1000) % 10

                gdigit4 = guess % 10
                gdigit3 = int(guess / 10) % 10
                gdigit2 = int(guess / 100) % 10
                gdigit1 = int(guess / 1000) % 10


                if (digit1 == gdigit1):
                    rabbit = rabbit + 1
                if (digit2 == gdigit2):
                    rabbit = rabbit + 1
                if (digit3 == gdigit3):
                    rabbit = rabbit + 1
                if (digit4 == gdigit4):
                    rabbit = rabbit + 1

                if (((gdigit1 == digit2) or (gdigit1 == digit3) or (gdigit1 == digit4)) and gdigit1 != digit1):
                    tortoise += 1
                if (((gdigit2 == digit1) or (gdigit2 == digit3) or (gdigit2 == digit4)) and gdigit2 != digit2):
                    tortoise += 1
                if (((gdigit3 == digit1) or (gdigit3 == digit2) or (gdigit3 == digit4)) and gdigit3 != digit3):
                    tortoise += 1
                if (((gdigit4 == digit1) or (gdigit4 == digit2) or (gdigit4 == digit3)) and gdigit4 != digit4):
                    tortoise += 1

                if(rabbit):
                    print('you got', rabbit, 'rabbit')
                if(tortoise):
                    print('you got', tortoise, 'tortoise')

            # some code here
        else:
            print("invalid input\n")

            continue

    except ValueError:
        print("invalid input\n")
        continue

