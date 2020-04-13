/**
 * SocialMedia Word Counter App
 * The App is to count how many words the user has typed based on the 
 * Social Media handle they have selected. And when they reach the limit
 * of the SM handle they receive a message You have reached your maximum word count.
 * 
 * Bellow are the word counts for each social media
 * Twitter = 280
 * Facebook = 63206
 * Instagram = 2200
 * Others = 8000. 
 * 
 * When a user selects a SocialMedia Handle, Words in the html page
 * changes from 0 to the desired number of words. E.g if twitter is selected, word changes form 0 280.centered
 * 
 * When a user begins to type in the textarea, Word Count increases while word decreases.
 * 
 * Once word decreases to 0. The user is unable to type any further characters and gets the
 * congratulatory message. 
 * 
 * NOTE
 * 1. Your code must be properly commented.
 * 2. Use Es6 syntax wherever possible.  
 */

/*****Getting variables*******/
const message = document.querySelector('#message');
const text = document.querySelector('#text');
const textVal = text.value.length;
let count = document.querySelector('#count');
let media = document.myForm.media;
const words = document.querySelector('#words');
let limit;

/******Looping through all the radio Buttons*******/
for(let i = 0; i<media.length; i++){
media[i].addEventListener('click', ()=>{
if(media[0].checked){
   limit = 280;
   count.innerHTML = 0
   words.innerHTML = limit
   let maxlent = text.maxLength = limit;
   text.value = '';
   message.innerHTML = '';
   console.log('twitter')
  
}else if(media[1].checked ){
   limit = 63206;
   count.innerHTML = 0
   words.innerHTML = limit
   maxlent = text.maxLength = limit;
   text.value = '';
   message.innerHTML = '';
   console.log('facebook')
  
}else if(media[2].checked){
   limit = 2200;
   count.innerHTML = 0
   words.innerHTML = limit
   maxlent = text.maxLength = limit;
   text.value = '';
   message.innerHTML = '';
   console.log('instagram')
   
}else if(media[3].checked ){
   limit = 8000;
   count.innerHTML = 0
   words.innerHTML = limit 
   maxlent = text.maxLength = limit;
   text.value = '';
   message.innerHTML = '';
   console.log('others')
  
}else{

}
}
)
{
   /*********Adding a keyup event listener to textarea to listen for keyboard input***********/
   text.addEventListener('keyup', ()=>{
         if(media[0].checked || media[1].checked || media[2].checked || media[3].checked){
           count.innerHTML =text.value.length;
           words.innerHTML = limit - text.value.length;
           if (text.value.length === limit){
            message.innerHTML = 'Congratulations you have entered the required number of Characters';
         }else{
            
         }
         }
        
})}}