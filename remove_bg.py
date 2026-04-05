import sys
from PIL import Image

def remove_black_bg(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            # Change all relatively dark pixels to transparent
            r, g, b, a = item
            if r < 30 and g < 30 and b < 30:
                new_data.append((r, g, b, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    import os
    # Read the path dynamically 
    remove_black_bg(
        r"C:\Users\dhruv\.gemini\antigravity\brain\87f2e01d-3ed4-4b95-9651-25e8765ba312\rd_monogram_1775379084743.png", 
        r"C:\Users\dhruv\.gemini\antigravity\brain\87f2e01d-3ed4-4b95-9651-25e8765ba312\rd_logo_transparent.png"
    )
