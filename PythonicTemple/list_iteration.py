import sys

n = 1

# pushing sys.arg to a variable sends it all as a list.  pop is needed to remove the script name.
Order_Of_Succession = sys.argv
Order_Of_Succession.pop(0)

for i in Order_Of_Succession:
    print("%s" % n+". " + i)
    n+=1