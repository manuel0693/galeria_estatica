from pathlib import Path

import qrcode


# ==========================================================
# CONFIGURACIÓN
# ==========================================================

BASE_URL = "https://manuel0693.github.io/galeria_estatica"

# Cuando publiques en GitHub cambia por ejemplo a:
# BASE_URL = "https://TU_USUARIO.github.io/GALERIA_ESTATICA"

TOTAL_PHOTOS = 20


# ==========================================================
# RUTAS
# ==========================================================

ROOT = Path(__file__).resolve().parent.parent

QR_DIR = ROOT / "frontend" / "qr"

QR_DIR.mkdir(parents=True, exist_ok=True)


# ==========================================================
# GENERACIÓN
# ==========================================================

for photo_id in range(1, TOTAL_PHOTOS + 1):

    url = f"{BASE_URL}/photo.html?id={photo_id}"

    qr = qrcode.QRCode(
        version=2,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )

    qr.add_data(url)
    qr.make(fit=True)

    image = qr.make_image(fill_color="black", back_color="white")

    filename = QR_DIR / f"foto_{photo_id:02}.png"

    image.save(filename)

    print(f"✔ Generado: {filename.name} -> {url}")

print("\nTodos los códigos QR fueron generados correctamente.")