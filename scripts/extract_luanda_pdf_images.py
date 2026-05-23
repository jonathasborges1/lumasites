from pathlib import Path
from io import BytesIO

from PIL import Image


PDF_PATH = Path(r"C:\Users\jonathas.000\Downloads\Portfólio Luanda Oliveira imóveis.pdf")
OUT_DIR = Path("public/images/luandaoliveira/portfolio")
MIN_BYTES = 20_000
MIN_SIDE = 250


def main() -> None:
    data = PDF_PATH.read_bytes()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    count = 0
    pos = 0
    while True:
        start = data.find(b"\xff\xd8\xff", pos)
        if start == -1:
            break

        end = data.find(b"\xff\xd9", start)
        if end == -1:
            break

        blob = data[start : end + 2]
        pos = end + 2

        try:
            img = Image.open(BytesIO(blob))
            img.verify()
            img = Image.open(BytesIO(blob))
            width, height = img.size
        except Exception:
            continue

        if len(blob) < MIN_BYTES or width < MIN_SIDE or height < MIN_SIDE:
            continue

        count += 1
        name = f"luanda-portfolio-{count:02d}.jpg"
        (OUT_DIR / name).write_bytes(blob)
        print(f"{name}\t{width}x{height}\t{len(blob)} bytes")

    print(f"extracted {count} images")


if __name__ == "__main__":
    main()
