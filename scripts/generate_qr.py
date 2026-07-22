from pathlib import Path
import re

import qrcode

BASE_URL = "https://manuel0693.github.io/galeria_estatica"

ROOT = Path(__file__).resolve().parent.parent

PHOTOS_FILE = ROOT / "frontend" / "js" / "photos.js"
QR_DIR = ROOT / "frontend" / "qr"

QR_DIR.mkdir(parents=True, exist_ok=True)

content = PHOTOS_FILE.read_text(encoding="utf-8")

# Obtiene todos los ids definidos como: id: 1
photo_ids = [
    int(match)
    for match in re.findall(r"id\s*:\s*(\d+)", content)
]

print(f"Fotografías encontradas: {len(photo_ids)}")

for photo_id in photo_ids:

    url = f"{BASE_URL}/photo.html?id={photo_id}"

    qr = qrcode.QRCode(
        version=2,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )

    qr.add_data(url)
    qr.make(fit=True)

    image = qr.make_image(
        fill_color="black",
        back_color="white",
    )

    filename = QR_DIR / f"foto_{photo_id:02}.png"

    image.save(filename)

    print(f"✔ {filename.name} -> {url}")

print("\nTodos los QR fueron generados.")