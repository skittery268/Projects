import random
from colorama import *

init()

print("მოგესალმებით, ამ თამაშში კომპიუტერი ჩაიფიქრებს რიცხვს, თქვენი დავალება კი იქნება, რომ გამოიცნოთ ჩაფიქრებული რიცხვი.")
print("სულ იქნება 5 ლეველი, განმარტებები:")

while True:
    print()
    print("1 ლეველი: კომპიუტერი ჩაიფიქრებს რიცხვს 1-იდან 20-მდე, ცდების რაოდენობა: 5")
    print("2 ლეველი: კომპიუტერი ჩაიფიქრებს რიცხვს 1-იდან 100-მდე, ცდების რაოდენობა: 7")
    print("3 ლეველი: კომპიუტერი ჩაიფიქრებს რიცხვს 1-იდან 500-მდე, ცდების რაოდენობა: 10")
    print("4 ლეველი: კომპიუტერი ჩაიფიქრებს რიცხვს 1-იდან 1000-მდე, ცდების რაოდენობა: 12")
    print("5 ლეველი (very hard level): კომპიუტერი ჩაიფიქრებს ათწილად რიცხვს 0-იდან 1-მდე, ცდების რაოდენობა: 60")
    
    while True:
        try:
            answer0 = int(input("შეიყვანეთ ლეველი რომლის გავლაც გინდათ: "))
            break
        except ValueError:
            print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადეთ თავიდან.")

    if answer0 == 1:
        comp_number1 = random.randint(1, 20)
        trials1 = 5
        print()
        print("კომპიუტერმა ჩაიფიქნა რიცხვი 1-იდან 20-მდე.")
        while True:
            print()
            
            while True:
                try:
                    answer1 = int(input("შეიყვანეთ თქვენი ვარაუდი: "))
                    break
                except ValueError:
                    print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადეთ თავიდან.")
            
            trials1 -= 1

            if trials1 == -1:
                print()
                print(Fore.RED + Style.BRIGHT + "სამწუხაროდ თქვენ დაგიმთავრდათ ცდები, თქვენ წააგეთ ეს რაუნდი.")
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი იყო: {comp_number1}" + Style.RESET_ALL)
                break
            elif answer1 > comp_number1:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი ნაკლებია ვიდრე თქვენი რიცხვი.           ცდების რაოდენობა: {trials1}")
            elif answer1 < comp_number1:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი მეტია ვიდრე თქვენი რიცხვი.               ცდების რაოდენობა: {trials1}")
            else:
                print()
                print(Fore.GREEN + Style.BRIGHT + "გილოცავთ! თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული რიცხვი." + Style.RESET_ALL)
                break
    elif answer0 == 2:
        comp_number2 = random.randint(1, 100)
        trials2 = 7
        print()
        print("კომპიუტერმა ჩაიფიქრა რიცხვი 1-იდან 100-მდე.")
        while True:
            print()

            while True:
                try:
                    answer2 = int(input("შეიყვანეთ თქვენი ვარაუდი: "))
                    break
                except ValueError:
                    print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადეთ თავიდან.")

            trials2 -= 1

            if trials2 == -1:
                print()
                print(Fore.RED + Style.BRIGHT + "სამწუხაროდ თქვენ დაგიმთავრდათ ცდები, თქვენ წააგეთ ეს რაუნდი.")
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი იყო: {comp_number2}" + Style.RESET_ALL)
                break
            elif answer2 > comp_number2:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი ნაკლებია ვიდრე თქვენი რიცხვი.                 ცდების რაოდენობა: {trials2}")
            elif answer2 < comp_number2:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი მეტია ვიდრე თქვენი რიცხვი.                    ცდების რაოდენობა: {trials2}")
            else:
                print()
                print(Fore.GREEN + Style.BRIGHT + "გილოცავთ! თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული რიცხვი." + Style.RESET_ALL)
                break
    elif answer0 == 3:
        comp_number3 = random.randint(1, 500)
        trials3 = 10
        print()
        print("კომპიუტერმა ჩაიფიქრა რიცხვი 1-იდან 500-მდე")
        while True:
            print()

            while True:
                try:
                    answer3 = int(input("შეიყვანეთ თქვენი ვარაუდი: "))
                    break
                except ValueError:
                    print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადეთ თავიდან.")

            trials3 -= 1

            if trials3 == -1:
                print()
                print(Fore.RED + Style.BRIGHT + "სამწუხაროდ თქვენ დაგიმთავრდათ ცდები, თქვენ წააგეთ ეს რაუნდი.")
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი იყო: {comp_number3}" + Style.RESET_ALL)
                break
            elif answer3 > comp_number3:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი ნაკლებია ვიდრე თქვენი რიცხვი.     ცდების რაოდენობა: {trials3}")
            elif answer3 < comp_number3:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი მეტია ვიდრე თქვენი რიცხვი.         ცდების რაოდენობა: {trials3}")
            else:
                print()
                print(Fore.GREEN + Style.BRIGHT + "გილოცავთ! თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული რიცხვი." + Style.RESET_ALL)
                break
    elif answer0 == 4:
        comp_number4 = random.randint(1, 1000)
        trials4 = 12
        print()
        print("კომპიუტერმა ჩაიფიქრა რიცხვი 1-იდან 1000-მდე")
        while True:
            print()

            while True:
                try:
                    answer4 = int(input("შეიყვანეთ თქვენი ვარაუდი: "))
                    break
                except ValueError:
                    print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადეთ თავიდან.")

            trials4 -= 1

            if trials4 == -1:
                print()
                print(Fore.RED + Style.BRIGHT + "სამწუხაროდ თქვენ დაგიმთავრდათ ცდები, თქვენ წააგეთ ეს რაუნდი.")
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი იყო: {comp_number4}" + Style.RESET_ALL)
                break
            elif answer4 > comp_number4:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი ნაკლებია ვიდრე თქვენი რიცხვი.     ცდების რაოდენობა: {trials4}")
            elif answer4 < comp_number4:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი მეტია ვიდრე თქვენი რიცხვი.         ცდების რაოდენობა: {trials4}")
            else:
                print()
                print(Fore.GREEN + Style.BRIGHT + "გილოცავთ! თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული რიცხვი." + Style.RESET_ALL)
                break
    elif answer0 == 5:
        comp_number5 = random.random()
        trials5 = 60
        print()
        print("კომპიუტერმა ჩაიფიქრა რიცხვი 0-იდან 1-მდე")
        while True:
            print()

            while True:
                try:
                    answer5 = float(input("შეიყვანეთ თქვენი ვარაუდი: "))
                    break
                except ValueError:
                    print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადეთ თავიდან.")

            trials5 -= 1

            if trials5 == -1:
                print()
                print(Fore.RED + Style.BRIGHT + "სამწუხაროდ თქვენ დაგიმთავრდათ ცდები, თქვენ წააგეთ ეს რაუნდი.")
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი იყო: {comp_number5}" + Style.RESET_ALL)
                break
            elif answer5 > comp_number5:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი ნაკლებია ვიდრე თქვენი რიცხვი.     ცდების რაოდენობა: {trials5}")
            elif answer5 < comp_number5:
                print()
                print(f"კომპიუტერის მიერ ჩაფიქრებული რიცხვი მეტია ვიდრე თქვენი რიცხვი.         ცდების რაოდენობა: {trials5}")
            else:
                print()
                print(Fore.GREEN + Style.BRIGHT + "გილოცავთ! თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული რიცხვი." + Style.RESET_ALL)
                break
    else:
        print()
        print("სამწუხაროდ თქვენ მიუთითეთ არასწორი ლეველი.")
    
    print()
    while True:
        print("გინდათ რომ თამაში კიდევ ერთხელ გაიაროთ?")
        answer01 = input("თქვენი პასუხი(კი/არა): ")
        print()

        if answer01 == "კი":
            print(Fore.GREEN + Style.BRIGHT + "ძალიან კარგი, წარმატებებს გისურვებთ!" + Style.RESET_ALL)
            break
        elif answer01 == "არა":
            print(Fore.YELLOW + Style.BRIGHT + "კარგით, როდესაც მოგინდებათ რომ გახალისდეთ დაგვიბრუნდით!" + Style.RESET_ALL)
            break
        else:
            print(Fore.RED + Style.BRIGHT + "თქვენ მიუთითეთ არასწორი მაშვენებელი, გთხოვთ სცადოთ თავიდან" + Style.RESET_ALL)

    if answer01 == "კი":
        pass
    elif answer01 == "არა":
        break
    else:
        pass