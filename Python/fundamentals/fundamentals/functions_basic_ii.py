def countdown(num=5):
    newList = []
    for x in range(num, -1, -1):
        newList.append(x)
    return newList

def print_and_return(list=[0,0]):
    print(list[0])
    return list[1]

def first_plus_length(list=[0,0]):
    return(list[0] + len(list))

def values_greater_than_second(list):
    newList = []
    for i in range(0, len(list)):
        if list[i] > list[1]:
            newList.append(list[i])
    print(len(newList))
    return newList
def length_and_value(size=0, value=0):
    newList = []
    for i in range(0, size):
        newList.append(value)
    return newList

print(countdown(5))
print(print_and_return([1,2]))
print(first_plus_length([1,2,3,4,5]))
print(values_greater_than_second([5,2,3,2,1,4]))
print(length_and_value(6,2))