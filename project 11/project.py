from colorama import *
import random 

init()

print("""მოგესალმებით, ეს არის თამაში "wordle"-ის ანალოგიური თამაში, წესები ქვემოთ: """)
print("კომპიუტერი ჩაიფიქრებს სიტყვას თქვენ კი უნდა გამოიცნოთ ეს სიტყვა 7 ცდაში.")
print("თუ თქვენს სავარაუდო სიტყვაში და კომპიუტერის მიერ ჩაფიქრებულ სიტყვაში დაემთხვევა რაიმე ასო მაგრამ ეს ასო არასწორ ადგილზე არის - იგი გამოჩნდება ცხრილში ყვითლად.")
print("თუ თქვენს სავარაუდო სიტყვაში და კომპიუტერის მიერ ჩაფიქრებულ სიტყვაში დაემთხვევა რაიმე ასო და მისი ადგილმდებარეობაც - იგი გამოჩნდება ცხრილში მწვანედ.")

true = True

while True:
    trials = 7

    print()
    while true:
        print("გსურთ ამ თამაშის გავლა?")
        print("ა) კი")
        print("ბ) არა")
        answer0 = input("თქვენი პასუხი: ")
        
        if answer0 == "კი" or answer0 == "ა":
            print()
            break
        elif answer0 == "არა" or answer0 == "ბ":
            print()
            print("კარგით, როდესაც მოგინდებათ თამაშის გავლა დაგვიბრუნდით!")
            break
        else:
            print()
            print(Fore.RED + Style.BRIGHT + "თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან." + Style.RESET_ALL)
            print()
    
    if answer0 == "არა" or answer0 == "ბ":
        break
    else:
        pass

    while True:
        server = ["სახლი", "წიგნი", "გველი", "ლამპა", "ვაშლი", "თაფლი", "მუშტი", "კბილი", "სუფთა", "ძაღლი", "ქვაბი", "თვალი", "მაიკა", "სკამი", "ძვალი"]
        comp_word = random.choice(server)

        print()
        print(Fore.GREEN + Style.BRIGHT + "კომპიუტერმა ჩაიფიქრა სიტყვა." + Style.RESET_ALL)
        print()

        print("*****")
        print("*****")
        print("*****")
        print("*****")
        print("*****")
        print("*****")
        print("*****")

        result1 = ""

        while True:
            answer1 = input("თქვენი ვარაუდი: ")

            if len(answer1) == 5:
                print()
                break
            else:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენს სავარაუდო სიტყვაში უნდა იყოს 5 ასო." + Style.RESET_ALL)
                print()
                pass
        
        trials -= 1
        
        for index in range(5):
            if answer1[index] == comp_word[index]:
                result1 += Fore.GREEN + Style.BRIGHT + answer1[index] + Style.RESET_ALL
            elif answer1[index] in comp_word:
                result1 += Fore.YELLOW + Style.BRIGHT + answer1[index] + Style.RESET_ALL
            else:
                result1 += Fore.WHITE + Style.BRIGHT + answer1[index] + Style.RESET_ALL

        print(f"{result1}")
        print("*****")
        print("*****")
        print("*****")
        print("*****")
        print("*****")
        print("*****")

        if answer1 == comp_word:
            print()
            print(Fore.GREEN + Style.BRIGHT + "თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული სიტყვა!" + Style.RESET_ALL)
            true = False
            break
        else:
            pass

        result2 = ""

        while True:
            answer2 = input("თქვენი ვარაუდი: ")

            if len(answer2) == 5:
                print()
                break
            else:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენს სავარაუდო სიტყვაში უნდა იყოს 5 ასო." + Style.RESET_ALL)
                print()
                pass

        trials -= 1
        
        for index in range(5):
            if answer2[index] == comp_word[index]:
                result2 += Fore.GREEN + Style.BRIGHT + answer2[index] + Style.RESET_ALL
            elif answer2[index] in comp_word:
                result2 += Fore.YELLOW + Style.BRIGHT + answer2[index] + Style.RESET_ALL
            else:
                result2 += Fore.WHITE + Style.BRIGHT + answer2[index] + Style.RESET_ALL
        
        print(f"{result1}")
        print(f"{result2}")
        print("*****")
        print("*****")
        print("*****")
        print("*****")
        print("*****")

        if answer2 == comp_word:
            print()
            print(Fore.GREEN + Style.BRIGHT + "თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული სიტყვა!" + Style.RESET_ALL)
            true = False
            break
        else:
            pass

        result3 = ""

        while True:
            answer3 = input("თქვენი ვარაუდი: ")

            if len(answer3) == 5:
                print()
                break
            else:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენს სავარაუდო სიტყვაში უნდა იყოს 5 ასო." + Style.RESET_ALL)
                print()
                pass

        trials -= 1
        
        for index in range(5):
            if answer3[index] == comp_word[index]:
                result3 += Fore.GREEN + Style.BRIGHT + answer3[index] + Style.RESET_ALL
            elif answer3[index] in comp_word:
                result3 += Fore.YELLOW + Style.BRIGHT + answer3[index] + Style.RESET_ALL
            else:
                result3 += Fore.WHITE + Style.BRIGHT + answer3[index] + Style.RESET_ALL
        
        print(f"{result1}")
        print(f"{result2}")
        print(f"{result3}")
        print("*****")
        print("*****")
        print("*****")
        print("*****")

        if answer3 == comp_word:
            print()
            print(Fore.GREEN + Style.BRIGHT + "თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული სიტყვა!" + Style.RESET_ALL)
            true = False
            break
        else:
            pass

        result4 = ""

        while True:
            answer4 = input("თქვენი ვარაუდი: ")

            if len(answer4) == 5:
                print()
                break
            else:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენს სავარაუდო სიტყვაში უნდა იყოს 5 ასო." + Style.RESET_ALL)
                print()
                pass

        trials -= 1
        
        for index in range(5):
            if answer4[index] == comp_word[index]:
                result4 += Fore.GREEN + Style.BRIGHT + answer4[index] + Style.RESET_ALL
            elif answer4[index] in comp_word:
                result4 += Fore.YELLOW + Style.BRIGHT + answer4[index] + Style.RESET_ALL
            else:
                result4 += Fore.WHITE + Style.BRIGHT + answer4[index] + Style.RESET_ALL
        
        print(f"{result1}")
        print(f"{result2}")
        print(f"{result3}")
        print(f"{result4}")
        print("*****")
        print("*****")
        print("*****")

        if answer4 == comp_word:
            print()
            print(Fore.GREEN + Style.BRIGHT + "თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული სიტყვა!" + Style.RESET_ALL)
            true = False
            break
        else:
            pass

        result5 = ""

        while True:
            answer5 = input("თქვენი ვარაუდი: ")

            if len(answer5) == 5:
                print()
                break
            else:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენს სავარაუდო სიტყვაში უნდა იყოს 5 ასო." + Style.RESET_ALL)
                print()
                pass

        trials -= 1
        
        for index in range(5):
            if answer5[index] == comp_word[index]:
                result5 += Fore.GREEN + Style.BRIGHT + answer5[index] + Style.RESET_ALL
            elif answer5[index] in comp_word:
                result5 += Fore.YELLOW + Style.BRIGHT + answer5[index] + Style.RESET_ALL
            else:
                result5 += Fore.WHITE + Style.BRIGHT + answer5[index] + Style.RESET_ALL
        
        print(f"{result1}")
        print(f"{result2}")
        print(f"{result3}")
        print(f"{result4}")
        print(f"{result5}")
        print("*****")
        print("*****")

        if answer5 == comp_word:
            print()
            print(Fore.GREEN + Style.BRIGHT + "თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული სიტყვა!" + Style.RESET_ALL)
            true = False
            break
        else:
            pass

        result6 = ""

        while True:
            answer6 = input("თქვენი ვარაუდი: ")

            if len(answer6) == 5:
                print()
                break
            else:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენს სავარაუდო სიტყვაში უნდა იყოს 5 ასო." + Style.RESET_ALL)
                print()
                pass

        trials -= 1
        
        for index in range(5):
            if answer6[index] == comp_word[index]:
                result6 += Fore.GREEN + Style.BRIGHT + answer6[index] + Style.RESET_ALL
            elif answer6[index] in comp_word:
                result6 += Fore.YELLOW + Style.BRIGHT + answer6[index] + Style.RESET_ALL
            else:
                result6 += Fore.WHITE + Style.BRIGHT + answer6[index] + Style.RESET_ALL
        
        print(f"{result1}")
        print(f"{result2}")
        print(f"{result3}")
        print(f"{result4}")
        print(f"{result5}")
        print(f"{result6}")
        print("*****")

        if answer6 == comp_word:
            print()
            print(Fore.GREEN + Style.BRIGHT + "თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული სიტყვა!" + Style.RESET_ALL)
            true = False
            break
        else:
            pass

        result7 = ""

        while True:
            answer7 = input("თქვენი ვარაუდი: ")

            if len(answer7) == 5:
                print()
                break
            else:
                print()
                print(Fore.RED + Style.BRIGHT + "თქვენს სავარაუდო სიტყვაში უნდა იყოს 5 ასო." + Style.RESET_ALL)
                print()
                pass

        trials -= 1
        
        for index in range(5):
            if answer7[index] == comp_word[index]:
                result7 += Fore.GREEN + Style.BRIGHT + answer7[index] + Style.RESET_ALL
            elif answer7[index] in comp_word:
                result7 += Fore.YELLOW + Style.BRIGHT + answer7[index] + Style.RESET_ALL
            else:
                result7 += Fore.WHITE + Style.BRIGHT + answer7[index] + Style.RESET_ALL
        
        print(f"{result1}")
        print(f"{result2}")
        print(f"{result3}")
        print(f"{result4}")
        print(f"{result5}")
        print(f"{result6}")
        print(f"{result7}")

        if answer7 == comp_word:
            print()
            print(Fore.GREEN + Style.BRIGHT + "თქვენ გამოიცანით კომპიუტერის მიერ ჩაფიქრებული სიტყვა!" + Style.RESET_ALL)
            true = False
            break
        else:
            pass

        if trials == 0:
            print(Fore.RED + Style.BRIGHT + "სამწუხაროდ თქვენ დაგიმთავრდათ ცდები, თქვენ წააგეთ ეს რაუნდი.")
            print(f"კომპიუტერის მიერ ჩაფიქრებული სიტყვა: {comp_word}" + Style.RESET_ALL)
            true = False
            break

    print()

    while True:
        print(Fore.YELLOW + Style.BRIGHT + "გსურთ, რომ კიდევ ერთხელ გაიაროთ ეს თამაში?")
        print("ა) კი")
        print("ბ) არა" + Style.RESET_ALL)
        answer01 = input("თქვენი პასუხი: ")

        if answer01 == "კი" or answer01 == "ა":
            break
        elif answer01 == "არა" or answer01 == "ბ":
            print()
            print(Fore.YELLOW + Style.BRIGHT + "კარგით, როდესაც მოგინდებათ კიდევ ერთხელ თამაში, დაგვიბრუნდით!" + Style.RESET_ALL)
            break
        else:
            print()
            print(Fore.RED + Style.BRIGHT + "თქვენ მიუთთეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან." + Style.RESET_ALL)
            print()
            pass
    
    if answer01 == "არა" or answer01 == "ბ":
        break
    else:
        pass

