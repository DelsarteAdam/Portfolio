import os
import json

dir_list = os.listdir()
dir_list_added = []


for file in dir_list:
    if file != "Json_creation.py":
        path = f"C:\\Users\\Adam\\Documents\\Becode\\Portfolio\\client\\public\\portfolio\\{file}"
        sub_dir = os.listdir(path)
        file_temp = file
        for subfile in sub_dir:
            filepath = f"/portfolio/{file}/{subfile}"
            dir_list_added.append(
                {"folder": file_temp, "filePath": filepath, "fileName": subfile})


with open("portfolio.json", "w") as export:
    json.dump(dir_list_added, export, indent=4)
