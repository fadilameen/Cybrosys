while True:
    try:
        heads = int(input("Enter total number of heads: "))
        break
    except ValueError:
        print("please enter a valid input")
        continue
while True:
    try:
        legs = int(input("Enter total number of legs: "))
        if (((2 * heads - (legs / 2)).is_integer()) or (2*heads-(legs/2))==0) and ((2 * heads - (legs / 2))>=0):
            break
        else:
            print("please enter a valid input")
            continue
    except ValueError:
        print("please enter a valid input")
        continue
rabbit=(legs/2)-heads
chicken=2 * heads - (legs / 2)
print("Total number of rabbits = ",int(rabbit))
print("Total number of chickens = ",int(chicken))