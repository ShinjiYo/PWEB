function cursos(){
    confirmar = confirm("Deseja abrir a janela do curso?");
    if(confirmar == false){
        return false;
    }

    selecionado = document.getElementById("cursos");

    opcao = selecionado.selectedIndex;
    novaJanela = window.open("", "Cursos", "fullscreen=yes,width = 600, height = 300");
    novaJanela.document.write("<title>" + selecionado.options[opcao].text + "</title>");
    switch (opcao) {
        case 1:
            novaJanela.document.writeln("<h4>Coordenação:Profº Antonio Cesar de Barros Munari</h4>");
            novaJanela.document.writeln("Duração do curso diurno: 2.880 horas");
            novaJanela.document.writeln("<br>Duração do curso noturno: 2.880 horas");
            novaJanela.document.writeln("<h5>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</h5>");    
            break;
        case 2:
            novaJanela.document.writeln("<h4>Coordenação:Prof. Dr. José Luiz Antunes de Almeida</h4>");
            novaJanela.document.writeln("Duração do curso vespertino: 2.880 horas");
            novaJanela.document.writeln("<h5>O tecnólogo em Eletrônica Automotiva:</h5>");
            novaJanela.document.writeln("<h5>participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva;</h5>");    
            novaJanela.document.writeln("<h5>supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio;</h5>");    
            novaJanela.document.writeln("<h5>especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio;</h5>");    
            novaJanela.document.writeln("<h5>elabora orçamentos referentes à instrumentos e equipamentos usados na industria automotiva;</h5>");    
            novaJanela.document.writeln("<h5>gerencia e realiza vistorias, perícias, avaliações, arbitramento, laudo e parecer técnico referentemente à áreas afetadas à veículos especiais, carga e de passeio;</h5>");    
            novaJanela.document.writeln("<h5>supervisiona, coordena e orienta tecnicamente equipes de uma linha de inspeção veicular;</h5>");    
            novaJanela.document.writeln("<h5>é capaz de selecionar e desenvolver novas tecnologias levando-se em conta características técnicas, humanas, econômicas e gerenciais de sistemas automobilístico;</h5>");    
            novaJanela.document.writeln("<h5>opera e faz manutenção de equipamentos em inspeção veicular;</h5>");    
            novaJanela.document.writeln("<h5>estuda a viabilização técnico-econômica de uma oficina autorizada ou independente;</h5>");    
            novaJanela.document.writeln("<h5>supervisiona, coordena e orienta tecnicamente equipes de uma oficina autorizada ou independente.</h5>");    
            break;
        case 3:
            novaJanela.document.writeln("<h4>Coordenação:Prof. Me. Amilton Cordeiro de Freitas</h4>");
            novaJanela.document.writeln("Estrutura curricular: 2.880 horas");
            novaJanela.document.writeln("<h5>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros.</h5>");    
            break;
        case 4:
            novaJanela.document.writeln("<h4>Curso EAD</h4>");
            novaJanela.document.writeln("Duração do curso: 2.800 horas");
            novaJanela.document.writeln("<h5>O Tecnólogo em Gestão Empresarial elabora e implementa planos de negócios, utilizando métodos e técnicas de gestão na formação e organização empresarial especificamente nos processos de comercialização, suprimento, armazenamento, movimentação de materiais e no gerenciamento de recursos financeiros e humanos. A habilidade para lidar com pessoas, capacidade de comunicação, trabalho em equipe, liderança, negociação, busca de informações, tomada de decisão em contextos econômicos, políticos, culturais e sociais distintos, são requisitos importantes a esse profissional.</h5>");    
            break;
        case 5:
            novaJanela.document.writeln("<h4>Coordenação:Prof. Dr. Lauro Carvalho de Oliveira</h4>");
            novaJanela.document.writeln("Estrutura Curricular: 2.880 horas");
            novaJanela.document.writeln("<h5>O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas. Está capacitado a atuar na área de organização industrial mecânica, tanto para processos como para produtos industriais. Domina a técnica do projeto de dispositivos e ferramentas de produção mecânica. Pode dedicar-se ao ensino, à pesquisa tecnológica, bem como realizar vistoria, avaliação e laudo técnico, em seu campo profissional.</h5>");    
            break;
        case 6:
            novaJanela.document.writeln("<h4>Coordenação:Prof. Me. Samuel Mendes Franco</h4>");
            novaJanela.document.writeln("Estrutura Curricular: 2.880 horas");
            novaJanela.document.writeln("<h5>Atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0. Oferece informações tecnológicas relacionadas às principais técnicas de produção empregadas na indústria mundial, tais como materiais e processos de fabricação, realidade aumentada e virtual, Internet das Coisas, Big Data, entre outros. É responsável por identificar dispositivos e ferramentas disponíveis no mercado. Como empreendedor, pode abrir sua própria consultoria ou empresa. Pode ainda atuar em pesquisas.</h5>");    
            break;
}

}