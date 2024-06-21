<!--  php - Lesson8 =>  comment  -->
<?php     
    $lessonName  ='Comments';
    $title = '8 PHP5 - ' . $lessonName;
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;
    $h1 = '<h1> This is H1 Element generated by php code </h1>';
/*  $Str1 = 'String value 1';
    $Str2 = 'String Value 2';
    $Num1 = 1;
    $Num2 = 2;
    $langauges = '<ul>';
    $langauges .= '<li> PHP </li>';    
    $langauges .= '<li> HTML </li>';    
    $langauges .= '<li> CSS </li>';    
    $langauges .= '<li> JS </li>';    
    $langauges .= '</ul>';
    */


// Single Line Comment Type [Normal style]: 

# Single Line Comment Type [Shell style]: 


/* 
    This is multiple Type comment 
*/


/* This is multiple lines comment style [Netbeans]: 
* First Line
* Second Line
* Third Line
* Fourth Line
*/

?>
<!DOCTYPE html>
 <html>
    <head>
        <title> <?php echo $title; ?>  </title>
        <link rel="stylesheet" href="8 PHP 5 In Arabic - Comments.css" media="all">
    </head>
    <body>
        <h1>
            <?php echo $heading; ?>            
        </h1>

        <p>
            <?php echo $paragraph; ?> 
        </p> <br>        
        
        <p> 
            This paragrpah is inner comment between php code <br>
            <?php echo $h1; // This is an Inner single line comment inside php code ?> 
        </p> <br>                                
        
    </body>
</html>         