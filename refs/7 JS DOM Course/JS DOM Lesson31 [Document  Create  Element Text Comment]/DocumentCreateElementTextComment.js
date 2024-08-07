// 31 JS HTML Dom Document  Create  Element Text Comment :


// A) First Application [Basic Creation & Appending] : 

    // 1) Creating the New [Elements & TextNode & Comments] :
    
        var main = document.getElementById('main'),
            elem = document.createElement('div'),
            elemText = document.createTextNode('This Div Has Been Created by DOM'),
            elemCom1 = document.createComment('This is Start Comment'),
            elemCom2 = document.createComment('This is End Comment'),
            dis = document.getElementById('dis');

    // 2) Appending New Created [Elements & TextNodes & Comments] Inside each other :
        
        // append the new Element to the Main Container :
            main.appendChild(elem);    

        // append the The Start Comment to the new Element :
            elem.appendChild(elemCom1);

        // append the TextNode to the new Element :
            elem.appendChild(elemText);    
            
        // append the The End Comment to the new Element :
            elem.appendChild(elemCom2);


    dis.innerHTML = main.innerHTML; 
// =============================================================================================================

// B) Second Application [Advanaced Creation & Appending] : 
 
    // 1) Defining [list] Variable :
        var myList = document.getElementById('myList');
                            
        // Looping Creating and Appending of the (li) & (Text Node) & (Comment) inside the (ul) :
        for( x=0 ; x<3 ; x++ ) {
            let item = document.createElement('li'),
                itemCom1 = document.createComment('Item List Start Comment'),
                itemCom2 = document.createComment('Item List End Comment'),
                itemTxt = document.createTextNode('Item List Content');

            
            // Appending the Start Comment before the Element : 
            myList.appendChild(itemCom1);
            
            // Appending the main (li) Element inside the (ul) : 
            myList.appendChild(item);

            // Appending the TextNode to the Element (li) :
            item.appendChild(itemTxt);

            // Appending the End Comment after the Element : 
            myList.appendChild(itemCom2);

        }

        dis.innerHTML = myList.innerHTML; 


// =============================================================================================================
    function test() {       
        // A) First Application [Basic Creation & Appending] : 

            // 1) Creating the New [Elements & TextNode & Comments] :
            
                var main = document.getElementById('main'),
                elem = document.createElement('div'),
                elemText = document.createTextNode('This Div Has Been Created by DOM'),
                elemCom1 = document.createComment('This is Start Comment'),
                elemCom2 = document.createComment('This is End Comment'),
                dis = document.getElementById('dis');

            // 2) Appending New Created [Elements & TextNodes & Comments] Inside each other :
                
                // append the new Element to the Main Container :
                    main.appendChild(elem);    

                // append the The Start Comment to the new Element :
                    elem.appendChild(elemCom1);

                // append the TextNode to the new Element :
                    elem.appendChild(elemText);    
                    
                // append the The End Comment to the new Element :
                    elem.appendChild(elemCom2);


            dis.innerHTML = main.innerHTML + '<br>'; 
// =============================================================================================================

    // B) Second Application [Advanaced Creation & Appending] : 

        // 1) Defining [list] Variable :
            var myList = document.getElementById('myList');
                                
            // Looping Creating and Appending of the (li) & (Text Node) & (Comment) inside the (ul) :
            for( x=0 ; x<3 ; x++ ) {
                let item = document.createElement('li'),
                    itemCom1 = document.createComment('Item List Start Comment'),
                    itemCom2 = document.createComment('Item List End Comment'),
                    itemTxt = document.createTextNode('Item List Content');

                
                // Appending the Start Comment before the Element : 
                myList.appendChild(itemCom1);
                
                // Appending the main (li) Element inside the (ul) : 
                myList.appendChild(item);

                // Appending the TextNode to the Element (li) :
                item.appendChild(itemTxt);

                // Appending the End Comment after the Element : 
                myList.appendChild(itemCom2);

            }

            dis.innerHTML += myList.innerHTML ;
                    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}