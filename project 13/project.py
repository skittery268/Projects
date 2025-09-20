from colorama import *

init()

print("მოგესალმებით, ეს არის მისაღები გამოცდა უმაღლეს უნივერსიტეტში, სულ იქნება 20 კითხვა, თითო სწორ პასუხზე თქვენ დაგეწერებათ 5 ქულა, გადამსვლელი ქულა არის 50, გისურვებთ წარმატებებს.")

trials = 1
true = True

while True:
    score = 0
    print()

    while true:
        print("მზად ხართ გამოცდის გასავლელათ?")
        print('ა) კი')
        print('ბ) არა')
        answer0 = input("თქვენი პასუხი: ")

        if answer0 == "კი" or answer0 == "ა":
            print()
            break
        elif answer0 == "არა" or answer0 == "ბ":
            print("კარგით, რიდესაც მზად იქნებით დაბრუნდით, წარმატებებს გისურვებთ!")
            break
        else:
            print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან.")
    
    if answer0 == "არა" or answer0 == "ბ":
        break
    else:
        pass

    print("პირველი კითხვა: 10 * 10 = ? პასუხის ვარიანტები ქვემოთ არის.")                         # პირველი კითხვა (1)
    print("ა) 110")
    print("ბ) 120")
    print("გ) 100")
    print("დ) 90")
    answer1= input("თქვენი პასუხი: ")                                                            # სწორი პასუხი: გ) 100

    if answer1 == '100' or answer1 == "გ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: გ) 100" + Style.RESET_ALL)

    print()

    print("მეორე კითხვა: 354 / 18 = ? პასუხის ვარიანტები ქვემოთ არის.")                           # მეორე კითხვა (2)
    print("ა) 19.5")
    print("ბ) 18.4")
    print("გ) 20.1")
    print("დ) 19.6")
    answer2 = input("თქვენი პასუხი: ")                                                            # სწორი პასუხი: დ) 19.6

    if answer2 == '19.6' or answer2 == "დ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: დ) 19.6" + Style.RESET_ALL)

    print()

    print("მესამე კითხვა: 29 * 12 = ? პასუხის ვარიანტები ქვემოთ არის.")                            # მესამე კითხვა (3)
    print("ა) 348")
    print("ბ) 350")
    print("გ) 345")
    print("დ) 329")
    answer3 = input("თქვენი პასუხი: ")                                                            # სწორი პასუხი: ა) 348

    if answer3 == "348" or answer3 == "ა":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ა) 348" + Style.RESET_ALL)

    print()

    print("მეოთხე კითხვა: 348 * 12 = ? პასუხის ვარიანტები ქვემოთ არის.")                          # მეოთხე კითხვა (4)
    print("ა) 4170")
    print("ბ) 4176")
    print("გ) 4180")
    print("დ) 4169")
    answer4 = input("თქვენი პასუხი: ")                                                             # სწორი პასუხი: ბ) 4176

    if answer4 == "4176" or answer4 == "ბ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ბ) 4176" + Style.RESET_ALL)

    print()

    print("მეხუთე კითხვა: 5763 / 12 = ? პასუხის ვარიანტები ქვემოთ არის.")                         # მეხუთე კითხვა (5)
    print("ა) 476")
    print("ბ) 482")
    print("გ) 479")
    print("დ) 480")
    answer5 = input("თქვენი პასუხი: ")                                                             # სწორი პასუხი: დ) 480

    if answer5 == "480" or answer5 == "დ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: დ) 480" + Style.RESET_ALL)

    print()

    print("მეექვსე კითხვა: 327 * 7 = ? პასუხის ვარიანტები ქვემოთ არის.")                            # მეექვსე კითხვა (6)
    print("ა) 2289")
    print("ბ) 2267")
    print("გ) 2278")
    print("დ) 2288")
    answer6 = input("თქვენი პასუხი: ")                                                              # სწორი პასუხი: ა) 2289

    if answer6 == "2289" or answer6 == "ა":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print('სწორი პასუხი იყო: ა) 2289' + Style.RESET_ALL)

    print()

    print("მეშვიდე კითხვა: 32432 - 16728 = ? პასუხის ვარიანტები ქვემოთ არის.")                      # მეშვიდე კითხვა (7)
    print("ა) 15700")
    print("ბ) 15704")
    print("გ) 15722")
    print("დ) 15702")
    answer7 = input("თქვენი პასუხი: ")                                                              # სწორი პასუხი: ბ) 15704

    if answer7 == "15704" or answer7 == "ბ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ბ) 15704" + Style.RESET_ALL)

    print()

    print("მერვე კითხვა: 20174 + 9065 = ? პასუხის ვარიანტები ქვემოთ არის.")                          # მერვე კითხვა (8)
    print("ა) 29200")
    print("ბ) 29229")
    print("გ) 29239")
    print("დ) 29203")
    answer8 = input("თქვენი პასუხი: ")                                                               # სწორი პასუხი: გ) 29239

    if answer8 == "29239" or answer8 == "გ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: გ) 29239" + Style.RESET_ALL)

    print()

    print("მეცხრე კითხვა: 9 * 9 = ? პასუხის ვარიანტები ქვემოთ არის.")                                # მეცხრე კითხვა (9)
    print('ა) 79')
    print('ბ) 85')
    print('გ) 82')
    print("დ) 81")
    answer9 = input("თქვენი პასუხი: ")                                                                # სწორი პასუხი: დ) 81

    if answer9 == "81" or answer9 == "დ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: დ) 81" + Style.RESET_ALL)
 
    print()

    print("მეათე კითხვა: 60 * 24 = ? პასუხის ვარიანტები ქვემოთ არის.")                               # მეათე კითხვა (10)
    print("ა) 1440")
    print("ბ) 1430")
    print("გ) 1450")
    print("დ) 1420")
    answer10 = input("თქვენი პასუხი: ")                                                               # სწორი პასუხი: ა) 1440

    if answer10 == "1440" or answer10 == "ა":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ა) 1440" + Style.RESET_ALL)

    print()

    print("დამთავრდა მათემატიკის კითხვები, იწყება ისტორიის კითხვები.")

    print()

    print("მეთერთმეტე კითხვა: რომელ წელს გამოცხადდა საქართველოს პირველი რესპუბლიკა?")           # მეთერთმეტე კითხვა (11)
    print("ა) 1801")
    print("ბ) 1918")
    print("გ) 1991")
    print("დ) 1921")
    answer11 = input("თქვენი პასუხი: ")                                                               # სწორი პასუხი: ბ) 1918

    if answer11 == "1918" or answer11 == "ბ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ბ) 1918" + Style.RESET_ALL)

    print()

    print("მეთორმეტე კითხვა: ვინ იყო თამარ მეფის მამა?")                                              # მეთორმეტე კითხვა (12)
    print("ა) ვახტანგ გორგასალი")
    print("ბ) დავით აღმაშენებელი")
    print("გ) გიორგი III")
    print("დ) ბაგრატ III")
    answer12 = input("თქვენი პასუხი: ")                                                               # სწორი პასუხი: გ) გიორგი III

    if answer12 == "გიორგი III" or answer12 == "გ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: გ) გიორგი III" + Style.RESET_ALL)

    print()

    print("მეცამეტე კითხვა: რომელ წელს გაიმართა დიდგორის ბრძოლა?")                                 # მეცამეტე კითხვა (13)
    print("ა) 1121")
    print("ბ) 1221")
    print("გ) 1101")
    print("დ) 1184")
    answer13 = input("თქვენი პასუხი: ")                                                                # სწორი პასუხი: ა) 1121

    if answer13 == "1121" or answer13 =="ა":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ა) 1121" + Style.RESET_ALL)

    print()

    print("მეთოთხმეტე კითხვა: ვინ დაწერა 'ვეფხისტყაოსანი'?")                                            # მეთოთხმეტე კითხვა (14)
    print("ა) ილია ჭავჭავაძე")
    print("ბ) შოთა რუსთაველი")
    print("გ) აკაკი წერეთელი")
    print("დ) გალაკტიონ ტაბიძე")
    answer14 = input("თქვენი პასუხი: ")                                                                  # სწორი პასუხი: ბ) შოთა რუსთაველი

    if answer14 == "შოთა რუსთაველი" or answer14 == "ბ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ბ) შოთა რუსთაველი" + Style.RESET_ALL)

    print()

    print("მეთხუთმეტე კითხვა: რომელ რეგიონში მდებარეობს უფლისციხე?")                                  # მეთხუთმეტე კითხვა (15)
    print("ა) კახეთი")
    print("ბ) სამცხე-ჯავახეთი")
    print("გ) შიდა ქართლი")
    print("დ) იმერეთი")
    answer15 = input("თქვენი პასუხი: ")                                                                   # სწორი პასუხი: გ) შიდა ქართლი

    if answer15 == "შიდა ქართლი" or answer15 == "გ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: გ) შიდა ქართლი" + Style.RESET_ALL)

    print()

    print("მეთექვსმეტე კითხვა: რომელ წელს შეუერთდა საქართველო რუსეთის იმპერიას?")                      # მეთექვსმეტე კითხვა (16)
    print("ა) 1801")
    print("ბ) 1918")
    print("გ) 1921")
    print("დ) 1765")
    answer16 = input("თქვენი პასუხი: ")                                                                    # სწორი პასუხი: ა) 1801

    if answer16 == "1801" or answer16 == "ა":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ა) 1801" + Style.RESET_ALL)

    print()

    print("მეჩვიდმეტე კითხვა: სად არის ბაგრატის ტაძარი?")                                                  # მეჩვიდმეტე კითხვა (17)
    print("ა) თბილისი")
    print("ბ) ქუთაისი")
    print("გ) ბათუმი")
    print("დ) გორი")
    answer17 = input("თქვენი პასუხი: ")                                                                    # სწორი პასუხი: ბ) ქუთაისი

    if answer17 == "ქუთაისი" or answer17 =="ბ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ბ) ქუთაისი" + Style.RESET_ALL)

    print()

    print("მეთვრამეტე კითხვა: ვინ იყო პირველი ქართველი მეფე გაერთიანებულ საქართველოში?")                 # მეთვრამეტე კითხვა (18)
    print("ა) ბაგრატ III")
    print("ბ) გიორგი I")
    print("გ) დავით IV")
    print("დ) არჩილ II")
    answer18 = input("თქვენი პასუხი: ")                                                                      # სწორი პასუხი: ა) ბაგრატ III

    if answer18 == "ბაგრატ III" or answer18 == "ა":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: ა) ბაგრატ III" + Style.RESET_ALL)

    print()

    print("მეცხრამეტე კითხვა: რომელ წელს დაიბადა ილია ჭავჭავაძე?")                                          # მეცხრამეტე კითხვა (19)
    print("ა) 1820")
    print("ბ) 1845")
    print("გ) 1851")
    print("დ) 1837")
    answer19 = input("თქვენი პასუხი: ")                                                                      # სწორი პასუხი: დ) 1837

    if answer19 == "1837" or answer19 == "დ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: დ) 1837" + Style.RESET_ALL)

    print()

    print("მეოცე კითხვა: რომელ საუკუნეში მოღვაწეობდა დავით აღმაშენებელი?")                                 # მეოცე კითხვა (20)
    print("ა) IX")
    print("ბ) XIII")
    print("გ) XI-XII")
    print("დ) XIV")
    answer20 = input("თქვენი პასუხი: ")                                                                      # სწორი პასუხი: გ) XI-XII

    if answer20 == "XI-XII" or answer20 == "გ":
        print(Fore.GREEN + Style.BRIGHT + "თქვენ გაეცით სწორი პასუხი! თქვენ დაგერიცხათ 5 ქულა." + Style.RESET_ALL)
        score += 5
    else:
        print(Fore.RED + Style.BRIGHT + "თქვენი პასუხი სამწუხაროთ არასწორია.")
        print("სწორი პასუხი იყო: გ) XI-XII" + Style.RESET_ALL)

    print()
    print("მისაღები გამოცდა დასრულებულია.")

    if score >= 90:
        print()
        print(Fore.GREEN + Style.BRIGHT + f"თქვენი ქულების რაოდენობა: {score}")
        print("გილოცავთ, თქვენ წარმატებით გაიარეთ გამოცდა და თქვენი ქულებიდან გამომდინარე თქვენ მიიღეთ 50%-იანი გრანტი!!!" + Style.RESET_ALL)
        break
    elif score >= 70:
        print()
        print(Fore.GREEN + Style.BRIGHT + f"თქვენი ქულების რაოდენობა: {score}")
        print("გილოცავთ, თქვენ წარმატებით გაიარეთ გამოცდა და თქვენი ქულებიდან გამომდინარე თქვენ მიიღეთ 30%-იანი გრანტი!!!" + Style.RESET_ALL)
        break
    elif score >= 50:
        print()
        print(Fore.GREEN + Style.BRIGHT + f"თქვენი ქულების რაოდენობა: {score}")
        print("გილოცავთ, თქვენ წარმატებით გაიარეთ გამოცდა" + Style.RESET_ALL)
        break
    else:
        print()
        print(Fore.RED + Style.BRIGHT + f"თქვენი ქულების რაოდენობა: {score}")
        print("სამწუხაროდ თქვენ ვერ გაიარეთ გამოცდა, გთხოვთ სცადეთ თავიდან." + Style.RESET_ALL)

        print()

        while True:
            print(Fore.YELLOW + Style.BRIGHT + "გსურთ, რომ თავიდან სცადოთ გამოცდის ჩაბარება?")
            print(f"ცდების რაოდენობა: {trials}")
            print("ა) კი")
            print("ბ) არა" + Style.RESET_ALL)
            answer00 = input("თქვენი პასუხი: ")

            if answer00 == "კი" or answer00 == "ა":
                break
            elif answer00 == "არა" or answer00 == "ბ":
                print("კარგით, ჩვენ მაინც წარმატებებს გისურვებთ!")
                break
            else:
                print("თქვენ მიუთითეთ არასწორი მაჩვენებელი, გთხოვთ სცადოთ თავიდან.")
        
        if answer00 == "არა" or answer00 == "ბ":
            break
        else:
            pass

        trials -= 1
    
    if trials == -1:
        print()
        print(Fore.RED + Style.BRIGHT + "სამწუხაროთ თქვენ დაგიმთავრდათ ცდები.")
        print("არ მოიწყინოთ, ჩვენ ყოველ წელს გვიტარდება ასეთი გამოცდა!" + Style.RESET_ALL)
        break
    else:
        true = False
        pass

