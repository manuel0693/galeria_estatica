/**
 * Obtiene el parámetro id de la URL.
 *
 * Ejemplo:
 * photo.html?id=5
 */
function getPhotoId() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

/**
 * Genera automáticamente la galería del index.
 */
function renderGallery() {

    const gallery = document.getElementById("gallery");

    if (!gallery) {
        return;
    }

    gallery.innerHTML = "";

    photos.forEach(photo => {

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}">

            <div class="card-content">

                <h3>${photo.title}</h3>

                <p>${photo.place}</p>

                <a href="photo.html?id=${photo.id}">
                    Ver fotografía
                </a>

            </div>
        `;

        gallery.appendChild(card);

    });

}

/**
 * Carga la información de una fotografía.
 */
function renderPhoto() {

    const image = document.getElementById("photo-image");

    if (!image) {
        return;
    }

    const id = getPhotoId();

    const photo = photos.find(p => p.id === id);

    if (!photo) {

        document.body.innerHTML = `
            <h2 style="text-align:center;margin-top:50px;">
                Fotografía no encontrada.
            </h2>
        `;

        return;

    }

    image.src = photo.image;
    image.alt = photo.title;

    document.getElementById("photo-title").textContent = photo.title;

    document.getElementById("photo-history").textContent = photo.history;

    document.getElementById("photo-author").textContent = photo.author;

    document.getElementById("photo-place").textContent = photo.place;

    document.getElementById("photo-date").textContent = photo.date;

    configureNavigation(photo.id);

}

/**
 * Configura los botones Anterior y Siguiente.
 */
function configureNavigation(currentId) {

    const previous = document.getElementById("previous-photo");

    const next = document.getElementById("next-photo");

    if (!previous || !next) {
        return;
    }

    if (currentId > 1) {

        previous.href = `photo.html?id=${currentId - 1}`;

    } else {

        previous.style.visibility = "hidden";

    }

    if (currentId < photos.length) {

        next.href = `photo.html?id=${currentId + 1}`;

    } else {

        next.style.visibility = "hidden";

    }

}

/**
 * Punto de entrada de la aplicación.
 */
document.addEventListener("DOMContentLoaded", () => {

    renderGallery();

    renderPhoto();

});