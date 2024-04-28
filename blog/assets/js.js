const quotes = [
    "Acredite em você mesmo e tudo será possível.",  

    "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",  

    "No meio da dificuldade encontra-se a oportunidade.",  

    "Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo.",  

    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",  

    "O que você faz hoje pode melhorar todos os seus amanhãs.",  

    "Acredite em você mesmo e no seu potencial. Somente você pode determinar seu próprio sucesso.",  

    "Nunca é tarde demais para ser aquilo que você sempre quis ser.",  

    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",  

    "As maiores conquistas acontecem quando você se dedica intensamente ao seu objetivo.",  

    "O otimismo é a fé em ação. Nada pode ser feito sem esperança e confiança.",  

    "A vida é uma jornada, não um destino.",  

    "Lembre-se: você é mais forte do que pensa e mais capaz do que imagina.",  

    "A chave do sucesso é focar no objetivo, não nos obstáculos.",  

    "Seja a mudança que você deseja ver no mundo.",  

    "O caminho para o sucesso é sempre em frente, não olhe para trás.",  

    "A persistência é o caminho do êxito.",  

    "Grandes mentes discutem ideias; mentes medianas discutem eventos; mentes pequenas discutem pessoas.",  

    "A única maneira de fazer um excelente trabalho é amar o que você faz.",  

    "Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.",  

    "O fracasso é apenas uma oportunidade para recomeçar de novo com mais inteligência.",  

    "A persistência é o segredo do sucesso.",  

    "O sucesso é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.",  

    "Você é capaz de mais do que imagina. Acredite em si mesmo.",  

    "O segredo para progredir é começar.",  

    "A verdadeira medida de sucesso é quantas vezes você pode se levantar depois de cair.",  

    "Não se preocupe com os obstáculos no caminho, eles são apenas desafios a serem superados.",  

    "Tudo o que você sempre quis está do outro lado do medo.",  

    "Não espere por circunstâncias ideais, tome decisões e faça acontecer.",  

    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",  

    "A vida é curta demais para viver o sonho de outra pessoa.",  

    "Quando você acredita, tudo é possível.",  

    "O sucesso não é o resultado de um jogo de sorte, mas sim de um trabalho árduo e dedicação.",  

    "O primeiro passo para o sucesso é acreditar que você pode.",  

    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",  

    "Para ter sucesso, você precisa ser persistente e consistente.",  

    "A jornada para o sucesso começa com um único passo.",  

    "Grandes coisas nunca vêm de zonas de conforto.",  

    "Acredite nos seus sonhos e eles se tornarão realidade.",  

    "Nada é impossível para aquele que persiste.",  

    "O sucesso é a realização progressiva de um ideal digno.",  

    "Não há atalhos para o sucesso, é preciso trabalhar duro e ser consistente.",  

    "Não espere por oportunidades, crie-as.", ,  

    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",  

    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",  

    "Quanto maior o obstáculo, maior a glória em superá-lo.",  

    "O verdadeiro vencedor é aquele que continua tentando, mesmo quando todos os outros desistem.",  

    "Acredite em si mesmo e em tudo o que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo.",  

    "Não importa o quão devagar você vá, desde que você não pare.",  

    "Você não pode mudar o vento, mas pode ajustar as velas do seu barco.",  

    "O sucesso não é o destino, é uma jornada.",  

    "Para ter sucesso, é necessário enfrentar os desafios e superar as adversidades.",  

    "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.",  

    "Nada é impossível, a palavra em si diz 'eu sou possível'!",  

    "O fracasso é o trampolim para o sucesso.",  

    "Acredite em si mesmo e no seu potencial ilimitado para o sucesso.",  

    "O sucesso não é para os fracos de coração, é para aqueles que estão dispostos a correr riscos.",  

    "Você é mais forte do que imagina. Acredite em si mesmo e em suas habilidades.",  

    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",  

    "Não importa o quão devagar você vá, desde que não pare.",  

    "Os obstáculos são aqueles perigos que você vê quando desvia os olhos do seu objetivo.",  

    "Não há atalhos para o sucesso, é preciso trabalhar duro e ser consistente.",  

    "O sucesso não é para os fracos de coração, é para aqueles que estão dispostos a correr riscos.",  

    "Acredite em si mesmo e no seu potencial para alcançar grandes coisas.",  

    "O sucesso é alcançado através da persistência e da determinação.",  

    "Não desista, os maiores desafios muitas vezes resultam nas maiores recompensas.",  

    "A chave para o sucesso é a perseverança e a determinação.",  

    "O sucesso é a consequência natural de se esforçar para ser o seu melhor a cada dia.",  

    "Não permita que o medo de falhar o impeça de alcançar o sucesso.",  

    "O sucesso é alcançado através da determinação, da persistência e da vontade de não desistir.",  

    "Acredite em si mesmo e nos seus sonhos. Tudo é possível.",  

    "O sucesso não é o resultado de um jogo de sorte, mas sim do trabalho árduo e da dedicação." 
    ];
  
  const quoteElement = document.getElementById('quote');
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  displayRandomQuote();
  
  setInterval(displayRandomQuote, 10000);
  