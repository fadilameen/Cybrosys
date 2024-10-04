import random

number = random.randint(1111, 9999)
while True:
    print('System generated 4 digit number: ', number)

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
                break
            else:
                digit4 = number % 10
                digit3 = int(number / 10) % 10
                digit2 = int(number / 100) % 10
                digit1 = int(number / 1000) % 10

                # print('digit1',digit1)
                # print('digit2',digit2)
                # print('digit3',digit3)
                # print('digit4',digit4)
                # print('\n')

                gdigit4 = guess % 10
                gdigit3 = int(guess / 10) % 10
                gdigit2 = int(guess / 100) % 10
                gdigit1 = int(guess / 1000) % 10

                # print('gdigit1',gdigit1)
                # print('gdigit2',gdigit2)
                # print('gdigit3',gdigit3)
                # print('gdigit4',gdigit4)

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

                print('you got', rabbit, 'rabbit')
                print('you got', tortoise, 'tortoise')

            # some code here
        else:
            print("Please enter 4 digit number only")
            continue

    except ValueError:
        print("Please enter valid 4 digit number only! (No decimals or strings allowed please!)")
        continue

    if input('Do You Want To Continue? (y/n) ') != 'y':
        break

# for digit in str(number):
#    print(int(digit))
#    tempn=digit
# print('\n')
#
#
# for digit in str(guess):
#        print(int(digit))
#        tempg = digit
#
