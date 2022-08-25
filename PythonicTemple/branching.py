import sys

# Read in an input string passed in to our script as an argument
first_num = int(sys.argv[1])
second_num = int(sys.argv[2])

sum_num = first_num + second_num

if (sum_num <= 0):
    print('You have chosen the path of destitution.')
elif (sum_num <= 100 ):
    print('You have chosen the path of plenty.')
else:
    print('You have chosen the path of excess.')

