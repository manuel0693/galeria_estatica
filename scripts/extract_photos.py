from pathlib import Path
from PIL import Image

# -------------------------
# Configuración
# -------------------------

INPUT_IMAGE = Path("frontend/img/catalogo.png")
OUTPUT_DIR = Path("frontend/img")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Coordenadas (left, top, right, bottom)
BOXES = [

    (40, 35, 360, 250),      # 1
    (850, 40, 1100, 250),    # 2
    (1160, 35, 1515, 255),   # 3

    (20, 335, 330, 545),     # 4
    (350, 335, 610, 545),    # 5
    (625, 335, 895, 545),    # 6
    (955, 335, 1220, 545),   # 7
    (1275, 335, 1535, 545),  # 8

    (20, 590, 250, 790),     # 9
    (270, 590, 500, 790),    # 10
    (515, 590, 745, 790),    # 11
    (760, 590, 1010, 790),   # 12
    (1025, 590, 1260, 790),  # 13
    (1325, 590, 1535, 790),  # 14

    (20, 790, 250, 990),     # 15
    (270, 790, 500, 990),    # 16
    (515, 790, 745, 990),    # 17
    (760, 790, 1010, 990),   # 18
    (1025, 790, 1260, 990),  # 19
    (1325, 790, 1535, 990),  # 20

]

# -------------------------
# Extracción
# -------------------------

image = Image.open(INPUT_IMAGE)

for index, box in enumerate(BOXES, start=1):

    photo = image.crop(box)

    filename = OUTPUT_DIR / f"foto{index:02}.jpg"

    photo.save(
        filename,
        format="JPEG",
        quality=95,
        optimize=True,
    )

    print(f"✔ {filename}")

print("\nExtracción finalizada.")