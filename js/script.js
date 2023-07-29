/*
- website-11 dynamic e-comarce
- designed & developed by Mayank
- copyright by Mayank
- JavaScript : js/script
*/
try
{
    document.getElementById('theme-btn').onclick = () => {

        let element = document.body;

        element.classList.toggle('dark')
    }   
}
catch(error)
{
    console.log(error)
}