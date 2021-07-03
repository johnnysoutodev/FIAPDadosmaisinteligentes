let htmlSite = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><br>1 - Roteiros para <b>*São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station<br></body></html>";

//Quebra o texto do html do site a cada # ou <br>:
let buscarRoteiros = htmlSite.split("#") && htmlSite.split("<br>");

//Use esta variável para pesquisar a posição inicial do que você precisa usar:
let teste = htmlSite.search("aqui");

console.log("A posição inicial é:");
console.log(teste);
console.log("Em qual parte do html quebrado ele esta:");
console.log(buscarRoteiros[23]);
console.log("Número de caracter da linha inteira que foi quebrada:");
console.log(buscarRoteiros[23].length);


//Pesquisa a posição de cada cidade no texto e acrescenta nas variáveis o número inicial do caracther de inicio;
let saoPaulo = htmlSite.search("São Paulo");
let lasVegas = htmlSite.search("Las Vegas");
let moscou = htmlSite.search("Moscou");

//O nome das cidades avaliadas, com base no número inicial do caracther acima:
let cidadesAvaliadas = [0,1,2];
cidadesAvaliadas[0] = htmlSite.substr(saoPaulo, 9);
cidadesAvaliadas[1] = htmlSite.substr(lasVegas, 9);
cidadesAvaliadas[2] = htmlSite.substr(moscou, 6);

//O conteúdo do roteiro A de cada cidade avaliada:
let roteiros = [0,1,2];
roteiros[0] = htmlSite.substr(0, 0);
roteiros[0] = htmlSite.substr(0, 0);
roteiros[0] = htmlSite.substr(0, 0);

//Quantos locais são citados no roteiro A de cada cidade:
let cidadesRoteiro = [0,1,2];
cidadesRoteiro[0] = htmlSite.substr(399, 33);
cidadesRoteiro[1] = htmlSite.substr(979, 55);
cidadesRoteiro[2] = htmlSite.substr(1504, 70);

//O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo:

//O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles: