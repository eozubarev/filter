
Для запуска моей сборки на GULP потребуется node js версии не ниже 8.0

#  Выгружаем сборку 
```npm i```  
# Запускаем GULP 
```gulp```  
## Возможные ошибки при запуске GULP:
```Error: Cannot find module 'webp-converter/cwebp'```
### Решение:
1 
	Если macOS: ```npm install webp-converter@2.2.3 --save-dev```   , 
	если Windows: ```$ npm install webp-converter@2.2.3 --save-dev```  
		
2
	Если не помогло, тогда выгружаем отдельно архив /node-modules ,
	по ссылке: [node_modules](https://yadi.sk/d/65jh5VICsogthw) 
	разархивируем и заменяем в папке проекта.  
	Далее вновь запускаем GULP ```gulp```
	
### Лайфхак: 
    
        Из-за проблем с libpng на Ubuntu 18.04 и выше, необходимо накатить системный webp и в node_modules
        прописать симликник cwebp и dwebp на сиситемные, чтобы gulp не ругался  

    
#### Проект разделён на 4 отдела:

1. #src хранятся исходные файлы проекта, с которыми можно взаимодействовать после настройки gulp
2. SCSS - хранятся стили scss для отдельных компонентов / scss styles for individual components are stored
3. HTML - хранится код для отдельных компонентов / stores code for individual components
4. SECTION - хранится SCSS,HTML код для всех секций / stored SCSS,HTML code for all sections

UPD:  Система перенесена на bitbucket  и деплой теперь происходит автоматом
     #src - там производим необходимые изменения для фронта ( css,js потом gulp автоматом соберет их)
     /new.filter-promix/lib тут лежат файлы php которые не надо затирать, это системные файлы и библиотеки 
     для обработки заявок и визитов 
