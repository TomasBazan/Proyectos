
import json

# Specify the path to your JSON file
json_file_path = "juan.txt"

# Specify the path to the output text file where you want to store the values
txt_file_path = "output.txt"

# Open and read the JSON file
with open(json_file_path, "r") as json_file:
    data = json.load(json_file)

# Open and write the values to the text file
with open(txt_file_path, "w") as txt_file:
    for key, value in data.items():
        txt_file.write(f"{value}\n")