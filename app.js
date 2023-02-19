const question = [
    {
    'que':'_____ is the smallest unit of data in a computer ?',
    'a':'Gigabyte ',
    'b':'Bit',
    'c':'Byte',                                   
    'd':'Terabyte',
    'correct':'b' 
   },
   {
    'que':'Which unit of the computer is considered as the brain of the computer ?',
    'a':'Memory unit',
    'b':'Input unit',
    'c':'CPU',
    'd':'Output Unit',
    'correct':'c'
   },
   {
    'que':'What is the full form of PROM ?',
    'a':'Program read-only memory',
    'b':'Primary read-only memory ',
    'c':'Programmable read-only memory',
    'd':'Program read-output memory ',
    'correct':'c'
   },
   {
    'que':'Which of the following is designed to control the operations of a computer?',
    'a':'User',
    'b':'Application Software ',
    'c':'System software',
    'd':'Utility Software ',
    'correct':'c'
   },
   {
    'que':'Which of the following devices provides the communication between a computer and the outer world ?',
    'a':'Compact',
    'b':'I/O',
    'c':'Drivers',
    'd':'Storage ',
    'correct':'b'
   },
   {
    'que':'WWW stands for',
    'a':'World Whole Web',          
    'b':'Wide World Web',
    'c':'Web World Wide',
    'd':'World Wide Web',
    'correct':'d'
   },
   {
    'que':'Which of the following are components of Central Processing Unit (CPU) ?',
    'a':'Arithmetic logic unit, Mouse ',
    'b':'Arithmetic logic unit, Control unit',
    'c':'Arithmetic logic unit, Integrated Circuits',
    'd':'Control Unit, Monitor',
    'correct':'b'
   },
   {
    'que':'If a computer has more than one processor then it is known as ?',
    'a':'Uniprocess',
    'b':'Multiprocessor',
    'c':'Multithreaded',
    'd':'Multiprogramming',
    'correct':'b'
   },
   {
    'que':'Full form of URL is ?',
    'a':'Uniform Resource Locator',
    'b':'Uniform Resource Link',
    'c':'Uniform Registered Link',
    'd':'Unified Resource Link',
    'correct':'a'
   },
   {
    'que':'In which of the following form, data is stored in computer ?',
    'a':'Decimal',
    'b':'Binary',
    'c':'Hexa Decimal',
    'd':'Octal',
    'correct':'b'
   }
]

let index = 0;
const quebox = document.getElementById('quebox');
const optioninputs = document.querySelectorAll('.options')
const total = question.length;
let right = 0, 
    wrong = 0;
const loadquestion =()=>{
  
  if(index === total){
   return endQuiz();
  }else{
   reset();
  }
    const data = question[index]
    quebox.innerText = `${index+1}) ${data.que}`

    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () =>{
  const data = question[index]
   const ans =  getAnswer();
   if(ans === data.correct){
    right++;
   }else{
    wrong++;
   }
   index++;
   loadquestion();
   return;
}

const getAnswer = () =>{
  let answer;
    optioninputs.forEach(
        (input)  => {
          if(input.checked){
            answer = input.value;
          }
        }
    )
    return answer;
}

const reset = () =>{
  optioninputs.forEach(
    (input)  => {
      input.checked = false;
      }
  )
}

const endQuiz= () =>{
 document.getElementById("box").innerHTML = `
 <div style="text-align : center" >
 <h2> Thanks For Playing Quiz </h2> </br>
 <h2>${right} / ${total} are correct </h2>
 </div>
 `
}

loadquestion();