export const createCard = (icon, src) => {
    const card = document.createElement("div");
    card.classList.add("player__card");

    const cardValueUp = document.createElement("div");
    cardValueUp.classList.add("card__value-up");

    const cardValueDown = document.createElement("div");
    cardValueDown.classList.add("card__value-down");

    const cardIconWrapper = document.createElement("div");
    cardIconWrapper.classList.add("card__icon-wrapper");

    const cardIcon = document.createElement("img");
    cardIcon.classList.add("card__icon");

    card.append(cardValueUp);
    card.append(cardIconWrapper);
    cardIconWrapper.append(cardIcon);
    card.append(cardValueDown)

    cardValueUp.textContent = icon;
    cardValueDown.textContent = icon;

    cardIcon.src = src;

    return card;
}