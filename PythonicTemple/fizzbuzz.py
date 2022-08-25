import sys

# pushing sys.arg to a variable sends it all as a list.  pop is needed to remove the script name.
nums = sys.argv
nums.pop(0)

for i in nums:
    if((int(i)%3 == 0) and (int(i)%5 == 0)):
        print("fizzbuzz")
    elif(int(i)%3 == 0):
        print("fizz")
    elif(int(i)%5 == 0):
        print("buzz")
    else:
        print(i)