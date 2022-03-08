x = [[5, 2, 3], [10, 8, 9]]
x[1][0] = 15

students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
students[0]['last_name'] = 'Bryant'

sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'][0] = 'Andres'

z = [{'x': 10, 'y': 20}]
z[0]['y'] = 30

print(x)
print(students)
print(sports_directory)
print(z)

students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterate_dictionary(some_list):
    for student in some_list:
        first_name = student['first_name']
        last_name = student['last_name']
        print(f'first_name  - {first_name}, last_name - {last_name}')


iterate_dictionary(students)


def iterate_dictionary2(key_name, some_list):
    for student in some_list:
        print(student[key_name])


iterate_dictionary2('first_name', students)
iterate_dictionary2('last_name', students)

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def printInfo(some_dict):
    for some_list in some_dict:
        print(len(some_dict[some_list]), some_list.upper())
        for i in range(0, len(some_dict[some_list])):
            print(some_dict[some_list][i])


printInfo(dojo)
