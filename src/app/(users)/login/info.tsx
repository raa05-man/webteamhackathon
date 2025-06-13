
function contactno(){
let num:string = "" ;
num+=9 ;
for(let i = 1 ; i<10 ; i++)
{
     num += Math.floor(Math.random()*9 + 1) ;
}
return num ;
}



// export default function InfoResident(){
    export const info = [
        {
            name:'A',
            flat:'101',
            // contact:contactno(),
            contact:'1234567890'
        },
         {
            name:'B',
            flat:'102',
            contact:contactno(),
        },
         {
            name:'C',
            flat:'103',
            contact:contactno(),
        },
         {
            name:'D',
            flat:'104',
            contact:contactno(),
        },
        {
            name:'E',
            flat:'105',
            contact:contactno(),
        },
        {
            name:'F',
            flat:'106',
            contact:contactno(),
        },
        {
            name:'G',
            flat:'107',
            contact:contactno(),
        },
        {
            name:'H',
            flat:'108',
            contact:contactno(),
        },
        {
            name:'I',
            flat:'109',
            contact:contactno(),
        },
        {
            name:'J',
            flat:'110',
            contact:contactno(),
        },
        {
            name:'K',
            flat:'111',
            contact:contactno(),
        },
    ]
// }