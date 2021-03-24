/*
➢ Create 3 objects, student1, student2, student3
➢ property studentId : s101, s102, s103 respectively
➢ property quiz answers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
*/
const student1 = {studentId:"s101", quizAnswers: [1,1,2,4]};
const student2 = {studentId:"s102", quizAnswers: [2,1,2,2]};
const student3 = {studentId:"s103", quizAnswers: [3,1,3,4]};

//push the students into an array, quiz
const key = [3,1,2,4];
const quiz = []
quiz.push(student1);
quiz.push(student2);
quiz.push(student3);

function gradeQuiz(quizArr, keyArr){
    const report ={};
    for(student of quizArr){
        const score =scoreQuiz(student.quizeanswers, keyArr);
        report[student.studentId]= score;
    }
    return report;
}

function scoreQuiz(studentAnswers, key){
for(let stdAns in studentAnswers){
    let count =0;
    for(let keys of key){
        if(stdAns ===keys){
            count ++;
          console.log(count)  
        }
       student.keys= count 
    }
    
   
}
return student
}

console.log(gradeQuiz(quiz, key))