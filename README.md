# Typograf.js-using-Typograf.ru-webservice
Типографирование текста с использованием веб-сервиса сайта Typograf.ru
# How to use it

```javascript
var Handler = function(text)

    {
        document.getElementById('jstypo_text').value= text;// вывод в textarea
        document.getElementById("text").innerHTML = text;
        
        //text = <p>На&nbsp;лесопилку завезли 32&nbsp;м&sup3; леса, из&nbsp;которых 4&nbsp;м&sup3;
        //пустили под распил на&nbsp;25&nbsp;мм доски, длинной по&nbsp;6&nbsp;м.</p>
    }
        var str = document.getElementById('jstypo_text').value;
    //str = 'На лесопилку завезли 32 м3 леса, из которых 4м3 пустили
    //под распил на 25мм доски, длинной по 6м.';
    textTypography(str,Handler);

```
