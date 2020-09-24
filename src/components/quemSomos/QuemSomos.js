import React from 'react';
import './quemSomos.css';

function QuemSomos() {
    return (
        <header className='quemSomos'>
            <div>
                <h2>Quem Somos</h2>
                <div class="row ">
                    <div class="col-md-4">
                        <a class="card-img" href='/'><img src={require('./img/jhonatan.png')} width='300px' height='300px' /></a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">Jhonatan Oliveira</h3>
                            <p class="card-text">É exemplo de superação e luta. Teve uma infancia marcada por diversas idas e vindas a hospitais e com isso despertou a arte dentro de si. Natural de Belford Roxo, veio para Petrópolis aos 3 anos, pois o clima frio e úmido faziam bem para sua saúde. Foi incentivado por sua família a se dedicar a música e mais tarde veio a participar de projetos como o "Mais Educação" e "Academia do Idoso", dando aulas de graffite, violão e teclado. Atualmente, cursa Engenharia da Computação no CEFET e participa da Residência de Softwares. Quer construir sua história na área e deixar sua marca no legado da computação.</p>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-4">
                        <a href='/'><img src={require('./img/joao.png')} width='300px' height='300px' /></a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">João Felipe Bragança</h3>
                            <p class="card-text">É estudioso, um autodidata raro. É modelo de pessoa generosa e parceira. Adora uma boa cozinha e é apaixonado pela tecnologia e pelo Mercado Financeiro. Quando criança conhecido como "o menino do computador", pois sempre foi muito curioso e aprendeu informática e manutenção sem mesmo ter um computador. É convicto de que a educação é a melhor forma de transformar e impactar vidas. Participou de projetos sociais locais com ensino de informática básica como o "Educarte" e o "Aqui Não". Em 2017, foi presenteado com o nascimento do seu filho, mas com isso teve que adiar sua formação para poder trabalhar e se dedicar a paternidade. Este ano, foi apresentado à Residência de Softwares, onde viu a oportunidade de seguir seu sonho e vocação.</p>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-4">
                        <a href='/'><img src={require('./img/marcelo.png')} width='300px' height='300px' /></a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">Marcelo Barreto</h3>
                            <p class="card-text">É um grande parceiro e amigo. Apaixonado por esportes e pela família. Natural de São Gonçalo, participou de um programa social dando aulas de jiu-jtsu a meninos da sua comunidade. Veio para Petrópolis em 2017 para dar um novo rumo em sua carreira. Trabalhou na empresa de transporte público Cidade das Hortensias, atuando na sua área de formação, Logística. Este ano, lançou mão de seu trabalho para participar da Residência de Software do Serratec e realizar seu antigo sonho de se tornar programador.</p>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-4">
                        <a href='/'><img src={require('./img/mariana.png')} width='300px' height='300px' /></a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">Mariana Catão</h3>
                            <p class="card-text">É dedicada, estudiosa e gosta de ajudar pessoas. Amante de cinemas e livros, adora estar em contato com a natureza e os animais.Cursou faculdade de Matemática, na UFRRJ. Durante o curso de Estatítica, sua segunda formação, realizado na UFES, participou da reabertura do projeto "Empresa Júnior", onde atuava como voluntária. No início de 2019, 6 meses antes da sua formatura, estagiou no Corpo de Bombeiros em Vitória/ES. Este ano, Mariana conheceu o projeto de Residência em Software e identificou a linguagem aplicada em Estatística com a liguagem usada em Banco de Dados, assim seu interesse foi imediato e se tornou uma residente em programação.</p>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-4">
                        <a href='/'><img src={require('./img/tatiane.png')} width='300px' height='300px' /></a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">Tatiane Lanzetti</h3>
                            <p class="card-text">É sonhadora e visionária, por isso muito criativa. Adora crianças e já na sua adolescência, participou de programas de causas sociais voltados a criança e adolescentes, como o "Amigos da Escola". Hoje, é mãe e muito dedica ao seu filho. É formada em Direito pela UCP e apaixonada por Fotografia, mas está em busca de sua"missão". Como é interessada em aprender coisas novas, veio participar do curso de Residência em Software do Serratec. Se encantou com o projeto e com os desafios da progranação, fazendo com que "caísse a ficha" de que encontrou o seu lugar e que através dele possa ajudar a construir um mundo melhor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default QuemSomos;