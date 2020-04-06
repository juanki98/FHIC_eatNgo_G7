const starClassName = 'star';
const filledStarSourcePath = '../images/star_filled.svg';
const emptyStarSourcePath = '../images/star_empty.svg';

/**
 *  String starRow: id of div that contains stars
 *  String starId: id of star taht must be filled. Stars with id less than starId must be filled to.
 */
function updateStars(starId, starRow)
{
    var starArray = document.getElementById(starRow).getElementsByClassName(starClassName);
    
    for(var i = 0; i < starArray.length; i++) 
    {
        var star = starArray[i]; 
        var num = star.id;
        
        if (num <= starId){ //FILL
            
            star.src = filledStarSourcePath;
            
        } else { //DONT FILL
            
            star.src = emptyStarSourcePath;
        }
    }
}