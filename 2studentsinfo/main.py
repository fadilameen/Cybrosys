
while True:
    try:
        limit_ = int(input("Please enter the limit of students : "))
        break
    except ValueError:
        print("Not an integer! Try again.")
        continue

dict_student={}
dict_={}
dlist=[]
final_dict=[]
for i in range(1,limit_+1):
    dict_student = {}
    if i==1:
        print("Enter ",i,"st student name: ",end="")
    elif i==2:
        print("Enter ",i,"nd student name: ",end="")
    elif i==3:
        print("Enter ",i,"rd student name: ",end="")
    else:
        print("Enter ",i,"th student name: ",end="")
    name=input()
    while True:
        try:
            eng = int(input("Mark in English: "))
            break
        except ValueError:
            print("You must enter an integer number")
    while True:
        try:
            mal = int(input("Mark in Malayalam: "))
            break
        except ValueError:
            print("You must enter an integer number")
    while True:
        try:
            hin = int(input("Mark in Hindi: "))
            break
        except ValueError:
            print("You must enter an integer number")
    # dict_student["name"]=name
    # dict_student["English"]=eng
    # dict_student["Malayalam"]=mal
    # dict_student["Hindi"]=hin
    dict_student.update({'name': name,"English":eng,"Malayalam":mal,"Hindi":hin})

    dict_[i]=dict_student
    dlist.append(dict_student)
print()
print(dict_)
print()
print("After Sorting")
print()
sorted_list=sorted(dlist, key=lambda j: j['name'],)
for i in range(limit_):
    print("Roll no: ",i+1)
    print("Name: ",sorted_list[i]["name"])
    print("Mark in English: ", sorted_list[i]["English"])
    print("Mark in Malayalam: ", sorted_list[i]["Malayalam"])
    print("Mark in Hindi: ", sorted_list[i]["Hindi"])
    print()