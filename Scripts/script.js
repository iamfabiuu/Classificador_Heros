document.getElementById("addHero").addEventListener("click", function () {
  const heroName = document.getElementById("heroName").value;
  const heroScore = parseInt(document.getElementById("heroScore").value);

  if (!heroName || isNaN(heroScore)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  // Classificação com base no heroScore
  let heroLevel = "";

  if (heroScore < 50) {
    heroLevel = "Iniciante";
  } else if (heroScore <= 100) {
    heroLevel = "Intermediário";
  } else {
    heroLevel = "Lendário";
  }

  // **Nova Lógica para Classificação de XP**
  let xp = heroScore * 100; // Exemplo: XP baseado no score (ajuste conforme necessidade)
  let xpLevel = "";

  if (xp < 1000) {
    xpLevel = "Ferro";
  } else if (xp <= 2000) {
    xpLevel = "Bronze";
  } else if (xp <= 5000) {
    xpLevel = "Prata";
  } else if (xp <= 7000) {
    xpLevel = "Ouro";
  } else if (xp <= 8000) {
    xpLevel = "Platina";
  } else if (xp <= 9000) {
    xpLevel = "Ascendente";
  } else if (xp <= 10000) {
    xpLevel = "Imortal";
  } else {
    xpLevel = "Radiante";
  }

  // Mensagem final
  const message = `O Herói de nome ${heroName} está no nível de ${xpLevel}`;

  // Exibir resultado
  const heroList = document.getElementById("heroList");
  const listItem = document.createElement("li");
  listItem.textContent = `${heroName}: ${heroLevel} (${message})`;
  heroList.appendChild(listItem);

  // Limpar campos
  document.getElementById("heroName").value = "";
  document.getElementById("heroScore").value = "";
});
