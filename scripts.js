document.addEventListener('DOMContentLoaded',function(){

    let div = document.createElement('div');
    div.className = "header-container";

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('this is h1');

    h1.appendChild(h1Text);
    div.appendChild(h1);

    h1.className = 'h1';

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is h2');

    h2.appendChild(h2Text);
    div.appendChild(h2);

    h2.className = 'h2';

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('this is h3');

    h3.appendChild(h3Text);
    div.appendChild(h3);

    h3.className = 'h3';

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('this is h4');

    h4.appendChild(h4Text);
    div.appendChild(h4);

    h4.className = 'h4';

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('this is h5');

    h5.appendChild(h5Text);
    div.appendChild(h5);

    h5.className = 'h5';

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('this is h6');

    h6.appendChild(h6Text);
    div.appendChild(h6);

    h6.className = 'h6';

    document.body.appendChild(div);

    let colors = ['red','blue','green','yellow','pink','gray','purple','lightpink'];

    function randomColors(){
        let randomColors = colors[Math.floor(Math.random()*colors.length)];
        return randomColors;
    }
    h1.addEventListener('dblclick',function(){
        let randColors = randomColors();
        h1.style.color = randColors;
    })
    h2.addEventListener('dblclick',function(){
        let randColors = randomColors();
        h2.style.color = randColors;
    })
    h3.addEventListener('dblclick',function(){
        let randColors = randomColors();
        h3.style.color = randColors;
    })
    h4.addEventListener('dblclick',function(){
        let randColors = randomColors();
        h4.style.color = randColors;
    })
    h5.addEventListener('dblclick',function(){
        let randColors = randomColors();
        h5.style.color = randColors;
    })
    h6.addEventListener('dblclick',function(){
        let randColors = randomColors();
        h6.style.color = randColors;
    })

    let button = document.createElement('button');
    let buttonText = document.createTextNode('click me to add list item');
    button.appendChild(buttonText);
    div.appendChild(button);
    
    let ul = document.createElement('ul');
    div.appendChild(ul);

    let list = 1;
    function itemInsert(){
        let li = document.createElement('li');
        let liText = document.createTextNode('this is item' + " " +  list);
        li.appendChild(liText);
        ul.appendChild(li);
        list++;

        li.addEventListener('click',function(){
            let randColors = randomColors();
            li.style.color = randColors;
        })

        li.addEventListener('dblclick',function(){
            this.remove();
        })
    }

    button.addEventListener('click',function(){
        itemInsert();
    })
 
    
})