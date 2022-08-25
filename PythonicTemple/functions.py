import sys

# pushing sys.arg to a variable sends it all as a list.  pop is needed to remove the script name.
friend_name = sys.argv
friend_name.pop(0)

def hail_friend(name):
    print("Hail, "+name+"!")

def add_numbers(first_int, second_int):
    num_sum = first_int + second_int
    return num_sum

hail_friend('Jonathan Joestar')

print (add_numbers(1,2) )