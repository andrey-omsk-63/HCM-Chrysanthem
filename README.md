# HCM-Chrysanthem

Для запуска необходимо, чтобы был установлен Node.js не выше V16, более позднее версии ещё "сырые", могут потом появится ошибки при инсталяции.

Установщик доступной версии можно найти здесь:
https://www.npackd.org/p/org.nodejs.NodeJS/16.17

Когда Node.js установлен, командная строка Node.js будет доступна через командную строку операционной системы. Просто введите node и нажмите клавишу Enter, чтобы запустить Node.js command prompt, после этого в рабочем окне Node.js command prompt необхдимо встать в директорию проекта командой:

cd <путь к директории>

например:

cd D:

cd D:\HCM\HCM-Chrysanthemum

Перед первым запуском проекта нужно ввести команду:

npm install

в результате в директории проекта будет создана папка node_modules

Для запуска проекта нужно ввести команду:

npm start

Приятного просмотра!

изменения 23.02 и 24.02:

1. Возвращение компанентов HcmMain, HcmBlock1Gl, HcmBl2Form101, HcmBl0Form101 к нормальному
   виду и работоспособному состоянию
2. Подчищение от never used
3. Приведение стилей в компаненте HcmBl2Form100 к системному виду
4. Создание рыбы на компонент HcmBl4Form102
