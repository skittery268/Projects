from colorama import *

init()

user_info = []
user_balance = []

while True:
    print(Fore.YELLOW + Style.BRIGHT + "======    Bank    ======")
    print("1) რეგისტრაცია")
    print("2) აქაუნთში შესვლა")
    print("3) გასვლა" + Style.RESET_ALL)
    answer1 = input("თქვენი მოქმედება: ")

    print()

    if answer1 == "1" or answer1 == "რეგისტრაცია":
        while True:
            user_name = input(Fore.BLUE + Style.BRIGHT + "თქვენი სახელი: " + Style.RESET_ALL)

            if len(user_name) < 4:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენ აქაუნთის სახელში უნდა იყოს 4 სიმბოლო ან მეტი!" + Style.RESET_ALL)
            else:
                print()
                print(Fore.GREEN + Style.BRIGHT + "მიღებულია." + Style.RESET_ALL)
                user_info.append([user_name])
                user_balance.append([user_name])
                break

        while True: 
            print()
            user_password = input(Fore.BLUE + Style.BRIGHT + "თქვენი პაროლი: " + Style.RESET_ALL)

            if len(user_password) < 8:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენ პაროლში უნდა იყოს 8 სიმბოლო ან მეტი." + Style.RESET_ALL)
            else:
                print()
                print(Fore.GREEN + Style.BRIGHT + "მიღებულია." + Style.RESET_ALL)
                user_info[-1].append(user_password)
                break

        print()
        print(Fore.GREEN + Style.BRIGHT + "აქაუნთი შექმნილია!" + Style.RESET_ALL)
        balance = 0
        user_balance[-1].append(balance)
        print()

        while True:
            print(Fore.YELLOW + Style.BRIGHT + "======    Bank    ======")
            print("1) ბალანსი")
            print("2) ბალანსის შევსება")
            print("3) თანხის გამოტანა")
            print("4) აქაუნთიდან გასვლა" + Style.RESET_ALL)
            answer01 = input("თქვენი მოქმედება: ")
            print()

            if answer01 == "1" or answer01 == "ბალანსი":
                print(Fore.GREEN + Style.BRIGHT + "თქვენი ბალანსი:", user_balance[-1][-1], Style.RESET_ALL)
                print()
            elif answer01 == "2" or answer01 == "ბალანსის შევსება":
                while True:
                    while True:
                        try:
                            answer001 = int(input("შეიყვანეთ თანხა რომლის შეტანაც გინდათ ბანკის ანგარიშზე: "))
                            print()
                            break
                        except:
                            print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან.")
                            print()

                    if answer001 < 0:
                        print(Fore.RED + Style.BRIGHT + "თქვენ არ შეგიძლიათ უარყოფითი თანხის შეტანა ანგარიშზე." + Style.RESET_ALL)
                        print()
                    else:
                        bal1 = int(user_balance[-1][-1])
                        new_balance1 = bal1 + answer001
                        user_balance[-1].append(new_balance1)
                        print(Fore.GREEN + Style.BRIGHT + "თქვენ წარმატებით შეიყვანეთ თანხა ანგარიშზე." + Style.RESET_ALL)
                        print()
                        break
            elif answer01 == "3" or answer01 == "თანხის გამოტანა":
                while True:
                    while True:
                        try:
                            answer002 = int(input("შეიყვანეთ თანხა რომლის გამოტანაც გინდათ თქვენი ანგარიშიდან: "))
                            print()
                            break
                        except:
                            print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან.")

                    if answer002 > int(user_balance[-1][-1]):
                        print(Fore.RED + Style.BRIGHT + "თქვენ არასაკმარისი თანხა გაქვთ ბალანსზე, გთხოვთ მიუთითოთ თავიდან." + Style.RESET_ALL)
                        print()
                    elif answer002 < 0:
                        print(Fore.RED + Style.BRIGHT + "თქვენ არ შეგიძლიათ უარყოფითი თანხის რაოდენობის გამოტანა." + Style.RESET_ALL)
                        print()
                    else:
                        bal2 = int(user_balance[-1][-1])
                        new_balance2 = bal2 - answer002
                        user_balance[-1].append(new_balance2)
                        print(Fore.GREEN + Style.BRIGHT + "თქვენ წარმატებით გამოიტანეთ თანხა ბანკის ანგარიშიდან." + Style.RESET_ALL)
                        print()
                        break
            elif answer01 == "4" or answer01 == "აქაუნთიდან გასვლა":
                print(Fore.GREEN + Style.BRIGHT + "თქვენ წარმატებით გახვედით აქაუნთიდან!" + Style.RESET_ALL)
                print()
                break
            else:
                print(Fore.RED + Style.BRIGHT + "თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან." + Style.RESET_ALL)
                print()
    elif answer1 == "2" or answer1 == "აქაუნთში შესვლა":
        print("""მოქმედების გასაუქმებლად შეიყვანეთ "გაუქმება" """)
        while True:
            print()
            user_name = input(Fore.BLUE + Style.BRIGHT + "შეიყვანეთ თქვენი სახელი: " + Style.RESET_ALL)
            id1 = False
            id_len = False
            print()

            if user_name == "გაუქმება":
                break

            if len(user_info) == 0:
                print(Fore.RED + Style.BRIGHT + "აქაუნთი ასეთი სახელით არ არსებობს." + Style.RESET_ALL)
                id_len = True
            else:
                for i in range(len(user_info)):
                    if user_info[i][0] == user_name:
                        print(Fore.GREEN + Style.BRIGHT + "მიღებულია." + Style.RESET_ALL)
                        id1 = True
                        break

            if id1 == False and id_len == False:
                print(Fore.RED + Style.BRIGHT + "აქაუნთი ასეთი სახელით არ არსებობს." + Style.RESET_ALL)
            
            if id1 == True:
                break
            else:
                pass
            
        if id1 == True:
            print()
            print("""მოქმედების გასაუქმებლად შეიყვანეთ "გაუქმება" """)
        
        while id1 == True:
            print()
            user_password = input(Fore.BLUE + Style.BRIGHT + "შეიყვანეთ თქვენი პაროლი: " + Style.RESET_ALL)
            id2 = False
            print()

            if user_password == "გაუქმება":
                break

            for i in range(len(user_info)):
                if user_info[i][-1] == user_password:
                    print(Fore.GREEN + Style.BRIGHT + f"მიღებულია, მოგესალმებით {user_name}" + Style.RESET_ALL)
                    id2 = True
                    print()
                    break
            
            if id2 == False:
                print(Fore.RED + Style.BRIGHT + "არასწორი პაროლია." + Style.RESET_ALL)
            
            if id2 == True:
                break
            else:
                pass
            
        while id1 == True and id2 == True:
            print(Fore.YELLOW + Style.BRIGHT + "======    Bank    ======")
            print("1) ბალანსი")
            print("2) ბალანსის შევსება")
            print("3) თანხის გამოტანა")
            print("4) აქაუნთიდან გასვლა" + Style.RESET_ALL)
            answer01 = input("თქვენი მოქმედება: ")
            print()

            if answer01 == "1" or answer01 == "ბალანსი":
                balance_found = False

                for i in range(len(user_balance)):
                    if user_balance[i][0] == user_name:
                        balance = user_balance[i][-1]
                        balance_found = True

                        print(Fore.GREEN + Style.BRIGHT + "თქვენი ბალანსი:", balance, Style.RESET_ALL)
                        print()
                        break
                
                if balance_found == False:
                    print(Fore.RED + Style.BRIGHT + "სამწუხაროდ ბალანსი ვერ მოიძებნა." + Style.RESET_ALL)
                    print()
            elif answer01 == "2" or answer01 == "ბალანსის შევსება":
                balance_found = False 

                for i in range(len(user_balance)):
                    if user_balance[i][0] == user_name:
                        balance = user_balance[i][-1]
                        balance_found = True
                        break
                
                if balance_found == False:
                    print(Fore.RED + Style.BRIGHT + "სამწუხაროდ ბალანსი ვერ მოიძებნა." + Style.RESET_ALL)
                    print()

                while balance_found == True:
                    while True:
                        try:
                            answer001 = int(input("შეიყვანეთ თანხა რომლის შეტანაც გინდათ ბანკის ანგარიშზე: "))
                            print()
                            break
                        except:
                            print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან.")
                            print()

                    if answer001 < 0:
                        print(Fore.RED + Style.BRIGHT + "თქვენ არ შეგიძლიათ უარყოფითი თანხის შეტანა ანგარიშზე." + Style.RESET_ALL)
                        print()
                    else:
                        bal1 = int(balance)
                        new_balance1 = bal1 + answer001

                        for user_balanc in user_balance:
                            if user_balanc[0] == user_name:
                                user_balanc.append(new_balance1)
                                break

                        print(Fore.GREEN + Style.BRIGHT + "თქვენ წარმატებით შეიყვანეთ თანხა ანგარიშზე." + Style.RESET_ALL)
                        print()
                        break
            elif answer01 == "3" or answer01 == "თანხის გამოტანა":
                balance_found = False 

                for i in range(len(user_balance)):
                    if user_balance[i][0] == user_name:
                        balance = user_balance[i][-1]
                        balance_found = True
                        break
                
                if balance_found == False:
                    print(Fore.RED + Style.BRIGHT + "სამწუხაროდ ბალანსი ვერ მოიძებნა." + Style.RESET_ALL)
                    print()

                while balance_found == True:
                    while True:
                        try:
                            answer002 = int(input("შეიყვანეთ თანხა რომლის გამოტანაც გინდათ თქვენი ანგარიშიდან: "))
                            print()
                            break
                        except:
                            print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან.")

                    if answer002 > balance:
                        print(Fore.RED + Style.BRIGHT + "თქვენ არასაკმარისი თანხა გაქვთ ბალანსზე, გთხოვთ მიუთითოთ თავიდან." + Style.RESET_ALL)
                        print()
                    elif answer002 < 0:
                        print(Fore.RED + Style.BRIGHT + "თქვენ არ შეგიძლიათ უარყოფითი თანხის რაოდენობის გამოტანა." + Style.RESET_ALL)
                        print()
                    else:
                        bal2 = int(balance)
                        new_balance2 = bal2 - answer002

                        for user_balances in user_balance:
                            if user_balances[0] == user_name:
                                user_balances.append(new_balance2)
                                break
                        
                        print(Fore.GREEN + Style.BRIGHT + "თქვენ წარმატებით გამოიტანეთ თანხა ბანკის ანგარიშიდან." + Style.RESET_ALL)
                        print()
                        break
            elif answer01 == "4" or answer01 == "აქაუნთიდან გასვლა":
                print(Fore.GREEN + Style.BRIGHT + "თქვენ წარმატებით გახვედით აქაუნთიდან!" + Style.RESET_ALL)
                print()
                break
            else:
                print(Fore.RED + Style.BRIGHT + "თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან." + Style.RESET_ALL)
                print()
    elif answer1 == "3" or answer1 == "გასვლა":
        print(Fore.GREEN + Style.BRIGHT + "წარმატებებს გისურვებთ, კიდევ დაგვიბრუნდით!" + Style.RESET_ALL)
        break
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან!" + Style.RESET_ALL)

