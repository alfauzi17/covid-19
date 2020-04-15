const question = document.querySelector('#question');
const choices =Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.querySelector('#questionCounter');

let questionCounter = 0;
let availableQuestion = [];
let currentQuestion = {};
let questions = [
    {
        question: '1.Saya Pergi Keluar Rumah'
    },
    {
        question: '2.Saya Menggunakan Transportasi Umum: online, Angkot, Bus, Taksi, kereta api'
    },
    {
        question: '3.Saya Tidak memakai masker pada saat berkumpul dengan orang lain'
    },
    {
        question: '4.Saya Berjabat tangan dengan orang lain'
    },
    {
        question: '5.Saya Tidak membersihkan tangan dengan hans sanitizer / tissue basah sebelum pegang kemudi mobil/motor'
    },
    {
        question: '6.Saya Menyentuh benda/uang yang juga disentuh orang lain'
    },
    {
        question: '7.Saya tidak menjaga jarak 1,5 meter dengan orang lain ketika: belanja, bekerja, belajar, ibadah'
    },
    {
        question: '8.Saya Makan Di Luar rumah (warung/restaurant)'
    },
    {
        question: '9.Saya tidak minum air hangat dan cuci tangan dengan sabun setelah tiba di tujuan'
    },
    {
        question: '10.Saya Berada di wilayah kelurahan tempat pasien tertular'
    },
    {
        question: '11.Saya tidak pasang hand sanitizer di depan pintu masuk, untuk bersihkan tangan sebelum pegang gagang pintu masuk rumah'
    },
    {
        question: '12.Saya tidak mencuci tangan dengan sabun setelah tiba di rumah'
    },
    {
        question: '13.Saya tidak menyediakan: tissue basah/antiseptic, masker, sabun bagi keluarga di rumah'
    },
    {
        question: '14.Saya tidak segera merendam baju dan celana bekas pakai di luar rumah'
    },
    {
        question: '15.Saya tidak segera mandi keramas setelah tiba di rumah'
    },
    {
        question: '16.Saya tidak mensosialisasikan check list penilaian resiko pribadi ini kepada keluarga di rumah'
    },
    {
        question: '17.Saya dalam sehari tidak terkena cahaya matahari minimal 15 menit'
    },
    {
        question: '18.Saya tidak berolahraga minimal 30 menit setiap hari'
    },
    {
        question: '19.Saya jarang minum vitamin C, E dan kurang tidur'
    },
    {
        question: '20.Usia saya di atas 60 tahun'
    },
    {
        question: '21.Usia saya mempunyai penyakit: jantung/diabetes/gangguan pernapasan kronik'
    },

    
];
let containerAnswer = 0;
let finalResult;

startQuestioner = () => {
    availableQuestion = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestion.length === 0){
        localStorage.setItem('result', result(containerAnswer));
        return window.location.assign('end.html');
    }
    currentQuestion = availableQuestion[0];
    question.innerText = currentQuestion.question; 
    availableQuestion.splice(0, 1);
    questionCounter++;
    questionCounterText.innerText = `Question ${questionCounter} / 21 `;
    
}

result = (jmlY) => {
    if (jmlY <= 7) {
        return finalResult = 'Resiko Rendah';
    } else if (jmlY <= 14){
        return finalResult ="Resiko Sedang";
    } else {
        return finalResult = "Resiko Tinggi";
    }
}

choices.forEach(choice => {
   choice.addEventListener("click", e => {
       const selectedChoice = e.target;
       const selectedAnswer = parseInt(selectedChoice.dataset['number']);
       containerAnswer += selectedAnswer;
       getNewQuestion();
   });
});


startQuestioner();